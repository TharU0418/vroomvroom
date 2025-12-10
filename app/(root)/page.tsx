
//import HowWork from "./components/HowWork";
//import Navbar from "./components/Navbar";

import FAQ from "@/components/FAQ";
import HeroSlider from "@/components/HeroSlider";
import Partners from "@/components/partners";
//import WhatUs from "@/components/WhatUs";
import WhyChooseUs from "@/components/WhyUs";
import OurServices from "@/components/OurServices";


export default function Home() {
  return (
    <div className="min-h-screen bg-white"> 
{/* <Navbar/> */}
<HeroSlider/>
{/* <Partners/> */}
<WhyChooseUs/>
<OurServices/>
{/* <HowWork/> */}
{/* <WhatUs/> */}
<FAQ/>

    </div>
  );
}
