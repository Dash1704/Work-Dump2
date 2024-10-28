import styles from './PopUpModal.module.css'
import { useState } from 'react';
import BogButton from '../bogButton/BogButton';


export default function PopUpModal ({ visible, onReset, result }: { 
  visible: boolean, 
  onReset: () => void, 
  result: string | undefined }) 
  {
    const pressButton = () => {
      onReset();
    }

    console.log('final result:', result)

    const randomText = () => {
      const text = [
        "Calculate Again!",
        "Have another go!",
        "Round Two?"
      ]

      const randomIndex = Math.floor(Math.random() * text.length);
      return text[randomIndex];
    }

    return(
      <div className={styles.modalContainer}>{visible}
        <div className={styles.moneyResult}>
          {result}
        </div>
        <BogButton 
          text={randomText()}
          onClick={pressButton}
        />
      </div>
  )
}
