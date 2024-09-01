import React from "react";

const CircleText = () => {
  const text = "Badsha Laskar";
  const numLetters = text.length;
  return (
    <div className="circle-text">
      {text.split("").map((char, index) => {
        const isSpecialLetter = char === "B" || char === "L";
        return (
          <span
            key={index}
            className={isSpecialLetter ? "special-letter" : ""}
            style={{
              transform: `rotate(${
                (360 / numLetters) * index
              }deg) translateY(-80px)`,
              fontSize: isSpecialLetter ? "20px" : "14px", // Adjust the font size as needed
              color: isSpecialLetter
                ? char === "B"
                  ? "white"
                  : "white"
                : "white", // Colors for B and L
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default CircleText;
