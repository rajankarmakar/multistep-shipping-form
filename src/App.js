import { useState } from 'react';
import './App.css';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepSuccess from './components/StepSuccess';


function App() {
  const [stepCount, setStepCount] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bio: "",
    occupation: "",
    city: "",
    country: "",
  });

  const updateForm = () => {
    setStepCount(preState => preState + 1);
  }

  const goBack = () => {
    setStepCount( preState => preState - 1);
  }
  
  const goHome = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      bio: "",
      occupation: "",
      city: "",
      country: "",
    })
    setStepCount(1);
  }

  const handleInput = input => (e) => {
    setFormData({...formData, [input]: e.target.value })
  }
  switch(stepCount){
    case 1:
      return (
        <StepOne 
          goBack={goBack} 
          updateForm={updateForm} 
          stepCount={stepCount}
          handleInput={handleInput}
          formData={formData} 
        />
      )
    case 2:
      return (
        <StepTwo 
          goBack={goBack} 
          updateForm={updateForm} 
          stepCount={stepCount}
          handleInput={handleInput}
          formData={formData} 
        />
      )
    case 3:
      return (
        <StepThree 
          goBack={goBack} 
          updateForm={updateForm} 
          stepCount={stepCount}
          handleInput={handleInput}
          formData={formData} 
        />
      )
    case 4:
      return (
        <StepSuccess 
          goHome={goHome} 
          stepCount={stepCount}
          handleInput={handleInput}
          formData={formData} 
        />
      )
    default:
      return (
        <StepOne 
          goBack={goBack} 
          updateForm={updateForm} 
          stepCount={stepCount}
          handleInput={handleInput} 
        />
      )
  }

  
}

export default App;
