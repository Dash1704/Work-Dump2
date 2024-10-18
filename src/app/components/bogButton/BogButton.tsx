import styles from "./BogButton.module.css"

export default function BogButton(props: any) {

  return(
    <button className={styles.bogButtonContainer} onClick={props.onClick}>
      <div className={styles.text}>{props.text}</div>
    </button>
  )
}