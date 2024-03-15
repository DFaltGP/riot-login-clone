import AccountIcons from "./AccountIcons";
import StayLogged from "./StayLogged";
import { ArrowRight } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex flex-col w-full items-center">
        <input
          type="text"
          name="email"
          id="email"
          placeholder=" "
          autoFocus
          className="block pr-2 pl-2 md:pl-4 pt-6 pb-2 w-5/6 bg-neutral-100 outline-none"
        />
        <label
          htmlFor="email"
          className="font-extrabold text-sm text-zinc-400 select-none absolute -translate-x-[136px] mt-1"
        >
          EMAIL
        </label>
      </div>
      <div className="flex flex-col w-full items-center">
        <input
          type="password"
          name="password"
          id="password"
          className="pr-2 pl-2 md:pl-4 pt-6 pb-2 w-5/6 bg-neutral-100 rounded-sm outline-none"
        />
        <label
          htmlFor="password"
          className="font-extrabold text-sm text-zinc-400 select-none absolute -translate-x-[136px] mt-1"
        >
          SENHA
        </label>
      </div>
      <AccountIcons />
      <StayLogged />
      <button className="bg-red-500 rounded-md p-5">
        <i>
          <ArrowRight color="white" size={48} />
        </i>
      </button>
    </div>
  );
}
