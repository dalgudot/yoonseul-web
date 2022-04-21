import type { NextPage } from 'next';
import style from '../styles/terms.module.css';
import { useRouter } from 'next/router';

const Privacy: NextPage = () => {
  const router = useRouter();
  const locale = router.locale;

  // const korean = '이 어플리케이션은 자체적으로 사용자의 어떤 데이터도 수집하지 않습니다. 글과 사진, 날짜 데이터는 각 사용자의 개인 아이클라우드에 안전하게 저장됩니다. 개인 아이클라우드 데이터 및 자동 갱신 구독 결제와 관련된 개인 정보 보호 정책은 아래에 있는 애플의 개인 정보 보호 정책을 따릅니다.';
  // This application itself does not collect any user data. Texts, photos, and date data are securely stored on each user's personal device and Apple iCloud account. The privacy policy regarding personal iCloud data and auto-renewing subscription payments is governed by Apple's privacy policy below.
  const description1 =
    'This application does not collect, use, save, or have access to any of your personal data recorded in YoonSeul. Texts, photos, and date data stored in the YoonSeul app are only saved on your device and your iCloud. You might also be asked to provide access to your photo library, but this is to help you save photos taken by YoonSeul in your photo library. This application doesn’t process that information at all and have no access to it.';

  const description2 =
    'This application doesn’t collect personal information from anyone, including children under the age of 13.';

  return (
    <main className={style.main}>
      <h1>YoonSeul Privacy Policy</h1>

      <section className={style.section}>
        <h2>Overview</h2>
        <p>
          This Privacy Policy describes how your personal information is handled
          in YoonSeul for iOS.
        </p>

        <h2>This application does not collect any user data.</h2>
        <p>{description1}</p>

        <h2>
          This application comply with the Children’s Online Privacy Protection
          Act
        </h2>
        <p>{description2}</p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or suggestions about this Privacy Policy, do
          not hesitate to contact me at yoonseul.app@gmail.com.
        </p>
      </section>

      {/* <p>{descriotion}</p> */}
      {/* 
      <section className={style.section}>
        <h2>Apple Privacy Policy</h2>

        {applePrivacyPolicy.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </section>

      <section className={style.section}>
        <h2>What Is Personal Data at Apple?</h2>

        {pp1.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </section>

      <section className={style.section}>
        <h2>Your Privacy Rights at Apple</h2>

        {pp2.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </section>

      <section className={style.section}>
        <h2>Personal Data Apple Collects from You</h2>

        {pp3.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </section>

      <section className={style.section}>
        <h2>Apple’s Use of Personal Data</h2>

        {pp4.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </section>

      <section className={style.section}>
        <h2>Protection of Personal Data at Apple</h2>

        {pp5.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </section> */}

      {/* <a
        href='https://www.apple.com/legal/privacy/en-ww/'
        target='_blank'
        rel='noreferrer'
      >
        <p>Leran More Apple Privacy Policy</p>
      </a> */}
    </main>
  );
};

export default Privacy;

const applePrivacyPolicy: string[] = [
  'Apple’s Privacy Policy describes how Apple collects, uses, and shares your personal data.',
  'In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.',
  'You will be given an opportunity to review this product-specific information before using these features.',
];

const pp1: string[] = [
  'At Apple, we believe strongly in fundamental privacy rights — and that those fundamental rights should not differ depending on where you live in the world. That’s why we treat any data that relates to an identified or identifiable individual or that is linked or linkable to them by Apple as “personal data,” no matter where the individual lives. This means that data that directly identifies you — such as your name — is personal data, and also data that does not directly identify you, but that can reasonably be used to identify you — such as the serial number of your device — is personal data. Aggregated data is considered non‑personal data for the purposes of this Privacy Policy.',
  'This Privacy Policy covers how Apple or an Apple-affiliated company (collectively, “Apple”) handles personal data whether you interact with us on our websites, through Apple apps (such as Apple Music or Wallet), or in person (including by phone or when visiting our retail stores). Apple may also link to third parties on our services or make third-party apps available for download in our App Store. Apple’s Privacy Policy does not apply to how third parties define personal data or how they use it. We encourage you to read their privacy policies and know your privacy rights before interacting with them.',
];

const pp2: string[] = [
  'At Apple, we respect your ability to know, access, correct, transfer, restrict the processing of, and delete your personal data. We have provided these rights to our global customer base and if you choose to exercise these privacy rights, you have the right not to be treated in a discriminatory way nor to receive a lesser degree of service from Apple. Apple does not sell your data including as “sale” is defined in Nevada and California.',
  'To exercise your privacy rights and choices including where a third-party service provider is acting on Apple’s behalf, visit the Apple Data and Privacy page at privacy.apple.com for Apple or shazam.com/privacy for Shazam. To help protect the security of your personal data, you must sign in to your account and your identity will be verified. If the Data and Privacy page is not available in your region, you can make privacy rights requests at apple.com/legal/privacy/contact.',
  'There may be situations where we cannot grant your request — for example, if you ask us to delete your transaction data and Apple is legally obligated to keep a record of that transaction to comply with law. We may also decline to grant a request where doing so would undermine our legitimate use of data for anti-fraud and security purposes, such as when you request deletion of an account that is being investigated for security concerns. Other reasons your privacy request may be denied are if it jeopardizes the privacy of others, is frivolous or vexatious, or would be extremely impractical.',
  'If you live in California, if you cannot access Apple’s Data and Privacy page, you or your authorized agent can make a request at apple.com/legal/privacy/contact or by calling 1-800-275-2273.',
  'For more information on exercising your rights, visit support.apple.com/kb/HT208501.',
];

const pp3: string[] = [
  'At Apple, we believe that you can have great products and great privacy. This means that we strive to collect only the personal data that we need. The personal data Apple collects depends on how you interact with Apple. Descriptions of how Apple handles personal data for certain individual services are available either in settings related to those features and/or at apple.com/legal/privacy/data.',
  'When you create an Apple ID, apply for commercial credit, purchase and/or activate a product or device, download a software update, register for a class at an Apple Store, connect to our services, contact us (including by social media), participate in an online survey, or otherwise interact with Apple, we may collect a variety of information, including:',
  '- Account Information. Your Apple ID and related account details, including email address, devices registered, account status, and age',
  '- Device Information. Data from which your device could be identified, such as device serial number, or about your device, such as browser type',
  '- Contact Information. Data such as name, email address, physical address, phone number, or other contact information',
  '- Payment Information. Data about your billing address and method of payment, such as bank details, credit, debit, or other payment card information',
  '- Transaction Information. Data about purchases of Apple products and services or transactions facilitated by Apple, including purchases on Apple platforms',
  '- Fraud Prevention Information. Data used to help identify and prevent fraud, including a device trust score',
  '- Usage Data. Data about your activity on and use of our offerings, such as app launches within our services, including browsing history; search history; product interaction; crash data, performance and other diagnostic data; and other usage data',
  '- Location Information. Precise location only to support Find My, and coarse location',
  '- Health Information. Data relating to the health status of an individual, including data related to one’s physical or mental health or condition. Personal health data also includes data that can be used to make inferences about or detect the health status of an individual. If you participate in a study using an Apple Health Research Study app, the policy governing the privacy of your personal data is described in the Apple Health Study Apps Privacy Policy.',
  '- Fitness Information. Details relating to your fitness and exercise information where you choose to share them',
  '- Financial Information. Details including salary, income, and assets information where collected, and information related to Apple-branded financial offerings',
  '- Government ID Data. In certain jurisdictions, we may ask for a government-issued ID in limited circumstances, including when setting up a wireless account and activating your device, for the purpose of extending commercial credit, managing reservations, or as required by law',
  '- Other Information You Provide to Us. Details such as the content of your communications with Apple, including interactions with customer support and contacts through social media channels',
  '- You are not required to provide the personal data that we have requested. However, if you choose not to do so, in many cases we will not be able to provide you with our products or services or respond to requests you may have.',
];

const pp4: string[] = [
  'Apple uses personal data to power our services, to process your transactions, to communicate with you, for security and fraud prevention, and to comply with law. We may also use personal data for other purposes with your consent.',
  'Apple uses your personal data only when we have a valid legal basis to do so. Depending on the circumstance, Apple may rely on your consent or the fact that the processing is necessary to fulfill a contract with you, protect your vital interests or those of other persons, or to comply with law. We may also process your personal data where we believe it is in our or others’ legitimate interests, taking into consideration your interests, rights, and expectations. If you have questions about the legal basis, you can contact the Data Protection Officer at apple.com/legal/privacy/contact.',
  '- Power Our Services. Apple collects personal data necessary to power our services, which may include personal data collected to improve our offerings, for internal purposes such as auditing or data analysis, or for troubleshooting. For example, if you would like to access a song through an Apple Music subscription, we collect data on what songs you play in order to provide you with the content requested and for royalty purposes.',
  '- Process Your Transactions. To process transactions, Apple must collect data such as your name, purchase, and payment information.',
  '- Communicate with You. To respond to communications, reach out to you about your transactions or account, market our products and services, provide other relevant information, or request information or feedback. From time to time, we may use your personal data to send important notices, such as communications about purchases and changes to our terms, conditions, and policies. Because this information is important to your interaction with Apple, you may not opt out of receiving these important notices.',
  '- Security and Fraud Prevention. To protect individuals, employees, and Apple and for loss prevention and to prevent fraud, including to protect individuals, employees, and Apple for the benefit of all our users, and prescreening or scanning uploaded content for potentially illegal content, including child sexual exploitation material.',
  "- Personal Data Used for Personalization. If you choose to personalize your services or communications where such options are available, Apple will use information that we collect so that we can offer you those personalized services or communications. You can learn more about how relevant services use information to personalize your experience by reviewing the privacy information presented when you first use a service that asks to use your personal data. We make this information easy to find by presenting it with our Data & Privacy icon; it's also available at all times on your Apple device and online at apple.com/legal/privacy/data.",
  'Comply with Law. To comply with applicable law — for example, to satisfy tax or reporting obligations, or to comply with a lawful governmental request.',
  'Apple does not use algorithms or profiling to make any decision that would significantly affect you without the opportunity for human review.',
  'Apple retains personal data only for so long as necessary to fulfill the purposes for which it was collected, including as described in this Privacy Policy or in our service-specific privacy notices, or as required by law. We will retain your personal data for the period necessary to fulfill the purposes outlined in this Privacy Policy and our service-specific privacy summaries. When assessing retention periods, we first carefully examine whether it is necessary to retain the personal data collected and, if retention is required, work to retain the personal data for the shortest possible period permissible under law.',
];

const pp5: string[] = [
  'At Apple, we believe that great privacy rests on great security. We use administrative, technical, and physical safeguards to protect your personal data, taking into account the nature of the personal data and the processing, and the threats posed. We are constantly working to improve on these safeguards to help keep your personal data secure. For more information, visit our Apple Platform Security guide. ',
];
