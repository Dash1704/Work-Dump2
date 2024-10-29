"use client"

import Logo from "../logo/Logo";
import Title from "../title/Title";
import InputBox from "../inputBox/InputBox";
import BogButton from "../bogButton/BogButton";
import PopUpModal from "../popUpModal/PopUpModal";
import Calculator from "../calculator/Calculator";
import styles from "./HomeBody.module.css"
import { useState, useEffect } from "react";

export default function HomeBody() {
  const [salary, setSalary] = useState<number | string>('');
  const [hours, setHours] = useState<number | string>('');
  const [time, setTime] = useState<number | string>('');
  const [result, setResult] = useState<string | undefined>('');
  
  const pressButton = () => {
    setIsVisible(true)
    setResult(Calculator(salary, hours, time))
  }

  const resetVisibility = () => {
    setIsVisible(false);
    setTime('');
  }

const [visible, setIsVisible] = useState<boolean>(false)

const customStyles = visible ? styles.pageContainerResult : styles.pageContainerNoResult

useEffect(() => {
  console.log("visable state changed:", visible)
}, [visible])

useEffect(() => {
  console.log("salary state changed:", salary)
}, [salary])

useEffect(() => {
  console.log("hours state changed:", hours)
}, [hours])

useEffect(() => {
  console.log("time state changed:", time)
}, [time])

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
      />
      <InputBox 
        text="Working hours per week"
        placeholder="E.g 35"
        value={hours}
        onChange={(value: string | number) => {
          setHours(value)
        }}
      />
      <InputBox 
        text="Time on bog (MM.SS)"
        placeholder="E.g 5.03"
        value={time}
        onChange={(value: string | number) => {
          setTime(value)
        }}
      />
      <div className={styles.buttonStyles}>
        <BogButton 
          onClick={pressButton}
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
