import Hero from "@/components/Hero";

import { FloatingNav } from "../components/ui/floating-navbar";
import { FaHouseChimney } from "react-icons/fa6";
import Gird from "@/components/Gird";
import Projects from "@/components/Projects";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className=" relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
<FloatingNav navItems={navItems}/>
<Hero/>
 <Gird/> 
<Projects/>
      </div>
    
    </main>
  );
}
