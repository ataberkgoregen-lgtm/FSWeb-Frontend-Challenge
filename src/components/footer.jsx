import { useSelector } from "react-redux";

export default function Footer() {
  const data = useSelector((state) => state);

  return (
    <div className="bg-[#F9F9F9] dark:bg-[#141414]">
      <div className="m-auto w-4/6 flex mt-10 flex-col">
        <section className="mt-21.25 xl:w-120 text-[42px] font-medium mb-[63px] dark:text-[#AEBCCF] ">
          {data.footerCta.heading}
        </section>
        <div className="flex xl:flex-row flex-col justify-between mb-32.5 ">
          <a href={data.footerCta.email} className="text-xl">
            👉{" "}
            <span className="text-[#AF0C48] text-xl underline dark:text-[#BAB2E7]">
              {data.footerCta.email}
            </span>
          </a>
          <div className="flex flex-row gap-5 py-4 xl:py-0">
            <a href="" className="text-lg dark:text-[#E1E1FF]">
              Personal Blog
            </a>
            <a href="" className="text-[#00AB6B] text-lg">
              Github
            </a>
            <a href="" className="text-[#0077B5] text-lg">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
