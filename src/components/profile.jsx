import { useSelector } from "react-redux";

export default function Profile() {
  const data = useSelector((state) => state);

  return (
    <div className="m-auto w-4/6 flex mt-10 flex-col mb-[42px] pt-10 border-t-[#BAB2E7] border-t-1 ">
      <p className=" text-5xl font-bold mb-[39px] dark:text-[#AEBCCF]">
        Profile
      </p>
      <div className="flex xl:flex-row gap-25 flex-col">
        <div>
          <p className="text-3xl text-[#4338CA] font-medium mb-[21px] dark:text-[#B7AAFF]  ">
            Profile
          </p>
          {data.profile.details.map((item) => {
            return (
              <div className="flex flex-row">
                <div className="xl:w-50 xl:text-lg text-md w-40 font-bold pb-2 dark:text-[#FFFFFF]">
                  <p>{item.label}</p>
                </div>

                <div className="xl:w-50 xl:text-lg text-md w-30 pb-2 dark:text-[#FFFFFF]">
                  <p>{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <p className="text-3xl text-[#4338CA] font-medium dark:text-[#B7AAFF]">
            {data.profile.aboutMe.title}
          </p>
          <div className="w-5/6 ">
            {data.profile.aboutMe.paragraphs.map((item) => {
              return (
                <p className="py-3 text-lg text-[#6B7280] dark:text-[#FFFFFF]">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
