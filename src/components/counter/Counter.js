import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [num, setnum] = useState(0);
  const incr = () => {
    setnum(num + 1);
  };
  const res = () => {
    setnum(0);
  };

  let result = "#000";
  const [cl, setCl] = useState("#fff");
  let [home, sethome] = useState("black");
  return (
    <>
      <div className="counter" style={{ background: cl }}>
        <div className="number">
          <p style={{ color: home }}>{num}</p>
        </div>
        <div className="incr" onClick={incr} style={{ background: home }}></div>
        <div onClick={res} className="reset" style={{ background: home }}></div>
      </div>
      <div className="background">
        <div
          className="blue div"
          onClick={() => {
            setCl("blue");
            sethome("#fff");
          }}
        ></div>
        <div
          className="yellow div"
          onClick={() => {
            setCl("yellow");
            sethome("#333");
          }}
        ></div>
        <div
          className="black div"
          onClick={() => {
            setCl("#000");
            sethome("#fff");
          }}
        ></div>
        <div
          className="white div"
          onClick={() => {
            setCl("#fff");
            sethome("#000");
          }}
        ></div>
        <div
          className="red div"
          onClick={() => {
            sethome("#fff");

            setCl("red");
          }}
        ></div>
      </div>
    </>
  );
}

export default Counter;
