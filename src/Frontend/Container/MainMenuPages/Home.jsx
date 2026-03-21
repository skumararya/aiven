import React from "react";
import BottomSliderSection from "../HomeRepo/BottomSlider/BottomSliderSection";
import Services from "../HomeRepo/EventsSection/Services";

import MainSliderSection from "../HomeRepo/MainSliderSection/MainSliderSection";
import WelcomeSection from "../HomeRepo/Welcome&Calender/WelcomeSection";
import OurCources from "../HomeRepo/OurCources";
import EventEngagement from "../HomeRepo/EventEngagement";
import ClientEngagement from "../HomeRepo/client engagement/ClientEngagement";

const Home = () => {
  return (
    <>
   
      <MainSliderSection />
	  <WelcomeSection />
	  <Services />
       <OurCources />
	   
	   {/*
     
      
       */}
    



<EventEngagement />
<ClientEngagement />    

 <BottomSliderSection />  


    </>
  );
};
export default Home;
