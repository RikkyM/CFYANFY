import { useState } from "react";
import InputJson from "./components/Fragments/InputJson";
import Search from "./components/Fragments/Search";
import { useJson } from "./hooks/useJson";

const App = () => {
  const { hasil, error, filterSearch, handleFileChange, handleSearchChange } =
    useJson();

  const [darkMode, setDarkMode] = useState(false);
  const [textDark, setTextDark] = useState("Dark");

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    setTextDark((prev) => (prev = prev === "Dark" ? "Light" : "Dark"));
  };

  return (
    <>
      <div
        className={`transition-all duration-[.4s] ${darkMode ? "dark bg-[#121212]" : ""}`}
      >
        <div className="min-h-screen max-w-screen-xl mx-auto relative flex flex-col">
          <nav className="w-full font-meridies flex justify-between items-center h-24 p-5">
            <h2 className="dark:text-white transition-text duration-[.4s] text-2xl md:text-4xl">
              CFYANFY
            </h2>
            <button
              className="dark:text-white transition-text duration-[.4s] text-lg md:text-2xl"
              onClick={handleDarkMode}
            >
              {textDark} Mode
            </button>
          </nav>
          {/* check follow you and not follow you */}

          <div className="font-jakarta flex-1 overflow-auto no-scrollbar">
            <InputJson fn1={handleFileChange(1)} fn2={handleFileChange(2)} />

            {error && (
              <div className="mx-auto w-max bg-red-600 dark:bg-transparent dark:text-red-500 text-white mt-10 rounded p-2 font-jakarta shadow-md">
                {error}
              </div>
            )}

            {hasil && <Search onChange={handleSearchChange} />}

            {hasil && (
              <div className="relative w-[90%] max-w-[860px] pb-5 mb-5 rounded overflow-auto h-[calc(100vh_-_440px)] mx-auto border transition-all duration-[.4s] dark:border-white/20 shadow-md flex flex-col no-scrollbar bg-gray-200 dark:bg-white/20">
                <h2 className="text-left font-bold text-sm md:text-lg mb-4 capitalize border-b border-black/20 p-4 dark:text-white sticky top-0 bg-transparent backdrop-blur-sm dark:border-white/20">
                  akun yang anda ikuti tetapi, tidak mengikuti anda balik
                  <p className="text-xs text-gray-500">total: {filterSearch.length} Akun</p>
                </h2>
                {filterSearch.length > 0 ? (
                  filterSearch.map((item) => (
                    <div
                      key={item}
                      className="font-semibold dark:text-white px-5 text-xs md:text-sm"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="w-full h-max flex-1 flex items-center justify-center font-semibold text-xl capitalize">
                    akun tidak ditemukan
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="font-jakarta text-xs sm:text-sm md:text-base flex h-14 items-center justify-between bg-transparent w-full px-10 transition-all duration-[.4s] dark:text-white">
            <p className="uppercase font-semibold">©2024 cfyanfy</p>
            <p>
              Site by{" "}
              <a
                href="https://www.instagram.com/_iky09_"
                target="_blank"
                className="hover:text-teal-500 font-bold"
              >
                Rikky Mahendra
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
