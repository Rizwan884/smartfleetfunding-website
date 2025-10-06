/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script'

export default function Terms() {
  return (
    <>
      {' '}
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0XVT3QM87R"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0XVT3QM87R');
      `
          }}
        />
      </head>
      <div className="font-montserrat">
        <div className="container">
          <h1 className="text-center">Terms of Use</h1>
          <p className="container">
            Welcome to the Smart Fleet Funding Corp. website
            www.smartfleetfunding.com By using the Website or our services
            (Fullfact, FES Pay, Fuel Card, Freight Broker Program), as you agree
            to be bound by these Terms of Use. If you do not agree to all the
            Terms, do not use the Website or Services.
            <br />
            <br />
            <h3 className="mt-4 fw-600">DEFINITIONS</h3>
            <strong className="me-1">User:</strong> Any individual or entity
            using the Website or Services. <br />
            <strong className="me-1">Services:</strong> Smart Fleet Funding
            Corp.
            {"'"}s factoring services, invoice factoring and financing, and the
            fuel card program are all included in the Fullfact, FES Pay, and
            Freight Broker Program.
            <br />
            <strong className="me-1">Invoice:</strong> A bill issued by a User
            to their customer for services rendered. By using the Website or
            Services, you represent and warrant that you have the legal capacity
            to enter into this agreement.
            <h3 className="mt-4 fw-600">USE OF SERVICES </h3>
            <strong>Eligibility:</strong> These Services are available to
            businesses in North America that meet Smart Fleet Funding Corp.{"'"}
            s credit and underwriting criteria. <br />
            <strong className="me-1">User Responsibilities:</strong> You agree
            to:
            <ul className="mt-1">
              <li>
                Provide accurate and complete information to Smart Fleet Funding
                Corp..{' '}
              </li>
              <li>
                Comply with all applicable laws and regulations related to your
                business and the Services.
              </li>
              <li>
                Promptly notify Smart Fleet Funding Corp. of any changes to your
                business information.
              </li>
            </ul>
            <h3 className="mt-4 fw-600">Fees and Charges</h3>
            Smart Fleet Funding Corp. charges fees for its Services, including
            factoring rates and any additional administrative fees. The specific
            fees applicable to your business will be disclosed in a separate
            agreement before you enroll in the Services. You are responsible for
            the timely payment of all fees.
            <h3 className="mt-4 fw-600">User Content</h3>
            You may be required to upload invoices or other documents to use the
            Services. By uploading content, you grant Smart Fleet Funding Corp.
            a non-exclusive, irrevocable license to use, reproduce, modify, and
            distribute such content for the purpose of providing the Services.
            <h3 className="mt-4 fw-600">Disclaimers and Warranties</h3>
            Smart Fleet Funding Corp. makes no warranties, express or implied,
            regarding the services, including any warranty of merchantability,
            fitness for a particular purpose, or accuracy of data.
            <h3 className="mt-4 fw-600">Limitation of Liability</h3>
            Smart Fleet Funding Corp. shall not be liable for any indirect,
            incidental, consequential, or special damages arising out of or in
            connection with the use of the website or services.
            <h3 className="mt-4 fw-600">Term and Termination</h3>
            This Agreement will remain in effect until terminated by either
            party. Smart Fleet Funding Corp. may terminate this Agreement for
            any reason, with or without notice. You may terminate this Agreement
            by ceasing to use the Services.
            <h3 className="mt-4 fw-600">Modifications to Terms of Use</h3>
            Smart Fleet Funding Corp. reserves the right to modify these Terms
            at any time. We will notify you of any material changes by posting
            the revised Terms on the Website. Your continued use of the Website
            or Services constitutes your acceptance of the revised Terms.
            <h3 className="mt-4 fw-600">
              Governing Law and Dispute Resolution
            </h3>
            These Terms shall be governed by and construed in accordance with
            the laws. Any dispute arising out of or relating to the Terms will
            be resolved by binding arbitration in accordance with the rules of
            the American Arbitration Association.
            <h3 className="mt-4 fw-600">Entire Agreement</h3>
            These Terms constitute the entire agreement between you and Smart
            Fleet Funding regarding the use of the Website and Services.
            <h3 className="mt-4 fw-600">Contact Information</h3> If you have any
            questions about these Terms, please contact Smart Fleet Funding
            Corp. at info@smartfleetfunding.com
            <br />
          </p>
        </div>
      </div>
    </>
  )
}
