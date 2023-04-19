import IconBox from "@/components/IconBox";
import Typography from "@/components/Typography";
import { sections, benefits } from "@/data";
import * as React from "react";

interface ISectionBenefits {}

const SectionBenefits = ({}: ISectionBenefits) => {
  return (
    <section
      id={sections.benefits}
      className="section--benefits py-8 lg:py-12 2xl:py-16"
    >
      <div className="container--wide">
        <Typography variant="h2" className="text-center mb-4 lg:mb-8 2xl:mb-12">
          THE KEY BENEFITS of GOING ELECTRIC
        </Typography>
        <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {benefits.map(({ id, src, title, description }, i) => (
            <IconBox
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

export default SectionBenefits;
