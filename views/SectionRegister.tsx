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
            className="!text-lg lg:!text-xl 2xl:!text-2xl  mb-3 lg:mb-6 2xl:mb-10 max-w-5xl"
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
              <TermsModal
                isOpen={openTermsModal}
                setIsOpen={setOpenTermsModal}
              />
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default SectionRegister;
