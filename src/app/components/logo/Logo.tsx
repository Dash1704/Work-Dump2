import Image from 'next/image'
import styles from './Logo.module.css'


export default function Logo(props: any) {
  return (
    <div className={styles.logoContainer}>
      <Image 
        src="/images/pile-of-poo.png"
        alt="Website Logo"
        width={props.width}
        height={props.width}
      />
    </div>
  )
}