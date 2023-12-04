import React from "react";
import DashHeader from "../../Components/Dashboard/DashHeader";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function Contact() {
  return (
    <div>
      <Nav />
      <DashHeader title="Contact Us" />
      <div className="rounded contact-form w-[70vw] mx-auto mt-9 p-8 flex justify-evenly flex-wrap">
        <div className="w-[68%] contact-feild p-5 bg-[#130A2D] rounded-lg ">
          <form class="w-full mx-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                  for="grid-first-name"
                >
                  Name
                </label>
                <input
                  class="appearance-none bg-[#22134E] text-white h-[7vh] block w-full text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-white text-sm   font-bold mb-2"
                  for="grid-last-name"
                >
                  Email
                </label>
                <input
                  class="appearance-none bg-[#22134E] h-[7vh]  text-white block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-last-name"
                  type="email"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-sm  font-bold mb-2"
                  for="grid-first-name"
                >
                  Phone
                </label>
                <input
                  class="appearance-none bg-[#22134E] h-[7vh]  text-white block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-white text-sm font-bold mb-2"
                  for="grid-last-name"
                >
                  Subject
                </label>
                <input
                  class="appearance-none bg-[#22134E] h-[7vh]  text-white block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="grid-last-name"
                  type="text"
                />
              </div>
            </div>
            <div class="flex flex-wrap ">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-white text-sm  font-bold mb-2"
                  for="grid-last-name"
                >
                  Your Message
                </label>
              </div>

              <textarea
                id="message"
                rows="6"
                class="appearance-none bg-[#22134E]  text-white h-[10vh] block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
              ></textarea>
            </div>
            <div className="flex justify-between w-full items-end upload-ip">
              <button class="bg-gradient-to-r from-[#00C4FF] h-[40px] w-[110px] to-[#0074FF] hover:bg-gradient-to-l text-white font-norma rounded flex flex-row gap-2  justify-center items-center ">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#130A2D] contact-info rounded w-[29%] mx-auto  p-8">
          <p className="text-[#C2C0C0] mb-5 ">
            Thank you for choosing PixelSport as your go-to source for live
            sports streaming. We hope you enjoy using our platform as much as we
            enjoyed creating it. If you have any questions or feedback, please
            don't hesitate to get in touch with us. We'd love to hear from you!
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            <strong>
              Note: Please contact us via the website's live support for an
              instant reply (find at the right bottom corner of the website){" "}
            </strong>
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            <strong>Office Address:</strong>
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            &nbsp;444 Alaska Avenue Suite #BUE973 Torrance, CA 90503 USA&nbsp;
          </p>
          <p className="text-[#C2C0C0] mb-5 ">
            <strong>Phone:&nbsp;</strong> +12512209194
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
