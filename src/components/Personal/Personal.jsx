// import React, { useState } from 'react'
// import styles from './Personal.module.css'
// import axios from 'axios';

// export default function Personal() {
//     const [serviceLocat,setServiceLocat]=useState([{
//         location:'',
//         PinCode:''
//     }])
//     const [formData, setFormData] = useState({
//         name:'',
//         gstNo: '',
//         address: '',
//         mobileNo: '',
//         extraInformation: '',
//         review:[],
//         specialistIn: '',
//         cuisinesOffered: '',
//         inServiceFrom: '',
//         dishes:[],
//         cateringType: '',
//         maximumServingCapacity: '',
//         googleLocation: '45.422999999999999',
//         serviceLocation:serviceLocat ,
//         maxPrice: '',
//         minPrice: '',
//         status: {
//             id: 1
//         }
//       });

//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         if(name=='maximumServingCapacity' || name=='maxPrice'|| name=='minPrice' || name=='mobileNo'){
//             setFormData({...formData,[name]:Number(value)})
//             return
//         }
//         setFormData({ ...formData, [name]: value });
//       };
//       const handleChangeLoc=(e)=>{
//         setServiceLocat(serviceLocat=>{return({...serviceLocat,location:e.target.value})})
//       }
//       const handleChangePin=(e)=>{
//         setServiceLocat(serviceLocat=>{return({...serviceLocat,PinCode:e.target.value})})
//       }

//       const handleSubmit =async (e) => {
//         e.preventDefault();
//         console.log(formData.cuisinesOffered,formData.cateringType)
//         formData.cuisinesOffered=formData.cuisinesOffered.split(',')
//         formData.cateringType=formData.cateringType.split(',')
//         console.log('Form Data:', formData);
//         const response=await axios.post('http://3.6.41.54/api/caterer',{...formData})
//         const result=await response.json()
//         console.log(result)

//       };

//       return (
//         <form className={styles.catererForm} onSubmit={handleSubmit}>
//           <div className={styles.formGroup}>
//             <label htmlFor="gstNo">GST Number</label>
//             <input
//               type="text"
//               id="gstNo"
//               name="gstNo"
//               value={formData.gstNo}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="address">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="address">Address</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="mobileNo">Mobile Number</label>
//             <input
//               type="tel"
//               id="mobileNo"
//               name="mobileNo"
//               value={formData.mobileNo}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="extraInformation">Extra Information</label>
//             <textarea
//               id="extraInformation"
//               name="extraInformation"
//               value={formData.extraInformation}
//               onChange={handleChange}
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="specialistIn">Specialist In</label>
//             <input
//               type="text"
//               id="specialistIn"
//               name="specialistIn"
//               value={formData.specialistIn}
//               onChange={handleChange}
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="cuisinesOffered">Cuisines Offered</label>
//             <input
//               type="text"
//               id="cuisinesOffered"
//               name="cuisinesOffered"
//               placeholder='Ex:-North Indian,Sout Indian,Maharashtrian'
//               value={formData.cuisinesOffered}
//               onChange={handleChange}
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="inServiceFrom">In Service From</label>
//             <input
//               type="date"
//               id="inServiceFrom"
//               name="inServiceFrom"
//               value={formData.inServiceFrom}
//               onChange={handleChange}
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="cateringType">Catering Type</label>
//             <input
//               type="text"
//               id="cateringType"
//               name="cateringType"
//               placeholder='Ex:-Veg,Non-veg,Jain'
//               value={formData.cateringType}
//               onChange={handleChange}
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="maximumServingCapacity">Maximum Serving Capacity</label>
//             <input
//               type="number"
//               id="maximumServingCapacity"
//               name="maximumServingCapacity"
//               value={formData.maximumServingCapacity}
//               onChange={handleChange}
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="googleLocation">Google Location</label>
//             <input
//               type="text"
//               id="googleLocation"
//               name="googleLocation"
//               value={formData.googleLocation}
//               onChange={handleChange}
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="serviceLocation">Service Location</label>
//             <div className={styles.location}>
//                 <label>Location:</label>
//                 <input
//               type="text"
//               id="serviceLocation"
//               name="serviceLocationLocation"
//               placeholder=''
//               value={serviceLocat.location}
//               onChange={handleChangeLoc}
//             />
//             <label>Pincode:</label>
//             <input
//               type="text"
//               id="serviceLocation.pincode"
//               name="serviceLocationPincode"
//               placeholder=''
//               value={serviceLocat.PinCode}
//               onChange={handleChangePin}
//             />
//             </div>
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="maxPrice">Maximum Price</label>
//             <input
//               type="number"
//               id="maxPrice"
//               name="maxPrice"
//               value={formData.maxPrice}
//               onChange={handleChange}
//             />
//           </div>

//           <div className={styles.formGroup}>
//             <label htmlFor="minPrice">Minimum Price</label>
//             <input
//               type="number"
//               id="minPrice"
//               name="minPrice"
//               value={formData.minPrice}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit" className={styles.submitButton}>
//             Submit
//           </button>
//         </form>
//       );
//     };

import React, { useState } from "react";
import styles from "./Personal.module.css";
import axios from "axios";

export default function Personal() {
  // const [serviceLocat, setServiceLocat] = useState({
  //   location: '',
  //   PinCode: 0 // chagned from string to a number
  // });

  const [serviceLocat, setServiceLocat] = useState([
    {
      location: "",
      PinCode: 0,
    },
  ]); // Changed the type of serviceLocat to an array of objects

  const [formData, setFormData] = useState({
    name: "",
    gstNo: "",
    address: "",
    mobileNo: 0, // changed from string to number
    extraInformation: "",
    review: [],
    specialistIn: "",
    cuisinesOffered: [], // changed from string to array of strings
    inServiceFrom: "",
    dishes: [],
    cateringType: [], //changed from string to array of strings
    maximumServingCapacity: 0,
    googleLocation: "45.422999999999999",
    serviceLocation: serviceLocat,
    maxPrice: 0, // changed from string to number
    minPrice: 0, // changed from string to number
    // eventTypes: [],
    // availability: '',
    // images: '',
    status: {
      id: 1,
    },
  });

  // {
  //  "review": ["Review of the restaurant."],
  //   "extraInformation": "Extra Information about the restaurant.",
  //   "specialistIn": "Specialist in.",
  //   "cuisinesOffered": ["Dish1", "Dish2", "Dish3"],
  //   "inServiceFrom": "2022-09-22T14:30:00.000Z",
  //   "cateringType": ["veg","nonVeg","jain"],
  //   "maximumServingCapacity": 10000,
  //   "maxPrice": 200,
  //   "minPrice": 500,
  //   "googleLocation": "45.422999999999999",
  //   "serviceLocation": [
  //     {
  //       "location": "Thane",
  //       "PinCode": 400601
  //     }
  //   ],
  //   "name": "Shreshth Caterer",
  //   "gstNo": "GST111100001A",
  //   "address": "ABC,Mumbai,India",
  //   "mobileNo": 1234567890,
  //   "dishes": [],
  //   "status": {
  //     "id": 1
  //   }
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "maximumServingCapacity" ||
      name === "maxPrice" ||
      name === "minPrice" ||
      name === "mobileNo"
    ) {
      setFormData({ ...formData, [name]: Number(value) });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeLoc = (e) => {
    setServiceLocat({ ...serviceLocat, location: e.target.value });
  };

  const handleChangePin = (e) => {
    setServiceLocat({ ...serviceLocat, PinCode: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.cuisinesOffered = formData.cuisinesOffered.split(",");
    formData.cateringType = formData.cateringType.split(",");
    console.log("Form Data:", formData);

    try {
      const response = await axios.post("http://3.6.41.54/api/caterer", {
        ...formData,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form className={styles.catererForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="gstNo">GST Number</label>
        <input
          type="text"
          id="gstNo"
          name="gstNo"
          value={formData.gstNo}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="mobileNo">Mobile Number</label>
        <input
          type="tel"
          id="mobileNo"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="extraInformation">Extra Information</label>
        <textarea
          id="extraInformation"
          name="extraInformation"
          value={formData.extraInformation}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="specialistIn">Specialist In</label>
        <input
          type="text"
          id="specialistIn"
          name="specialistIn"
          value={formData.specialistIn}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cuisinesOffered">Cuisines Offered</label>
        <input
          type="text"
          id="cuisinesOffered"
          name="cuisinesOffered"
          placeholder="Ex: North Indian, South Indian, Maharashtrian"
          value={formData.cuisinesOffered}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="inServiceFrom">In Service From</label>
        <input
          type="date"
          id="inServiceFrom"
          name="inServiceFrom"
          value={formData.inServiceFrom}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cateringType">Catering Type</label>
        <input
          type="text"
          id="cateringType"
          name="cateringType"
          placeholder="Ex: Veg, Non-veg, Jain"
          value={formData.cateringType}
          onChange={handleChange}
        />
      </div>

      {/* <div className={styles.formGroup}>
        <label htmlFor="eventTypes">Event Types</label>
        <input
          type="text"
          id="eventTypes"
          name="eventTypes"
          placeholder="Ex: Weddings, Birthdays"
          value={formData.eventTypes}
          onChange={handleChange}
        />
      </div> */}

      {/* <div className={styles.formGroup}>
        <label htmlFor="availability">Availability</label>
        <input
          type="text"
          id="availability"
          name="availability"
          placeholder="Ex: Available on weekends, holidays"
          value={formData.availability}
          onChange={handleChange}
        />
      </div> */}

      <div className={styles.formGroup}>
        <label htmlFor="maximumServingCapacity">Maximum Serving Capacity</label>
        <input
          type="number"
          id="maximumServingCapacity"
          name="maximumServingCapacity"
          value={formData.maximumServingCapacity}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="googleLocation">Google Location</label>
        <input
          type="text"
          id="googleLocation"
          name="googleLocation"
          value={formData.googleLocation}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="serviceLocation">Service Location</label>
        <div className={styles.location}>
          <label>Location:</label>
          <input
            type="text"
            id="serviceLocationLocation"
            name="serviceLocationLocation"
            value={serviceLocat.location}
            onChange={handleChangeLoc}
          />
          <label>Pincode:</label>
          <input
            type="text"
            id="serviceLocationPinCode"
            name="serviceLocationPincode"
            value={serviceLocat.PinCode}
            onChange={handleChangePin}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="maxPrice">Maximum Price</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={formData.maxPrice}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="minPrice">Minimum Price</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={formData.minPrice}
          onChange={handleChange}
        />
      </div>

      {/* <div className={styles.formGroup}>
        <label htmlFor="images">Images</label>
        <input
          type="file"
          id="images"
          name="images"
          multiple
          onChange={handleChange}
        />
      </div> */}

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}
