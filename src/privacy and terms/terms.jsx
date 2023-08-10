import React from "react";
import { Helmet } from "react-helmet";
import MetaDecorators from "../MetaDecorator";

function Terms() {
  return (
    <div className="!w-full prose dark:prose-invert prose-headings:underline m-auto mt-20 md:mt-16 lg:mt-10">
      <MetaDecorators
        title="IGTS-NSUT | Terms & Conditions"
        description="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        image="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
      />
      <div className="content-center justify-center pt-20 text-white">
        <h1>Terms & Conditions</h1>
        <p>
          At <span className="IGTS_NSUT">The Indian Game Theory Society</span>,
          we are committed to protecting your privacy and ensuring a safe and
          enjoyable experience for all our members. You agree to comply with the
          following Terms and Conditions by accessing and using our services.
        </p>
        <ul>
          <li>
            <h3>Membership and User Data</h3>

            <p>
              When you create an account or become a member of The Indian Game
              Theory Society, you are responsible for providing accurate and
              complete information. This includes all your data like your name,
              phone number, other contact information etc. We collect and use
              this data solely for the purpose of providing our services and
              communicating with you. We respect your privacy and will not share
              your personal information with third parties without your consent,
              except as required by law or as necessary to fulfil our
              obligations to you. Your information is protected with stringent
              security measures in place. In some cases, we may engage
              third-party service providers, who are bound by confidentiality
              agreements, to assist us in delivering our services effectively.
            </p>
          </li>
          <li>
            <h3>Code of Conduct</h3>

            <p>
              The Indian Game Theory Society promotes a respectful and inclusive
              community. By participating in our activities, events, and
              discussions, you agree to abide by the following guidelines:
            </p>

            <ul>
              <li>
                Provide accurate and complete information when using the
                website's services.
              </li>
              <li>
                Confirm that you are of legal age and possess the necessary
                consent to enter into this agreement.
              </li>
              <li>Respect the opinions and ideas of fellow members.</li>
              <li>
                Avoid engaging in any form of harassment, discrimination, or
                offensive behaviour.
              </li>
              <li>Refrain from sharing inappropriate or offensive content.</li>
              <li>
                Adhere to the rules and guidelines set forth by The Indian Game
                Theory Society in all interactions.
              </li>
              <li>
                Contribute positively to the growth and development of the
                society.
              </li>
              <li>
                Failure to comply with these guidelines may result in
                disciplinary actions, including but not limited to warnings,
                temporary suspension, or permanent removal from society.
              </li>
            </ul>
          </li>
          <li>
            <h3>Intellectual Property</h3>

            <p>
              The Indian Game Theory Society places great importance on
              respecting intellectual property rights. As an integral part of
              society, it is expected that all members uphold these principles
              and refrain from using or distributing copyrighted materials
              without obtaining the necessary permissions or licenses. This
              applies to any form of content, including but not limited to
              articles, research papers, presentations, software, or any other
              material that is subject to copyright protection.
            </p>

            <p>
              Within society, it is imperative that all content shared is either
              original or properly attributed to the rightful owner. This means
              that if you contribute or share any content, you must ensure that
              you have the legal right to do so, either as the creator of the
              content or by obtaining the necessary permissions from the
              original copyright holder. In the case of utilizing content
              created by others, it is crucial to provide appropriate citations
              or acknowledgements to avoid any potential infringement.
            </p>
            <p>
              By submitting or sharing any content with The Indian Game Theory
              Society, you grant the society a non-exclusive, royalty-free,
              worldwide license. This license permits the society to use,
              reproduce, modify, adapt, publish, translate, distribute, and
              display content for various purposes.
            </p>
          </li>
          <li>
            <h3>Privacy Policy</h3>
            <p>
              By using the website, you acknowledge and agree to the terms of
              our privacy policy. Please refer to our Privacy Policy page for
              more information on how we collect, use, and protect user data.
            </p>
          </li>
          <li>
            <h3>Prohibited Activities</h3>
            <p>
              Users are prohibited from engaging in any activities that violate
              applicable laws or infringe upon the rights of others.
            </p>
            <p>
              This includes but is not limited to, unauthorized access to the
              website, distribution of malware or spam, infringement of
              intellectual property rights, and any unlawful or unethical
              behaviour.
            </p>
          </li>
          <li>
            <h3>Disclaimer and Limitation of Liability</h3>

            <p>
              The services provided by The Indian Game Theory Society are
              offered "as is" and "as available." We do not provide any
              warranties or representations, whether express or implied,
              regarding the accuracy, completeness, reliability, or availability
              of our services.
            </p>

            <p>
              Under no circumstances shall The Indian Game Theory Society, its
              officers, members, or affiliates be liable for any direct,
              indirect, incidental, special, or consequential damages arising
              from or in connection with your use of our services, even if we
              have been advised of the possibility of such damages.
            </p>
          </li>
          <li>
            <h3>Termination</h3>
            <p>
              The Indian Game Theory Society reserves the right to terminate a
              user's access to the website if they violate these terms and
              conditions or engage in unlawful activities.
            </p>
          </li>
          <li>
            <h3>Governing Law</h3>

            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of India. Any dispute arising out of or
              in connection with these terms shall be subject to the exclusive
              jurisdiction of the courts in Delhi, India.
            </p>
          </li>
          <li>
            <h3>Changes to the Terms and Conditions</h3>

            <p>
              The Indian Game Theory Society reserves the right to modify or
              update these Terms and Conditions at any time. Any changes will be
              communicated to you through our website or other appropriate
              channels. Your continued use of our services after the changes
              will constitute your acceptance of the modified Terms and
              Conditions.
            </p>
          </li>
        </ul>
        <p>
          These terms and conditions constitute the entire agreement between the
          user and The Indian Game Theory Society.
        </p>
      </div>
    </div>
  );
}

export default Terms;
