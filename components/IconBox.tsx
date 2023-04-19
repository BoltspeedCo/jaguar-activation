import Image from "next/image";
import Typography from "./Typography";
export default function IconBox({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <li className="flex flex-col">
      <div className=" bg-gradient-linear--black rounded-2xl lg:rounded-[2.2rem] aspect-video flex items-center justify-center mb-2 lg:mb-4 2xl:mb-6">
        <Image
          src={src}
          width={150}
          height={150}
          className="h-20 w-20 lg:h-24 lg:w-24 2xl:h-32 2xl:w-32"
          alt="jaguar"
        />
      </div>
      <div className=" mb-1 lg:mb-3 2xl:mb-5">
        <Typography variant="h4" className="">
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
    </li>
  );
}
