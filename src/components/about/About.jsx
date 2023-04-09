import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         International Design Awards goes to Mr.Aditya Kumar.
        </p>
        <p className="a-desc">
        My name is Mr. Aditya Kumar, and I am a full-stack web developer. I created this website using React JS and Node JS. I graduated from Sri Gadadhar Acharya Janta College with a B.Sc-IT degree and a honors paper in Information Technology.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Web Design Awards 2023</h4>
            <p className="a-award-desc">
              I love my profession, My profession is my passion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
