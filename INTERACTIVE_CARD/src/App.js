import React from "react";
import bgMobile from "./Assets/bg-main-mobile.png";
import bgDesktop from "./Assets/bg-main-desktop.png";
import logo from "./Assets/card-logo.svg";

function App() {
  return (
    <>
      <section>
        <div className="absolute -z-10 w-full">
          <picture>
            <source media="(min-width : 768px" srcSet={bgDesktop} />
            <img src={bgMobile} alt="" className="w-full md:w-1/3" />
          </picture>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="mt-10 mx-5 grid grid-cols-1">
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
                  <li className="text-white text-xl text-base lg:text-xl tracking-widest ">
                    00/00
                  </li>
                </ul>
              </div>
            </article>
            <article className="back-card relative lg:ml-20">
              <p className="absolute right-10 top-32 text-lg lg:text-xl text-white tracking-widest">
                123
              </p>
            </article>
          </div>
          <div>
            <form className="flex flex-col justify-center gap-8 max-w-lg lg:h-screen">
              <div>
                <label htmlFor="cardholder_name">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholder_name"
                  id="cardholder_name"
                  placeholder="e.g Yassine Touisse"
                  required
                />
              </div>
              <div>
                <label htmlFor="card_number">Card Number</label>
                <input
                  type="text"
                  name="card_number"
                  id="card_number"
                  placeholder="e.g 1213 4343 3435 6567"
                  maxLength={19}
                  required
                />
              </div>
              <article className="flex items-center justify-between gap-8">
                <div className="flex-1">
                  <label htmlFor="expiry_date">Exp. Date (MM/YY) </label>
                  <input
                    type="month"
                    name="expiry_date"
                    id="expiry_date"
                    placeholder="MM YY"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="number"
                    name="cvc"
                    id="cvc"
                    placeholder="e.g 123"
                    maxLength={3}
                    required
                  />
                </div>
              </article>
              <button type="submit" className="btn">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
