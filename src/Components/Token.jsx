import React from "react";

const Token = () => {
  return (
    <section className="py-[50px] w-full bg-black">
      <div className="container flex flex-col justify-center items-center">
        <h1
          className="font-primary text-3xl max-w-[600px] leading-relaxed"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          tokenomics
        </h1>

        <div className="flex flex-wrap md:flex-row justify-between md:justify-start md:gap-10 gap-y-8 mt-12">
          <article
            className="h-28 w-28 bg-secondary text-xl flex justify-center items-center text-center text-primary font-primary"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2 className="">Name : ZOONJI </h2>
          </article>
          <article
            className="h-28 w-28 bg-secondary text-xl flex justify-center items-center text-center text-primary font-primary"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="">Ticker : ZNJI </h2>
          </article>
          <article
            className="h-28 w-28 bg-secondary text-xl flex justify-center items-center text-center text-primary font-primary"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <h2 className="">renounced </h2>
          </article>
          <article
            className="h-28 w-28 bg-secondary text-xl flex justify-center items-center text-center text-primary font-primary"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h2 className="">Supply 1BILLION </h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Token;
