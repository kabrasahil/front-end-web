import React from "react";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
  return (
    <div className="!w-full prose dark:prose-invert prose-headings:underline m-auto">
      <Helmet>
        <title>IGTS-NSUT | Privacy & Policy</title>
        <meta
          name="description"
          content="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        />
        <meta name="keywords" content="igts nsut, IGTS, nsut, game theory, privacy and policy" />
        <meta property="og:url" content="https://igtsnsut.org/privacy" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="IGTS-NSUT | Privacy & Policy" />
        <meta
          property="og:description"
          content="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="igtsnsut.org" />
        <meta property="twitter:url" content="https://igtsnsut.org/privacy" />
        <meta name="twitter:title" content="IGTS-NSUT | Privacy & Policy" />
        <meta
          name="twitter:description"
          content="Welcome to the official website of the IGTS college society! We are a community of passionate individuals with a shared love for gaming, economics, and math."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dksdmvwch/image/upload/v1685981881/IGTS_logo_white_nflxiq.jpg"
        />{" "}
      </Helmet>
      <div className="content-center justify-center pt-20 text-white">
        <h1>
          Privacy Policy of{" "}
          <span className="website_url">The Indian Game Theory Society</span>
        </h1>
        <p>
          At{" "}
          <span className="game_theory_club">
            The Indian Game Theory Society
          </span>
          , we collect and manage user data according to the following Privacy
          Policy.
        </p>
        <ul>
          <li>
            <h3>Data Collected</h3>

            <p>
              We collect information you provide directly to us. For example, we
              collect information when you join the society, participate in any
              events or activities, fill out a registration form, or otherwise
              communicate with us. The types of information we may collect
              include your name, email address, contact number, and other
              contact or identifying information you choose to provide.
            </p>

            <p>
              We collect anonymous data from every visitor of our website to
              monitor traffic and improve our services. For example, we collect
              information like web requests, the data sent in response to such
              requests, the Internet Protocol address, the browser type, the
              browser language, and a timestamp for the request.
            </p>

            <p>
              We may also use various technologies, such as cookies, to collect
              information that helps us improve our services and enhance your
              experience. Cookies are small data files stored on your hard drive
              or in your device memory. They enable us to recognize your browser
              or device, remember your preferences, and provide personalized
              content and advertisements.
            </p>
          </li>
          <li>
            <h3>Use of the Data</h3>

            <p>
              We only use your personal information to provide you with
              information about The Indian Game Theory Society, to organize
              society activities and events, and to communicate with you
              regarding society matters.
            </p>

            <p>
              We employ industry-standard techniques to protect your personal
              information from unauthorized access or disclosure.
            </p>

            <p>
              We do not share personal information with third parties without
              your consent unless it is necessary to fulfill your specific
              requests, to enforce our legal agreements, or to comply with legal
              obligations.
            </p>
          </li>
          <li>
            <h3>Sharing of Data</h3>

            <p>
              We do not share your personal information with third parties.
              Aggregated, anonymized data may be periodically transmitted to
              external services to help us improve the Website and services.
            </p>

            <p>
              We may allow third parties to provide analytics services. These
              third parties may use cookies, web beacons, and other technologies
              to collect information about your use of the services and other
              websites, including your IP address, web browser, pages viewed,
              time spent on pages, links clicked, and conversion information.
            </p>

            <p>
              We also use social buttons provided by services like Twitter,
              Google+, LinkedIn, and Facebook. Your use of these third-party
              services is entirely optional. We are not responsible for the
              privacy policies and practices of these third-party services, and
              you are responsible for reading and understanding their privacy
              policies.
            </p>
          </li>
          <li>
            <h3>Cookies</h3>

            <p>We may use cookies on our site to remember your preferences.</p>
          </li>
          <li>
            <h3>Opt-Out, Communication Preferences</h3>

            <p>
              You may modify your communication preferences and opt-out of
              specific communications at any time. Please contact us to specify
              your preferences.
            </p>
          </li>
          <li>
            <h3>Security</h3>

            <p>
              We take reasonable steps to protect your personally identifiable
              information from loss, misuse, and unauthorized access,
              disclosure, alteration, or destruction. However, please be aware
              that no security measures can guarantee complete protection of
              your information.
            </p>
          </li>
          <li>
            <h3>About Children</h3>

            <p>
              The Indian Game Theory Society is intended for individuals who are
              of legal age according to NSUT policies. We do not knowingly
              collect personally identifiable information from individuals below
              the legal age.
            </p>
          </li>
          <li>
            <h3>Changes to the Privacy Policy</h3>

            <p>
              We may update this Privacy Policy from time to time. Any changes
              we make will be posted on our website or communicated to you
              through other appropriate channels. Your continued use of our
              services after any modifications to the Privacy Policy will
              signify your acceptance of the updated terms.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
