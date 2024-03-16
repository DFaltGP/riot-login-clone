import Image from "next/image";
import Link from "next/link";

export default function AccountIcons () {
  return (
    <div className="flex w-5/6 rounded-md">
    <Link href={"https://www.facebook.com/login"} className="bg-[#1A5C94] w-1/3 rounded-md p-1 flex items-center justify-center cursor-pointer">
      <i>
        <Image
          src={"/svg/facebook.svg"}
          height={28}
          width={28}
          alt="facebook"
        />
      </i>
    </Link >
    <Link href={"https://myaccount.google.com/"} className="bg-[#fff] w-1/3 rounded-md p-1 flex items-center justify-center cursor-pointer">
      <i>
        <Image
          src={"/svg/google.svg"}
          height={28}
          width={28}
          alt="google"
        />
      </i>
    </Link >
    <Link href={"https://support.apple.com/pt-br/111001"} className="bg-[#000] w-1/3 rounded-md p-1 flex items-center justify-center cursor-pointer">
      <i>
        <Image
          src={"/svg/apple.svg"}
          height={28}
          width={28}
          alt="apple"
        />
      </i>
    </Link >
  </div>
  )
}