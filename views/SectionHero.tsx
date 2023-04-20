import Typography from "@/components/Typography";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import * as React from "react";
import ReactPlayer from "react-player";

interface ISectionHero {}

const SectionHero = ({}: ISectionHero) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined" && !mounted) {
      setMounted(true);
    }
  }, [mounted]);
  return (
    <section
      id="hero"
      className="section--hero mb-8 lg:mb-12 2xl:mb-16 p-2 lg:p-4"
    >
      <div className="relative w-full overflow-hidden h-[calc(100vh-128px)]">
        {mounted && (
          <ReactPlayer
            url="/videos/hero-video.mp4"
            id="hero-video"
            className="absolute "
            width="100%"
            height="100%"
            muted={true}
            loop={true}
            playing={true}
            //   controls={true}
            download={false}
            pip={false}
          />
        )}
        <div className="absolute bottom-0 w-full flex-1 flex flex-col justify-center  items-center">
          <Link
            href="#i-pace"
            className="flex space-x-4 p-2 items-center mb-2 lg:mb-4 group"
            scroll={false}
          >
            <ChevronDownIcon className="h-12 w-12 text-white  group-hover:translate-y-1 transition-transform duration-500 group-hover:text-gray-300" />
            <Typography
              variant="span"
              className="uppercase font-heading group-hover:text-gray-300"
            >
              scroll to learn more
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
