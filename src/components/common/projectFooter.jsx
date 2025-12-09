import React, { useState, useEffect } from "react";

const ProjectFooter = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString("en-CA", {
        timeZone: "America/Toronto",
        hour12: false,
      });
      setTime(currentTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-black text-white font-[font2] min-h-[50vh] flex flex-col justify-between uppercase tracking-widest">
      <div className="flex flex-wrap md:justify-between justify-center gap-3 items-center px-5 py-6">
        <div className="flex flex-wrap gap-0.5">
          {["FB", "IG", "IN", "BE"].map((item, i) => (
            <button
              key={i}
              className="border-2 border-white rounded-full px-3.5 lg:px-6 lg:pt-2 pt-1  lg:text-7xl text-3xl hover:border-[#d3fd51] hover:text-[#d3fd51] transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Contact Button */}
        <a href="/contact" className="border-2 border-white rounded-full px-2 lg:px-5 lg:pt-2 text-3xl  lg:text-7xl pt-1 font-semibold flex items-center gap-3  hover:border-[#d3fd51] hover:text-[#d3fd51] transition-all duration-300">
          CONTACT 
        </a>
      </div>

      <div className="flex flex-wrap lg:justify-between gap-3 justify-around items-center px-5 py-5 text-[15px] text-[#fff] tracking-widest">
        <div className="flex items-center gap-2">
          <span className="text-[15px]">🌐</span>
          <p>MONTREAL_{time}</p>
        </div>

        <div className="flex flex-wrap justify-center lg:gap-8 gap-3">
          <a href="#" className="hover:text-[#d3fd51]  transition">PRIVACY POLICY</a>
          <a href="#" className="hover:text-[#d3fd51]  transition">PRIVACY NOTICE</a>
          <a href="#" className="hover:text-[#d3fd51]  transition">ETHICS REPORT</a>
          <a href="#" className="hover:text-[#d3fd51]  transition">CONSENT CHOICES</a>
        </div>

        <a href="#" className="hover:text-[#d3fd51] transition">BACK TO TOP</a>
      </div>
    </footer>
  );
};

export default ProjectFooter;
