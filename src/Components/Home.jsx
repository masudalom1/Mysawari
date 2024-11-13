import carlogo from "../assets/car.jpg";
import { FaCar } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiLockOpen } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa6";
import { RiRunLine } from "react-icons/ri";
import { FaThermometerEmpty } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiHandCoinFill } from "react-icons/ri";
import Contact from "./Contact";
import Feedback from "./Feedback";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <div className="flex max-sm:flex-col ">
        <div className="">
          <h1 className="text-5xl font-bold m-8 f">
            Car on Rent at{" "}
            <span className="text-blue-600"> Guaranteed Lowest Price </span>in
            Guwahati
          </h1>
          <p className="font-serif ml-10 text-blue-950">
            We provide self-driving cars on rent at the lowest price in
            Guwahati. We don’t just say lowest price, we give guarantee. And we
            pay penatly if you can find cars anywhere else at lower price than
            ours.
          </p>
          <button className="m-10 p-4 font-semibold bg-slate-600 text-white border rounded ">
            {" "}
            Book Your Car Now
          </button>
        </div>
        <div className="ml-8 ">
          <img
            src={carlogo}
            alt="car image"
            className=" object-cover rounded "
          />
        </div>
      </div>

      <div className=" max-sm:flex-col  w-full flex justify-around mb-2 text-white ">
        <div className="max-sm:ml-1 bg-blue-800 mr-2  w-96 h-64 p-10 text-center flex flex-col justify-center  rounded">
          <div className="flex justify-center font-semibold text-4xl text-white">
            <FaCar />
          </div>
          <h2 className="text-2xl mt-2 font-semibold">Book Your Car Now </h2>
          <p className="mt-7">
            Book your car without worries because we provide best quality card
            at lowest price in Guwahati
          </p>
        </div>
        <div className="max-sm:mt-4 max-sm:ml-1 bg-blue-800 w-96 h-64 p-10 text-center flex flex-col justify-center  rounded">
          <div className="flex justify-center font-semibold text-4xl text-white">
            <HiLockOpen />
          </div>
          <h2 className="text-2xl mt-2 font-semibold">We're Open Everyday</h2>
          <p className="mt-7">9:00 AM - 8:00 PM</p>
        </div>
        <div className="max-sm:mt-4 ml-1 bg-blue-800 w-96 h-64 p-10 text-center flex flex-col justify-center  rounded">
          <div className="flex justify-center font-semibold text-4xl text-white">
            {" "}
            <BiSolidPhoneCall />
          </div>
          <h2 className="text-2xl mt-2 font-semibold">Call us for Details</h2>
          <p className="mt-7"> Phone: 9355023248</p>
        </div>
      </div>

      <div>
        <div className="w-full mt-10 p-10  ">
          <h1 className="font-bold text-4xl ">Why you should rent from us</h1>
          <div className="border-t-4 mt-4 border-yellow-400 w-16"></div>
          <p className="text-neutral-500 mt-10">
            We’re one of the best car rental agencies in Guwahati with following
            features.
          </p>
        </div>

        <div className="p-10 w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">

          <div className="p-2 w-96 h-48 ml-2 pt-7 mb-2 max-sm:w-72">
            <div>
              <IoSettings className="text-7xl text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">
              Lowest Price in Guwahati
            </h2>
            <p className="mt-3">We provide cars at lowest rate in Guwahati.</p>
          </div>

          <div className="w-96 h-48 ml-2 pt-7 mb-2 max-sm:w-72">
            <div>
              <FaRegCompass className="text-7xl text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">
              Wide Variety of Cars
            </h2>
            <p className="mt-3">
              We have a wide variety of cars that you can select from.
            </p>
          </div>
          <div className="w-96 h-48 ml-2 pt-7 mb-2 max-sm:w-72">
            <div>
              <RiRunLine className="text-7xl text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">
              Unlimited Kilometres
            </h2>
            <p className="mt-3">
              We don’t restrict how many kilometres you can frive.
            </p>
          </div>
          <div className="w-96 h-48 ml-2 pt-7 mb-2 max-sm:w-72">
            <div>
              <FaThermometerEmpty className="text-7xl text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">
              Zero Security Deposit
            </h2>
            <p className="mt-3">We provide cars at lowest rate in Guwahati.</p>
          </div>{" "}
          <div className="w-96 h-48 ml-2 pt-7 mb-2 max-sm:w-72">
            <div>
              <BsFillLightningChargeFill className="text-7xl text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">No Hiden Charges</h2>
            <p className="mt-3">
              Our chages are transparent and lowest in Guwahati.
            </p>
          </div>
          <div className="w-96 h-48 ml-2 pt-7 mb-2 max-sm:w-72">
            <div>
              <RiHandCoinFill className="text-7xl text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">
              Lowest Booking Amount
            </h2>
            <p className="mt-3">
              Our booking amount is just Rs.200, so that you can book easily.
            </p>
          </div>
        </div>
      </div>

      <div><Contact/></div>
      <div><Feedback/></div>
      <div><ContactUs/></div>
      <Footer/>
    </>
  );
}

export default Home;
