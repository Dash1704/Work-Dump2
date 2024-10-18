"use client"

import Logo from "../logo/Logo";
import Title from "../title/Title";
import InputBox from "../inputBox/InputBox";
import BogButton from "../bogButton/BogButton";
import styles from "./HomeBody.module.css"

export default function HomeBody() {
  const pressButton = () => {
    console.log('Click me bro')
  }
  return(
    <div className={styles.pageContainer}>
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
    </div>
  )
}