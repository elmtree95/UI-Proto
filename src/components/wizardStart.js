import React, { Component } from 'react';
import StepZilla from 'react-stepzilla';
import Step1 from "./step1";
import Step2 from "./step2";

const steps =
    [
      {name: 'Step 1', component: <Step1 />},
      {name: 'Step 2', component: <Step2 />}
  
    ]

export default class WizardStart extends Component {
  render() {
    return (
      <div>
          <StepZilla steps={steps}   showSteps={true}/>
      </div>
    )
  }
}
