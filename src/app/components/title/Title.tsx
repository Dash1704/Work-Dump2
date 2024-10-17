import styles from './Title.module.css'

export default function Title() {
  return (
    <div className="Background">
      <div className={styles.title}> Work Dump</div>
      <div className={styles.bio}> Fill in the boxes below to find out how much cash you have made whilst on the bog!</div>
    </div>
  )
}