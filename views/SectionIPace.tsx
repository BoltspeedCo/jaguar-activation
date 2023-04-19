import Typography from "@/components/Typography";
import { sections, stats, range } from "@/data";
import { useInView, animated, useSprings } from "@react-spring/web";

import * as React from "react";
import Image from "next/image";
import { useEffect } from "react";
interface ISectionIPace {}
const SectionIPace = ({}: ISectionIPace) => {
  const [ref, inView] = useInView({
    amount: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    rootMargin: "-30% 0%",
  });
  const [springs, api] = useSprings(stats.length, (n) => ({
    from: { value: 0 },
    to: {
      value: parseFloat(stats[n].value),
    },

    config: { mass: 6, friction: 250, tension: 800 },
    immediate: false,
  }));
  useEffect(() => {
    if (inView) {
      springs.map((spring, i) => {
        spring.value.reset();
      });
    }
  }, [inView, api, springs]);
  //   console.log("IPACE REF", ref, inView, springs);
  return (
    <>
      <section
        ref={ref}
        id={sections["i-pace"]}
        className="section--benefits py-8 lg:py-12 2xl:py-16"
      >
        <div className="container--wide">
          <Typography variant="h2" className=" mb-4 lg:mb-8 2xl:mb-12">
            electric driving specifications
          </Typography>
          <ul className="flex gap-16 justify-between">
            {stats.map(({ title, description, unit, value }, i) => (
              <li key={i} className=" max-w-lg ">
                <Typography variant="h4" className="mb-2 lg:mb-4 2xl:mb-6">
                  {title}
                </Typography>
                <div className="flex items-end mb-1 lg:mb-3 2xl:mb-5">
                  {/* <Typography
                    variant="span"
                    className="text-4xl lg:text-6xl 2xl:text-9xl lg:leading-none"
                  >
                    {value}
                  </Typography> */}
                  <animated.span className="font-mono text-4xl lg:text-6xl 2xl:text-9xl lg:leading-none 2xl:leading-none">
                    {springs[i].value.to((v) => {
                      //   console.log("SPRING", v);
                      return parseFloat(value) % 1 != 0
                        ? v.toFixed(2).replace(/[.,]00$/, "")
                        : Math.floor(v);
                    })}
                  </animated.span>
                  <Typography variant="span" className="!text-xl mb-1 lg:mb-2">
                    {unit}
                  </Typography>
                </div>
                <Typography variant="p">
                  <span
                    className="block leading-normal"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className="container--padded py-8 lg:py-12 2xl:py-16">
          <ul className="grid lg:grid-cols-2 lg:gap-16">
            {range.map(({ id, src, title, features }, i) => (
              <li key={i} className="flex flex-col">
                <div className="relative h-96 lg:h-128 2xl:h-160 overflow-hidden rounded-t-2xl lg:rounded-t-[2.2rem] mb-2 lg:mb-4 2xl:mb-6">
                  <Image
                    src={src}
                    width={1920}
                    height={1080}
                    alt="jaguar"
                    className="h-full w-full object-cover absolute top-0 left-0"
                  />
                </div>
                <div className="lg:px-8">
                  <Typography
                    variant="h3"
                    className="mb-1 lg:mb-3 2xl:mb-5 text-xl"
                  >
                    {title}
                  </Typography>
                  <Typography variant="p">
                    <span
                      className="block leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: features }}
                    />
                  </Typography>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SectionIPace;
