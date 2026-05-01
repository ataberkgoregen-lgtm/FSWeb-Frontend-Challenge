import { useSelector } from "react-redux";

export default function Projects() {
  const data = useSelector((state) => state);

  return (
    <div
      id="projects"
      className="m-auto w-4/6 mt-10 flex flex-col  pt-10 border-t-[#BAB2E7] border-t-1 mb-34 "
    >
      <p className="text-5xl font-bold mb-9 dark:text-[#AEBCCF] ">
        {data.navItems[1].label}
      </p>
      <div className="flex flex-col justify-between gap-30 xl:flex-row ">
        {data.projects.map((item) => {
          return (
            <div className="flex flex-col w-fit">
              <img src={item.image} alt="" />
              <p className="text-3xl my-[18px] text-[#4338CA] font-medium dark:text-[#CFCBFF]">
                {item.title}
              </p>
              <p className="text-sm text-[#6B7280] mb-[18px] dark:text-[#FFFFFF]">
                {item.description}
              </p>
              <div className="flex flex-row gap-1.5 mb-[18px]">
                {item.tags.map((buttons) => {
                  return (
                    <button className="text-sm text-[#3730A3] border-1 px-3 py-0.5 rounded-md dark:bg-[#383838] dark:text-[#8F88FF]">
                      {buttons}
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-row justify-between underline text-base text-[#3730A3] font-medium dark:text-[#E1E1FF]">
                <a href={item.links.github}>Github</a>
                <a href={item.links.live}>Vercel</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
