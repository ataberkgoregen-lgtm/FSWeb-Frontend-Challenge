import { useSelector } from "react-redux";
import profilePhoto from "../assets/ataberk.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function Hero() {
  const data = useSelector((state) => state);

  return (
    <div className="m-auto mt-5 w-4/6 flex justify-between flex-col xl:flex-row ">
      <div className="flex flex-col xl:w-1/2 w-full ">
        <div className="flex flex-row items-center ">
          <div className="w-25 h-[1px] bg-[#4338CA] dark:bg-[#B7AAFF] "></div>
          <span className="ml-[8px] text-[#4338CA] text-xl dark:text-[#B7AAFF] ">
            {data.personal.name}
          </span>
        </div>
        <div className="md:text-7xl text-5xl font-bold py-[40px] text-[#1F2937] dark:text-[#AEBCCF]">
          {data.personal.title}
        </div>
        <div className="text-[#6B7280] pb-[30px] dark:text-[#FFFFFF]">
          {data.personal.bio}
        </div>

        <div className="flex md:flex-row flex-col gap-3 mt-5 w-max m-auto md:m-0">
          <div className="flex">
            <a
              href={data.personal.links.personalBlog}
              className="flex flex-row items-center bg-[#4338CA] px-8 py-2 m-auto text-white rounded-md font-medium dark:bg-[#E1E1FF] dark:text-black text-l sm:text-sm"
            >
              {data.navCta.label}
            </a>
          </div>

          <div className="flex flex-row  gap-15 md:gap-3 ">
            <a
              href={data.personal.links.github}
              className="flex flex-row items-center text-[#4338CA] px-6 border-1 rounded-md font-medium gap-1 dark:bg-[#383838] dark:text-[#BAB2E7] dark:border-1-[#E1E1FF] py-1 pl-1 text-sm sm:text-sm "
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
              Github
            </a>

            <a
              href={data.personal.links.linkedin}
              className="flex flex-row items-center text-[#4338CA] px-6 border-1 rounded-md font-medium gap-1 dark:bg-[#383838] dark:text-[#BAB2E7] dark:border-1-[#E1E1FF] py-1 pl-1 text-sm sm:text-sm "
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="ml-10 flex flex-row items-center justify-center ">
        <img src={profilePhoto} alt="" className="w-fit h-fit rounded-2xl" />
      </div>
    </div>
  );
}
