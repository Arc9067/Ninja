import React from "react";
import Logo from "../assets/logo.png";

const About = () => {
  return (
    <div className="py-[50px] w-full bg-secondary">
      <div className="container grid lg:grid-cols-2 items-center justify-between gap-10">
        <img src={Logo} alt="" className="mx-auto" />
        <div className="text-primary flex flex-col gap-3">
          <h1
            className="font-primary text-3xl max-w-[600px] leading-relaxed"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            about zoonji
          </h1>
          <p className="font-mono leading-relaxed" data-aos="fade-up">
            "Big welcome to Zoonji, the golden shinobi launched on the Ethereum
            blockchain. Within Zoonji holds a precious token supply hidden from
            Oda. Our young shinobi was able to retrieve a supply of “xxxxxxxx”
            tokens in the Sengoku period and is now offering to share some of
            his treasures⚜️🥷⚜️
          </p>
          <p className="font-mono leading-relaxed" data-aos="fade-up">
            The Sengoku period (1477 - 1573) marked a turning point in the
            history of Japan. During this period of wars and internal strife,
            the power of the shoguns was weakened and passed into the hands of
            the local lords. It is also a period of cultural evolution: Zen
            influences culture and Westerners arrive.
          </p>
          <p className="font-mono leading-relaxed" data-aos="fade-up">
            Oda Nobunaga was a Japanese daimyō and one of the leading figures of
            the Sengoku period. He is regarded as the first "Great Unifier" of
            Japan. Nobunaga was head of the very powerful Oda clan and launched
            a war against other daimyō to unify Japan in the 1560s.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
