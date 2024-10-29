import {useState} from 'react'
import styles from './InputBox.module.css'

export default function InputBox({text, placeholder, value, onChange, error}: 
  {
    text: string,
    placeholder: string,
    value: string | number,
    onChange: (value: string) => void;
    error: string | null;
  }) {
    const [focus, setFocus] = useState<boolean>(false)

    const customStyle = focus && !error 
    ? styles.focusBoxContainer 
    : error ? styles.errorBoxContainer : styles.boxContainer

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={styles.container}>
      <text className={styles.text}>{text}</text>
      <div className={styles.errorMessage}>{error}</div>
      <input 
        className={customStyle} 
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onFocus={() => setFocus(true)}  
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}
