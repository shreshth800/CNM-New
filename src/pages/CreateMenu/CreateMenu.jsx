// import React, { useState } from 'react'
// import Styles from './CreateMenu.module.css'
// import Steps from '../../components/Steps/Steps'
// import Personal from '../../components/Personal/Personal'

// export default function CreateMenu() {
//     const [currentStep,setCurrentStep]=useState(1)
//   return (
//     <div>
//         <Steps currentStep={currentStep}/>
//         <Personal/>

//     </div>
//   )
// }

// import React, { useState } from 'react';
// import Styles from './CreateMenu.module.css';
// import Steps from '../../components/Steps/Steps';
// import Personal from '../../components/Personal/Personal';

// export default function CreateMenu() {
//     const [currentStep, setCurrentStep] = useState(1);

//     // Function to handle moving to the next step
//     const nextStep = () => {
//         if (currentStep < 3) {
//             setCurrentStep(currentStep + 1);
//         }
//     };

//     // Function to handle moving to the previous step
//     const prevStep = () => {
//         if (currentStep > 1) {
//             setCurrentStep(currentStep - 1);
//         }
//     };

//     return (
//         <div>
//             <Steps currentStep={currentStep} />
//             <Personal />

//             <div className={Styles.navigationButtons}>
//                 <button onClick={prevStep} disabled={currentStep === 1}>Previous</button>
//                 <button onClick={nextStep} disabled={currentStep === 3}>Next</button>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import Styles from "./CreateMenu.module.css";
import Steps from "../../components/Steps/Steps";
import Personal from "../../components/Personal/Personal";
import MenuCreation from "../../components/MenuCreation/MenuCreation"; // Assuming you have this component
import CreateDish from "../../components/CreateDish/CreateDish";

export default function CreateMenu() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Personal setCurrentStep={setCurrentStep}/>;
      case 2:
        return <MenuCreation setCurrentStep={setCurrentStep}/>;
      case 3:
        return <CreateDish/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Steps currentStep={currentStep} />
      {renderStepContent()}

      <div className={Styles.navigationButtons}>
        <button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === 3}>
          Next
        </button>
      </div>
    </div>
  );
}
