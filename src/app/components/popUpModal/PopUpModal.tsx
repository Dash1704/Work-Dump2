import styles from './PopUpModal.module.css'
import { useState } from 'react';
import BogButton from '../bogButton/BogButton';


export default function PopUpModal ({ visible, onReset }: { visible: boolean, onReset: () => void }) {
  const pressButton = () => {
    onReset();
  }

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
      <BogButton 
        text={randomText()}
        onClick={pressButton}
      />
    </div>
  )
}
