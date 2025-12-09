import React from "react";

const ExpertiseSection = () => {
  return (
    <section className="w-full flex flex-col justify-between px-6 lg:px-20 py-16 font-[font1] text-white/95 ">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-1/2">
        <h2 className="text-xl font-bold mb-6 lg:mb-0">Expertise</h2>
        <ul className="space-y-2 text-xl font-bold">
          <li>Strategy</li>
          <li>Advertising</li>
          <li>Branding</li>
          <li>Design</li>
          <li>Content</li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-40 text-xl font-bold  max-w-6xl">
        <div>
          <p className="">
            Our Work_Born in curiosity, raised by dedication and fed with a steady diet
            of creativity.
          </p>
        </div>

        <div>
          <p className="mt-">
            Our Creative_Simmering in an environment where talent can come to a full boil.
            Encouraged to become the best versions of ourselves.
          </p>
        </div>

        <div>
          <p className="mt-2">
            Our Culture_We're open to each other. Period. The team works together to create
            a space that makes us proud.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
