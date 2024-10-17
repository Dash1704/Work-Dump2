import Image from 'next/image'

export default function Logo() {
  return (
    <div>
      <Image 
        src="/images/poo-emoji.png"
        alt="Website Logo"
        width={400}
        height={400}
      />
    </div>
  )
}