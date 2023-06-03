import React, { useState } from "react";

const Map = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="py-[50px] w-full">
      <div className="container flex justify-center items-center flex-col">
        <h1
          className="font-primary text-3xl max-w-[600px] leading-relaxed"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          roadmap
        </h1>

        <div className="grid w-full gap-12 grid-cols-1 text-center lg:grid-cols-3 justify-between items-center mt-14">
          <div
            className="min-h-[320px]  bg-transparent hover:bg-secondary rounded-lg ring-1 ring-secondary flex justify-center items-center flex-col  py-10"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1 className="text-2xl font-primary">Tadpole Stage</h1>
            <ul className="flex flex-col list-decimal list-inside gap-3">
              <li className="text-center">
                Ribbiting Inception: Introduce Zoonji to the world, spreading
                the laughter and inviting the crypto community to join our
                adventure.
              </li>
              <li className="text-center">
                Wallet Development: Create a secure and user-friendly Zoonji
                wallet, ensuring easy access and storage of your tokens.
              </li>
            </ul>
          </div>
          <div
            className="min-h-[320px]  bg-transparent hover:bg-secondary rounded-lg ring-1 ring-secondary flex justify-center items-center flex-col py-10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="text-2xl font-primary"> Froglet Growth (Q4 2023)</h1>
            <ul className="flex flex-col list-decimal list-inside gap-3">
              <li className="text-center">
                Hilarious Marketing: Launch a creative marketing campaign
                featuring Zoonji, utilizing memes, funny videos, and social
                media engagement to amplify our reach.
              </li>
              <li className="text-center">
                Exchange Listings: Secure listings on major cryptocurrency
                exchanges, making zoonji accessible to a wider audience. Phase
                3: Froggy Fun (Q1 2024)
              </li>
            </ul>{" "}
          </div>
          <div
            className="min-h-[320px]  bg-transparent hover:bg-secondary rounded-lg ring-1 ring-secondary flex justify-center items-center flex-col py-10"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h1 className="text-2xl font-primary">
              {" "}
              Leaping Success (Q2 2024)
            </h1>
            <ul className="flex flex-col list-decimal list-inside gap-3">
              <li className="text-center">
                Strategic Partnerships: Collaborate with other meme tokens and
                like-minded projects to further the adoption of zoonji and
                spread laughter throughout the crypto world.
              </li>
              <li className="text-center">
                Continued Development: Constantly improve the zoonji ecosystem,
                incorporating community feedback and expanding our offerings to
                ensure a ribbiting experience for all.
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
