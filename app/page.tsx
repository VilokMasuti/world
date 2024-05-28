import Hero from "@/components/Hero";

import { FloatingNav } from "../components/ui/floating-navbar";

import Gird from "@/components/Gird";
import Projects from "@/components/Projects";
import { navItems } from "@/Data";
import Quote from "@/components/Quote";

import Contact from "@/components/Contact";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main className=" relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
<FloatingNav navItems={navItems}/>
<Hero/>
 <Gird/> 
<Projects/>
<Quote/>
 <Approach/> 
<Contact/>
      </div>
    
    </main>
  );
}
