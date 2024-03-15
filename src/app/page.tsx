import Aside from "./components/Aside";
import Login from "./components/Login";

export default function Home() {
  return (
<div className="grid grid-cols-4 w-screen h-screen bg-neutral-50">
    <Login />
    <Aside />
</div>
  )
}
