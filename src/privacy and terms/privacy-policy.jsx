import React from "react";
import { Helmet } from "react-helmet";
import MetaDecorators from "../MetaDecorator";

function PrivacyPolicy() {
  return (
    <div className="!w-full prose prose-invert prose-headings:underline m-auto mt-20 md:mt-16 lg:mt-10">
      <MetaDecorators
        title="IGTS-NSUT | Privacy & Policy"
        description="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        image="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
      />
      <div className="content-center justify-center pt-20 text-white">
        <h1>
          Privacy Policy of{" "}
          <span className="website_url">The Indian Game Theory Society</span>
        </h1>
        <p>
          Welcome to the{" "}
          <span className="game_theory_club">Indian Game Theory Society! </span>
          This Privacy Policy explains how we collect, use, and protect the
          personal information you provide to us. By using our website, you
          agree to the collection and use of your information as described in
          this policy.
        </p>
        <ul>
          <li>
            <h3>Data Collection</h3>

            <p>
              When you become a member of our society, participate in our events
              or activities, fill out registration forms, or interact with us,
              we directly collect information from you. This information can
              include your name, email address, contact number, and any other
              details you choose to share.
            </p>

            <p>
              To enhance our services and monitor website traffic, we gather
              anonymous data from every visitor to our website. This data
              encompasses web requests, the information sent in response to
              those requests, IP addresses, browser types, browser languages,
              and timestamps of the requests.
            </p>

            <p>
              We employ various technologies, including cookies, to provide
              personalized experiences and improve our services. Cookies are
              small files stored on your hard drive or device memory. They
              enable us to recognize your browser or device, remember your
              preferences, and deliver tailored content and advertisements.
            </p>
            <p>
              The information we collect serves multiple purposes. It
              facilitates your membership and event participation, allowing us
              to provide the services you requested. We may also use your
              contact information to communicate important updates and share
              society-related information.
            </p>
          </li>
          <li>
            <h3>Use of the Data</h3>

            <p>
              Any type of data that we collect including your personal
              information is solely utilized for the purpose of providing you
              with information about The Indian Game Theory Society, organizing
              social activities and events, and facilitating communication
              regarding social matters. We prioritize the security of your
              personal information and employ industry-standard techniques to
              protect it from unauthorized access or disclosure.
            </p>

            <p>
              You can trust that we do not share your personal information with
              any third parties without your consent. The only exceptions to
              this are situations where it becomes necessary to fulfil your
              specific requests, enforce our legal agreements, or comply with
              legal obligations imposed upon us.
            </p>

            <p>
              By adhering to these practices, we ensure that your personal
              information remains confidential and is only used in a manner that
              aligns with your expectations. We are committed to maintaining
              your privacy and safeguarding your data under applicable
              regulations and best practices.
            </p>
          </li>
          <li>
            <h3>Sharing of Data</h3>

            <p>
              Rest assured that we prioritize the protection of your personal
              information and do not share it with any third parties. However,
              we may periodically transmit aggregated and anonymised data to
              external services to assist us in improving our website and
              services.
            </p>

            <p>
              In some cases, we may engage third party providers to offer
              analytics services. These providers may use technologies such as
              cookies, web beacons, and similar tools to collect information
              about your usage of our services and other websites. This
              information may include your IP address, web browser details,
              pages visited, time spent on pages, links clicked, and conversion
              data.
            </p>

            <p>
              We may share information with our business partners for
              collaborative purposes, such as promotions or events, but only
              with your consent.
            </p>
            <p>
              Furthermore, we utilize social buttons from platforms like
              Twitter, Google+, LinkedIn, and Facebook. It's important to note
              that your use of these third-party services is entirely optional.
              These external websites or services are not operated or controlled
              by us. Once you leave our website, any information you provide to
              those third-party sites is subject to their respective privacy
              policies and practices. We encourage you to review the privacy
              policies of any external websites you visit.
            </p>
          </li>
          <li>
            <h3>User Rights</h3>
            <p>
              You have the right to access, correct, delete, or restrict the
              processing of your personal information. If you wish to exercise
              these rights or have any privacy-related inquiries, please contact
              us using the information provided below.
            </p>
          </li>
          <li>
            <h3>Cookies</h3>

            <p>
              We may use cookies on our site to remember your preferences.
              Cookies are small files used on websites to enhance user
              experience, personalize content, track user behaviour etc. They
              can also help with session management, site performance, and
              security.
            </p>
          </li>
          <li>
            <h3>Opt-Out, Communication Preferences</h3>

            <p>
              You have the right to modify your communication preferences and
              opt out of receiving certain types of communication. If you wish
              to do the same, you can contact us to specify your preferences.
            </p>
          </li>
          <li>
            <h3>Security</h3>

            <p>
              We prioritize protecting your personally identifiable information
              and have implemented reasonable measures to ensure its security.
              Our protocols are designed to prevent loss, misuse, unauthorised
              access, disclosure, alteration, or destruction of your data. While
              we adhere to standards and best practices, it's important to note
              that no security measures can guarantee absolute protection. We
              remain vigilant, continuously monitoring and updating our
              practices to mitigate risks. Your cooperation and responsible use
              of your information further contribute to its security.
            </p>
          </li>
          <li>
            <h3>About Children</h3>

            <p>
              The Indian Game Theory Society is intended for individuals who are
              of legal age according to NSUT policies. We do not knowingly
              collect personal information from children. If you believe we have
              inadvertently collected information from a child, please contact
              us, and we will promptly delete it.
            </p>
          </li>
          <li>
            <h3>Changes to the Privacy Policy</h3>

            <p>
              To keep our Privacy Policy current, we may make updates and
              revisions from time to time. These changes will be promptly posted
              on our website or communicated to you through other appropriate
              channels. By continuing to use our services after any
              modifications to the Privacy Policy, you signify your acceptance
              of the updated terms. We encourage you to review the Privacy
              Policy periodically to stay informed about how your personal
              information is being collected, used, and protected. Your
              continued use of our services demonstrates your ongoing consent
              and agreement to the terms outlined in the most recent version of
              the Privacy Policy.
            </p>
          </li>
          <li>
            <h3>Contact Information</h3>
            <p>
              If you have any questions, concerns or requests regarding this
              Privacy policy or the handling of your personal information, feel
              free to contact the undersigned.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
