import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './MenuCreation.module.css';
import { CatererContext } from '../../App';
import { toastMessage } from '../../../utility';

export default function MenuCreation() {
    const { catererId } = useContext(CatererContext);
    const [menus, setMenus] = useState([
        {
            menuName: '',
            menuData: {},
        }
    ]);
    const [cateringTypes, setCateringTypes] = useState([]);

    useEffect(() => {
        const fetchCateringTypes = async () => {
            try {
                const response = await axios.get(`http://3.6.41.54/api/caterer/${catererId}`);
                const fetchedCateringTypes = response.data.cateringType || [];

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

        fetchCateringTypes();
    }, [catererId]);

    const handleAddMenu = () => {
        setMenus([
            ...menus,
            {
                menuName: '',
                menuData: cateringTypes.reduce((acc, type) => {
                    acc[type] = [''];
                    return acc;
                }, {}),
            }
        ]);
    };

    const handleMenuNameChange = (index, value) => {
        const newMenus = [...menus];
        newMenus[index].menuName = value;
        setMenus(newMenus);
    };

    const handleAddItem = (menuIndex, menuType) => {
        const newMenus = [...menus];
        newMenus[menuIndex].menuData[menuType].push('');
        setMenus(newMenus);
    };

    const handleChangeItem = (menuIndex, menuType, itemIndex, value) => {
        const newMenus = [...menus];
        newMenus[menuIndex].menuData[menuType][itemIndex] = value;
        setMenus(newMenus);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const createMenuPromises = menus.map(async (menu) => {
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
    
                const response = await axios.post('http://3.6.41.54/api/menus', payload);
                console.log('Menu Created:', response.data);
                
                // Consider any 2xx status as success
                return response.status >= 200 && response.status < 300;
            });
    
            const results = await Promise.all(createMenuPromises);
    
            const allMenusCreated = results.every(status => status);
    
            if (allMenusCreated) {
                toastMessage('All menus created successfully!');
            } else {
                toastMessage('Some menus failed to create. Please try again.');
            }
        } catch (error) {
            console.error('Error creating menu:', error);
            toastMessage('Error creating menu. Please try again.');
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
                    </div>

                    {cateringTypes.map(type => (
                        <div key={type} className={styles.menuTypeGroup}>
                            <h3>{type.replace(/^./, type[0].toUpperCase())}</h3>
                            {menu.menuData[type].map((item, index) => (
                                <div key={index} className={styles.menuItem}>
                                    <input
                                        type="text"
                                        placeholder={`${type.replace(/^./, type[0].toUpperCase())} Dish Name`}
                                        value={item}
                                        onChange={(e) => handleChangeItem(menuIndex, type, index, e.target.value)}
                                        required
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={() => handleAddItem(menuIndex, type)}>
                                Add Another {type.replace(/^./, type[0].toUpperCase())} Dish
                            </button>
                        </div>
                    ))}
                </div>
            ))}

            <button type="button" className={styles.addMenuButton} onClick={handleAddMenu}>
                Add Menu Category
            </button>
            
            <button className={styles.submitButton} type="submit">Submit Menus</button>
        </form>
    );
}

