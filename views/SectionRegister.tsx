import { InputGroup, InputCheckbox } from "@/components/Form";
import { SectionBanner } from "@/components/Section";
import TermsModal from "@/components/TermsModal";
import Typography from "@/components/Typography";
import { sections } from "@/data";
import axios from "axios";
import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

interface ISectionRegister {}

const SectionRegister = ({}: ISectionRegister) => {
  const methods = useForm();
  const [openTermsModal, setOpenTermsModal] = React.useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const [openVideoModal, setOpenVideoModal] = useState(false);
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
            className="!text-base lg:!text-lg   mb-3 lg:mb-6 2xl:mb-10 max-w-5xl"
          >
            Tap on the fields to enter your contact details, A Jaguar
            representative will be in touch to assist you with any questions and
            to help you find the right Jaguar I-PACE.
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
                  label="Mobile Number"
                  name="mobile"
                  required={true}
                />
                <InputGroup label="Suburb" name="suburb" required={true} />
              </div>
              <div className="lg:mt-8 2xl:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 2xl:gap-x-16 2xl:gap-y-10">
                <InputCheckbox
                  label="Terms & Conditions / Privacy Policy"
                  name="terms"
                  required={true}
                  labelProps={{ onClick: () => setOpenTermsModal(true) }}
                />
                <div className="">
                  <button
                    type="submit"
                    disabled={methods.formState.isSubmitting}
                    className="rounded-md bg-[#037CC7] px-3.5 py-2.5 lg:py-4 2xl:py-5 min-w-[300px] disabled:text-gray-500 disabled:bg-black disabled:cursor-not-allowed transition-colors duration-300 text-lg lg:text-xl font-semibold text-white shadow-sm hover:bg-[#037CC7]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {methods.formState.isSubmitting
                      ? "Submitting..."
                      : "Submit"}
                  </button>
                </div>
              </div>
              <ToastContainer />
              <TermsModal
                isOpen={openTermsModal}
                setIsOpen={setOpenTermsModal}
              />
            </form>
          </FormProvider>
        </div>
        <div className="prose prose-sm text-white mt-3 lg:mt-8 2xl:mt-16 max-w-none">
          <p className="">
            Fuel consumption, CO2 emissions and EV Range figures are determined
            by testing under standardised laboratory conditions and to comply
            with ADR 81/02 and ADR 79/04. These figures should only be used for
            the purpose of comparison amongst vehicles. Actual figures will
            generally differ under real world driving conditions and will vary
            depending on factors such as (but not limited to) driving style,
            vehicle\u2019s equipment and road, traffic, and weather condition.
          </p>
          <p>
            <sup>±</sup>The figures provided are NEDC calculated from official
            manufacturer\u2019s tests. Figures may vary according to environment
            and driving style. For comparison purposes only. Real world figures
            may differ.
          </p>
          <p>
            {" "}
            <sup>*</sup>World Car of the Year, World Car Design of the Year and
            World Green Car awarded in 2019.
          </p>
          <p>
            <sup>**</sup>Charging times will vary dependent on many factors,
            including but not limited to: the age, condition, temperature and
            existing charge of the battery; facility used and duration of
            charge.
          </p>
          <p>
            <sup>✦</sup>Wet: Volume as measured by simulating the loadspace
            filled with liquid.{" "}
          </p>
          <p>
            <sup>1</sup>Connected Navigation will require further subscription
            after the initial term advised by your Jaguar Retailer.
          </p>
          <p>
            {" "}
            <sup>2</sup>Fair use policy may apply. Includes 1-year subscription
            which can be extended after the initial term advised by your Jaguar
            Retailer.
          </p>
          <p>
            I-PACE\u2019s 90kWh battery warranty is limited to 8 years or
            160,000km (whichever comes first). It is redeemable in the case of
            any manufacturing defect or should a certified Jaguar Retailer
            measure that the battery has dropped below a 70 percent State of
            Health.{" "}
          </p>
          <p>
            Optional features and their availability may differ by vehicle
            specification (model and powertrain), or require the installation of
            other features in order to be fitted. Please contact your local
            Retailer for more details, or configure your vehicle online.
          </p>
          <p>
            {" "}
            Please note that standard features may be replaced when selecting
            alternative trim levels. Standard features may also vary depending
            on country of purchase, engine variant and transmission.{" "}
          </p>
          <p>
            In car features should be used by drivers only when safe to do so.
            Drivers must ensure they are in full control of the vehicle at all
            times.
          </p>
          <p>
            Pivi and InControl features, options, third party services and their
            availability remain market dependent \u2013 check with your Jaguar
            Retailer for local market availability and full terms. Certain
            features come with a subscription which will require further renewal
            after the initial term advised by your Retailer. Mobile network
            connectivity cannot be guaranteed in all locations. Information and
            images displayed in relation to the InControl technology, including
            screens or sequences, are subject to software updates, version
            control and other system/visual changes depending on options
            selected.{" "}
          </p>
          <p>
            Meridian is a registered trademark of Meridian Audio Ltd. Trifield
            and the three fields device is a trademark of Trifield Productions
            Ltd.
          </p>
          <br />
          <p>© JAGUAR LAND ROVER LIMITED 2023.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionRegister;
