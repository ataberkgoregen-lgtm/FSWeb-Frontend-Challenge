import { useSelector } from "react-redux";

export default function Skills() {
    const data = useSelector((state) => state);

    return (
        <div className="flex flex-col m-auto border-blue-400 border-2 mt-[124px] w-4/6 border-b-1">
            <p className="text-5xl font-bold text-[#1F2937] pb-5">{data.navItems[0].label}</p>
            <div className="flex flex-row gap-[120px] ">
                {data.skills.map((item) => {
                    return (<div className="flex flex-col gap-7">
                        <p className="text-[#4338CA] text-[30px] font-medium">{item.title}</p>
                        <p className="text-[#6B7280] text-xs">{item.description}</p>
                    </div>)
                })}
            </div>
        </div>
    )
}