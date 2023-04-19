import Image from "next/image";
import Typography from "./Typography";
import clsx from "clsx";
export default function ImageBox({
  src,
  title,
  description,
  aspect,
}: {
  src: string;
  title: string;
  aspect?: "aspect-[4/3]" | "aspect-video";
  description: string;
}) {
  return (
    <li className="flex flex-col overflow-hidden rounded-2xl lg:rounded-[2.2rem]">
      <div className={clsx("relative", aspect ?? "aspect-square")}>
        <Image
          src={src}
          width={500}
          height={500}
          alt="jaguar"
          className="h-full w-full object-cover absolute top-0 left-0"
        />
      </div>
      <div className="flex-1 bg-gradient-linear--black p-2 lg:pt-4 lg:pb-6 lg:px-7">
        <div className="flex items-center mb-1 lg:mb-4 ">
          <Typography variant="h4" className="ml-2">
            {title}
          </Typography>
        </div>
        <Typography variant="p">
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
