import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import HowWork from "./components/HowWork";
import Navbar from "./components/Navbar";
import WhatUs from "./components/WhatUs";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen "> 

<HeroSlider/>
<WhyUs/>
<HowWork/>
<WhatUs/>
<FAQ/>

{/* <Footer/> */}

    </div>
  );
}
