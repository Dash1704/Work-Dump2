"use client"

import Logo from "../logo/Logo";
import Title from "../title/Title";
import InputBox from "../inputBox/InputBox";
import BogButton from "../bogButton/BogButton";
import PopUpModal from "../popUpModal/PopUpModal";
import Calculator from "../calculator/Calculator";
import styles from "./HomeBody.module.css"
import { useState } from "react";

export default function HomeBody() {
  const [visible, setIsVisible] = useState<boolean>(false)
  const [salary, setSalary] = useState<number | string>('');
  const [hours, setHours] = useState<number | string>('');
  const [time, setTime] = useState<number | string>('');
  const [result, setResult] = useState<string | undefined>('');
  const [salaryError, setSalaryError] = useState<string | null>(null);
  const [hoursError, setHoursError] = useState<string | null>(null);
  const [timeError, setTimeError] = useState<string | null>(null);
  
  const validateInputs = () => {
    let isValid = true;

     if (!/^\d+$/.test(salary.toString())) {
      setSalaryError('Please enter a valid salary');
      isValid = false;
    } else {
      setSalaryError(null);
    }

    if (!/^\d+(\.\d+)?$/.test(hours.toString())) {
      setHoursError('Please enter valid week hours');
      isValid = false;
      
    }else if(+hours > 168){
      setHoursError("That's too many hours in the week!");
      isValid = false;
    } 
    else {
      setHoursError(null);
    }

    if (!/^\d+(\.\d+)?$/.test(time.toString())) {
      setTimeError('Please enter a valid time');
      isValid = false;
    } else {
      setTimeError(null);
    }

    return isValid
  }

  const resetVisibility = () => {
    setIsVisible(false);
    setTime('');
  }

  const customStyles = visible ? styles.pageContainerResult : styles.pageContainerNoResult

  return(
    <div className={customStyles}>
      {visible && <div className={styles.overlay}></div>}
      <Logo height={200} width={200}/>
      <Title/>
      <InputBox 
        text="Salary £"
        placeholder="E.g 30000"
        value={salary}
        onChange={(value: string | number) => {
          setSalary(value)
        }}
        error={salaryError}
      />
      <InputBox 
        text="Working hours per week"
        placeholder="E.g 35"
        value={hours}
        onChange={(value: string | number) => {
          setHours(value)
        }}
        error={hoursError}
      />
      <InputBox 
        text="Time on bog (MM.SS)"
        placeholder="E.g 5.03"
        value={time}
        onChange={(value: string | number) => {
          setTime(value)
        }}
        error={timeError}
      />
      <div className={styles.buttonStyles}>
        <BogButton 
          onClick={() => {
            if (validateInputs()){
              setIsVisible(true)
              setResult(Calculator(salary, hours, time))
          }}}
          text="Calculate Earnings"  
        />
      </div>
      {visible && (
        <PopUpModal
          visible={visible}
          onReset={resetVisibility}
          result={result}
        />
      )}
    </div>
  )
}
