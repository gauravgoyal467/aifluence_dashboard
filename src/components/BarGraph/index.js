import React from "react";
import "./styles.css";
import bar1 from "../../assets/images/Bar1.png";
import bar2 from "../../assets/images/Bar2.png";
import bar3 from "../../assets/images/Bar3.png";
import bar4 from "../../assets/images/Bar4.png";

const BarGraph = () => {
  return (
    <div className="barGraph">
      <div className="individualBar">
        <img src={bar1} alt="bar1" />
        <div className="para">
          <p>&lt;500</p>
          <p>followings</p>
        </div>
      </div>
      <div className="individualBar">
        <img src={bar2} alt="bar1" />
        <div className="para">
          <p>500-1k</p>
          <p>followings</p>
        </div>
      </div>
      <div className="individualBar">
        <img src={bar3} alt="bar1" />
        <div className="para">
          <p>1k-1.5k</p>
          <p>followings</p>
        </div>
      </div>
      <div className="individualBar">
        <img src={bar4} alt="bar1" />
        <div className="para">
          <p>&gt;1.5k</p>
          <p>followings</p>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
