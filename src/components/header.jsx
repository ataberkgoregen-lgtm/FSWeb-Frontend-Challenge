import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../store/actions";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Header() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguageAction] = useLocalStorage("language", "tr");

  function clickHandler(event) {
    const { value, name } = event.target;

    if (name === "toggle") {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    } else {
      const newLang = language === "tr" ? "en" : "tr";
      setLanguageAction(newLang);
      dispatch(setLanguage(newLang));
    }
  }

  return (
    <div className="m-auto mt-5 w-4/6">
      <div className="flex gap-3 m-auto justify-end ">
        <div className="flex gap-3 justify-center align-middle items-center ">
          <div className="relative inline-block w-11 h-5 justify-center align-middle ">
            <input
              id="switch-component-purple"
              type="checkbox"
              name="toggle"
              checked={theme === "light" ? true : false}
              onClick={clickHandler}
              className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-[#4731D3] cursor-pointer transition-colors duration-300"
            />

            <label
              htmlFor="switch-component-purple"
              className="
      absolute 
      w-4 h-4 
      bg-white 
      
      rounded-full 
      shadow-sm 
      cursor-pointer 
      transition-all duration-300
      top-1/2 left-1 
      -translate-x-1/2 -translate-y-1/2
      peer-checked:translate-x-[20px] peer-checked:-translate-y-1/2
      peer-checked:bg-[#FFE86E]
    "
            />
          </div>
          <label htmlFor="switch-component-purple" className="text-[#777777]">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </label>
          <span>|</span>
          <div className="pl-3 text-[#777777]">
            {language === "tr" ? (
              <>
                TO{" "}
                <span
                  className="text-[#4731D3] cursor-pointer"
                  onClick={clickHandler}
                >
                  ENGLISH
                </span>
              </>
            ) : (
              <>
                {" "}
                <span
                  className="text-[#4731D3] cursor-pointer"
                  onClick={clickHandler}
                >
                  TÜRKÇE
                </span>
                'YE GEÇ{" "}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex text-center">
          <p className="bg-[#EEEBFF] rounded-full px-8 py-6 rotate-45 text-[#7B61FF] font-bold text-2xl">
            A
          </p>
        </div>

        <div className="flex py-5">
          {data.navItems.map((item) => {
            return (
              <Link
                to={item.href}
                smooth={true}
                easing="easeInOutCubic"
                className=" cursor-pointer"
                offset={-300}
              >
                <button
                  id={item.id}
                  className="px-8 py-3 text-[#777777] text-lg cursor-pointer"
                >
                  {item.label}
                </button>
              </Link>
            );
          })}

          <a
            id="3"
            href={data.navCta.href}
            className=" text-[#3730A3] border-1 px-10 py-3 rounded-md text-lg"
          >
            {data.navCta.label}
          </a>
        </div>
      </div>
    </div>
  );
}
