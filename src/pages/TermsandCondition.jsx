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
            Welcome to Croxroads' Terms and Conditions of Use (referred to as
            "Terms"). This agreement outlines the rights and obligations of both
            you and the Croxroads Group (as further defined below) before you
            begin using the Croxroads website or application (referred to as
            "Croxroads" or the "App"). We encourage you to read these Terms
            carefully before accessing, viewing, or using the App, as they
            legally bind you once you engage with the platform (so it's best to
            familiarize yourself with them first!).
            <br />
            Please note that if you subscribe to our services for a specific
            period (referred to as the "Initial Term"), your subscription will
            automatically renew for additional periods of the same duration as
            the Initial Term, subject to Croxroads' then-current fee for such
            services, unless you cancel your subscription as outlined in Section
            5 below.
          </p>

          <h2 className="font-poppins text-2xl font-bold">1. RULES</h2>

          <p className="font-poppins">
            Before you can start using Croxroads, you will need to create an
            account ("Account"). To create an Account, you must meet the
            following requirements:
            <br />
            · Be at least 18 years old or the age of majority required by the
            laws of your home country to enter into a legally binding contract.
            <br />
            · Be legally allowed to use the App according to the laws of your
            home country. You can create an Account by signing up with your
            mobile number. By providing your mobile number, you authorize us to
            use it for verification and account creation purposes. For more
            details about the information we collect and how we use it, please
            refer to our Privacy Policy. By using our App, you acknowledge that
            we may collect and use your data and information in accordance with
            our Privacy Policy.
            <br />
            Please note that it is not allowed to use someone else's Account or
            share your Account with others without permission.
            <br />
            While we hope you have a great experience on Croxroads, if you ever
            decide to leave, you can contact us at humans@croxroads.app. Your
            Account will be immediately removed, although it may take some time
            for all of Your Content (as defined below) to be completely removed
            from the App. Your profile information will be handled in accordance
            with our Privacy Policy. If you delete your Account but attempt to
            create a new account within a certain timeframe using the same
            credentials, we will reactivate your Account for you.
            <br />
            We employ a combination of automated systems and a team of
            moderators to monitor and review accounts and messages for any
            content that violates these Terms. We reserve the right, at our sole
            discretion, to terminate or suspend any Account, restrict access to
            the App, or utilize any operational, technological, legal, or other
            means available to enforce the Terms (including, but not limited to,
            blocking specific IP addresses), without prior notice or liability.
            Additionally, we expressly reserve the right to terminate or suspend
            your Account without notice in the following circumstances: (1) for
            violating these terms, (2) due to your conduct on the App or your
            interactions with other App users (including offline conduct) if, in
            our sole discretion, we determine your conduct to be inappropriate
            or improper, (3) if we or our affiliates, in our or their sole
            discretion, determine your conduct on other apps operated by our
            affiliates to be inappropriate or improper, or (4) for any other
            reasons that we, in our sole discretion, deem justifies termination.
            If your Account is terminated or suspended, you acknowledge that you
            will not receive a refund for any paid services or features that you
            have already been charged for.
            <br />
            Please note that accessing, tampering with, or using non-public
            areas of the App or our systems is strictly prohibited. Certain
            parts of the App may not be accessible if you have not registered
            for an Account.
          </p>

          <h2 className="font-poppins text-2xl font-bold">
            2. TYPES OF CONTENT
          </h2>

          <p className="font-poppins ">
            On Croxroads, there are three types of content that you can access
            on the App:
            <br />
            · Content that you upload and provide ("Your Content").
            <br />
            · Content that members provide ("Member Content").
            <br />
            · Content that Croxroads provides, including databases and software
            ("Our Content"). To ensure a positive and respectful environment,
            there are certain types of content that we cannot allow on
            Croxroads. We want our users to express themselves, but we must
            impose restrictions on content that:
            <br />
            · Contains offensive language or imagery that may harass, upset,
            embarrass, alarm, or annoy others. This includes language that could
            be considered discriminatory based on race, color, ethnicity,
            national origin, religion, disability, sexual orientation, gender
            expression, gender identity, or physical appearance.
            <br />
            · Is obscene, pornographic, violent, or otherwise violates human
            dignity. This includes language that could be considered
            discriminatory based on race, color, ethnicity, national origin,
            religion, disability, sexual orientation, gender expression, gender
            identity, or physical appearance.
            <br />
            · Is abusive, insulting, threatening, discriminatory, or promotes
            racism, sexism, hatred, or bigotry. This includes language that
            could be considered discriminatory based on race, color, ethnicity,
            national origin, religion, disability, sexual orientation, gender
            expression, gender identity, or physical appearance.
            <br />
            · Encourages illegal activities, such as terrorism or racial hatred,
            or constitutes a criminal offense in itself.
            <br />
            · Is defamatory or libelous.
            <br />
            · Involves commercial activities, such as sales, competitions,
            advertising, links to other websites, or premium line telephone
            numbers.
            <br />
            · Involves the transmission of "junk" mail or spam.
            <br />
            · Contains spyware, adware, viruses, corrupt files, worms, or other
            malicious code designed to interrupt, damage, or disrupt software,
            hardware, telecommunications, networks, servers, or other equipment.
            It also includes any material designed to damage, interfere with,
            intercept, or expropriate data or personal information, whether from
            Croxroads or otherwise.
            <br />
            · Infringes upon third-party rights, including intellectual property
            rights and privacy rights.
            <br />
            · Displays another person without their consent.
            <br />
            · Is harmful to minors.
            <br />
            · Impersonates another person or falsely states your name.
            <br />
            Croxroads has a zero-tolerance policy for this type of content. We
            strive to maintain a safe and respectful community for all our
            users.
          </p>

          <h2 className="font-poppins text-xl font-bold">Your Content</h2>

          <p className="font-poppins">
            You agree that Your Content must comply with our Guidelines at
            https://croxroads.app/en/guidelines, as updated from time to time.
            As Your Content is unique, you are responsible and liable for it.
            You will indemnify, defend, release, and hold Croxroads harmless
            from any claims made in connection with Your Content. We understand
            it's a lot to take in, but remember, you are what you post!
            <br />
            On your individual profile page, you may not display any personal
            contact or banking information, whether it pertains to you or any
            other person. This includes names, home addresses or postcodes,
            telephone numbers, email addresses, URLs, credit/debit card details,
            or other banking information. If you choose to share personal
            information about yourself with other users, whether through email
            or any other means, please be aware that it is at your own risk. We
            encourage you to exercise the same caution in disclosing personal
            details online as you would in any other situation.
            <br />
            Since Croxroads is a public community, Your Content will be
            instantly visible to other users of the App worldwide. Before
            posting, ensure that you are comfortable sharing Your Content. By
            uploading Your Content on Croxroads, you represent and warrant that
            you have all the necessary rights and licenses to do so. You also
            grant us a non-exclusive, royalty-free, perpetual, worldwide license
            to use Your Content in various ways, including editing, copying,
            modifying, adapting, translating, reformatting, creating derivative
            works, incorporating into other works, advertising, distributing,
            and making it available to the general public, whether in whole or
            in part, and in any current or future format or medium. We may
            assign and sub-license the above license to our affiliates and
            successors without seeking further approval from you. Please note
            that we are not obligated to store Your Content, so if it's
            important to you, it's advisable to keep a copy.
            <br />
            To prevent the unauthorized use of Your Content by other members or
            third parties outside of Croxroads, you authorize us to act on your
            behalf. This includes the authority (but not the obligation) for us
            to send takedown notices, such as Government Takedown Notices, on
            your behalf if Your Content is taken and used by third parties
            outside of Croxroads.
          </p>

          <h2 className="font-poppins text-xl font-bold">Member Content</h2>

          <p className="font-poppins">
            Other members of Croxroads will also share content through the App.
            Member Content belongs to the user who posted it and is stored on
            our servers and displayed through the App under the user's
            direction.
            <br />
            You do not possess any rights regarding other users' Member Content,
            and you may only utilize their personal information within the scope
            of Croxroads' purpose, which is to facilitate connections between
            individuals. You are prohibited from using other users' information
            for commercial purposes, spamming, harassing, stalking, or making
            unlawful threats. If you misuse other users' information, we reserve
            the right to terminate your Account.
            <br />
            Member Content is subject to the terms and conditions outlined by
            the Government Acts/Policies that you reside in. If you have a
            complaint about Member Content, please contact
            <br /> us at humans@croxroads.app
          </p>

          <h2 className="font-poppins text-xl font-bold">Our Content</h2>

          <p className="font-poppins">
            You may be curious about what happens to the rest of the Content on
            Croxroads. Well, it belongs to us! Any additional text, content,
            graphics, user interfaces, trademarks, logos, sounds, artwork, and
            other intellectual property found on Croxroads, including the
            Croxroads software and database(s), are either owned, controlled, or
            licensed by us and are protected by copyright, trademark, database
            rights, and/or other intellectual property laws. We retain all
            rights, title, and interest in and to Our Content at all times.
            <br />
            We grant you a limited, personal, non-transferable, revocable,
            non-exclusive license to access and use Our Content, without the
            right to sublicense, under the following conditions:
            <br />
            · You shall only use, sell, modify, or distribute Our Content as
            permitted by the functionality of the App.
            <br />
            · You shall not use our name in metatags, keywords, and/or hidden
            text.
            <br />
            · You shall not create derivative works from Our Content or engage
            in scraping, disabling, decompiling, analyzing, or commercially
            exploiting Our Content, either in whole or in part.
            <br />
            · You shall use Our Content solely for lawful purposes. We reserve
            all other rights.
            <br />
            No Obligation to Pre-Screen Content.
            <br />
            As Croxroads is an online community, we generally aim to minimize
            interference and, therefore, do not assume any obligation to
            pre-screen Your Content or any Member Content. However, there may be
            instances where we need to intervene, and we reserve the right to
            review, pre-screen, refuse, and/or remove any Member Content and
            Your Content, including content exchanged between users in direct
            messages.
          </p>

          <h2 className="font-poppins text-2xl font-bold">
            3. RESTRICTIONS ON THE APP
          </h2>

          <p className="font-poppins">
            On using our app, you agree to:
            <br />
            • Comply with all applicable laws, including privacy laws,
            intellectual property laws, anti-spam laws, equal opportunity laws,
            and regulatory requirements.
            <br />
            • Use your real name and real age when creating your Croxroads
            account and on your profile.
            <br />
            • Use the services in a professional manner.
            <br />
            You agree that you will not:
            <br />
            • Engage in unlawful or unprofessional behavior, including
            dishonesty, abuse, or discrimination.
            <br />
            • Misrepresent your identity, age, current or previous positions,
            qualifications, or affiliations.
            <br />
            • Disclose information without consent.
            <br />
            • Stalk or harass any other user of the App.
            <br />
            • Create or participate in pyramid schemes, fraud, or similar
            practices.
            <br />
            • Develop, support, or use software, devices, scripts, robots, or
            other means to scrape or copy profiles and data from Croxroads.
            <br />
            We do not tolerate misbehavior in the Croxroads community. If you
            encounter any abuse or wish to report Member Content, please contact
            us with a detailed outline of the abuse or complaint. You can also
            report a user directly from their profile or in chat by clicking the
            "Block & Report" link. We reserve the right to investigate
            violations of these Terms, user rights, or third-party rights. In
            our sole discretion, we may terminate a user's right to use the App
            without prior notice, as stated in Section 1 above, and/or remove
            improper, infringing, or unauthorized Member Content submitted to
            the App.
            <br />
            We do not control the actions or statements of our users, so you are
            solely responsible for your interactions with other users of the
            App.
            <br />
            YOU UNDERSTAND THAT CROXROADS DOES NOT CURRENTLY CONDUCT CRIMINAL
            BACKGROUND CHECKS ON ITS USERS. CROXROADS ALSO DOES NOT VERIFY THE
            BACKGROUNDS OF ITS USERS OR ATTEMPT TO VERIFY THE STATEMENTS OF ITS
            USERS. CROXROADS MAKES NO REPRESENTATIONS OR WARRANTIES REGARDING
            USER CONDUCT OR COMPATIBILITY. <br />
            CROXROADS RESERVES THE RIGHT TO CONDUCT CRIMINAL BACKGROUND CHECKS
            OR OTHER SCREENINGS (SUCH AS SEX OFFENDER REGISTRATION SEARCHES) AT
            ANY TIME AND TO USE AVAILABLE PUBLIC RECORDS FOR ANY PURPOSE.
            <br />
            You agree to release Croxroads and its successors from any claims,
            demands, losses, damages, rights, and actions arising from your
            interactions or conduct with other users of the App. Scraping or
            replicating any part of the App without our prior consent is
            strictly prohibited. This includes using any means, automated or
            otherwise, except through our currently available published
            interfaces unless specifically allowed in a separate agreement with
            us.
          </p>

          <h2 className="font-poppins text-2xl font-bold">4. PRIVACY</h2>

          <p className="font-poppins">
            For information regarding how Croxroads collects, uses, and shares
            your personal data, please refer to our Privacy Policy. By using
            Croxroads, you acknowledge and agree that we may utilize this data
            in accordance with our Privacy Policy.
          </p>

          <h2 className="font-poppins text-2xl font-bold">5. PAYMENT TERMS</h2>

          <p className="font-poppins">
            Croxroads may provide products and services for purchase within the
            app ("In-App Purchase"). If you decide to make an In-App Purchase,
            you acknowledge and agree that additional terms, which will be
            disclosed to you at the time of purchase, may apply and are
            considered part of these terms.
            <br />
            You can make an In-App Purchase using the following payment methods
            ("Payment Method"): (a) making a purchase through a third-party
            platform such as the Apple App Store and Google Play Store ("Third
            Party Store"), or (b) paying with your credit card, debit card, or
            PayPal account, which will be processed by a third-party processor.
            By making an In-App Purchase, you authorize us to charge your chosen
            Payment Method. If we do not receive payment from your chosen
            Payment Method, you agree to promptly pay all amounts owed upon our
            request.
            <br />
            Subscriptions and Auto-Renewal: Croxroads may offer certain services
            as automatically renewing subscriptions, such as a one-week
            subscription, one-month subscription, or three-month subscription
            ("Premium Services"). If you purchase an automatically renewing
            subscription, your subscription will automatically renew at the end
            of each period unless you cancel it. The renewal will be charged at
            Croxroads' current price for such subscriptions. To avoid charges
            for a new subscription period, you must cancel before the end of the
            current subscription period. Deleting your account or uninstalling
            the app from your device does not cancel your subscription. We will
            notify you of any changes in pricing for the Premium Services you
            have subscribed to and provide an opportunity to cancel. If you do
            not cancel your subscription after price changes, you agree to be
            charged at Croxroads' then-current pricing for the subscription.
            <br />
            Cancellation of Subscriptions: If you purchased a subscription
            directly from Croxroads, you can cancel or change your Payment
            Method through the payment settings option in your profile. If you
            purchased a subscription through a Third Party Store like the Apple
            App Store or Google Play Store, you will need to access your account
            with that Third Party Store and follow their instructions to cancel
            or change your subscription. If you cancel your subscription, you
            may continue to use it until the end of the period you have paid
            for. However, you will not be eligible for a prorated refund (except
            as described in the "Refunds" section below), your subscription will
            not renew, and you will no longer be able to access the Premium
            Services or In-App Purchases enabled by your subscription. Free
            Trials: If you sign up for a free trial and do not cancel, your
            trial may convert into a paid subscription, and your Payment Method
            will be charged at the then-current price for that subscription.
            Once your free trial converts to a paid subscription, it will
            automatically renew at the end of each period, and your Payment
            Method will be charged unless you cancel. To avoid charges for a new
            subscription period, you must cancel before the end of the current
            subscription period or free trial period. Deleting your account or
            uninstalling the app does not cancel your free trial. If you have
            previously signed up for a free trial on Croxroads through the Apple
            Store or Google Play Store, you will not be eligible for another
            free trial and will be automatically enrolled in a subscription and
            charged accordingly. Refunds: Please note that all charges for
            purchases are nonrefundable, and there are no refunds or credits for
            partially used periods. We do not offer any refund.
            <br />
            Taxes: The payments required under this Section 5 do not include any
            Sales Tax that may be applicable to the Premium Services provided
            under these terms. If Croxroads determines that it has a legal
            obligation to collect Sales Tax from you, it will do so in addition
            to the payments required under this Section 5. If any Premium
            Services or payments for Premium Services are subject to Sales Tax
          </p>

          <h2 className="font-poppins text-2xl font-bold">6. VIRTUAL ITEMS</h2>

          <p className="font-poppins">
            At times, you may have the option to purchase special limited-use
            features from Croxroads, referred to as "Virtual Items." These
            Virtual Items are a limited license right governed by this agreement
            and do not constitute the sale of any rights. You can only purchase
            Virtual Items through Croxroads or its authorized partners. Please
            note that Croxroads does not offer any refunds for Virtual Items,
            and all purchases and redemptions of Virtual Items made through our
            services are final and non-refundable.
            <br />
            The Virtual Item balance shown in your account represents the extent
            of your license to access Virtual Items and does not constitute a
            real-world balance or stored value. There are no fees for non-use of
            Virtual Items. Your license in Virtual Items will terminate if
            Croxroads ceases to provide services or if your account is closed or
            terminated. Additionally, if you cancel your subscription, your
            ability to use Virtual Items obtained through subscriptions may also
            come to an end.
            <br />
            Croxroads reserves the right, in its sole discretion, to charge fees
            for accessing or using Virtual Items or to distribute Virtual Items
            with or without charge. Croxroads may manage, regulate, control,
            modify, or eliminate Virtual Items at any time, which may affect
            their perceived value or purchase price, if applicable. You are not
            permitted to sell, redeem, or transfer Virtual Items to any person
            or entity. Virtual Items can only be redeemed through our services.
            <br />
            By using Croxroads, you acknowledge and agree that Croxroads is not
            obligated to provide refunds for any reason. Furthermore, you will
            not receive any money or compensation for unused Virtual Items when
            your account is closed, regardless of whether the closure was
            voluntary or involuntary.
          </p>

          <h2 className="font-poppins text-2xl font-bold">
            7. PUSH NOTIFICATIONS; LOCATION-BASED FEATURES
          </h2>

          <p className="font-poppins">
            Croxroads may send you emails, text messages, push notifications,
            alerts, and other messages related to the app and the Croxroads
            services. These messages may include information about app
            enhancements, offers, products, events, and promotions. When you
            download the app, you will be prompted to accept or deny push
            notifications and alerts. If you deny, you will not receive any push
            notifications or alerts. If you accept, push notifications and
            alerts will be sent to you automatically. If you no longer wish to
            receive push notifications or alerts from the app, you can opt out
            by adjusting your notification settings on your mobile device.
            <br />
            Regarding other types of messaging or communications, such as emails
            and text messages, you can unsubscribe or opt out by following the
            instructions provided in those communications or by sending a
            request to humans@ croxroads.app
            <br />
            The app may provide you with access to certain content and
            opportunities, as well as offer products, services, and materials
            based on your location. To enable these features, the app will
            determine your location using reference points such as GPS,
            Bluetooth, or software within your mobile device. If you have
            disabled GPS, Bluetooth, or other location determining software on
            your mobile device or if you do not authorize the app to access your
            location data, you will not be able to access location-specific
            content, products, services, and materials. For more information on
            how the app utilizes and protects your information, please refer to
            the Privacy Policy.
          </p>

          <h2 className="font-poppins text-2xl font-bold">8. DISCLAIMER </h2>

          <p className="font-poppins">
            The Croxroads app, site, our content, and member content are
            provided to you "as is" and "as available" without any warranties,
            whether express or implied, including fitness for a particular
            purpose, title, or non-infringement. We do not guarantee the
            compatibility of any matches. If applicable law does not allow the
            exclusion of express or implied warranties, we grant the minimum
            warranty required by law. No advice or information, whether oral or
            written, shall create any warranty, representation, or guarantee
            that is not expressly stated in this section. Furthermore, we do not
            make any warranties regarding the uninterrupted, secure, or
            error-free operation of the app or site. We cannot guarantee that
            your use of the app or site will meet your expectations, or that the
            app, site, our content, member content, or any portion thereof, is
            correct, accurate, or reliable. Your use of the app or site is at
            your own risk. You are solely responsible for your interactions with
            other members. The Croxroads app is not responsible for the conduct
            of any user. We do not conduct criminal background checks on our
            members.
            <br />
            9. LIMITATION OF LIABILITY
            <br />
            Neither Croxroads nor any owner will be liable for any damages,
            whether direct, indirect, incidental, consequential, special, or
            punitive, including but not limited to loss of data, income, profit,
            or goodwill, loss or damage to property, and claims of third parties
            arising from your access to or use of the app, site, our content, or
            any member content. These damages can arise from various causes,
            such as breach of contract, tort (including negligence),
            infringement of proprietary rights, product liability, or any other
            legal theory. This limitation of liability applies even if we were
            advised of the possibility of such damages. If you become
            dissatisfied with the app or site in any way, your sole and
            exclusive remedy is to discontinue your use of the app and site.
            <br />
            By using the app or site, you hereby waive any and all claims
            arising from your use of the app or site. However, please note that
            some states may not allow the disclaimer of implied warranties or
            the exclusion or limitation of certain types of damages, so these
            provisions may not apply to you. If any part of this limitation on
            liability is found to be invalid or unenforceable for any reason,
            our aggregate liability shall not exceed one hundred Indian rupees
            (₹100).
            <br />
            The limitation of liability stated here is an essential element of
            the agreement between you and Croxroads and represents a fair
            allocation of risk. The app and site would not be provided to you
            without these limitations. You agree that the limitations and
            exclusions of liability, disclaimers, and exclusive remedies
            specified in this agreement will continue to apply even if they are
            found to have failed in their essential purpose. Please note that
            this limitation of liability does not apply to liability arising
            from fraud, fraudulent misrepresentations, or any other liability
            that cannot be limited by applicable law.
          </p>

          <h2 className="font-poppins text-2xl font-bold">10. INDEMNITY</h2>

          <p className="font-poppins">
            All the actions you take and information you post on Croxroads
            remain your responsibility. Therefore, you agree to indemnify,
            defend, release, and hold us, our partners, licensors, affiliates,
            contractors, officers, directors, employees, representatives, and
            agents harmless from any claims, damages (actual and/or
            consequential), actions, proceedings, demands, losses, liabilities,
            costs, and expenses (including reasonable legal fees) incurred by us
            and arising as a result of or in connection with the following:
            <br />
            · Any negligent acts, omissions, or willful misconduct on your part.
            <br />
            · Your access to and use of the app.
            <br />
            · The uploading or submission of content to the app by you.
            <br />
            · Any breach of these terms by you.
            <br />
            · Your violation of any law or the rights of any third party.
            <br />
            We have the exclusive right to settle, compromise, and pay any
            claims or causes of action brought against us without requiring your
            prior consent. If we request, you will fully and reasonably
            cooperate with us in the defense of any relevant claim.
            <br />
            Please note that the above provision does not require you to
            indemnify Croxroads for any unconscionable commercial practice,
            fraud, deception, false promise, misrepresentation, concealment,
            suppression, or omission of any material fact in connection with the
            app.
          </p>

          <h2 className="font-poppins text-2xl font-bold">
            11. PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT
          </h2>

          <p className="font-poppins">
            If you believe any content on Croxroads infringes the copyright in a
            work that you own, please submit a notification alleging such
            infringement at humans@croxroads.app
          </p>

          <h2 className="font-poppins text-2xl font-bold">
            12. THIRD PARTY APP STORE
          </h2>

          <p className="font-poppins">
            The following additional terms and conditions apply to you if you
            download the Croxroads App from a Third Party Store. If the other
            terms and conditions of these Terms are less restrictive than or
            conflict with the terms and conditions in this section, the more
            restrictive or conflicting terms and conditions in this section will
            apply, but only in relation to the Croxroads App and the Third Party
            Store. You acknowledge and agree to the following: · These Terms are
            solely between you and the Croxroads App, not with the providers of
            the Third Party Store. The Croxroads App is solely responsible for
            its content. If these Terms provide usage rules for the App that are
            less restrictive or conflicting with the Third Party Store's terms
            of service, the more restrictive or conflicting term of the Third
            Party Store will take precedence.
            <br />
            · The Third Party Store provider is not obligated to provide any
            maintenance or support services for the Croxroads App. The Croxroads
            App is solely responsible for any product warranties, except to the
            extent they are effectively disclaimed. The Third Party Store
            provider has no warranty obligation for the App, and any claims,
            losses, liabilities, damages, costs, or expenses related to warranty
            failures are the sole responsibility of the Croxroads App.
            <br />
            · The Croxroads App, not the Third Party Store provider, is
            responsible for addressing any claims related to the App or its
            possession and use, including product liability claims,
            non-compliance with legal or regulatory requirements, consumer
            protection claims, and intellectual property infringement claims.
            <br />
            · The Third Party Store provider and its subsidiaries are considered
            third-party beneficiaries of these Terms. By accepting these Terms,
            the Third Party Store provider from whom you obtained the App has
            the right to enforce these Terms against you as a third-party
            beneficiary.
            <br />
            In case of a conflict between the terms and conditions of a Third
            Party Store or mobile carrier and these Terms, the Third Party Store
            or mobile carrier's terms and conditions will govern. We are not
            responsible for any third-party goods or services obtained through a
            Third Party Store or mobile carrier, and we disclaim any liability
            in connection with such transactions. We recommend conducting any
            necessary investigation before proceeding with online transactions
            involving third parties.
          </p>

          <h2 className="font-poppins text-2xl font-bold">
            15. TERMINATION AND REMEDIES
          </h2>

          <p className="font-poppins">
            These Terms become effective upon your acceptance (as described in
            the preamble) and remain in effect until terminated in accordance
            with the terms outlined here. If you wish to terminate these Terms,
            you can do so by (a) notifying Croxroads at any time, and (b)
            closing your Account. Please send your notice to the address
            provided below. It's important to note that if you terminate these
            Terms, your subscription will continue until the end of the paid
            subscription period, and no refunds will be provided unless
            otherwise stated in Section 5.
            <br />
            Croxroads has the right to terminate or suspend these Terms,
            including your Account, if you violate these Terms or if required to
            do so by applicable law. You acknowledge that Croxroads holds sole
            discretion in terminating your Account for cause, and Croxroads will
            not be held liable to you or any third party for such termination.
            <br />
            If Croxroads determines, at its sole discretion, that you have
            breached any part of these Terms or engaged in inappropriate conduct
            on the App, Croxroads reserves the right to take the following
            actions: (a) notify you via email (using the email address you
            provided); (b) delete your User Content; (c) deactivate your
            Account; (d) cancel your subscription(s); (e) notify and/or
            cooperate fully with law enforcement authorities for further action
            regarding your User Content; and/or (f) pursue any other appropriate
            actions deemed necessary by Croxroads.
            <br />
            Termination of these Terms or your Account will result in the
            removal of access to your Account, as well as all associated
            information and content within your Account. All provisions of these
            Terms that, by their nature, should survive, will survive the
            termination of these Terms. This includes, but is not limited to,
            the Arbitration Agreement, ownership provisions, warranty
            disclaimers, and limitation of liability.
          </p>

          <h2 className="font-poppins text-2xl font-bold">16. MISCELLANEOUS</h2>

          <p className="font-poppins">
            Before you can start using Croxroads, there are a few important
            points we need to address.
            <br />
            These Terms, which may be revised periodically, constitute the
            complete agreement between you and Croxroads. They replace any prior
            agreements, representations, or arrangements between us (whether
            written or oral), except for the Privacy Policy. This clause does
            not limit or exclude liability for fraudulent misrepresentation.
            <br />
            Croxroads has made reasonable efforts to ensure the accuracy,
            availability, currency, and completeness of the information provided
            on the platform. However, Croxroads does not provide any explicit or
            implied warranties or representations regarding the information on
            the platform. Your use of Croxroads and its materials is at your own
            risk. Croxroads is not responsible for any loss resulting from data
            transmission, data use, or inaccurate user-generated content.
            <br />
            You are responsible for taking precautions to ensure that any
            material obtained from Croxroads is free of viruses or other harmful
            components. Please note that Croxroads does not guarantee
            uninterrupted or error-free service, the correction of defects, or
            the absence of viruses, bugs, spyware, Trojans, or similar malicious
            software. Croxroads is not liable for any damage to your computer
            hardware, software, or other equipment, including but not limited to
            damage resulting from security breaches, viruses, bugs, tampering,
            fraud, errors, omissions, interruptions, defects, delays in
            operation or transmission, computer line or network failures, or any
            other technical or functional issues. Communications between you and
            Croxroads may occur electronically, whether through the app, email
            correspondence, or in-app notifications. By using Croxroads, you (a)
            consent to receive communications from Croxroads electronically, and
            (b) agree that all terms, agreements, notices, disclosures, and
            other communications provided by Croxroads electronically satisfy
            any writing requirements. This does not affect your statutory
            rights. We believe our Terms are great, but there may be occasions
            when we need to modify them. As Croxroads continues to grow, we
            reserve the right to modify, amend, or change the Terms (referred to
            as "Changes"). If any Changes occur, they will be posted on this
            page, and the Effective Date of the updates will be indicated at the
            bottom of the Terms. In certain circumstances, we may notify you of
            Changes via email. We may also require your agreement to the
            Changes, and we will inform you accordingly. It is advisable to
            regularly check this page for any Changes as we want our users to
            stay well-informed.
            <br />
            Your continued use of Croxroads following any Changes constitutes
            your acceptance of the updated Terms, and you will be legally bound
            by them. If you do not agree to any Changes, please discontinue
            using Croxroads immediately (though we hope it won't be too
            difficult!).
          </p>

          <h2 className="font-poppins text-xl font-bold">Additional items:</h2>

          <p className="font-poppins">
            If any of the Terms are declared illegal, invalid, or unenforceable
            by a court of competent jurisdiction, the illegal, invalid, or
            unenforceable term will be removed from the Terms, and the remaining
            Terms will continue to be binding and enforceable.
            <br />
            No failure or delay in exercising any right, power, or privilege
            under the Terms shall be considered a waiver of such right or
            acceptance of any variation of the Terms. Any partial or single
            exercise of a right, power, or privilege does not preclude further
            exercise of that right or the exercise of any other right, power, or
            privilege by either party.
            <br />
            By using the Croxroads app, you acknowledge and agree that Croxroads
            is a global platform operating through servers located in multiple
            countries, including India. If you reside in a country with data
            protection laws, please note that the storage of your personal data
            may not provide the same level of protection as in your country of
            residence. By submitting your personal information, upgrading
            services, or utilizing the applications on Croxroads, you consent to
            the transfer, storage, and processing of your personal data in such
            countries and destinations.
            <br />
            The app may contain links to third-party websites or resources. You
            acknowledge and agree that we are not responsible or liable for:
            <br />
            · The availability or accuracy of such websites or resources.
            <br />
            · The content, products, or services offered on or through such
            websites or resources. Links to third-party websites or resources do
            not imply any endorsement. You assume all responsibility and risk
            for using any such websites or resources. Framing, in-line linking,
            or any other methods of association with the app are strictly
            prohibited without our prior written approval.
            <br />
            These Terms and the rights and licenses granted herein cannot be
            transferred or assigned by you but may be assigned by us without any
            restrictions.
            <br />
            In the event of any discrepancy between the English language version
            and translated copies of the Terms, the English version will
            prevail.
            <br />
            If you have any questions, complaints, or claims regarding the app,
            please contact us at humans@croxroads.app
          </p>

          <h2 className="font-poppins text-2xl font-bold">
            17. GOVERNING LAW AND FORUM.
          </h2>

          <p className="font-poppins">
            Subject to previous sections, your access to the Croxroads app, Our
            Content, and any Member Content, as well as any claims arising from
            or relating to your relationship with Croxroads and these Terms, are
            governed and interpreted by the laws of India. All claims arising
            from or related to these Terms and/or your relationship with
            Croxroads that, for any reason, are not submitted to arbitration,
            and all claims or cases challenging the enforceability or
            applicability of the arbitration provisions herein, will be
            exclusively litigated in the federal or state courts of Kolkata,
            India. By agreeing to this, you acknowledge that these courts have
            personal jurisdiction and venue, and you waive any objection based
            on inconvenient forum. Furthermore, you agree not to initiate or
            participate in a class action lawsuit against us.
          </p>

          <h2 className="font-poppins text-2xl font-bold">
            18. THE CROXROADS GROUP
          </h2>

          <p className="font-poppins">
            The Terms of Use create a legally binding agreement between you, as
            the user ("you"), and Croxroads, represented as "we" or "us."
            Croxroads encompasses various entities, including but not limited to
            Lovepack Consumers Pvt Ltd, Social Online Payments Limited (a
            company incorporated in India)
          </p>

          <h2 className="font-poppins text-xl font-bold">Effective date</h2>

          <p className="font-poppins">
            The Terms were last updated on: June 1st, 2023.
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
