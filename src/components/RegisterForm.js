import React from 'react';
import FormPanel from './FormPanel';
import registerFormModel from '../models/registrationModel';


function RegisterForm() {
  const submitCallback = e => alert(registerFormModel.map(m => m.label + ': ' + m.value + ',\n').join(''));

  return (
    <div className="TEST">
      <FormPanel title="Welcome to Sygna Bridge VASP Registration" btnName="Submit" submitCallback={submitCallback} model={registerFormModel} />
    </div>
  );
}

export default RegisterForm;