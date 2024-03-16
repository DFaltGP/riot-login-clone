'use client'

import { useState } from "react";
import AccountIcons from "./AccountIcons";
import StayLogged from "./StayLogged";
import { ArrowRight, Loader2 } from "lucide-react";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  function loading() {
    setIsLoading(!isLoading)
    setTimeout(() => {
      setIsLoading(false)      
      alert("Login realizado com sucesso!");
    }, 2000);
  }

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="flex flex-col w-full items-center">
        <input
          type="text"
          name="email"
          id="email"
          placeholder=" "
          autoFocus
          className="pr-2 pl-2 md:pl-4 pt-8 pb-2 w-5/6 bg-neutral-100 rounded-sm outline-none"
        />
        <label
          htmlFor="email"
          className="font-extrabold text-sm text-zinc-400 select-none relative -translate-x-[160px] -translate-y-[60px] mt-1"
        >
          EMAIL
        </label>
      </div>
      <div className="flex flex-col w-full items-center">
        <input
          type="password"
          name="password"
          id="password"
          className="pr-2 pl-2 md:pl-4 pt-8 pb-2 w-5/6 bg-neutral-100 rounded-sm outline-none"
        />
        <label
          htmlFor="password"
          className="font-extrabold text-sm text-zinc-400 select-none relative -translate-x-[160px] -translate-y-[60px] mt-1"
        >
          SENHA
        </label>
      </div>
      <AccountIcons />
      <StayLogged />
    {
      isLoading ? (
        <button className="bg-red-500 rounded-3xl p-5">
        <i>
          <Loader2 className="animate-spin" color="white" size={32} />
        </i>
      </button>
      ) : (
        <button onClick={loading} className="bg-red-500 rounded-3xl p-5">
        <i>
          <ArrowRight color="white" size={32}/>
        </i>
      </button>
      )
    }
    </div>
  );
}
