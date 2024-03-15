import Image from "next/image";
import LoginForm from "./LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col col-span-1 items-center p-10 gap-10">
      <Image src={"/images/riot-games-logo.jpg"} alt="RiotGames Logo" width={256} height={256} priority className="self-center"/>
      <div className="flex flex-col gap-6 w-full">
      <p className="font-black text-4xl self-center">Sing In</p>
      <LoginForm />
      </div>
      <footer className="flex w-5/6 justify-center mt-60">
        <Link href={"google.com"} target="blank">Problemas ao fazer <b>login?</b></Link>
    </footer>
    </div>
  )
}