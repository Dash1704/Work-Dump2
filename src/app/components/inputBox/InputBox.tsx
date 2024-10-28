import {useState} from 'react'
import styles from './InputBox.module.css'

export default function InputBox({text, placeholder, onChange}: 
  {
    text: string,
    placeholder: string
    onChange: (value: string) => void;
  }) {
    const [focus, setFocus] = useState<boolean>(false)
    const customStyle = focus ? styles.focusBoxContainer : styles.boxContainer

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  
  return (
    <div className={styles.container}>
      <text className={styles.text}>{text}</text>
      <input 
        className={customStyle} 
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setFocus(true)}  
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}