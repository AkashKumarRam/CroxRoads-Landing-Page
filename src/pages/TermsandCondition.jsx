import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsandCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="bg-[#F5F0F8]">
      <Navbar />
      <div className="pt-8">
        <div className="flex flex-col items-center space-y-10">
          <h1 className="font-poppins text-5xl text-center max-sm:hidden pl-5 pr-5">
            Terms & Conditions
          </h1>

          <h1 className="font-poppins text-3xl pr-2 pl-2 text-center sm:hidden font-semibold">
            Terms & Conditions
          </h1>
        </div>

        <div className="mt-10 flex flex-col pr-14 pl-14 space-y-9">
          <p className="font-poppins">
            Welcome to Croxroads' Terms and Conditions of Use (these "Terms").
            These Terms constitute a legally binding contract between you and
            Croxroads and govern your use of the Croxroads website or
            application ("Croxroads" or the "App"). We encourage you to
            carefully review these Terms before accessing, viewing, or using the
            App. By accessing, viewing, or using the App, you acknowledge that
            you have read, understood, and agree to be bound by these Terms.
            Please note that by accessing, viewing, or using the App, you are
            legally bound by these Terms, so it is important to read them
            thoroughly before proceeding.
          </p>

          <h2 className="font-poppins text-2xl font-bold">Eligibility:</h2>

          <p className="font-poppins">
            You must be at least 18 years old to use the App. By using the App,
            you confirm that you meet the minimum age requirement and that the
            information provided during registration is accurate and complete.
            If you are under 18 year you must have government approve consent
            with you to use the application.
          </p>

          <h2 className="font-poppins text-2xl font-bold">User Accounts:</h2>

          <p className="font-poppins ">
            &#x2022; Account Creation: You are responsible for creating and
            maintaining the confidentiality of your account credentials. You
            agree to provide accurate and up-to-date information during the
            registration process.
            <br />
            <br />
            &#x2022; Account Termination: We reserve the right to suspend or
            terminate your account if you violate these terms or engage in
            fraudulent activities.
          </p>

          <h2 className="font-poppins text-2xl font-bold">
            User Responsibilities:
          </h2>

          <p className="font-poppins">
            Appropriate Conduct: You agree to use the App responsibly and to
            treat other users with respect. You will not use the App for any
            illegal, offensive, or harmful purposes. · Reporting: If you
            encounter any abusive or inappropriate behaviour from other users,
            you agree to report such incidents to us immediately.<br/><br/>

            You agree to <br/><br/>

            &#x2022; Comply with all applicable laws and regulations, including but not limited to privacy laws, intellectual property laws, anti-spam laws, equal opportunity laws, and regulatory requirements.<br/><br/>
            &#x2022; Provide accurate and truthful information, including your real name and age, when creating your Croxroads account and profile.<br/><br/>
            &#x2022; Use the services in a professional and lawful manner..<br/><br/>
            &#x2022; You agree that you will not:<br/><br/>
            &#x2022; Engage in unlawful or unprofessional behavior, including but not limited to being dishonest, abusive, or discriminatory<br/><br/>
            &#x2022; Misrepresent your identity, age, current or previous positions, qualifications, or affiliations with a person or entity.<br/><br/>
            &#x2022; Disclose information without obtaining the necessary consent.<br/><br/>
            &#x2022; Stalk or harass any other user of the App.<br/><br/>
            &#x2022; Create or participate in pyramid schemes, fraud, or similar practices.<br/><br/>
            &#x2022; Develop, support, or use software, devices, scripts, robots, or any other means to scrape, copy, or extract data from Croxroads or its services without prior consent.<br/><br/>

            Croxroads encourages a positive and respectful community. If you encounter any abusive or inappropriate behavior or have any complaints regarding Member Content, you can report it to us by contacting our support team and providing details of the abuse or complaint. You can also report a user directly from their profile or in chat by using the appropriate reporting options. We reserve the right to investigate any potential violations of these Terms, user rights, or third-party rights. In our sole discretion, we may terminate a user's right to use the App without prior notice, as outlined in Section 1 above, and/or remove any improper, infringing, or unauthorized Member Content submitted to the App.<br/><br/>

            Please note that Croxroads does not have control over the actions or statements of its users. Therefore, you are solely responsible for your interactions with other users of the App.<br/>

            YOU UNDERSTAND THAT CROXROADS DOES NOT CURRENTLY CONDUCT CRIMINAL BACKGROUND CHECKS ON ITS USERS. CROXROADS ALSO DOES NOT INQUIRE INTO THE BACKGROUNDS OF ITS USERS OR ATTEMPT TO VERIFY THE STATEMENTS OF ITS USERS. CROXROADS MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING THE CONDUCT OF ANY USERS OR THEIR COMPATIBILITY WITH ANY CURRENT OR FUTURE USERS. CROXROADS RESERVES THE RIGHT TO CONDUCT ANY CRIMINAL BACKGROUND CHECKS OR OTHER SCREENINGS, SUCH AS SEX OFFENDER REGISTRATION SEARCHES, AT ANY TIME AND TO USE AVAILABLE PUBLIC RECORDS FOR ANY PURPOSE.<br/>

            By using the App, you release Croxroads and its successors from any claims, demands, losses, damages, rights, and actions of any kind, including personal injuries, death, and property damage, arising directly or indirectly from your interactions with or conduct of other users of the App. If you are a resident of California, you waive California Civil Code Section 1542, which states, "A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in their favor at the time of executing the release and that, if known, would have materially affected their settlement with the debtor or released party." This release does not apply to claims, demands, losses, damages, rights, and actions arising from unconscionable commercial practices, fraud, deception, false promises, misrepresentation, concealment, suppression, or omission of any material fact in connection with the App by Croxroads.<br/>

            Unauthorized scraping or replication of any part of the App is expressly prohibited without our prior consent. This includes using any means, automated or otherwise, except through our currently available, published interfaces, unless you have obtained specific permission in a separate agreement with us.<br/><br/>

            Matchmaking and Communication:<br/><br/>
            &#x2022; Matchmaking: The App provides a platform for matching users for double dates. However, we do not guarantee successful matches or connections.<br/><br/>

            &#x2022; User Interactions: Users are responsible for their own interactions during meetups. We do not assume liability for any incidents or damages that may occur during or as a result of these interactions.
In-App Purchases and Subscriptions<br/><br/>

            &#x2022; In-App Purchases: Croxroads may offer products and services for purchase within the App ("In-App Purchase"). If you choose to make an In-App Purchase, you acknowledge and agree that additional terms, disclosed to you at the point of purchase, may apply, and that such additional terms are incorporated herein by reference.<br/><br/>

            &#x2022; Payment Methods: You may make an In-App Purchase through the following payment methods: (a) making a purchase through a third-party platform, such as the Apple App Store or Google Play Store ("Third Party Store"), or (b) paying with your credit card, debit card, or PayPal account, which will be processed by a third-party processor. By making an In-App Purchase, you authorize us to charge your chosen Payment Method. If payment is not received from your chosen Payment Method, you agree to promptly pay all amounts due upon demand by us.<br/><br/>

            &#x2022; Subscriptions and Auto-Renewal: Croxroads may offer certain services as automatically renewing subscriptions, such as one-week, one-month, or three-month subscriptions ("Premium Services"). If you purchase an automatically renewing subscription, your subscription will automatically renew at the end of the period, unless you cancel, at Croxroads' then-current price for such subscriptions. To avoid charges for a new subscription period, you must cancel before the end of the then-current subscription period. Deleting your account or the application from your device does not cancel your subscription. You will be notified of any changes in the pricing of the Premium Services to which you have subscribed and given an opportunity to cancel. If Croxroads changes the prices and you do not cancel your subscription, you agree to be charged at Croxroads' then-current pricing for the subscription.<br/><br/>

            &#x2022; Cancelling Subscriptions: If you purchased a subscription directly from Croxroads, you may cancel or change your Payment Method via the payment settings option under your profile. If you purchased a subscription through a Third Party Store, such as the Apple App Store or the Google Play Store, you will need to access your account with that Third Party Store and follow the instructions to change or cancel your subscription. If you cancel your subscription, you may use your subscription until the end of the period you last paid for. However, (i) you will not be eligible for a prorated refund except as set forth in the subsection entitled "Refunds" below, (ii) your subscription will not be renewed when that period expires, and (iii) you will no longer be able to use the Premium Services or In-App Purchases enabled by your subscription.<br/><br/>

            &#x2022; Free Trials: If you sign up for a free trial and do not cancel, your trial may convert into a paid subscription, and your Payment Method will be charged at the then-current price for such subscription. Once your free trial converts to a paid subscription, your paid subscription will continue to automatically renew at the end of each period, and your Payment Method will be charged until you cancel. To avoid charges for a new subscription period, you must cancel before the end of the then-current subscription period or free trial period, as described above. Deleting your account or the application from your device does not cancel your free trial. If you have previously signed up for a free trial on Croxroads through the Apple Store or Google Play Store, you will not be eligible for another free trial, and you will be automatically signed up for a subscription and charged as described in this paragraph.<br/><br/>

            &#x2022;  Refunds: Generally, all charges for purchases are nonrefundable, and there are no refunds or credits for partially used periods.<br/><br/>


            Privacy and Data Protection:<br/><br/>
            &#x2022;  Data Collection: We collect and store certain user information in accordance with our Privacy Policy, which is a separate document available on our website.<br/><br/>

            &#x2022;  Data Security: We take appropriate measures to protect your personal information and handle it securely, in compliance with applicable data protection laws.<br/><br/>

            Intellectual Property:<br/><br/>

            &#x2022;  Ownership: All content provided by the App, including logos, designs, trademarks, and any other intellectual property, remains the exclusive property of the App.<br/><br/>
            &#x2022;  Unauthorized Use: You are prohibited from using, reproducing, or distributing any app-related content without our prior written consent.<br/><br/>

          </p>

          <h2 className="font-poppins text-2xl font-bold">Modifications and Termination:</h2>

          <p className="font-poppins">
          &#x2022;  App Changes: We reserve the right to modify or discontinue the App or its features at any time without prior notice.<br/><br/>

          &#x2022;  Account Termination: You may terminate your account at any time. We also reserve the right to terminate or suspend accounts for violations of these terms or other reasons.<br/><br/>

          Limitation of Liability:<br/><br/>

          &#x2022;  Exclusion of Certain Damages: Neither Croxroads nor any of its owners will be liable for any damages, direct, indirect, incidental, consequential, special, or punitive, including, without limitation, loss of data, income, profit, or goodwill, loss of or damage to property, and claims of third parties arising out of your access to or use of the App, Site, our content, or any user-generated content, however caused, whether based on breach of contract, tort (including negligence), proprietary rights infringement, product liability, or otherwise.<br/><br/>

          &#x2022; Waiver of Claims: By using the App or Site, you hereby waive any and all claims arising out of your use of the App or Site.<br/><br/>

          &#x2022;  Dissatisfaction Remedies: If you become dissatisfied in any way with the App or Site, your sole and exclusive remedy is to stop using the App and Site.<br/><br/>

          &#x2022;  Applicability: The limitations and exclusions of liability, disclaimers, and exclusive remedies specified herein shall apply even if Croxroads was advised of the possibility of such damages. However, some states or jurisdictions may not allow the disclaimer of implied warranties or the exclusion or limitation of certain types of damages, so these provisions may not apply to you.
· Maximum Liability: If any portion of this limitation on liability is found to be invalid or unenforceable for any reason, then Croxroads' aggregate liability shall not exceed one hundred dollars ($40).<br/><br/>

          &#x2022;  Fundamental Element: The limitation of liability set forth herein is a fundamental element of the basis of the bargain between you and Croxroads and reflects a fair allocation of risk. The App and Site would not be provided without such limitations, and you agree that the limitations and exclusions of liability, disclaimers, and exclusive remedies specified herein will survive even if found to have failed in their essential purpose.<br/><br/>

          &#x2022;  Exceptions: The foregoing limitations do not apply to liability arising from any fraud or fraudulent misrepresentations, or any other liability that cannot be limited by applicable law.User Responsibility: You acknowledge and agree that your use of the App is at your own risk, and we are not liable for any damages or losses incurred during app usage or meetups.<br/><br/>

          &#x2022;  Caution and Judgment: You should exercise caution, use common sense, and rely on your own judgment when interacting with other users and engaging in meetups.<br/><br/>


          Governing Law and Dispute Resolution:<br/><br/>

          &#x2022;  Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction].<br/><br/>

          &#x2022;  Dispute Resolution: Any disputes arising from the use of the App shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction]. Alternative dispute resolution methods, such as mediation or arbitration, may be suggested.<br/><br/>

          Push Notifications; Location-Based Features<br/><br/>

          &#x2022;  Communications: Croxroads may provide you with emails, text messages, push notifications, alerts, and other messages related to the App and/or the Croxroads services. These communications may include information about enhancements, offers, products, events, promotions, and other relevant updates. By using the App, you agree to receive such communications from Croxroads.<br/><br/>

          &#x2022;  Push Notifications/Alerts: Upon downloading the App, you will be prompted to accept or deny push notifications/alerts. If you deny, you will not receive any push notifications/alerts. If you accept, push notifications/alerts will be automatically sent to your device. To opt-out of push notifications/alerts, you may change your notification settings on your mobile device.<br/><br/>

          &#x2022;  Other Communications: For other types of messaging or communications, such as emails or text messages, you can unsubscribe or opt-out by following the specific instructions included in such communications or by contacting us at [email address].<br/><br/>

          &#x2022;  Location-Based Features: The App may provide access to location-based content, products, services, and other materials. To enable these features, the App may use reference points such as GPS, Bluetooth, and software within your mobile device to determine your location. If you have disabled GPS, Bluetooth, or other location-determining software on your mobile device or do not authorize the App to access your location data, you may not be able to access certain location-specific content, products, services, and materials.<br/><br/>

          &#x2022; Privacy: For more information on how Croxroads uses and retains your information, including location data, please refer to our Privacy Policy.<br/><br/>

          Severability:<br/><br/>
          If any provision of these terms and conditions is found to be invalid or unenforceable, it will not affect the validity of the remaining provisions.<br/><br/>

          Entire Agreement:<br/><br/>
          These Terms of Service will remain in effect from the date of acceptance (as described in the preamble) until terminated in accordance with the terms outlined below.<br/>
          If you wish to terminate these Terms, you can do so by: (a) notifying Croxroads at any time, and (b) closing your Account. Please send your termination notice to the address provided by Croxroads. Please note that if you terminate these Terms, any active subscriptions will continue until the end of the current subscription period for which applicable fees have been paid, and you will not be eligible for a refund unless otherwise stated in Section 5.
Croxroads reserves the right to terminate or suspend these Terms, including your Account, in the event of a breach of these Terms or as required by applicable law. Croxroads retains sole discretion in determining terminations for cause, and shall not be liable to you or any third party for any termination of your Account.<br/>
If Croxroads determines, in its sole discretion, that you have violated any portion of these Terms or engaged in inappropriate conduct on the App, Croxroads may take the following actions: (a) send a warning via email (to any email addresses you have provided to Croxroads) notifying you of the violation; (b) delete your User Content; (c) deactivate your Account; (d) cancel your subscription(s); (e) notify and/or cooperate fully with law enforcement authorities for further action regarding your User Content; and/or (f) pursue any other actions deemed appropriate by Croxroads.<br/>
Termination of these Terms or your Account will result in the removal of access to your Account, as well as all associated information and content within your Account.<br/>
All provisions of these Terms that, by their nature, should survive termination will continue to apply, including but not limited to the Arbitration Agreement, ownership provisions, warranty disclaimers, and limitation of liability.<br/>
          </p>

          <h3
            onClick={() => navigate("/")}
            className="font-hero underline text-[#2F3FD4] cursor-pointer pb-8"
          >
            Return to the Homepage
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsandCondition;
