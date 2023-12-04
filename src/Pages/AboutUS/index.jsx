import React from "react";
import DashHeader from "../../Components/Dashboard/DashHeader";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function AboutUS() {
  return (
    <div>
      <Nav />
      <DashHeader title="About Us" />
      <div className="bg-[#130A2D] rounded w-[65vw] mx-auto mt-9 p-8">
        <div>
          <p className="text-[#C2C0C0] mb-5 ">
            {" "}
            <span className="font-medium">Welcome to PixelSport </span>- the
            ultimate destination for sports fans who love to watch their
            favorite games live online! At PixelSport, we believe that everyone
            should have access to live sports streams, which is why we have made
            it our mission to organize and curate freely available sports videos
            from around the web and make them easily accessible to everyone.
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            Our platform is built on the idea of community and collaboration. We
            work closely with sports enthusiasts and fans to create a
            comprehensive library of live sports streams that is constantly
            updated in real-time. Our team of experienced curators carefully
            select the best and most exciting sports videos from various sources
            on the internet and categorize them for easy browsing.
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            At PixelSport, we value openness, transparency, and accessibility.
            We understand that not everyone has access to premium sports
            streaming services, which is why we only curate sports videos that
            are under the Creative Commons license. This means that our entire
            library is available for anyone to watch and share, without any
            restrictions or limitations.
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            We take pride in our commitment to providing the best possible
            experience for our users. Our website is designed to be
            user-friendly and easy to navigate, with a clean and modern
            interface that makes it simple to find the sports streams you're
            looking for. We also offer a range of customization options,
            including the ability to filter by sport, date, and more.
          </p>
          <p className="text-[#C2C0C0] mb-5 italic">
            While our curated sports videos are free to watch, we do take a
            small amount for our effort. Our free sites will be free forever but
            whoever wants to support us they can join here. This helps us
            maintain and improve our platform to ensure that we can continue to
            provide high-quality sports streams for our users.
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            Thank you for choosing PixelSport as your go-to source for live
            sports streaming. We hope you enjoy using our platform as much as we
            enjoyed creating it. If you have any questions or feedback, please
            don't hesitate to get in touch with us. We'd love to hear from you!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUS;
