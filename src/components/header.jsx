import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../store/actions";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { ToastContainer, toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguageAction] = useLocalStorage("language", "tr");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function clickHandler(event) {
    const { value, name } = event.target;

    if (name === "toggle") {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    } else if (name) {
      language === "tr"
        ? toast(`${name}'e geçtiniz`)
        : toast(`Switched to ${name}`);
    } else {
      const newLang = language === "tr" ? "en" : "tr";
      toast(newLang === "tr" ? "Türkçeye Geçtiniz" : "Switched to English");
      setLanguageAction(newLang);
      dispatch(setLanguage(newLang));
    }
  }

  return (
    <div className="m-auto pt-5 w-4/6 mb-24">
      <div className="flex gap-3 m-auto justify-end ">
        <div className="flex gap-3 justify-center align-middle items-center mb-[31px]">
          <div className="relative inline-block w-11 h-5 justify-center align-middle ">
            <input
              id="switch-component-purple"
              type="checkbox"
              name="toggle"
              checked={theme === "light"}
              onChange={clickHandler}
              className={`peer appearance-none w-11 h-5 rounded-full cursor-pointer transition-colors duration-300 ${
                theme === "dark" ? "bg-[#4731D3]" : "bg-[#3A3A3A]"
              }`}
            />

            <label
              htmlFor="switch-component-purple"
              className={`
    absolute 
    w-4 h-4 
    rounded-full 
    cursor-pointer 
    transition-all duration-300
    top-1/2 left-[23px]
    -translate-y-1/2
    peer-checked:translate-x-[-18px]
    ${
      theme === "light"
        ? "bg-transparent shadow-[inset_4px_0_0_2px_#FDE047]"
        : "bg-[#FFE86E] shadow-sm"
    }
  `}
            />
          </div>
          <label
            htmlFor="switch-component-purple"
            className="text-[#777777] dark:text-[#D9D9D9]"
          >
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </label>
          <span className="dark:text-[#777777]">|</span>
          <div className="pl-3 text-[#777777]">
            {language === "tr" ? (
              <>
                <span className="dark:text-[#D9D9D9]">TO </span>

                <span
                  className="text-[#4731D3] cursor-pointer dark:text-[#BAB2E7]"
                  onClick={clickHandler}
                  name="lang"
                >
                  ENGLISH
                </span>
              </>
            ) : (
              <>
                {" "}
                <span
                  className="text-[#4731D3] cursor-pointer dark:text-[#BAB2E7]"
                  onClick={clickHandler}
                  name="lang"
                >
                  TÜRKÇE
                </span>
                <span className="dark:text-[#D9D9D9]">'YE GEÇ </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex text-center">
          <p className="bg-[#EEEBFF] dark:bg-[#4731D3] rounded-full px-7 py-5 rotate-30 text-[#7B61FF] dark:text-[#8F88FF] font-bold text-2xl">
            A
          </p>
        </div>

        <nav className="relative flex md:flex-row md:py-5 gap-5 items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col gap-1.5 cursor-pointer"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-500 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
          <div
            className={`md:flex flex-col md:flex-row gap-4 items-center  ${isOpen ? "flex" : "hidden"} `}
          >
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
                    name={item.label}
                    onClick={clickHandler}
                    id={item.id}
                    className="md:px-8 md:py-3 text-[#777777] text-lg cursor-pointer "
                  >
                    {item.label}
                  </button>
                </Link>
              );
            })}

            <a
              id="3"
              href={data.navCta.href}
              className=" text-[#3730A3] border-1 px-10 py-3 rounded-md text-lg dark:bg-[#FFFFFF]"
            >
              {data.navCta.label}
            </a>
          </div>
        </nav>
      </div>
      <ToastContainer />
    </div>
  );
}
