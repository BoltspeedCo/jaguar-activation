import { InputCheckbox, InputGroup } from "@/components/Form";
import IconBox from "@/components/IconBox";
import IconGrid from "@/components/IconGrid";
import ImageBox from "@/components/ImageBox";
import Layout from "@/components/Layout";
import { SectionBanner, SectionCaption } from "@/components/Section";
import Typography from "@/components/Typography";
import VideoModal from "@/components/VideoModal";
import {
  benefits,
  charging,
  features,
  homeCharging,
  installation,
  lowCost,
  range,
  sections,
  stats,
} from "@/data";
import {
  ChevronDoubleUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

type menuType =
  | "i-pace"
  | "benefits"
  | "range"
  | "cost-of-ownership"
  | "charging"
  | "register-interest";

export default function Home() {
  const sectionsRef = useRef(null);
  const methods = useForm();
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const onSubmit = async (data: any) => {
    await axios.post("/api/contact", data).then((res) => {
      console.log("AXIOS RES", res);
      if (res.status === 200) {
        toast.success("Thank you for your interest, We will be in touch soon", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          className: "toast--success",
        });
      }
      methods.reset();
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
      <main>
        <section
          id="hero"
          className="section--hero mb-8 lg:mb-12 2xl:mb-16 p-2 lg:p-4"
        >
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
              <button
                onClick={() => {
                  setOpenVideoModal(true);
                }}
                className=" my-auto p-2 lg:p-3 cursor-pointer hover:scale-110 transition-transform duration-500 ease-out"
              >
                <PlayIcon className="h-20 w-20 lg:h-24 lg:w-24 text-white " />
              </button>
              <Link
                href="#next"
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
          className="section--range py-8 lg:py-12 2xl:py-16 relative"
        >
          {/* section banner*/}
          <SectionBanner
            heading="register your interest"
            imageUrl="/images/banner-interest.png"
          />
          {/* section caption */}
          <div className="container--wide pb-5 lg:pb-10 2xl:pb-13 pt-10 lg:pt-16 2xl:pt-20 ">
            <div className=" bg-gradient-linear--black--tr rounded-2xl lg:rounded-[2.2rem] py-5 lg:py-10 2xl:py-16 px-2 lg:px-16 2xl:px-20 relative">
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
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  className="pb-8 lg:pb-12 "
                >
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
                    <InputGroup
                      label="Mobile Number (optional)"
                      name="mobile"
                    />
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
                        className="rounded-md bg-[#037CC7] px-3.5 py-2.5 lg:py-4 2xl:py-5 min-w-[300px] disabled:text-gray-500 disabled:bg-black disabled:cursor-not-allowed transition-colors duration-300 text-lg lg:text-xl font-semibold text-white shadow-sm hover:bg-[#037CC7]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                  <ToastContainer />
                </form>
              </FormProvider>
            </div>
          </div>
        </section>
      </main>
      <Link
        href="#__next"
        scroll={false}
        className="absolute bottom-5 right-5 z-50 cursor-pointer bg-gradient-linear--black rounded-2xl group  p-1 lg:p-2 hover:-translate-y-1 duration-300 transition-transform"
      >
        <ChevronDoubleUpIcon className="w-10 h-10 lg:w-12 lg:h-12 group-hover:text-gray-300 text-white " />
      </Link>
      <VideoModal
        setIsOpen={setOpenVideoModal}
        isOpen={openVideoModal}
        videoUrl=""
      />
    </Layout>
  );
}
