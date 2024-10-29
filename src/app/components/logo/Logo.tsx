import Image from 'next/image'
import styles from './Logo.module.css'

export default function Logo({width, height}:
  {
    width: number,
    height: number
  }
) {
  return (
    <div className={styles.logoContainer}>
      <Image 
        src="/images/pile-of-poo.png"
        alt="Website Logo"
        width={width}
        height={height}
      />
    </div>
  )
}
