import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Typography from "@/components/Typography";
import { clsx } from "clsx";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import axios from "axios";
type menuType =
  | "i-pace"
  | "benefits"
  | "range"
  | "cost-of-ownership"
  | "charging"
  | "register-interest";
interface IMenu {
  id: menuType;
  // [key in menuType]: menuType;
}
// interface ISection {
//   [key in menuType]: menuType;
// }
const sections = {
  "i-pace": "i-pace",
  benefits: "benefits",
  range: "range",
  "cost-of-ownership": "cost-of-ownership",
  charging: "charging",
  "register-interest": "register-interest",
} as const;

const stats = [
  {
    title: "range (up to)",
    value: "446",
    unit: "km±",
    description: `Drive up to 446km on a full charge*.<br/>
    <small>Real world figures may vary depending on your driving style.</small>`,
  },
  {
    title: "charging time",
    value: "12.75",
    unit: "hours*",
    description: `Perfect for charging at home overnight.<br/>
    <small>*Time based on using a 7kW AC home charger.</small>`,
  },
  {
    title: "emissions",
    value: "0",
    unit: "CO2",
    description: "Enjoy zero tailpipe emissions.",
  },
  {
    title: "acceleration",
    value: "4.8",
    unit: "seconds",
    description: "Capable of 0-100hm/h in 4.8 secs.",
  },
];

const range = [
  {
    id: "HSE",
    src: "/images/HSE.png",
    title: "JAGUAR I-PACE R-DYNAMIC HSE",
    features: `\u2013 Matrix LED headlights with signature DRL<br/>
    \u2013 20" Style 5068, Diamond Turned with Gloss Dark Grey contrast wheels<br/>
    \u2013 Fixed panoramic roof<br/>
    \u2013 16-way heated and cooled electric driver memory front seats<br/>
    \u2013 MeridianTM Sound System`,
  },
  {
    id: "SE",
    src: "/images/SE.png",
    title: "JAGUAR I-PACE R-DYNAMIC SE",
    features: `\u2013 Premium LED headlights with signature DRL<br/>
    \u2013 20" Style 6007 Diamond Turned wheels<br/>
    \u2013 Premium cabin lighting<br/>
    \u2013 Lower Touchscreen<br/>
    \u2013 Wireless device charging`,
  },
];

const benefits = [
  {
    id: "tick",
    src: "/images/tick.png",
    title: "easy and convenient",
    description:
      "Wit the majority of electric car charging done from home, you can more efficiently plan your time around the things you want to do. Simply recharge on an evening, and by the morning you\u2019ll be ready to go.",
  },
  {
    id: "co2",
    src: "/images/co2.png",
    title: "ZERO TAILPIPE EMISSIONS",
    description:
      "Vehicles powered solely by a battery are able to achieve maximum power with zero tailpipe emissions. And with more renewable resources added to the National Grid all the time, electric car energy gets cleaner every year.",
  },
  {
    id: "tick",
    src: "/images/drive.png",
    title: "A DISTINCTIVE DRIVE",
    description:
      "Electric technology is not only incredible quiet, it\u2019s also able to deliver instant acceleration with no lag and no gearshift interruptions. This means a distinctively smooth and responsive driving experience at all speeds.",
  },
];

const features = [
  {
    id: "brake",
    src: "/images/feature-1.png",
    title: "Brake Regeneration",
    description:
      "Once you lift your foot off the accelerator, an intelligent regenerative braking system is activated. This comfortably slows the vehicle while converting the power generated to optimise the battery\u2019s range. Applying the brake pedal increases the amount of power harvested.",
  },
  {
    id: "drive",
    src: "/images/feature-2.png",
    title: "DRIVING STYLE",
    description:
      "One of the biggest impacts on range is the driver. Travelling at a steady pace – rather than frequent, heavy acceleration – will help an electric car preserve range. This can also reduce your reliance on hard braking which consumes more energy than gentler braking.",
  },
  {
    id: "pre",
    src: "/images/feature-3.png",
    title: "pre-conditioning",
    description:
      "Plugging your vehicle into a charged source will pre-condition the battery to its optimum temperature once charging has completed. This assists the vehicle in achieving maximum range and performance prior to your departure.",
  },
  {
    id: "eco",
    src: "/images/feature-4.png",
    title: "eco mode",
    description:
      "Eco Mode helps preserve the vehicle\u2019s range by making subtle changes to cabin temperature, air recirculation and to a number of the vehicle\u2019s other features. You can override these changes by normal operation of each feature or via the menu settings.",
  },
];

const lowCost = [
  {
    id: "electricity",
    src: "/images/electricity.png",
    title: "ELECTRICITY IS CHEAPER PER KM",
    description:
      "The cost of electricity is lower per kilometre than petrol or diesel, making all-electric cars cheaper to run on a daily basis.",
  },
  {
    id: "lower-cost",
    src: "/images/lower-cost.png",
    title: "LOWER SERVICING COSTS",
    description:
      "As all-electric powertrains have fewer moving parts than a petrol or diesel engine, and regenerative braking capabilities are relatively gentler on brakes and tyres, servicing costs are lower.",
  },
];

const charging = [
  {
    id: "1",
    src: "/images/charging-1.png",
    title: "AC CHARGING SPEEDS AT YOUR DESTINATION*",
    description:
      "Up to 35km of range from 60 minutes for all-electric Jaguar I-PACE. Jaguar all-electric cars come with an AC Public/Wall Box charging cable as standard.",
  },
  {
    id: "2",
    src: "/images/charging-2.png",
    title: "DC CHARGING SPEEDS ON MOTORWAYS AND PUBLIC ROADS*",
    description:
      "In all-electric Jaguar I-PACE, a 50kW rapid DC charging point will deliver up to 62km of range from 15 minutes. A 100kW rapid DC charging point will deliver up to 127km of range from 15 minutes.",
  },
  {
    id: "3",
    src: "/images/charging-3.png",
    title: "HOW TO FIND, ACCESS AND PAY FOR CHARGING",
    description:
      "Between your vehicle\u2019s navigation system1 and the latest apps from your local charging providers, it couldn\u2019t be simpler to find the thousands of public charging points across the country.",
  },
];

const homeCharging = [
  {
    id: "1",
    src: "/images/save-1.png",
    title: "wake up ready to go",
    description:
      "A home charger will charge an all-electric car overnight and deliver up to 35km1 of range from 60 minutes using a 7kW supply.",
  },
  {
    id: "2",
    src: "/images/save-2.png",
    title: "save money every month",
    description:
      "Charging at home is not only convenient, the cost of electricity is less per kilometre compared to petrol and diesel. And you can reduce this further with an off-peak electricity tariff.",
  },
  {
    id: "3",
    src: "/images/save-3.png",
    title: "Quality assured",
    description:
      "Home chargers from industry-approved providers are designed to be used in all weather conditions.",
  },
];

const installation = [
  {
    id: "1",
    src: "/images/step-1.png",
    title: "1. CHOOSE YOUR PROVIDER",
    description:
      "To start your home charger installation process, choose your home charging provider. Your Jaguar Retailer can help you get started.",
  },
  {
    id: "2",
    src: "/images/step-2.png",
    title: "2. SUITABILITY SURVEY",
    description:
      "To start your home charger installation process, choose your home charging provider. Your Jaguar Retailer can help you get started.",
  },
  {
    id: "3",
    src: "/images/step-3.png",
    title: "3. ARRANGE YOUR INSTALLATION",
    description:
      "Agree an installation date with your chosen provider that is before the delivery date of your vehicle. There are various Home Chargers for your vehicle, please enquire with your provider for which option is best suited for you.",
  },
  {
    id: "4",
    src: "/images/step-4.png",
    title: "4. INSTALLATION AND DEMO",
    description:
      "Once your installation date comes around, your chosen provider will install your wall box and talk you through the basics of charging.",
  },
];

const InputGroup = ({
  name,
  label,
  type,
  placeholder,
  required,
}: {
  required?: boolean;
  placeholder?: string;
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  // console.log("NAME", name);
  return (
    <div>
      <label htmlFor={name} className="block text-lg font-medium leading-6 ">
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={type ?? "text"}
          {...register(name, {
            required,
            pattern:
              type === "email"
                ? /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                : undefined,
          })}
          className="block w-full rounded-md text-2xl border-0 py-1.5 pr-10 lg:py-3 lg:px-4 bg-[#3c3c3c]    focus:ring-gray-500 "
          placeholder={placeholder}
          // aria-invalid="true"
          // aria-describedby="email-error"
        />
        {errors[name] && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {errors[name]?.type === "required" && (
        <p className="mt-2 text-base text-red-600" id="email-error">
          Required.
        </p>
      )}
      {errors[name]?.type === "pattern" && (
        <p className="mt-2 text-base text-red-600" id="email-error">
          Invalid email address
        </p>
      )}
    </div>
  );
};
function InputCheckbox({
  name,
  label,
  required,
}: {
  required?: boolean;
  label: string;
  name: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          aria-describedby="aggreement-description"
          type="checkbox"
          {...(register(name), { required })}
          className="h-4 w-4 lg:h-8 lg:w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor={name} className="font-medium text-xl">
          {label}
        </label>
      </div>
    </div>
  );
}
function SectionBanner({
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
                className="font-alt lg:text-3xl 2xl:text-4xl"
              >
                {heading}
              </Typography>
              <Typography
                variant="h2"
                className="font-body font-bold text-lg lg:text-xl 2xl:text-2xl  "
              >
                {subheading}
              </Typography>
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

function SectionCaption({ text, heading }: { heading?: string; text: string }) {
  return (
    <div className="rounded-2xl lg:rounded-[2.2rem] bg-gradient-linear--black--tr p-2 lg:p-10 mt-3 lg:mt-5 2xl:mt-8 mb-5 lg:mb-10 2xl:mb-16">
      {heading && (
        <Typography
          variant="h3"
          className="font-alt !text-xl lg:!text-2xl 2xl:!text-3xl mb-1 lg:mb-2 "
        >
          {heading}
        </Typography>
      )}
      <Typography variant="p" className="!text-lg lg:!text-xl 2xl:!text-2xl">
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

function IconBox({
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

function IconGrid({
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
function ImageBox({
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

function SuccessMessage() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 3000);
  }, []);
  if (!display) return null;

  return (
    <div className="text-green-500 text-sm mt-2">
      Thank you for your interest. We will be in touch soon.
    </div>
  );
}

export default function Home() {
  const sectionsRef = useRef(null);
  const methods = useForm();
  // const [csvDb, setDb] = useState(null);
  // useEffect(() => {
  //   const getCsvDb = async () => {
  //     return await csvdb("contact.csv", ["id", "name", "mail"]);
  //   };
  //   getCsvDb().then((db) => {
  //     setDb(db);
  //   });
  // }, []);
  const onSubmit = async (data: any) => {
    console.log(data);
    await axios.post("/api/contact", data).then((res) => {
      console.log("AXIOS RES", res);
      res.status === 200 && methods.reset();
    });
    // csvDb.insert(data);
  };
  return (
    <Layout>
      <header className="bg-black flex justify-between items-center sticky top-0 z-10">
        <div className="px-2 lg:px-4">
          <Image
            src="/images/logo.png"
            className=" h-12 lg:h-24 w-auto"
            width={500}
            height={150}
            alt="logo"
          />
        </div>
        <div className="px-2 lg:px-4">
          <nav>
            <ul className=" flex items-center">
              {Object.keys(sections).map((section) => (
                <li key={section}>
                  <Link
                    href={`#${section}`}
                    className="text-xl px-4 lg:px-6 font-heading"
                    scroll={false}
                  >
                    {section !== "i-pace"
                      ? section.replaceAll("-", " ")
                      : section}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <section className="section--hero mb-8 lg:mb-12 2xl:mb-16 p-2 lg:p-4">
        <div className="relative min-h-[400px] lg:min-h-[650px] 2xl:min-h-[768px] flex flex-col">
          <Image
            src="/images/video-cover.png"
            width={1920}
            height={1080}
            alt="jaguar video"
            className="h-full w-full object-cover absolute top-0 left-0"
          />
          <div className="absolute w-full h-full bg-black/20"></div>
          <div className="relative flex-1 flex flex-col justify-center  items-center">
            <div className=" my-auto p-2 lg:p-3 cursor-pointer">
              <PlayIcon className="h-20 w-20 lg:h-24 lg:w-24 text-white " />
            </div>
            <Link
              href="#next"
              className="flex space-x-4 p-2 items-center mb-2 lg:mb-4"
              scroll={false}
            >
              <ChevronDownIcon className="h-12 w-12 text-white" />
              <Typography variant="span" className="uppercase font-heading">
                scroll to learn more
              </Typography>
            </Link>
          </div>
        </div>
        {/* https://www.youtube.com/watch?v=wISHRpsMg5E */}
      </section>
      <section
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
                  <Typography
                    variant="span"
                    className="text-4xl lg:text-6xl 2xl:text-9xl lg:leading-none"
                  >
                    {value}
                  </Typography>
                  <Typography variant="span" className="mb-1 lg:mb-2">
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

      <section
        id={sections.benefits}
        className="section--benefits py-8 lg:py-12 2xl:py-16"
      >
        <div className="container--wide">
          <Typography
            variant="h2"
            className="text-center mb-4 lg:mb-8 2xl:mb-12"
          >
            THE KEY BENEFITS of GOING ELECTRIC
          </Typography>
          <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            {benefits.map(({ id, src, title, description }, i) => (
              <IconBox
                key={i}
                src={src}
                title={title}
                description={description}
              />
            ))}
          </ul>
        </div>
      </section>
      <section
        id={sections.range}
        className="section--range py-8 lg:py-12 2xl:py-16"
      >
        {/* section banner*/}
        <SectionBanner
          heading="how far can an electric car go?"
          imageUrl="/images/banner-how-far.png"
        />
        {/* section caption */}
        <div className="container--wide py-5 lg:py-10 2xl:py-13">
          <SectionCaption
            text={`With a battery range of up to 446km*, one single charge would be enough for Jaguar I-PACE to cover most drivers\u2019<br/> average weekly commutes.`}
          />
          <ul className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 2xl:gap-8">
            {features.map(({ id, src, title, description }, i) => (
              <ImageBox
                key={i}
                src={src}
                title={title}
                description={description}
              />
            ))}
          </ul>
        </div>
      </section>
      <section
        id={sections["cost-of-ownership"]}
        className="section--range py-8 lg:py-12 2xl:py-16"
      >
        {/* section banner*/}
        <SectionBanner
          heading="Low cost of ownership"
          subheading="Plug into day-to-day savings."
          imageUrl="/images/banner-low-cost.png"
        />
        {/* section caption */}
        <div className="container--wide py-5 lg:py-10 2xl:py-13">
          <SectionCaption
            text={`Driving towards a cleaner, sustainable future not only helps to protect our planet, it can be kinder on your pockets too.<br/>
            Explore the financial factors that make the move to electric even more worth your while.`}
          />
          <ul className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 2xl:gap-20 max-w-7xl mx-auto">
            {lowCost.map(({ id, src, title, description }, i) => (
              <IconBox
                key={i}
                src={src}
                title={title}
                description={description}
              />
            ))}
          </ul>
        </div>
      </section>
      <section
        id={sections["charging"]}
        className="section--range py-8 lg:py-12 2xl:py-16"
      >
        {/* section banner*/}
        <SectionBanner
          heading="electric car public charging"
          subheading="Your guide to charging away from home."
          imageUrl="/images/banner-public-charging.png"
        />
        {/* section caption */}
        <div className="container--wide py-5 lg:py-10 2xl:py-13 ">
          <SectionCaption
            text={`Plugging in at home remains the most effortless way to fully charge your all-electric car every day. But with more public charging points than ever on our roads \u2013 from remote farm shops to motorway services \u2013 it\u2019s easier than ever to charge on the go.`}
          />
          <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 2xl:gap-8 mb-4 lg:mb-8 2xl:mb-12">
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
        <div className="container--padded">
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
      <section className="section--range py-8 lg:py-12 2xl:py-16">
        {/* section banner*/}
        <SectionBanner
          heading="electric car home charging"
          subheading="Start every day with a full charge."
          imageUrl="/images/banner-home-charging.png"
        />
        {/* section caption */}
        <div className="container--wide py-5 lg:py-10 2xl:py-13">
          <SectionCaption
            heading="Plug into day-to-day savings"
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
      </section>
      <section
        id={sections["register-interest"]}
        className="section--range py-8 lg:py-12 2xl:py-16"
      >
        {/* section banner*/}
        <SectionBanner
          heading="register your interest"
          imageUrl="/images/banner-interest.png"
        />
        {/* section caption */}
        <div className="container--wide py-5 lg:py-10 2xl:py-13 ">
          <div className=" bg-gradient-linear--black--tr rounded-2xl lg:rounded-[2.2rem] py-5 lg:py-10 2xl:py-16 px-2 lg:px-16 2xl:px-20">
            <Typography
              variant="h3"
              className=" lg:text-2xl 2xl:text-3xl  mb-3 lg:mb-6 2xl:mb-10"
            >
              REQUEST MORE INFORMATION
            </Typography>
            <Typography
              variant="p"
              className="!text-lg lg:!text-xl 2xl:!text-2xl  mb-3 lg:mb-6 2xl:mb-10 max-w-5xl"
            >
              Tap on the fields to enter your contact details, A Jaguar
              representative will be in touch to assist you with any questions
              and to help you find the right Jaguar I-PACE.
            </Typography>
            <FormProvider {...methods}>
              {/* // pass all methods into the context */}
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 lg:gap-8 2xl:gap-x-16 2xl:gap-y-10">
                  <InputGroup
                    label="First & Last Name"
                    name="fullname"
                    required={true}
                  />
                  <InputGroup
                    label="Email"
                    name="email"
                    type="email"
                    required={true}
                  />
                  <InputGroup label="Mobile Number (optional)" name="mobile" />
                  <InputGroup label="Suburb" name="suburb" required={true} />
                </div>
                <div className="lg:mt-8 2xl:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 2xl:gap-x-16 2xl:gap-y-10">
                  <InputCheckbox
                    label="Terms & Conditions / Privacy Policy"
                    name="terms"
                    required={true}
                  />
                  <div className="">
                    <button
                      type="submit"
                      disabled={
                        !methods.formState.isValid ||
                        methods.formState.isSubmitting
                      }
                      className="rounded-md bg-[#037CC7] px-3.5 py-2.5 lg:py-4 2xl:py-5 min-w-[300px] disabled:bg-black disabled:cursor-not-allowed transition-colors duration-300 text-lg lg:text-xl font-semibold text-white shadow-sm hover:bg-[#037CC7]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </button>
                    <div className="">
                      {/* show success */}
                      {methods.formState.isSubmitSuccessful && (
                        <SuccessMessage />
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </section>
    </Layout>
  );
}
