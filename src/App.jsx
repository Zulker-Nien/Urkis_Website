import React from "react";
import companyLogo from "./Zulker_Logo.png";
import "./styles.scss";
import LocomotiveScroll from "locomotive-scroll";
const Locoscroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: {
    smooth: true,
  },
  //reloadOnContextChange: true
});
const App = () => {
  
  return (
    <>
      <div className="ZulkerLogo">
        <img src={companyLogo} alt="BigCo Inc. logo" />
        <div data-scroll-container>
          <section data-scroll-section="">
            <p>Scroll</p>
            <span class="lerp-wrap" data-scroll="">
              <span
                data-scroll=""
                data-scroll-delay="0.2"
                data-scroll-speed="6"
              >
                F
              </span>
              <span
                data-scroll=""
                data-scroll-delay="0.3"
                data-scroll-speed="6"
              >
                I
              </span>
              <span
                data-scroll=""
                data-scroll-delay="0.4"
                data-scroll-speed="6"
              >
                R
              </span>
              <span
                data-scroll=""
                data-scroll-delay="0.5"
                data-scroll-speed="6"
              >
                S
              </span>
              <span
                data-scroll=""
                data-scroll-delay="0.6"
                data-scroll-speed="6"
              >
                T
              </span>
            </span>
          </section>
          <section data-scroll-section="">
            <span class="lerp-wrap" data-scroll="">
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.7"
                data-scroll-speed="6"
              >
                S
              </span>
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.8"
                data-scroll-speed="6"
              >
                E
              </span>
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.9"
                data-scroll-speed="6"
              >
                C
              </span>
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.10"
                data-scroll-speed="6"
              >
                O
              </span>
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.08"
                data-scroll-speed="6"
              >
                N
              </span>
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.06"
                data-scroll-speed="6"
              >
                D
              </span>
            </span>
          </section>
          <section data-scroll-section="">
            <span class="lerp-wrap" data-scroll="">
              <span
                data-scroll=""
                data-scroll-delay="0.18"
                data-scroll-speed="-2"
              >
                T
              </span>
              <span
                data-scroll=""
                data-scroll-delay="0.14"
                data-scroll-speed="-2"
              >
                H
              </span>
              <span
                data-scroll=""
                data-scroll-delay="0.12"
                data-scroll-speed="-2"
              >
                I
              </span>
              <span
                data-scroll=""
                data-scroll-delay="0.1"
                data-scroll-speed="-2"
              >
                R
              </span>
              <span
                data-scroll=""
                data-scroll-delay="0.08"
                data-scroll-speed="-2"
              >
                D
              </span>
            </span>
          </section>
          <section data-scroll-section="">
            <span class="lerp-wrap" data-scroll="">
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.18"
                data-scroll-speed="-6"
              >
                L
              </span>
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.14"
                data-scroll-speed="-6"
              >
                I
              </span>
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.12"
                data-scroll-speed="-6"
              >
                N
              </span>
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.1"
                data-scroll-speed="-6"
              >
                U
              </span>
              <span
                data-scroll=""
                data-scroll-direction="horizontal"
                data-scroll-delay="0.08"
                data-scroll-speed="-6"
              >
                X
              </span>
            </span>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
