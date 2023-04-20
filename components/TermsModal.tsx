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
        <div className=" flex-1 h-full p-4 lg:p-8">
          <Dialog.Panel className="mx-auto max-w-6xl relative  rounded bg-gradient-linear--black max-h-full flex flx-col p-4 lg:pl-12 lg:py-8 lg:pr-6 ">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 border-4 border-gray-500 rounded-full cursor-pointer group hover:border-gray-600 transition-all duration-300"
            >
              <XMarkIcon className="w-6 h-6 lg:h-12 lg:w-12 text-gray-500 group-hover:text-gray-600 transition-all duration-300" />
            </button>
            <div className="overflow-y-auto flex-1 pr-6 custom-scrollbar">
              <div className="prose  max-w-none prose-headings:text-white text-gray-50">
                <h2>PRIVACY POLICY</h2>

                <p>
                  Jaguar Land Rover Australia Pty Ltd (&ldquo;JLRA&rdquo;)
                  respects the privacy of the individuals with whom we deal.
                  This Privacy Policy sets out information about the ways in
                  which we will collect, hold, use, disclose, manage and protect
                  your personal information in accordance with the Privacy Act
                  1988.
                </p>

                <p>
                  We may update this Privacy Policy from time to time, by
                  publishing an updated privacy policy on this website. We
                  therefore encourage you to periodically review this Privacy
                  Policy to become aware of any changes that may have occurred
                  as they will apply to you.
                </p>

                <p>
                  You have various rights as an individual under the Privacy
                  Act, including the right to access the personal information we
                  hold about you and to seek the correction of that information
                  (subject to applicable exemptions). Some of those rights are
                  outlined in this Privacy Policy.
                </p>

                <p>WEB SITES - IMPORTANT INFORMATION</p>

                <p>
                  In addition to this Privacy Policy and our Cookies Policy
                  (available at www.jaguar.com.au and www.landrover.com.au) you
                  should also ensure that you read the website Terms of Use for
                  our websites (the &quot;Sites&quot;), as they apply to you if
                  you access the Sites.
                </p>

                <p>OVERSEAS DISCLOSURES</p>

                <p>
                  Due to the international nature of JLRA&apos;s business, JLRA
                  is likely to disclose personal information about you to
                  overseas recipients who are likely to be located in the United
                  Kingdom and the United States of America.
                </p>

                <p>
                  FREQUENTLY ASKED QUESTIONS WITH RESPECT TO JLRA&apos;s
                  HANDLING OF PERSONAL INFORMATION (FAQ)
                </p>

                <p>
                  In the answers to the following FAQs below, we set out
                  important information about JLRA&apos;s management of personal
                  information.
                </p>

                <p>
                  1. What are the benefits to me of JLRA collecting my
                  information through the website?
                  <br />
                  2. What kinds of personal information does JLRA collect and
                  hold?
                  <br />
                  3. How JLRA collects and stores your personal information?
                  <br />
                  4. For how long will JLRA store personal information?
                  <br />
                  5. Who does JLRA disclose personal information to?
                  <br />
                  6. What are the purposes for which JLRA collects, holds, uses
                  and discloses your personal information?
                  <br />
                  7. How do I access and correct information about myself or
                  make a complaint about privacy?
                  <br />
                  8. What about Internet &amp; site security?
                  <br />
                  9. What happens if I choose not to provide personal
                  information?
                </p>

                <p>
                  1. WHAT ARE THE BENEFITS TO ME OF JLRA COLLECTING MY PERSONAL
                  INFORMATION THROUGH THE SITES?
                </p>

                <p>
                  Collecting this information will help JLRA to achieve the
                  following:
                </p>

                <p>
                  (a) To make the Sites easier for you to use by not having to
                  enter information more than once.
                  <br />
                  (b) Help us to provide information faster.
                  <br />
                  (c) To help us create content more relevant to you.
                  <br />
                  (d) To help you quickly find services or information available
                  from JLRA.
                  <br />
                  (e) Using information to make improvements to the Sites.
                  <br />
                  (f) Assessing general trends within the Sites and their use.
                  <br />
                  (g) To alert you to new products, special promotions, updated
                  information and other new services that JLRA considers to be
                  of interest to you.
                  <br />
                  (h) To display relevant product, promotion and service
                  information based on your previous browsing activities within
                  the Sites.
                  <br />
                  (i) To help you to store your favourite media (wallpapers,
                  video, audio), configured cars and preferred dealer
                  information within Sites for your future reference.
                </p>

                <p>
                  2. WHAT KINDS OF PERSONAL INFORMATION JLRA COLLECTS AND HOLDS?
                  <br />
                  We may collect and hold personal information about you
                  including your name, age, address, telephone number, email
                  address, current vehicle information, information about the
                  motor vehicle dealership from which you purchased the vehicle,
                  service history and your contact preferences.In general, you
                  can visit JLRA on the Web without telling us who you are or
                  revealing any information about yourself. There are times,
                  however, when we may need to collect and hold personal
                  information from you, such as your name and address. We will
                  let you know before we collect personally identifiable
                  information from you on the Internet.Before submission of
                  personal information through this Site, we also collect
                  anonymous information about how the Site has been used through
                  the use of cookies. This is a common standard procedure for
                  any web site on the Internet. The information collected does
                  not personally identify you but may be helpful to us for
                  marketing purposes or improving the services we offer. You
                  should read our Cookies Policy which contains other more
                  specific information in this regard.To improve the services we
                  provide we will also collect anonymous information about the
                  referring website (for example Google search) or the referring
                  banner which led you to JLRA&apos;s websites.
                </p>

                <p>
                  3. HOW JLRA COLLECTS AND STORES YOUR PERSONAL INFORMATION?
                  <br />
                  JLRA collects personal information about individuals in a
                  number of ways. The principal way is that we collect personal
                  information of individuals who purchase our Jaguar and Land
                  Rover vehicles from the dealerships that distribute those
                  vehicles.
                </p>

                <p>
                  Additionally, this Site collects personal information about
                  you in a number of ways, such as requesting it from you in
                  regards to a test drive request form, brochure request form or
                  subscribing to future information from us.The Site also
                  records information about visits to this Site through the use
                  of cookies. However, the information recorded in those cookies
                  does not identify the individual who visited the Site and is
                  therefore not personal information.JLRA also collects personal
                  information of:(a) individuals employed by our service
                  providers, suppliers and distributors (including motor vehicle
                  dealerships, business managers and other staff of the
                  dealerships that distribute our products).(b) job applicants
                  who have applied for jobs with us, including information
                  disclosed to us by employment agencies.(c) attendees of events
                  sponsored/arranged by JLRA who have provided personal
                  information in the course of such events.Personal information
                  that we collect is held in a secure environment protected by a
                  combination of physical and technical measures. There is no
                  general public access to this information.
                </p>

                <p>
                  4. FOR HOW LONG WILL JLRA STORE PERSONAL INFORMATION?
                  <br />
                  JLRA will store your personal information in a secure and
                  protected environment for as long as we are required or
                  authorised to hold that information under the Privacy Act and
                  any other applicable Australian laws. To understand how you
                  can access or correct the information we hold about you,
                  please refer to the appropriate question in this Privacy
                  Policy.
                </p>

                <p>
                  5. WHO DOES JLRA DISCLOSE YOUR PERSONAL INFORMATION TO?JLRA
                  will usually disclose personal information to:(a) our business
                  partners, including service providers, such as mail houses,
                  website and IT service providers and roadside assistance
                  providers, who assist us in providing products and services
                  and information about the products and services of us and our
                  business partners to you and to our business partners.(b)
                  market research companies in connection with industry market
                  research that they conduct for us.(c) other members of the
                  Jaguar Land Rover Group of companies.
                </p>

                <p>
                  6. WHAT ARE THE PURPOSES FOR WHICH JLRA COLLECTS, HOLDS, USES
                  AND DISCLOSES YOUR PERSONAL INFORMATION?
                  <br />
                  We collect, hold, use and disclose your personal information
                  in order to:(1) help us improve our services to you; we want
                  to make it easier to tailor our products and services to your
                  particular needs.(2) fulfil any service you might request or
                  to respond to your questions or queries;(3) improve how JLRA
                  serve you;(4) send you direct marketing communications about
                  JLRA&apos;s products and services or related products and
                  services of JLRA&apos;s related bodies corporate or its
                  business partners. If you wish to opt out of future direct
                  marketing communications you can contact the JLRA Privacy
                  Officer on the details provided in paragraph 7.(5) develop and
                  maintain employment relationships with our business partners,
                  employees and contractors;(6) comply with our legal and
                  regulatory obligations;(7) conduct both internal research and
                  analysis, as well as in order to participate in external
                  industry research activities;(8) develop relationships with
                  our distributors and suppliers.
                </p>

                <p>
                  7. HOW DO I ACCESS AND CORRECT INFORMATION ABOUT MYSELF OR
                  MAKE A COMPLAINT ABOUT PRIVACY?JLRA will take such steps (if
                  any) as are reasonable in the circumstances to ensure that the
                  personal information we collect is accurate, complete and
                  up-to-date.Subject to any applicable exemptions, you have a
                  right to access personal information that we hold about you
                  and to seek the correction of that personal information. In
                  order to do so, please contact our Privacy Officer:JLRA
                  Privacy OfficerLevel 1, 189 O&apos;Riordan Street, Mascot, NSW
                  2020PO Box 1070 Mascot NSW 1460Email:
                  aupriv@jaguarlandrover.comJaguar Phone: 1300 787 803Land Rover
                  Phone: 1800 625 642Where appropriate, you will also be given
                  the option of cancelling your membership of the service you
                  have subscribed to.If you would like to make a complaint about
                  a breach of the Australian Privacy Principles, please contact
                  us with details of your concerns and your contact details, and
                  we will respond to your complaint within a reasonable period
                  of time. You can do this by contacting our Privacy Officer on
                  the contact details set out above. We may contact you in
                  response to clarify your concerns and work through your
                  questions together. If you are not happy with our response,
                  you can lodge a complaint with the Australian Information
                  Commissioner (www.oaic.gov.au).
                </p>

                <p>
                  8. WHAT ABOUT INTERNET &amp; SITE SECURITY?
                  <br />
                  The Internet is not a secure system and you should always be
                  cautious about the information you disclose whilst on-line.
                  JLRA will take such steps as are reasonable in the
                  circumstances to protect personal information from misuse,
                  interference and loss and unauthorised access, modification or
                  disclosure. Personal Information collected JLRA through the
                  Sites is stored in secure operating environments that are not
                  available to the public. In some cases, the personal
                  information is encrypted before you conduct your transaction,
                  using appropriate secure technology.
                </p>

                <p>
                  9. WHAT HAPPENS IF I CHOOSE NOT TO PROVIDE PERSONAL
                  INFORMATION?
                  <br />
                  If you choose not to provide personal information, we may not
                  be able to deal with or respond to your request or query. You
                  will in most cases still be able to use most of the Sites.
                  However you will not be able to access areas that require the
                  submission of personal information or receive the products or
                  services that require this information. Even if you do not
                  submit personal information we will sometimes collect
                  anonymous information about how you have used the Site. This
                  is information that does not personally identify you but which
                  may be helpful for marketing or improving the services we
                  offer.
                </p>
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
