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
      <InputBox />
      <InputBox />
      <InputBox />
      <BogButton 
        onClick={pressButton}
        text="Click Here"  
      />
    </div>
  )
}