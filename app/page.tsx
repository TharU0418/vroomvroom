import FAQ from "./components/FAQ";
import HeroSlider from "./components/HeroSlider";
import HowWork from "./components/HowWork";
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

    </div>
  );
}
