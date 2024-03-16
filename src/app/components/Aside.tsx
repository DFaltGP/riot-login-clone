import Image from "next/image";


export default function Aside () {
  return (
    <div className="col-span-3 items-center relative h-auto">
    <Image
          src="/images/dark-login.jpg"
          fill
          objectFit="cover"
          alt="chamber-image"
          quality={100}
          priority
    />
  </div>
  )
}