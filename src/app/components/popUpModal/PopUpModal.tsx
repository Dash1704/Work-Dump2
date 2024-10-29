import styles from './PopUpModal.module.css'
import BogButton from '../bogButton/BogButton';
import Logo from '../logo/Logo';


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
        <Logo height={100} width={100} />
        <div className={styles.introText}>
          You have earned:
        </div>
        <div className={styles.moneyResult}>
          £{result}
        </div>
        <BogButton 
          text={randomText()}
          onClick={pressButton}
        />
      </div>
  )
}
