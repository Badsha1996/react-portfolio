import { useProgress } from "@react-three/drei";
import { usePlay } from "../context/Play";
import CircleText from "./CircleText";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Badsha Laskar
            <span className="subtitle">
              Full Stack Developer and Software Engineer
            </span>
            <div className="spinner">
              <div className="spinner__image">
                <CircleText />
              </div>
            </div>
          </h1>
          <p className="intro__scroll">Scroll to move forward</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Get To Know me More
          </button>
          <div className="button-group">
            <button
              className="download-cv"
              onClick={() => {
                /* Add download functionality */
              }}
            >
              Download CV
            </button>
            <button
              className="contact-me"
              onClick={() => {
                /* Add contact functionality */
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
