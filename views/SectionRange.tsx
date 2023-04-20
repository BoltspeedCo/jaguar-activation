import ImageBox from "@/components/ImageBox";
import { SectionBanner, SectionCaption } from "@/components/Section";
import { sections, features } from "@/data";
// import { features } from "@/data";
import * as React from "react";

interface ISectionRange {}

const SectionRange = ({}: ISectionRange) => {
  return (
    <section
      id={sections.range}
      className="section--range py-8 lg:py-12 2xl:py-16"
    >
      {/* section banner*/}
      <SectionBanner
        heading="how far can an electric car go?"
        imageUrl="/images/banner-how-far.png"
      />
      {/* section caption */}
      <div className="container--wide py-5 lg:py-10 2xl:py-13">
        <SectionCaption
          text={`With a battery range of up to 446km*, one single charge would be enough for Jaguar I-PACE to cover most drivers\u2019<br/> average weekly commutes.`}
        />
        <ul className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 2xl:gap-8">
          {features.map(({ id, src, title, description }, i) => (
            <ImageBox
              key={i}
              src={src}
              title={title}
              description={description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionRange;
