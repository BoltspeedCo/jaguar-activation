import { InputCheckbox, InputGroup } from "@/components/Form";
import IconBox from "@/components/IconBox";
import IconGrid from "@/components/IconGrid";
import ImageBox from "@/components/ImageBox";
import Layout from "@/components/Layout";
import { SectionBanner, SectionCaption } from "@/components/Section";
import Typography from "@/components/Typography";
import VideoModal from "@/components/VideoModal";
import { useInViewport } from "react-in-viewport";

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
import ReactPlayer from "react-player/lazy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import SectionIPace from "@/views/SectionIPace";
import SectionBenefits from "@/views/SectionBenefits";
import SectionHero from "@/views/SectionHero";
import SectionRange from "@/views/SectionRange";
import SectionCostOfOwnership from "@/views/SectionCostOfOwnership";
import SectionPublicCharging from "@/views/SectionPublicCharging";
import SectionHomeCharging from "@/views/SectionHomeCharging";
import SectionRegister from "@/views/SectionRegister";

type menuType =
  | "i-pace"
  | "benefits"
  | "range"
  | "cost-of-ownership"
  | "charging"
  | "register-interest";

export default function Home() {
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
        <SectionHero />
        <SectionIPace />

        <SectionBenefits />
        <SectionRange />
        <SectionCostOfOwnership />
        <SectionPublicCharging />
        <SectionHomeCharging />
        <SectionRegister />
      </main>
      <Link
        href="#__next"
        scroll={false}
        className="absolute bottom-5 right-5 z-50 cursor-pointer bg-gradient-linear--black rounded-2xl group  p-1 lg:p-2 hover:-translate-y-1 duration-300 transition-transform"
      >
        <ChevronDoubleUpIcon className="w-10 h-10 lg:w-12 lg:h-12 group-hover:text-gray-300 text-white " />
      </Link>
    </Layout>
  );
}
