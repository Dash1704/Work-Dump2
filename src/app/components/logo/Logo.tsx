import Image from 'next/image'
import styles from './Logo.module.css'


export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image 
        src="/images/pile-of-poo.png"
        alt="Website Logo"
        width={200}
        height={200}
      />
    </div>
  )
}