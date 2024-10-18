import Image from 'next/image'

export default function Logo() {
  return (
    <div>
      <Image 
        src="/images/poo-emoji.png"
        alt="Website Logo"
        width={300}
        height={300}
      />
    </div>
  )
}