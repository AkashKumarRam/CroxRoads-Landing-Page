import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-10 pt-10">
        <h1 className="font-inter text-5xl text-center max-sm:hidden pl-5 pr-5">
          Privacy Policy
        </h1>

        <h1 className="font-inter text-3xl pr-2 pl-2 text-center sm:hidden">
          Privacy Policy
        </h1>
      </div>

      <div className="mt-10 flex flex-col pr-14 pl-14 space-y-9">
        <p className="font-poppins">
          Welcome to the Privacy Policy ("Policy") of Croxroads! This Policy
          provides detailed information on how we collect, store, protect, and
          share your personal information, as well as the entities with whom we
          share it. We strongly recommend that you read this Policy alongside
          our Terms and Conditions of Use.
          <br />
          <br />
          As you enjoy the Croxroads mobile application (including the desktop
          version) ("App"), browse our websites and microsites (such as
          Croxroads.app), or utilize our digital products and services (such as
          competitions or surveys) (collectively referred to as our "Sites") you
          may encounter instances where we collect information about you.
          Moreover, you have the option to share information with other users,
          including your friends and contacts ("Users"), through the App or
          Sites. Occasionally, we may also need to share your information.
          Please be aware that the App and Sites operate globally, and
          regardless of your country of residence, your information may be
          transmitted to and used in India, United States and the United
          Kingdom. This Policy outlines the measures we implement to safeguard
          your personal data during international transfers. We strongly advise
          you to read this Policy carefully.
          <br />
          <br />
          The operation of the App and Sites is managed by the "Croxroads Group"
          (also referred to as "we" or "us") consisting of Lovepack Consumers
          Pvt Ltd. These entities act as controllers of the personal information
          collected and processed through the Croxroads App and Sites
          <br />
          <br />
        </p>
        <h2 className="font-poppins text-2xl font-bold">
          1. COLLECTION OF INFORMATION.
        </h2>
        <p className="font-poppins">
          <b>Account Creation at Registration</b>
          <br />
          When you download the App and create an account ("Account"), we may
          collect specific information ("Registration Information") about you,
          including:
          <br />
          · Mobile Number
          <br />
          · Your name
          <br />
          · Date of birth
          <br />
          · Gender identity
          <br />
          · Height
          <br />
          · Education Qualification
          <br />
          · Present Status (Studying/Working)
          <br />
          · Personality Traits
          <br />
          · Sexual preference
          <br />
          · About You (Bio)
          <br />
          · Photographs
          <br />
          · Location
          <br />
          If you are opting for double dating, we collect a few additional
          information that includes:
          <br />
          · Relation between you and the person with whom you are creating the
          team (team-mate)
          <br />
          · Team Photographs
          <br />
          · Team Bio
          <br />
          Please note that your date of birth and location (if you have granted
          Croxroads access to your device's location in your device settings)
          may be automatically updated based on your device's location. It is
          your responsibility to ensure that your account details are accurate
          and up to date. If your phone number changes, please contact us at{" "}
          <br />
          humans@croxroads.app
          <br />
          The information we collect helps enhance the App and verify our Users
          (we have strict measures against bots!). Registration Information,
          such as your sexual preference, name, and username, may be visible to
          other Users who view your profile page.
        </p>

        <h2 className="font-poppins text-2xl font-bold">Profile Info</h2>

        <p className="font-poppins">
          We strongly advise and encourage you, as well as all our members, to
          exercise caution when sharing personal information. It is not
          recommended to include email addresses, URLs, instant messaging
          details, phone numbers, full names or addresses, credit card details,
          national identity numbers, driver's license details, or any other
          sensitive information that could be vulnerable to misuse or abuse on
          your profile.
          <br />
          Please be aware that when you post information about yourself or use
          the messaging feature to communicate with other Users, the level of
          personal information you disclose is done at your own discretion and
          risk. For more details regarding who can access the content you post
          on Croxroads, please refer sections below.
        </p>

        <h2 className="font-poppins text-2xl font-bold">
          Profile Verification Info (Including Biometric Information)
        </h2>

        <p className="font-poppins">
          To prioritize your safety, security, and overall user experience, we
          have implemented an account verification process. As part of this
          process, we request your phone number and, in certain cases, ask you
          to undergo photo verification. Our intention is to ensure that you are
          a genuine user and not a robot. By implementing these measures, we aim
          to prevent the creation of fake accounts on our platform, which can be
          utilized for malicious activities and cybercrime. Such accounts pose a
          threat to the entire Croxroads community and can disrupt the
          experience for everyone involved. Verification may also be required as
          a fraud prevention measure.
          <br />
          We provide you with the option to voluntarily verify your profile
          photo, which will result in a blue "verified" badge being added to
          your profile. When you choose to verify your profile photo, we will
          carefully examine each photo you submit. This examination may involve
          utilizing facial recognition technology to compare the submitted photo
          with your existing profile photo. This process helps ensure that you
          are indeed the person you claim to be. Please note that the
          verification photos are not added to your public profile.
          <br />
          We retain the verification scans for future reference and
          record-keeping purposes until they are no longer required, or for a
          period of three years after your last interaction with us, whichever
          comes first. After the relevant retention period expires, we take
          commercially reasonable measures to permanently and securely delete
          the verification scans from our systems.
        </p>

        <h2 className="font-poppins text-2xl font-bold">Purchases Info</h2>

        <p className="font-poppins">
          When you choose to purchase any of our premium services, we will
          securely process your payment information and retain it for the
          purpose of preventing fraud and for audit/tax compliance.
          <br />
          To maintain a secure environment and protect our users, our dating app
          employs automated decision-making techniques as part of our anti-fraud
          procedures. Our systems analyze payment transactions to identify any
          suspicious behavior that may indicate a violation of our Terms and
          Conditions of Use. If a transaction meets specific criteria indicating
          a potential breach of our Terms and Conditions and suggests fraudulent
          activity, the transaction may be automatically blocked. In such cases,
          the user will receive a notification informing them that their
          transaction cannot be processed. If you believe the decision is
          erroneous, affected users can contact our support team to contest the
          decision.
        </p>

        <h2 className="font-poppins text-2xl font-bold">Geolocation Info</h2>

        <p className="font-poppins">
          If you have granted our app access to your device's location in its
          settings, we will collect information about nearby WiFi access points
          and other location data, including longitude and latitude coordinates.
          These coordinates may be stored to provide you with specific features.
          This information allows us to determine your physical location,
          enabling us to personalize the app and facilitate interactions with
          other users. It allows us to display general locality information on
          your profile, as well as show you profiles of users who are in close
          proximity.
          <br />
          If you have previously granted Croxroads access to your location but
          now wish to disable this feature, you can do so using the following
          methods:
          <br />
          iPhone app:
          <br />
          Go to "Settings"  Select "Privacy" Choose "Location Services"  Find
          and select "Croxroads" Android:
          <br />
          Access the device's "Settings" Go to "Location" Find and select
          "Croxroads" Adjust the permissions for location access as desired
        </p>

        <h2 className="font-poppins text-2xl font-bold">Device Info</h2>

        <p className="font-poppins">
          When you use our dating app, we may gather details about your device,
          such as the unique device identifier, device model, and operating
          system. We collect this information for various purposes outlined in
          this policy. Furthermore, with your permission, the app may access
          your device's address book exclusively for the purpose of adding
          someone to your contacts.
        </p>

        <h2 className="font-poppins text-2xl font-bold">Links</h2>

        <p className="font-poppins">
          We may monitor your interactions with links provided on our dating
          app, including third-party services, using methods like click
          redirection or similar techniques. We may also share aggregated
          statistics on link clicks, such as the total number of times a
          specific link was clicked on.
        </p>

        <h2 className="font-poppins text-2xl font-bold">
          Croxroads Success Stories, Surveys and other
        </h2>

        <p className="font-poppins">
          Occasionally, we conduct surveys for research purposes, and we may
          reach out to you to inquire if you would be interested in
          participating. Additionally, we may contact you to gather feedback,
          testimonials, or invite you to join our marketing campaigns. For
          instance, if you inform us about a successful match on the app, we
          might ask if you would like to be featured in Croxroads's
          advertisements. Participation in these surveys and marketing campaigns
          is optional, and detailed information will be provided when we reach
          out to you. If you prefer not to be contacted for surveys or marketing
          campaigns, please get in touch with our Customer Support Team.
        </p>

        <h2 className="font-poppins text-2xl font-bold">Customer Support</h2>

        <p className="font-poppins">
          When you reach out to our Customer Support team through our Feedback
          Page, we will collect your email address and may also track your IP
          address. This information, along with the details you provide us, will
          assist us in addressing your query and resolving any issues you may
          have. We will maintain a record of our communications with you,
          including any complaints received from you regarding other users or
          from other users about you. These records will be retained for a
          certain period as required by law and internal policies following the
          deletion of your account.
        </p>

        <h2 className="font-poppins text-2xl font-bold">
          Cookies and similar technologies
        </h2>

        <p className="font-poppins">
          During your visit to our Sites or while using our App, we may
          automatically collect your personal data through the use of cookies or
          similar technologies. Cookies are small files that can be stored on
          your device or browser, enabling us to identify and remember you. To
          learn more about cookies, including how we utilize them and the
          options you have, please consult our Cookie Policy.
        </p>

        <h2 className="font-poppins text-3xl font-bold">
          2. USE OF USER INFORMATION
        </h2>

        <p className="font-poppins">
          Our primary objective is to ensure that your experience on our dating
          app is enjoyable and free of unpleasant surprises. To achieve this, we
          may utilize your Registration and other information in the following
          ways:
          <br />
          · Provide you with our services and features.
          <br />
          · Keep you informed about App updates and new features.
          <br />
          · Personalize the App and the content we deliver to you.
          <br />
          · Conduct research and analytics to understand how you interact with
          the App.
          <br />
          · Test new technologies and processes to enhance the App's
          functionality.
          <br />
          · Resolve disputes, troubleshoot problems, and enforce our Terms &
          Conditions.
          <br />
          · Investigate fraud, safeguard our legal rights, and enforce our Terms
          & Conditions.
          <br />
          Send you promotions and offers, subject to your consent, through
          direct marketing or other communication methods. You can withdraw from
          marketing at any time by mailing <br />
          us at humans@croxroads.app
          <br />
          Additionally, we have developed matching algorithms that use various
          data points to predict your compatibility with other users and provide
          profile recommendations. These algorithms consider the information you
          provide in your profile, your app activity, photo verification status,
          and device coordinates to determine potential matches. The processing
          of this data is necessary for the provision of our services and based
          on <br />
          legitimate interests.
          <br />
          To maintain a safe environment, we employ a combination of automated
          systems and moderators who monitor and review accounts, photos, and
          messages for any content that violates our Terms & Conditions. If an
          account or message is found to breach our guidelines, appropriate
          actions, such as warnings, access restrictions, or account blocks, may
          be taken. Users have the option to contact us to contest any
          decisions. We do not track real-time movements or store specific
          information about where individuals are studying, and all location
          data used for this purpose is permanently deleted once the results are
          generated.
        </p>

        <h2 className="font-poppins text-2xl font-bold">
          3. INFORMATION DISCLOSURE{" "}
        </h2>

        <p className="font-poppins">
          We have a strict policy regarding the disclosure of your Registration
          Information and personal data. However, there are limited
          circumstances where we may need to disclose your data, which are
          outlined below:
          <br />
          Service Providers: We may engage trusted third-party service providers
          who assist us in performing specific functions and services. In such
          cases, we may share your Registration Information or personal data
          with these providers solely for the purpose of carrying out these
          functions and services.
          <br />
          Moderators: Our app employs a team of moderators who monitor and
          approve content to ensure a safe and enjoyable experience. They may
          have access to certain data such as your name, user registration
          details, profile information, content of messages, and photographs.
          <br />
          Payment Processing and Telecommunications Companies: To facilitate
          payments for our premium services, we may share limited data with
          payment processing and telecommunications companies. This may include
          the cardholder name, address, card number, payment amount, and
          transaction date/time.
          <br />
          Law and Harm: We value responsible user behaviour and cooperate with
          law enforcement agencies and third parties to enforce their rights. If
          required by law or in response to lawful requests, we may disclose
          your information, including Registration Information, to address
          criminal investigations, protect vital interests, comply with legal
          obligations, address fraud or security issues, or safeguard the safety
          of individuals.
          <br />
          Business Transfers: In the event of a business transition or change of
          ownership within the Croxroads Group, such as a merger, acquisition,
          or sale of assets, your personal data may be disclosed as part of the
          transaction or insolvency process.
          <br />
          Marketing Services Providers: We collaborate with marketing services
          providers to deliver and measure the effectiveness of advertising
          campaigns on third-party websites and applications. This may involve
          sharing certain data, such as your advertising identifier, estimated
          location, age, gender, and information about your interactions with
          our Sites or App.
          <br />
          Anti-Spam and Anti-Fraud: To maintain a secure environment and combat
          spam and fraudulent activities, we may share data with other Croxroads
          Group companies. This may include your email address, phone number, IP
          address, social network ID, username, user agent string, and
          transaction/payment data.
          <br />
          Aggregated Information: We may share aggregated information, which
          includes personal data in a de-identified form, with third parties for
          industry analysis, demographic profiling, and similar purposes.
          <br />
          Please note that the extent of the disclosed data depends on the
          specific circumstances and the nature of the request or issue at hand.
          <br />
        </p>

        <h2 className="font-poppins text-2xl font-bold">
          4. WHAT OTHERS MAY SEE ABOUT YOU
        </h2>

        <p className="font-poppins">
          When using the Croxroads App, it's important to understand that
          anything you post or submit may be publicly viewable and accessible by
          both users and non-users of the app. We want our users to exercise
          caution when sharing information that could potentially become public.
          <br />
          Please be mindful of posting sensitive details about yourself on your
          profile, such as religious affiliation and health information. Certain
          Croxroads badges, like those indicating religion or political
          leanings, allow you to provide additional sensitive information on
          your profile. While sharing this information is voluntary, please
          remember that by doing so, you explicitly consent to our processing of
          the information and making it public to other users. Your Croxroads
          profile and any information you make available through the app,
          including details obtained from third-party accounts (such as
          Facebook, Instagram, or Spotify), may be viewed and shared by users,
          regardless of whether they are app users or not. For example, a user
          may recommend you as a match to their Facebook friends by sharing a
          screenshot of your profile picture, even if those friends are not
          Croxroads users.
          <br />
          Your privacy and security are important to us, and we encourage you to
          review our privacy policy for more information on how we handle your
          data.
        </p>

        <h2 className="font-poppins text-2xl font-bold">
          5. OUR POLICY TOWARDS AGE.
        </h2>

        <p className="font-poppins">
          While we want our creation to be enjoyed by as many people as
          possible, it's important to note that you must be at least 18 years
          old to use our app. Croxroads App, is not designed to collect
          information from or market to children, minors, or anyone under the
          age of 18. If you are under 18 years old, we kindly request that you
          refrain from providing us with any personal information. In the event
          that we become aware of a registration by a child, minor, or someone
          under the age of 18 who has shared personal information with us, we
          will take immediate action to terminate their registration.
          <br />
          6. SECURITY.
          <br />
          We prioritize the security of your information and take necessary
          precautions to protect it from loss, misuse, unauthorized access, and
          disclosure. We employ reasonable security measures, such as secured
          servers with firewalls, to maintain the confidentiality of your
          personal data.
          <br />
          However, it's important to note that no website or internet
          transmission can guarantee absolute security. While we strive to
          ensure the safety of your data, we cannot eliminate the possibility of
          unauthorized access, hacking, data loss, or other breaches. To assist
          you in keeping your information secure, we have provided some helpful
          tips below: · Always remember to log out of your account after each
          use to prevent unauthorized access by others.
          <br />
          · Do not share your Croxroads account password with anyone else.
          <br />
          · Periodically change your password for added security.
          <br />
          If you suspect that someone has gained access to your password or
          account, please follow the steps outlined here. Please be aware that
          the transmission of personal data to our site is done at your own
          risk, and we cannot guarantee its security during transmission.
        </p>

        <h2 className="font-poppins text-2xl font-bold">6. USER RIGHTS</h2>

        <p className="font-poppins">
          The privacy laws applicable in your country grant you certain rights
          regarding your personal data. These rights may include, but are not
          limited to, the following:
          <br />
          · Right to Information: You have the right to know what personal data
          an organization is processing and the reasons for such processing. We
          provide this information in our Privacy Policy.
          <br />
          · Right of Access: You can request a copy of your data that is being
          processed.
          <br />
          · Right of Rectification: If the data held about you is inaccurate,
          you have the right to have it corrected.
          <br />
          · Right to Erasure: Under certain circumstances, you have the right to
          have your data deleted.
          <br />
          · Right to Restrict Processing: In limited situations, you can request
          that the processing of your data be stopped, while the data itself is
          retained.
          <br />
          · Right to Data Portability: You can request a copy of certain data in
          a machine-readable format that can be transferred to another service
          provider.
          <br />
          · Right to Object: In specific circumstances, such as when data is
          processed based on legitimate interests or for marketing purposes, you
          have the right to object to such processing.
          <br />
          · Rights Related to Automated Decision-Making: If solely automated
          processing leads to a decision with legal or significant effects for
          you, you have the right to ensure that human intervention is involved
          in the decision-making process.
          <br />
          The specific rights applicable to you may vary depending on your
          country. It is important to familiarize yourself with the rights
          provided by the privacy laws in your country. If you wish to exercise
          any of the rights listed above, please EMAIL US at
          humans@croxroads.app
        </p>

        <h2 className="font-poppins text-2xl font-bold">7. DATA LOCATIONS.</h2>

        <p className="font-poppins">
          We want to ensure that you can access our app, regardless of your
          location. To provide this service, we have a global network of
          servers, including locations in the US, UK, EU, and India (for Users
          located in India). These servers are hosted in third-party data
          centers but are operated by Croxroads. Please note that data collected
          by Advertising Partners and other Service Providers may be stored
          outside of your country. However, we take appropriate measures to
          protect your data by implementing valid and legal mechanisms. If you
          would like more information about the safeguards we have in place,
          please reach out to us at humans@Croxroads.app
        </p>

        <h2 className="font-poppins text-2xl font-bold">
          8. DATA RETENTION AND DELETION.
        </h2>

        <p className="font-poppins">
          When you delete your Account, we ensure that it is no longer visible
          in the app. However we may retain some data as applicable law requires
          us to retain it (for example, certain personal data related to
          purchases made within the app may be kept for tax and accounting
          purposes).
          <br />
          It is necessary to demonstrate compliance with applicable law (for
          instance, if an account is blocked, we retain some account information
          and a record of the behavior leading to the block for evidential
          purposes in case of queries or legal claims related to the block).
          There is an ongoing issue, claim, or dispute that requires us to
          retain the relevant information until it is resolved.
          <br />
          The information needs to be retained for our legitimate business
          interests, such as fraud prevention and enhancing user safety and
          security (for instance, information may need to be retained to prevent
          a banned user from opening a new account due to unsafe behavior or
          security incidents).
          <br />
          Please note that even if you remove information from your profile or
          delete your Account, copies of that information may still be
          accessible or viewed by others to the extent it was previously shared
          or stored. We cannot control this, and we do not accept liability for
          such instances. If you have granted third-party applications or
          websites access to your personal information, they may retain it in
          accordance with their own terms of service or privacy policies. You
          deserve brownie points for reading this far.
        </p>

        <h2 className="font-poppins text-2xl font-bold">
          9. CHANGES TO THIS POLICY.
        </h2>

        <p className="font-poppins">
          As our dating app evolves, we may occasionally update this Privacy
          Policy. The latest version of the policy will always be available at
          our website Croxroads.app/privacy and will govern how we use your
          information. If we make any significant changes to the policy, we will
          notify you through appropriate means.
        </p>

        <h3
          onClick={() => navigate("/")}
          className="font-hero underline text-[#2F3FD4] cursor-pointer pb-8"
        >
          Return to Home
        </h3>
      </div>
    </div>
  );
};

export default Privacy;
