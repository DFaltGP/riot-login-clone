import Image from "next/image";
import LoginForm from "./LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col w-full col-span-1 justify-between items-center p-10 gap-10">
      <div className="w-full flex justify-center">
        <Image
          src={"/images/riot_games_logo.png"}
          alt="RiotGames Logo"
          width={256}
          height={256}
          priority
          className="self-center"
        />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <p className="font-black text-4xl self-center">Conectar-se</p>
        <LoginForm />
      </div>
      <footer className="flex w-5/6 justify-center flex-col mt-60">
        <p className="self-center">
          Problemas ao fazer{" "}
          <Link href={"https://www.riotgames.com/pt-br"} target="blank">
            <b>login?</b>
          </Link>
        </p>
        <p className="text-zinc-400 font-semibold self-end">v8.2.0</p>
      </footer>
    </div>
  );
}
