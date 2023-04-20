import IconBox from "@/components/IconBox";
import IconGrid from "@/components/IconGrid";
import { SectionBanner, SectionCaption } from "@/components/Section";
import Typography from "@/components/Typography";
import { homeCharging, installation } from "@/data";
import * as React from "react";

interface ISectionHomeCharging {}

const SectionHomeCharging = ({}: ISectionHomeCharging) => {
  return (
    <section className="section--range py-8 lg:py-12 2xl:py-16">
      {/* section banner*/}
      <SectionBanner
        heading="electric car home charging"
        subheading=""
        imageUrl="/images/banner-home-charging.png"
      />
      {/* section caption */}
      <div className="container--wide pt-5 lg:pt-10 2xl:pt-13">
        <SectionCaption
          heading="Start every day with a full charge."
          text={`When it comes to charging your Jaguar, there’s no place like home. Simply plug in your vehicle on an evening – just as you would your mobile phone – and by morning you can be fully charged and ready to go.`}
        />
        <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 2xl:gap-16 ">
          {homeCharging.map(({ id, src, title, description }, i) => (
            <IconBox
              key={i}
              src={src}
              title={title}
              description={description}
            />
          ))}
        </ul>
        <div className="!hidden">
          <Typography
            variant="h3"
            className="text-center lg:text-2xl 2xl:text-3xl mt-5 lg:mt-10 2xl:mt-14 mb-3 lg:mb-6 2xl:mb-10"
          >
            ARRANGING YOUR HOME CHARGER INSTALLATION
          </Typography>
          <div className=" bg-gradient-linear--black rounded-2xl lg:rounded-[2.2rem] p-4 lg:p-8 2xl:p-12">
            <ul className="grid lg:grid-cols-2 lg:gap-16 2xl:gap-20">
              {installation.map(({ id, src, title, description }, i) => (
                <IconGrid
                  key={i}
                  src={src}
                  title={title}
                  description={description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHomeCharging;
