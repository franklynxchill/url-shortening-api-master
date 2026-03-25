import brandRecognition from "@/public/icon-brand-recognition.svg";
import detailedRecords from "@/public/icon-detailed-records.svg";
import fullyCustomizable from "@/public/icon-fully-customizable.svg";
import Image from "next/image";

function Content() {
  return (
    <div className=" pt-120 md:pt-80 pb-20 px-6 md:px-0 bg-gray-400/25 relative overflow-hidden">
      <div className=" text-center">
        <h2 className=" font-bold mb-2 text-3xl md:text-4xl">Advanced Statistics</h2>
        <p className=" md:w-105 mx-auto text-gray-400">
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
      </div>
      <div className="mt-16 container mx-auto">
        <div className=" flex flex-col md:flex-row gap-x-9 gap-y-16 items-start text-center md:text-left">
          <div className=" bg-white rounded-lg py-10 px-5 relative md:w-2/6">
            <div className=" bg-primaryPurple w-20 h-20  rounded-full flex items-center justify-center absolute top-[-2.2rem] left-36 md:left-0">
              <Image src={brandRecognition} alt="Brand Recognition" />
            </div>
            <h3 className=" text-primaryPurple/90 text-2xl font-bold mb-3 mt-11">Brand Recognition</h3>
            <p className=" text-gray-400">
              Boost your brand recognition with each click. Generic links don’t 
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>

          <div className=" bg-white rounded-lg py-10 px-5 relative md:w-2/6 md:mt-12">
            <div className=" bg-primaryPurple w-20 h-20  rounded-full flex items-center justify-center absolute top-[-2.2rem] left-36 md:left-0">
              <Image src={detailedRecords} alt="Detailed Records" />
            </div>
            <h3 className=" text-primaryPurple/90 text-2xl font-bold mb-3 mt-11">Detailed Records</h3>
            <p className=" text-gray-400">
              Gain insights into who is clicking your links. Knowing when and where 
              people engage with your content helps inform better decisions.
            </p>
          </div>

          <div className=" bg-white rounded-lg py-10 px-5 relative md:w-2/6 md:mt-24">
            <div className=" bg-primaryPurple w-20 h-20  rounded-full flex items-center justify-center absolute top-[-2.2rem] left-36 md:left-0">
              <Image src={fullyCustomizable} alt="Fully Customizable" />
            </div>
            <h3 className=" text-primaryPurple/90 text-2xl font-bold mb-3 mt-11">Fully Customizable</h3>
            <p className=" text-gray-400">
              Improve brand awareness and content discoverability through customizable 
              links, supercharging audience engagement.
            </p>
          </div>
        </div>

        <div className=" absolute top-179 md:top-159 left-[12.6rem] md:left-26 -z-40 ">
          <div className=" hidden md:block border-0 bg-primaryBlue w-250 h-3"></div>
          <div className=" border-0 bg-primaryBlue w-3 h-170 md:hidden"></div>
        </div>
      </div>
    </div>
  )
}

export default Content