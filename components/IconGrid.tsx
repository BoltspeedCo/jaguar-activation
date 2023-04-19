import Typography from "./Typography";
import Image from "next/image";
export default function IconGrid({
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
      <div className="flex flex-wrap lg:space-x-8 2xl:space-x-12">
        <div className="">
          <Image
            src={src}
            width={150}
            height={150}
            className="h-12 w-12 lg:h-16 lg:w-16 2xl:h-24 2xl:w-24"
            alt="jaguar"
          />
        </div>
        <div className="flex-1">
          <Typography variant="h4" className="mb-1 lg:mb-3 2xl:mb-5">
            {title}
          </Typography>
          <Typography variant="p">
            <span
              className="block leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </Typography>
        </div>
      </div>
    </li>
  );
}
