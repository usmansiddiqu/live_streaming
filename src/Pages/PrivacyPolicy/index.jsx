import React from "react";
import DashHeader from "../../Components/Dashboard/DashHeader";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function PrivacyPolicy() {
  return (
    <div>
      <Nav />
      <DashHeader title="Privacy Policy" />
      <div className="bg-[#130A2D] rounded w-[65vw] mx-auto mt-9 p-8 mb-3">
        <div>
          <h4 className="font-normal text-2xl mb-3 text-white">
            <strong>
              Privacy Policy of&nbsp;
              <span class="highlight preview_company_name">Company Name</span>
            </strong>
          </h4>
          <p className="text-[#C2C0C0] mb-5 ">
            <span class="highlight preview_company_name">Company Name</span>
            &nbsp;operates the&nbsp;
            <span class="highlight preview_website_name">Website Name</span>
            &nbsp;website, which provides the SERVICE.
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            This page is used to inform website visitors regarding our policies
            with the collection, use, and disclosure of Personal Information if
            anyone decided to use our Service, the&nbsp;
            <span class="highlight preview_website_name">Website Name</span>
            &nbsp;website.
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            If you choose to use our Service, then you agree to the collection
            and use of information in relation with this policy. The Personal
            Information that we collect are used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at&nbsp;
            <span class="highlight preview_website_url">Website URL</span>,
            unless otherwise defined in this Privacy Policy.
          </p>
          <h4 className="font-normal text-2xl mb-3 text-white">
            <strong>Information Collection and Use</strong>
          </h4>
          <p className="text-[#C2C0C0] mb-5 ">
            For a better experience while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to your name, phone number, and postal
            address. The information that we collect will be used to contact or
            identify you.
          </p>
          <h4 className="font-normal text-2xl mb-3 text-white">
            <strong>Log Data</strong>
          </h4>
          <p className="text-[#C2C0C0] mb-5 ">
            We want to inform you that whenever you visit our Service, we
            collect information that your browser sends to us that is called Log
            Data. This Log Data may include information such as your computer's
            Internet Protocol (&ldquo;IP&rdquo;) address, browser version, pages
            of our Service that you visit, the time and date of your visit, the
            time spent on those pages, and other statistics.
          </p>
          <h4 className="font-normal text-2xl mb-3 text-white">
            <strong>Cookies</strong>
          </h4>
          <p className="text-[#C2C0C0] mb-5 ">
            Cookies are files with small amount of data that is commonly used an
            anonymous unique identifier. These are sent to your browser from the
            website that you visit and are stored on your computer's hard drive.
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            Our website uses these &ldquo;cookies&rdquo; to collection
            information and to improve our Service. You have the option to
            either accept or refuse these cookies, and know when a cookie is
            being sent to your computer. If you choose to refuse our cookies,
            you may not be able to use some portions of our Service.
          </p>
          <h4 className="font-normal text-2xl mb-3 text-white">
            <strong>Service Providers</strong>
          </h4>
          <p className="text-[#C2C0C0] mb-5 ">
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <ul className="text-white mb-5">
            <li>To facilitate our Service</li>
            <li>To provide the Service on our behalf</li>
            <li>To perform Service-related services or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p className="text-[#C2C0C0] mb-5 ">
            We want to inform our Service users that these third parties have
            access to your Personal Information. The reason is to perform the
            tasks assigned to them on our behalf. However, they are obligated
            not to disclose or use the information for any other purpose.
          </p>
          <h4 className="font-normal text-2xl mb-3 text-white">
            <strong>Security</strong>
          </h4>
          <p className="text-[#C2C0C0] mb-5 ">
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>
          <h4 className="font-normal text-2xl mb-3 text-white">
            <strong>Links to Other Sites</strong>
          </h4>
          <p className="text-[#C2C0C0] mb-5 ">
            Our Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over, and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
          <p className="text-[#C2C0C0] mb-5 ">Children's Privacy</p>
          <p className="text-[#C2C0C0] mb-5 ">
            Our Services do not address anyone under the age of 13. We do not
            knowingly collect personal identifiable information from children
            under 13. In the case we discover that a child under 13 has provided
            us with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact us
            so that we will be able to do necessary actions.
          </p>
          <h4 className="font-normal text-2xl mb-3 text-white">
            <strong>Changes to This Privacy Policy</strong>
          </h4>
          <p className="text-[#C2C0C0] mb-5 ">
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </p>
          <h4 className="font-normal text-2xl mb-3 text-white">
            <strong>Contact Us</strong>
          </h4>
          <p className="text-[#C2C0C0] mb-5 ">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
