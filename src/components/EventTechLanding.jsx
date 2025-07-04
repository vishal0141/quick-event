import React from 'react';

export default function EventTechLanding() {
  return (
    <div className="max-w-7xl mx-auto sm:py-20 py-16   ">
      
      {/* Heading */}
      <div style={{ fontFamily: 'Poppinssemibold' }} className="text-center text-[28px] sm:text-[38px] text-[#0E3044] mb-6">
        <p>Your Complete Event Tech</p>
        <p>Solution — Everything You Need</p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div 
          className="flex items-center justify-center h-[250px] sm:h-[350px] lg:h-[400px] lg:w-[700px] bg-cover bg-center relative"
          style={{ backgroundImage: "url('/images/Rectangl.svg')", 
            backgroundSize: 'cover' , backgroundPosition:"center"

          }}
        >
          <div className="max-w-[90%] sm:max-w-[525px] text-white text-center pt-10 px-4">
            <p style={{ fontFamily: 'Poppinssemibold' }} className="text-[18px] sm:text-[22px] lg:text-[26px] mb-2">
              Tailored Event Technology Built Around Organizers for Seamless Execution
            </p>
            <p className="text-[10px] sm:text-[12px] font-thin leading-relaxed">
              We provide end-to-end event technology that supports every stage—from planning to post-event marketing and networking. Whether it's a corporate gathering or industry expo, our all-in-one platform empowers you to host any type of event with ease and impact. Experience unmatched reliability and performance.
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className=" w-full sm:max-w-[400px] lg:max-w-[428px] h-[370px] sm:h-[350px] p-[30px] lg:h-[400px]">
          <img
            src="/images/rectLeft.png"
            alt="img"
            className=" border h-full rounded-xl"
          />
        </div>
      </div>

    </div>
  );
}