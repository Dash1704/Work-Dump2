import Logo from "../logo/Logo";
import Title from "../title/Title";
import InputBox from "../inputBox/InputBox";
import styles from "./HomeBody.module.css"

export default function HomeBody() {
  return(
    <div className={styles.pageContainer}>
      <Logo />
      <Title/>
      <InputBox />
      <InputBox />
      <InputBox />
    </div>
  )
}