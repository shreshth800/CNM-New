import React, { useState } from 'react'
import Styles from './CreateMenu.module.css'
import Steps from '../../components/Steps/Steps'
import Personal from '../../components/Personal/Personal'

export default function CreateMenu() {
    const [currentStep,setCurrentStep]=useState(1)
  return (
    <div>
        <Steps currentStep={currentStep}/>
        <Personal/>
    </div>
  )
}
