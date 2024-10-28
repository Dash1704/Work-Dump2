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
  
  const pressButton = () => {
    console.log('Click me bro')
    setIsVisible(true)
  }

  const resetVisibility = () => {
    setIsVisible(false)
  }

const [visible, setIsVisible] = useState<boolean>(false)

const customStyles = visible ? styles.pageContainerResult : styles.pageContainerNoResult

useEffect(() => {
  console.log("visable state changed", visible)
}, [visible])

  return(
    <div className={customStyles}>
      {visible && <div className={styles.overlay}></div>}
      <Logo />
      <Title/>
      <InputBox 
        text="Salary £"
        placeholder="E.g 30000"
      />
      <InputBox 
        text="Working hours per week"
        placeholder="E.g 35"
      />
      <InputBox 
        text="Time on bog (MM.SS)"
        placeholder="E.g 5.03"
      />
      <BogButton 
        onClick={pressButton}
        text="Calculate Earnings"  
      />
      {visible && (
        <PopUpModal
          visible={visible}
          onReset={resetVisibility}
        />
      )}
    </div>
  )
}