import { useSelector } from "react-redux";

export default function Profile() {
  const data = useSelector((state) => state);

  return (
    <div className="m-auto w-4/6 flex mt-10 flex-col mb-[42px] pt-10 border-t-[#BAB2E7] border-t-1 ">
      <p className=" text-5xl font-bold mb-[39px]">Profile</p>
      <div className="flex flex-row gap-25">
        <div>
          <p className="text-3xl text-[#4338CA] font-medium mb-[21px]">
            Profile
          </p>
          {data.profile.details.map((item) => {
            return (
              <div className="flex flex-row">
                <div className="w-50 text-lg font-bold pb-2">
                  <p>{item.label}</p>
                </div>

                <div className="w-50 text-lg pb-2">
                  <p>{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <p className="text-3xl text-[#4338CA] font-medium">
            {data.profile.aboutMe.title}
          </p>
          <div className="w-140">
            {data.profile.aboutMe.paragraphs.map((item) => {
              return <p className="py-3 text-lg text-[#6B7280]">{item}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
