import styles from "./BogButton.module.css"

export default function BogButton(props: any) {

  
  return(
    <button className={styles.bogButtonContainer} onClick={props.onClick}>

    </button>
  )
}