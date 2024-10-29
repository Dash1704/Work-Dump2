import styles from "./BogButton.module.css"

export default function BogButton({onClick, text}: {
  onClick: () => void,
  text: string
}) {
  return(
    <button className={styles.bogButtonContainer} onClick={onClick}>
      <div className={styles.text}>{text}</div>
    </button>
  )
}