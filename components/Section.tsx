import Typography from "./Typography";
import Image from "next/image";
export function SectionBanner({
  heading,
  subheading,
  imageUrl,
}: {
  heading: string;
  subheading?: string;
  imageUrl: string;
}) {
  return (
    <div className="border-y-white border-y">
      <div className="container--wide">
        <div className="flex flex-wrap">
          <div className="flex-1">
            <div className="py-8 lg:py-20 2xl:py-28">
              <Typography
                variant="h2"
                className="!font-alt lg:text-3xl 2xl:text-4xl "
              >
                {heading}
              </Typography>
              {subheading && (
                <Typography
                  variant="h2"
                  className="!font-body font-bold text-lg lg:text-xl 2xl:text-2xl  mt-1 lg:mt-2"
                >
                  {subheading}
                </Typography>
              )}
            </div>
          </div>
          <div className="lg:w-1/3 ">
            <div className="relative h-full">
              <Image
                src={imageUrl}
                width={600}
                height={400}
                className="w-full h-full object-cover absolute top-0 left-0"
                alt="how far can an electric car go"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionCaption({
  text,
  heading,
}: {
  heading?: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl lg:rounded-[2.2rem] bg-gradient-linear--black--tr p-2 lg:p-10 mt-3 lg:mt-5 2xl:mt-8 mb-5 lg:mb-10 2xl:mb-16">
      {heading && (
        <Typography
          variant="h3"
          className="font-alt !text-lg lg:!text-xl 2xl:!text-2xl mb-2 lg:mb-3 "
        >
          {heading}
        </Typography>
      )}
      <Typography variant="p" className="!text-lg lg:!text-xl ">
        <span
          className="block leading-tight"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </Typography>
    </div>
  );
}
