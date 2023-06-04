import React from "react";
import { Helmet } from "react-helmet";

function Terms() {
  return (
    <div className="!w-full prose dark:prose-invert prose-headings:underline m-auto">
      <Helmet>
        <title>IGTS NSUT | Terms</title>
        <meta property="og:title" content="IGTS-NSUT | Terms" />
        <meta name="description" property="og:description" content="Welcome to the official website of the IGTS college society!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://igtsnsut.org/terms" />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/dafqvvk91/image/upload/v1685046439/igts-white-logo_u3osk8.png"
        />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
      </Helmet>
      <div className="content-center justify-center pt-20">
        <h1>
          Terms & Conditions of{" "}
          <span className="website_url">The Indian Game Theory Society</span>
        </h1>
        <p>
          At <span className="IGTS_NSUT">The Indian Game Theory Society</span>,
          we are committed to protecting your privacy and ensuring a safe and
          enjoyable experience for all our members. By accessing and using our
          services, you agree to comply with the following Terms and Conditions.
        </p>
        <ul>
          <li>
            <h3>Membership and User Data</h3>

            <p>
              When you create an account or become a member of The Indian Game
              Theory Society, you are responsible for providing accurate and
              complete information. This may include your name, email address,
              contact number, and any other required details. We collect and use
              this data solely for the purpose of providing our services and
              communicating with you.
            </p>

            <p>
              We respect your privacy and will not share your personal
              information with third parties without your consent, except as
              required by law or as necessary to fulfill our obligations to you.
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
              <li>Respect the opinions and ideas of fellow members.</li>
              <li>
                Avoid engaging in any form of harassment, discrimination, or
                offensive behavior.
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
            </ul>

            <p>
              Failure to comply with these guidelines may result in disciplinary
              actions, including but not limited to warnings, temporary
              suspension, or permanent removal from the society.
            </p>
          </li>
          <li>
            <h3>Intellectual Property</h3>

            <p>
              The Indian Game Theory Society respects intellectual property
              rights. Members should not use or distribute any copyrighted
              materials without obtaining the necessary permissions or licenses.
              Any content shared within the society should be original or
              properly attributed to the rightful owner.
            </p>

            <p>
              By submitting or sharing any content, including but not limited to
              articles, research papers, presentations, or software, you grant
              The Indian Game Theory Society a non-exclusive, royalty-free,
              worldwide license to use, reproduce, modify, adapt, publish,
              translate, distribute, and display the content for promotional and
              educational purposes.
            </p>
          </li>
          <li>
            <h3>Disclaimer and Limitation of Liability</h3>

            <p>
              The Indian Game Theory Society provides its services on an "as is"
              and "as available" basis. We make no warranties or
              representations, express or implied, regarding the accuracy,
              completeness, reliability, or availability of our services.
            </p>

            <p>
              In no event shall The Indian Game Theory Society or its officers,
              members, or affiliates be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of or in
              connection with your use of our services, even if advised of the
              possibility of such damages.
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
      </div>
    </div>
  );
}

export default Terms;
