import Border from "@/components/ui/border/Border";
import "./style.scss";

import profile from "@/../public/images/profile/sahil-hero.jpg";
import Image from "next/image";
import ImageSize from "@/utils/imageSize";

const Hero = () => {
  return (
    <section id="homeHero">
      <div className="left">
        <Border>Junior</Border>
        <h1>Front-End Developer</h1>
        <div className="desc">
          <p>
            Hi there!
            <br />
            My name is Bohdan and I'm 24 years old ambitious junior front-end
            developer. Now I'm looking for a new position and new challenges.
          </p>
          <p>
            My goal is to learn something new every day, improve my skills and
            solve users and buisness issues. I can quickly analyze problems and
            solve them both independently and in a team.
          </p>
        </div>
      </div>
      <div className="right">
        <div className="img-cont">
          <Image
            sizes={ImageSize.cardSize}
            fill
            src={profile}
            alt="sahil satpute profile image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
