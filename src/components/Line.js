import { useState } from "react";

const Line = ({ title, symbol }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(symbol);
      }}
      className="line"
      onMouseEnter={(e) => {
        setIsOn(true);
        console.log(e);
      }}
      onMouseLeave={() => {
        setIsOn(false);
      }}
    >
      <p>
        {symbol} {title}
      </p>
      {isOn === true && <p>Click to copy</p>}
    </div>
  );
};

export default Line;
