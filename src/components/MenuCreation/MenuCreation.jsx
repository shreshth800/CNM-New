import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import styles from "./MenuCreation.module.css";
import { CatererContext } from "../../CatererContext";
import { toastMessage } from "../../../utility";

export default function MenuCreation({ setCurrentStep }) {
    const { catererId } = useContext(CatererContext);
    const [menus, setMenus] = useState([
        {
            menuName: '',
            menuData: {},
        }
    ]);
    const [cateringTypes, setCateringTypes] = useState([]);
    const [initialMenus, setInitialMenus] = useState([]);

  useEffect(() => {
    const fetchCateringTypes = async () => {
      try {
        const response = await axios.get(
          `http://3.6.41.54/api/caterer/${catererId}`
        );
        const fetchedCateringTypes = response.data.cateringType || [];

                // Initialize with fetched catering types
                setMenus([{
                    menuName: '',
                    menuData: fetchedCateringTypes.reduce((acc, type) => {
                        acc[type] = [''];
                        return acc;
                    }, {}),
                }]);

                setCateringTypes(fetchedCateringTypes);
            } catch (error) {
                console.error('Error fetching cateringTypes:', error);
            }
        };

        if (catererId) {
            async function menuData() {
                const response = await axios.get(`http://3.6.41.54/api/menus?limit=1000000`);
                const data = response.data.data;
                const fetchedMenus = data
                    .filter(dish => dish.catererId === catererId)
                    .map(menu => ({
                        id:menu.id,
                        menuName: menu.name,
                        menuData: menu.items.reduce((acc, item) => {
                            acc[item.menuType] = item.items; // Use the correct structure for existing menu items
                            return acc;
                        }, {})
                    }));
                setInitialMenus(JSON.parse(JSON.stringify(fetchedMenus)));
                console.log('Fetched menus:', fetchedMenus);

                // Update the menus state with both new and fetched menus
                setMenus(prevMenus => [...JSON.parse(JSON.stringify(fetchedMenus)), ...prevMenus]);
            }
            menuData();
        }

    fetchCateringTypes();
  }, [catererId]);

  const handleAddMenu = () => {
    setMenus([
      ...menus,
      {
        menuName: "",
        menuData: cateringTypes.reduce((acc, type) => {
          acc[type] = [""];
          return acc;
        }, {}),
      },
    ]);
  };

  const handleRemoveMenu = (menuIndex) => {
    const newMenus = [...menus];
    newMenus.splice(menuIndex, 1); // Removes the menu at the specified index
    setMenus(newMenus);
  };

  const handleMenuNameChange = (index, value) => {
    const newMenus = [...menus];
    newMenus[index].menuName = value;
    setMenus(newMenus);
  };

  const handleAddItem = (menuIndex, menuType) => {
    const newMenus = [...menus];
    
    // Ensure the menuData[menuType] is initialized as an array if it's undefined
    if (!newMenus[menuIndex].menuData[menuType]) {
      newMenus[menuIndex].menuData[menuType] = [];
    }
  
    // Now push the new item to the array
    newMenus[menuIndex].menuData[menuType].push("");
    setMenus(newMenus);
  };

  const handleRemoveItem = (menuIndex, menuType, itemIndex) => {
    const newMenus = [...menus];
    newMenus[menuIndex].menuData[menuType].splice(itemIndex, 1); // Removes the dish at the specified index
    setMenus(newMenus);
  };

    const handleChangeItem = (menuIndex, menuType, itemIndex, value) => {
        const newMenus = [...menus];
        newMenus[menuIndex].menuData[menuType][itemIndex] = value;
        setMenus(newMenus);
    };

    const isMenuDataEqual = (menu1, menu2) => {
        return JSON.stringify(menu1) === JSON.stringify(menu2);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

        try {
            const menuPromises = menus.map(async (menu, index) => {
                const payload = {
                    name: menu.menuName,
                    catererId: catererId,
                    items: cateringTypes.map(type => ({
                        menuType: type,
                        items: menu.menuData[type] || [],
                    })),
                    status: {
                        id: 1
                    }
                };

                // Check if the menu has an id for PATCH request or use POST for a new menu
                if (menu.id) {
                    const originalMenu = initialMenus.find(m => m.id === menu.id);
                    
                    
                    if (!isMenuDataEqual(menu, originalMenu)) {
                        const response = await axios.patch(`http://3.6.41.54/api/menus/${menu.id}`, payload);
                        console.log('Menu Updated:', response.data);
                        return response.status >= 200 && response.status < 300;
                    } else {
                        // No need to update, as data is unchanged
                        console.log('Menu not changed:', menu.menuName);
                        return true;
                    }
                } else {
                    const response = await axios.post('http://3.6.41.54/api/menus', payload);
                    console.log('Menu Created:', response.data);
                    return response.status >= 200 && response.status < 300;
                }
            });

            const results = await Promise.all(menuPromises);
            const allMenusProcessed = results.every(status => status);

            if (allMenusProcessed) {
                toastMessage('All menus processed successfully!');
                setCurrentStep(3);
            } else {
                toastMessage('Some menus failed to process. Please try again.');
            }
        } catch (error) {
            console.error('Error processing menus:', error);
            toastMessage('Error processing menus. Please try again.');
        }
    };
    

  return (
    <form className={styles.menuForm} onSubmit={handleSubmit}>
      {menus.map((menu, menuIndex) => (
        <div key={menuIndex} className={styles.menuGroup}>
          <div className={styles.menuCategory}>
            <h3>Menu Category {menuIndex + 1}</h3>
            <input
              type="text"
              placeholder="Menu Category (e.g., Starter)"
              value={menu.menuName}
              onChange={(e) => handleMenuNameChange(menuIndex, e.target.value)}
              required
            />
            <button
              type="button"
              className={styles.removeMenuButton}
              onClick={() => handleRemoveMenu(menuIndex)}
            >
              Remove Menu Category
            </button>
          </div>

                    {cateringTypes.map(type => (
                        <div key={type} className={styles.menuTypeGroup}>
                            <h3>{type.replace(/^./, type[0].toUpperCase())}</h3>
                            {menu.menuData[type]?.map((item, itemIndex) => (
                                <div key={itemIndex} className={styles.menuItem}>
                                    <input
                                        type="text"
                                        placeholder={`${type.replace(/^./, type[0].toUpperCase())} Dish Name`}
                                        value={item}
                                        onChange={(e) => handleChangeItem(menuIndex, type, itemIndex, e.target.value)}
                                        required
                                    />
                                    <button type="button" onClick={() => handleRemoveItem(menuIndex, type, itemIndex)}>
                                        Remove {type.replace(/^./, type[0].toUpperCase())} Dish
                                    </button>
                                </div>
                            ))}
                            <button type="button" onClick={() => handleAddItem(menuIndex, type)}>
                                Add Another {type.replace(/^./, type[0].toUpperCase())} Dish
                            </button>
                        </div>
                    ))}
                </div>
            ))}

      <button
        type="button"
        className={styles.addMenuButton}
        onClick={handleAddMenu}
      >
        Add Menu Category
      </button>

      <button className={styles.submitButton} type="submit">
        Submit Menus
      </button>
    </form>
  );
}
