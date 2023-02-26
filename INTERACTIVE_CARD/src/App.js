import React from "react";
import bgMobile from "./Assets/bg-main-mobile.png";
import bgDesktop from "./Assets/bg-main-desktop.png";
import logo from "./Assets/card-logo.svg";

function App() {
  return (
    <>
      <section>
        <div className="absolute -z-10">
          <picture>
            <source media="(min-width : 1024px" srcSet={bgDesktop} />
            <img src={bgMobile} alt="" />
          </picture>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="mt-10 mx-5 lg:grid lg:grid-cols-1 lg:gap-8 max-w-7xl mx-auto">
            <article className="front-card p-5 flex flex-col justify-between">
              <img src={logo} alt="" className="w-20 lg:w-28" />
              <div>
                <h2 className="text-white lg:text-3xl text-xl lg: mb-6 tracking-widest">
                  1234 5654 5653 5334
                </h2>
                <ul className="flex items-center justify-between">
                  <li className="text-white uppercase text-base lg:text-xl tracking-widest ">
                    Yassine Touisse
                  </li>
                  <li className="text-white text-xl text-base lg:text-xl tracking-widest ">00/00</li>
                </ul>
              </div>
            </article>
            <article className="back-card relative lg:ml-20">
              <p className="absolute right-10 top-32 text-lg lg:text-xl text-white tracking-widest">
                123
              </p>
            </article>
          </div>
          <div>form</div>
        </div>
      </section>
    </>
  );
}

export default App;
