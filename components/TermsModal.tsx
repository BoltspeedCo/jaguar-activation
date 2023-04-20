import { useState } from "react";
import { Dialog } from "@headlessui/react";
import ReactPlayer from "react-player";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

interface TermsModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function TermsModal({ isOpen, setIsOpen }: TermsModalProps) {
  //   let [isOpen, setIsOpen] = useState(true);
  const { push } = useRouter();
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md "
        aria-hidden="true"
      />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center   ">
        {/* The actual dialog panel  */}
        <div className="overflow-y-auto flex-1 h-full p-4 lg:p-8">
          <Dialog.Panel className="mx-auto max-w-6xl relative  rounded bg-white p-4 lg:px-12 lg:py-8 ">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 border-4 border-gray-500 rounded-full cursor-pointer group hover:border-gray-600 transition-all duration-300"
            >
              <XMarkIcon className="w-6 h-6 lg:h-12 lg:w-12 text-gray-500 group-hover:text-gray-600 transition-all duration-300" />
            </button>
            <div className="  ">
              <div className="prose prose-sm max-w-none">
                <p className="">
                  Fuel consumption, CO2 emissions and EV Range figures are
                  determined by testing under standardised laboratory conditions
                  and to comply with ADR 81/02 and ADR 79/04. These figures
                  should only be used for the purpose of comparison amongst
                  vehicles. Actual figures will generally differ under real
                  world driving conditions and will vary depending on factors
                  such as (but not limited to) driving style, vehicle\u2019s
                  equipment and road, traffic, and weather condition.
                </p>
                <p>
                  <sup>±</sup>The figures provided are NEDC calculated from
                  official manufacturer\u2019s tests. Figures may vary according
                  to environment and driving style. For comparison purposes
                  only. Real world figures may differ.
                </p>
                <p>
                  {" "}
                  <sup>*</sup>World Car of the Year, World Car Design of the
                  Year and World Green Car awarded in 2019.
                </p>
                <p>
                  <sup>**</sup>Charging times will vary dependent on many
                  factors, including but not limited to: the age, condition,
                  temperature and existing charge of the battery; facility used
                  and duration of charge.
                </p>
                <p>
                  <sup>✦</sup>Wet: Volume as measured by simulating the
                  loadspace filled with liquid.{" "}
                </p>
                <p>
                  <sup>1</sup>Connected Navigation will require further
                  subscription after the initial term advised by your Jaguar
                  Retailer.
                </p>
                <p>
                  {" "}
                  <sup>2</sup>Fair use policy may apply. Includes 1-year
                  subscription which can be extended after the initial term
                  advised by your Jaguar Retailer.
                </p>
                <p>
                  I-PACE\u2019s 90kWh battery warranty is limited to 8 years or
                  160,000km (whichever comes first). It is redeemable in the
                  case of any manufacturing defect or should a certified Jaguar
                  Retailer measure that the battery has dropped below a 70
                  percent State of Health.{" "}
                </p>
                <p>
                  Optional features and their availability may differ by vehicle
                  specification (model and powertrain), or require the
                  installation of other features in order to be fitted. Please
                  contact your local Retailer for more details, or configure
                  your vehicle online.
                </p>
                <p>
                  {" "}
                  Please note that standard features may be replaced when
                  selecting alternative trim levels. Standard features may also
                  vary depending on country of purchase, engine variant and
                  transmission.{" "}
                </p>
                <p>
                  In car features should be used by drivers only when safe to do
                  so. Drivers must ensure they are in full control of the
                  vehicle at all times.
                </p>
                <p>
                  Pivi and InControl features, options, third party services and
                  their availability remain market dependent \u2013 check with
                  your Jaguar Retailer for local market availability and full
                  terms. Certain features come with a subscription which will
                  require further renewal after the initial term advised by your
                  Retailer. Mobile network connectivity cannot be guaranteed in
                  all locations. Information and images displayed in relation to
                  the InControl technology, including screens or sequences, are
                  subject to software updates, version control and other
                  system/visual changes depending on options selected.{" "}
                </p>
                <p>
                  Meridian is a registered trademark of Meridian Audio Ltd.
                  Trifield and the three fields device is a trademark of
                  Trifield Productions Ltd.
                </p>
                <br />
                <p>© JAGUAR LAND ROVER LIMITED 2023.</p>
              </div>
              {/* close button */}
            </div>

            {/* ... */}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
