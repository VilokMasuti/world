import Hero from "@/components/Hero";

import { FloatingNav } from "../components/ui/floating-navbar";
import { FaHouseChimney } from "react-icons/fa6";
import Gird from "@/components/Gird";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className=" relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
<FloatingNav navItems={[{name:'Home', link:'/',icon:<FaHouseChimney/>}]}/>
<Hero/>
<Gird/>
<Projects/>
      </div>
    
    </main>
  );
}
