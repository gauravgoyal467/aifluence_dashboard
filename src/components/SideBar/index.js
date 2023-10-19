import React from "react";
import "./styles.css";
import home from "../../assets/images/home.png";
import bullhorn from "../../assets/images/bullhorn.png";
import down from "../../assets/images/down.png";
import file from "../../assets/images/file.png";
import add from "../../assets/images/add.png";
import search from "../../assets/images/Icon.png";
import list from "../../assets/images/list.png";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="logo">
        <img src={home} alt="home" />
        <h3>AIFLUENCE</h3>
      </div>
      <div className="itemList">
        <div className="campaign">
          <div className="item">
            <img src={bullhorn} alt="bullHorn" />
            <h3>Campaigns</h3>
          </div>
          <img className="arrow_img" src={down} alt="arrowDown" />
        </div>
        <div
          className="item"
          style={{
            backgroundColor: "var(--lightBlue)",
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
            color: "var(--blue)",
          }}
        >
          <img src={file} alt="File" />
          <h3>Accounts</h3>
        </div>
        <div className="item">
          <img src={add} alt="add" />
          <h3>Influencers</h3>
        </div>
        <div className="item">
          <img src={search} alt="Search" />
          <h3>Discovery</h3>
        </div>
        <div
          className="item"
          style={{
            backgroundColor: "var(--grey)",
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
            color: "var(--blue)",
          }}
        >
          <img src={list} alt="List" />
          <h3>Lists</h3>
        </div>
      </div>
      <div className="texts">
        <p>Terms of Services</p>
        <p>Privacy Policy</p>
        <p>FAQs</p>
      </div>
    </div>
  );
};

export default SideBar;
