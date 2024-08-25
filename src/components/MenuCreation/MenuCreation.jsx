// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from './MenuCreation.module.css';

// export default function MenuCreation({ catererId }) {
//     const [menuName, setMenuName] = useState('');  // Menu Category like "Starter"
//     const [menuType, setMenuType] = useState('veg'); // Defaulting to veg for menuType
//     const [menuItems, setMenuItems] = useState(['']); // Initial menu items array

//     const handleAddItem = () => {
//         setMenuItems([...menuItems, '']);
//     };

//     const handleChangeItem = (index, value) => {
//         const newMenuItems = [...menuItems];
//         newMenuItems[index] = value;
//         setMenuItems(newMenuItems);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const payload = {
//             name: menuName,
//             catererId: catererId,
//             items: [
//                 {
//                     menuType: menuType,
//                     items: menuItems,
//                 }
//             ],
//             status: {
//                 id: 1
//             }
//         };

//         try {
//             const response = await axios.post('http://3.6.41.54/Menus', payload);
//             console.log('Menu Created:', response.data);
//         } catch (error) {
//             console.error('Error creating menu:', error);
//         }
//     };

//     return (
//         <form className={styles.menuForm} onSubmit={handleSubmit}>
//             <div className={styles.menuCategory}>
//                 <input
//                     type="text"
//                     placeholder="Menu Category (e.g., Starter)"
//                     value={menuName}
//                     onChange={(e) => setMenuName(e.target.value)}
//                     required
//                 />
//             </div>

//             <div className={styles.menuType}>
//                 <label htmlFor="menuType">Menu Type: </label>
//                 <select
//                     id="menuType"
//                     value={menuType}
//                     onChange={(e) => setMenuType(e.target.value)}
//                 >
//                     <option value="veg">Veg</option>
//                     <option value="nonVeg">Non-Veg</option>
//                     <option value="jain">Jain</option>
//                 </select>
//             </div>

//             {menuItems.map((item, index) => (
//                 <div key={index} className={styles.menuItem}>
//                     <input
//                         type="text"
//                         placeholder="Dish Name"
//                         value={item}
//                         onChange={(e) => handleChangeItem(index, e.target.value)}
//                         required
//                     />
//                 </div>
//             ))}

//             <button type="button" onClick={handleAddItem}>
//                 Add Another Dish
//             </button>
            
//             <button type="submit">Submit Menu</button>
//         </form>
//     );
// }


import React, { useContext, useState } from 'react';
import axios from 'axios';
import styles from './MenuCreation.module.css';
import { CatererContext } from '../../App';

export default function MenuCreation() {
    const {catererId,setCatererId}=useContext(CatererContext)
    const [menuName, setMenuName] = useState('');  // Menu Category like "Starter"
    const [menuData, setMenuData] = useState({
        veg: [''],
        nonVeg: [''],
        jain: [''],
    });  // Store dishes for each menuType

    if(!catererId){
        setCatererId(localStorage.getItem('catererData'))
    }

    const handleAddItem = (menuType) => {
        setMenuData({
            ...menuData,
            [menuType]: [...menuData[menuType], '']
        });
    };

    const handleChangeItem = (menuType, index, value) => {
        const newItems = [...menuData[menuType]];
        newItems[index] = value;
        setMenuData({
            ...menuData,
            [menuType]: newItems
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: menuName,
            catererId:catererId,
            items: [
                {
                    menuType: 'veg',
                    items: menuData.veg,
                },
                {
                    menuType: 'nonVeg',
                    items: menuData.nonVeg,
                },
                {
                    menuType: 'jain',
                    items: menuData.jain,
                },
            ],
            status: {
                id: 1
            }
        };

        try {
            console.log(payload)
            const response = await axios.post('http://3.6.41.54/api/Menus', payload);
            console.log('Menu Created:', response.data);
        } catch (error) {
            console.error('Error creating menu:', error);
        }
    };

    return (
        <form className={styles.menuForm} onSubmit={handleSubmit}>
            <div className={styles.menuCategory}>
                <h3>Menu Category</h3>
                <input
                    type="text"
                    placeholder="Menu Category (e.g., Starter)"
                    value={menuName}
                    onChange={(e) => setMenuName(e.target.value)}
                    required
                />
            </div>

            {/* Veg Menu Items */}
            <div className={styles.menuTypeGroup}>
                <h3>Veg</h3>
                {menuData.veg.map((item, index) => (
                    <div key={index} className={styles.menuItem}>
                        <input
                            type="text"
                            placeholder="Veg Dish Name"
                            value={item}
                            onChange={(e) => handleChangeItem('veg', index, e.target.value)}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={() => handleAddItem('veg')}>
                    Add Another Veg Dish
                </button>
            </div>

            {/* Non-Veg Menu Items */}
            <div className={styles.menuTypeGroup}>
                <h3>Non-Veg</h3>
                {menuData.nonVeg.map((item, index) => (
                    <div key={index} className={styles.menuItem}>
                        <input
                            type="text"
                            placeholder="Non-Veg Dish Name"
                            value={item}
                            onChange={(e) => handleChangeItem('nonVeg', index, e.target.value)}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={() => handleAddItem('nonVeg')}>
                    Add Another Non-Veg Dish
                </button>
            </div>

            {/* Jain Menu Items */}
            <div className={styles.menuTypeGroup}>
                <h3>Jain</h3>
                {menuData.jain.map((item, index) => (
                    <div key={index} className={styles.menuItem}>
                        <input
                            type="text"
                            placeholder="Jain Dish Name"
                            value={item}
                            onChange={(e) => handleChangeItem('jain', index, e.target.value)}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={() => handleAddItem('jain')}>
                    Add Another Jain Dish
                </button>
            </div>

            <button className={styles.submitButton} type="submit">Submit Menu</button>
        </form>
    );
}
