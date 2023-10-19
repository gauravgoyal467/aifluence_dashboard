import React from "react";
import "./styles.css";
import Profile from "../Profile";
import setting from "../../assets/images/Settings.png";
import notification from "../../assets/images/Notification.png";
import profile from "../../assets/images/Profile.png";
import message from "../../assets/images/message.png";
import twitterGraph from "../../assets/images/twitter%.png";
import facebookOutline from "../../assets/images/fb-outline.png";
import facebookBold from "../../assets/images/FaceBookBold.png";
import danger from "../../assets/images/danger.png";
import instagramSquare from "../../assets/images/InstagramSquare.png";
import twitterSquare from "../../assets/images/TwitterSquare.png";
import bigLogoFb from "../../assets/images/facebookBig.png";
import bigLogoTwitter from "../../assets/images/twitterBig.png";
import bigLogoInstagram from "../../assets/images/instagramBig.png";
import DonutImage1 from "../../assets/images/DonutChart1.png";
import DonutImage2 from "../../assets/images/DonutChart2.png";
import BrandList from "../../assets/images/BrandList.png";
import info from "../../assets/images/info.png"
import SocialGroup from "../SocialGroup";
import DonutGraph from "../DonutGraph";
import Card from "../Card";
import BarGraph from "../BarGraph";
import Capsule from "../Capsule";

const RightSection = () => {
  return (
    <div className="rightSection">
      {/* profile section */}
      <div className="profile">
        <div className="right-icons">
          <img src={message} alt="message" />
          <img src={notification} alt="notification" />
          <img src={setting} alt="setting" />
          <img src={profile} alt="profile" />
        </div>
        <Profile />
      </div>

      {/* popularity section */}
      <section className="popularity">
        <div className="socialData influence">
          <p>INFLUENCE</p>
          <h4>
            88<span>/100</span>
          </h4>
          <div className="insta-fb">
            <img src={twitterGraph} alt="twitter" />
            <div>
              <img src={facebookOutline} alt="O" />
              <img src={facebookBold} alt="fb" className="fbRelative" />
            </div>
          </div>
        </div>
        <div className="socialData">
          <p>ENGAGEMENT</p>
          <h4>
            4.5% <img src={danger} alt="" />
            <span>vs 9% average</span>
          </h4>
          <div className="insta-fb">
            <SocialGroup text={"2.3%"} iconImage={twitterSquare} />
            <SocialGroup text={"2.3%"} iconImage={facebookBold} />
            <SocialGroup text={"2.3%"} iconImage={instagramSquare} />
          </div>
        </div>
        <div className="socialData donutGraph">
          <DonutGraph
            image={DonutImage1}
            textOne={"FaceBook"}
            text2={"Twitter"}
            text3={"Instagram"}
            num1={"3K"}
            num2={"7.8k"}
            num3={"9.3k"}
          />
        </div>
      </section>

      {/* icon group */}
      <div className="IconsGroup">
        <img src={bigLogoInstagram} alt="instagram" />
        <img src={bigLogoTwitter} alt="twitter" />
        <img src={bigLogoFb} alt="fb" />
      </div>

      {/* tags Group */}
      <div className="tags">
        <h4>OVERVIEW</h4>
        <h4>AUDIENCE</h4>
        <h4>CONTENT</h4>
        <h4>MANAGE</h4>
      </div>

      {/* first row card */}
      <section className="firstCardRow">
        <div className="socialData">
          <p>INSIGHTS</p>
          <h4>4.5%</h4>
          <div className="insight-data">
            <Capsule text={"Avg Views: 3.3k"}/>
            <Capsule text={"Avg Comments: 9"}/>
            <Capsule text={"Avg Likes: 213"}/>
            <Capsule text={"Avg Views: 3.3k"}/>
            <Capsule text={"Avg Views: 3.3k"}/> 
          </div>
        </div>
        <div className="socialData single-data">
          <p>FOLLOWERS CREDIBILITY <img src={info} alt="" /></p>
          <h3>83.64%</h3>
        </div>
        <div className="socialData ">
          <p>BRAND AFFINITY</p>
          <img src={BrandList} alt="" />
        </div>
      </section>

      {/* second row card */}
      <div className="cardsFirstRow">
        <Card
          title={"INFLUENCER INTEREST"}
          list={[
            "Friends, Family & Relationships",
            "Friends, Family & Relationships",
            "Friends, Family & Relationships",
            "Friends, Family & Relationships",
            "Friends, Family & Relationships",
          ]}
        />
        <Card
          title={"POST TOPICS"}
          list={[
            "raghudixit",
            "bangalore",
            "gokarnabeach",
            "magictrics",
            "legomovie",
          ]}
        />
        <Card
          title={"POST TOPICS"}
          list={[
            "raghudixit",
            "bangalore",
            "gokarnabeach",
            "magictrics",
            "legomovie",
          ]}
        />
      </div>

      {/* third row card */}
      <div className="cardsSecondRow">
        <h3>AUDIENCE</h3>
        <div className="secondRow">
          <Card
            title={"REACHABILITY"}
            list={[
              "Friends, Family & Relationships",
              "Friends, Family & Relationships",
              "Friends, Family & Relationships",
              "Friends, Family & Relationships",
              "Friends, Family & Relationships",
            ]}
          />
          <div className="chartBar">
          <h3>REACHABILITY</h3>
            <BarGraph />
          </div>
          <div className="secondDonut">
            <h3>GENDER DISTRIBUTION</h3>
            <div className="chartDonut">
              <DonutGraph
                image={DonutImage2}
                textOne={"Unknown"}
                text2={"Male"}
                text3={"Female"}
                num1={"29%"}
                num2={"38%"}
                num3={"33%"}
              />
            </div>
          </div>
        </div>
      </div>

      {/* last heading */}
      <h3 style={{padding:"0.8rem",fontWeight:"600",fontFamily: 'Poppins'}}>CONTENT</h3>
    </div>
  );
};

export default RightSection;
