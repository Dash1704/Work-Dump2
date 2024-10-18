import {useState} from 'react'
import styles from './InputBox.module.css'

export default function InputBox(props: any) {
  const [focus, setFocus] = useState<boolean>(false)
  const customStyle = focus ? styles.focusBoxContainer : styles.boxContainer
  
  return (
    <div className={styles.container}>
      <text className={styles.text}>{props.text}</text>
      <input 
        className={customStyle} 
        placeholder={props.placeholder}
        onFocus={() => setFocus(true)}  
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}