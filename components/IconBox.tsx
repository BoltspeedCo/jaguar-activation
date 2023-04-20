import Image from "next/image";
import Typography from "./Typography";
import clsx from "clsx";
export default function IconBox({
  src,
  title,
  description,
  orientation = "portrait",
}: {
  src: string;
  orientation?: "portrait" | "landscape";
  title: string;
  description: string;
}) {
  return (
    <li
      className={clsx(
        "flex flex-col",
        orientation === "portrait"
          ? "lg:flex-col "
          : "lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center"
      )}
    >
      <div className="col-span-2 bg-gradient-linear--black rounded-2xl lg:rounded-[2.2rem] py-6 lg:py-10  2xl:py-12  flex items-center justify-center mb-2 lg:mb-4 2xl:mb-6">
        <Image
          src={src}
          width={150}
          height={150}
          className="h-16 w-16 object-contain lg:h-20 lg:w-20 2xl:h-24 2xl:w-24 "
          alt={title}
        />
      </div>
      <div className=" col-span-3">
        <div className=" mb-1 lg:mb-3 2xl:mb-5">
          <Typography variant="h4" className="">
            {title}
          </Typography>
        </div>
        <Typography variant="p" className="mb-1 lg:mb-3 2xl:mb-5">
          <span
            className="block leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Typography>
      </div>
    </li>
  );
}
