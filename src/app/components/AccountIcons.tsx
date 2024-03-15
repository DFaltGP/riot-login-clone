import Image from "next/image";

export default function AccountIcons () {
  return (
    <div className="flex w-5/6 rounded-md">
    <button className="bg-[#1A5C94] w-1/3 rounded-md p-1 flex items-center justify-center cursor-pointer">
      <i>
        <Image
          src={"/svg/facebook.svg"}
          height={28}
          width={28}
          alt="facebook"
        />
      </i>
    </button>
    <button className="bg-[#fff] w-1/3 rounded-md p-1 flex items-center justify-center cursor-pointer">
      <i>
        <Image
          src={"/svg/google.svg"}
          height={28}
          width={28}
          alt="google"
        />
      </i>
    </button>
    <button className="bg-[#000] w-1/3 rounded-md p-1 flex items-center justify-center cursor-pointer">
      <i>
        <Image
          src={"/svg/apple.svg"}
          height={28}
          width={28}
          alt="apple"
        />
      </i>
    </button>
  </div>
  )
}