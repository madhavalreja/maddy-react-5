import { useState } from 'react';
import AgeCalculatorForm from './components/AgeCalForm';
import AgeResult from './components/AgeResult';
import {
  differenceInYears,
} from 'date-fns';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);

    setAge({
      years: ageYears,
    });
  };

  return (
    <section>
      <div >
        <h1 >
          Age Calculator
        </h1>
        <AgeCalculatorForm calculateAge={calculateAge} />
        {age && <AgeResult age={age} />}
      </div>
    </section>
  );
}

export default App;