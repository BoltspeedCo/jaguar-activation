import ImageBox from "@/components/ImageBox";
import { SectionBanner, SectionCaption } from "@/components/Section";
import Typography from "@/components/Typography";
import { sections, charging } from "@/data";
import * as React from "react";

interface ISectionPublicCharging {}

const SectionPublicCharging = ({}: ISectionPublicCharging) => {
  return (
    <section
      id={sections["charging"]}
      className="section--range py-8 lg:py-12 2xl:py-16"
    >
      {/* section banner*/}
      <SectionBanner
        heading="electric car public charging"
        subheading=""
        imageUrl="/images/banner-public-charging.png"
      />
      {/* section caption */}
      <div className="container--wide py-5 lg:py-10 2xl:py-13 ">
        <SectionCaption
          heading="Your guide to charging away from home."
          text={`Plugging in at home remains the most effortless way to fully charge your all-electric car every day. But with more public charging points than ever on our roads \u2013 from remote farm shops to motorway services \u2013 it\u2019s easier than ever to charge on the go.`}
        />
        <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 2xl:gap-8 ">
          {charging.map(({ id, src, title, description }, i) => (
            <ImageBox
              key={i}
              src={src}
              aspect="aspect-[4/3]"
              title={title}
              description={description}
            />
          ))}
        </ul>
      </div>
      <div className="container--padded !hidden mb-t lg:mt-8 2xl:mt-12">
        <div className=" bg-gradient-linear--black--tr rounded-2xl lg:rounded-[2.2rem] py-5 lg:py-10 px-2 lg:px-16 2xl:px-20">
          <Typography
            variant="h3"
            className="text-center mb-2 lg:mb-5 2xl:mb-8"
          >
            SIGNING UP TO PUBLIC CHARGING NETWORKS
          </Typography>
          <Typography
            variant="p"
            className="text-center !text-lg lg:!text-xl 2xl:!text-2xl"
          >
            <span
              className="block leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: `Although some charge points are free to use, the majority are accessible via convenient payment methods, including mobile apps, membership accounts, or a contactless bank card. The cost of charging in public will typically be a combination of an initial connection fee, charging time (cost per hour) and/or the amount of energy used (cost per kWh).
                  <br/><br/>
                  We recommend familiarising yourself with more than one network provider to ensure the best coverage and payment methods for your preferred routes – especially when travelling.`,
              }}
            />
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default SectionPublicCharging;
