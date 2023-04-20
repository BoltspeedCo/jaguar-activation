import IconBox from "@/components/IconBox";
import { SectionBanner, SectionCaption } from "@/components/Section";
import { sections, lowCost } from "@/data";
import * as React from "react";

interface ISectionCostOfOwnership {}

const SectionCostOfOwnership = ({}: ISectionCostOfOwnership) => {
  return (
    <section
      id={sections["cost-of-ownership"]}
      className="section--range py-8 lg:py-12 2xl:py-16"
    >
      {/* section banner*/}
      <SectionBanner
        heading="Low cost of ownership"
        imageUrl="/images/banner-low-cost.png"
      />
      {/* section caption */}
      <div className="container--wide pt-5 lg:pt-10 2xl:pt-13">
        <SectionCaption
          heading="Plug into day-to-day savings."
          text={`Driving towards a cleaner, sustainable future not only helps to protect our planet, it can be kinder on your pockets too.<br/>
            Explore the financial factors that make the move to electric even more worth your while.`}
        />
        <div className="max-w-5xl mx-auto">
          <ul className="grid grid-cols-1 lg:grid-cols-1 lg:gap-8 2xl:gap-12 max-w-7xl mx-auto">
            {lowCost.map(({ id, src, title, description }, i) => (
              <IconBox
                key={i}
                orientation="landscape"
                src={src}
                title={title}
                description={description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionCostOfOwnership;
