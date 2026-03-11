import { useSelector } from "react-redux";

export default function Profile() {
    const data = useSelector((state) => state);

    return (
        <div className="m-auto border-blue-400 border-2 mt-5 w-4/6 flex mt-10 flex flex-col">
            <p className=" text-5xl font-bold mb-[39px]">Profile</p>
            <div className="flex flex-row gap-30">
                <div>
                    <p>Profile</p>
                    {data.profile.details.map((item) => {
                        return (<div className="flex flex-row">
                            <div className=" border-2 w-50">
                                <p>{item.label}</p>
                            </div>

                            <div className="border-2 w-45">
                                <p>{item.value}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>

                <div>
                    <p>{data.profile.aboutMe.title}</p>
                    <div className="w-130">
                        {data.profile.aboutMe.paragraphs.map((item) => {
                            return <p className="py-3">{item}</p>
                        })}
                    </div>
                </div>
            </div>

        </div>)

}