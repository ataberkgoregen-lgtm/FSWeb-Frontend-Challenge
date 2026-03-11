import { useSelector } from "react-redux";

export default function Footer() {
  const data = useSelector((state) => state);

  return (
    <div className="bg-[#F9F9F9]">
      <div className="m-auto w-4/6 flex mt-10 flex-col">
        <section className="mt-21.25 w-120 text-[42px] font-medium mb-[63px]">
          {data.footerCta.heading}
        </section>
        <div className="flex flex-row justify-between mb-32.5">
          <a href={data.footerCta.email} className="text-xl">
            👉{" "}
            <span className="text-[#AF0C48] text-xl underline">
              {data.footerCta.email}
            </span>
          </a>
          <div className="flex flex-row gap-5 ">
            <a href="" className="text-lg">
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
