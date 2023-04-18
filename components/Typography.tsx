import * as React from "react";
import { clsx } from "clsx";
interface ITypography {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  className?: string;
}
type defaultClassesType = {
  [key in ITypography["variant"]]: string;
};
const defaultClasses: defaultClassesType = {
  h1: "text-4xl  font-heading",
  h2: "text-3xl  font-heading",
  h3: "text-2xl  font-heading",
  h4: "text-xl font-heading",
  h5: "text-lg font-heading",
  h6: "text-base  font-heading",
  p: " text-white/70",
  span: "text-base block",
};

const Typography = ({ variant = "h1", className, children }: ITypography) => {
  //create custom jsx element
  const CustomTag = variant as keyof JSX.IntrinsicElements;

  return (
    <>
      <CustomTag className={clsx(defaultClasses[variant], className)}>
        {children}
      </CustomTag>
    </>
  );
};

export default Typography;
