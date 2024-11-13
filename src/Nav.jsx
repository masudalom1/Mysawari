import logo from "./assets/loog.webp";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between ">
        <div className="p-3">
          <img src={logo} alt="logo" className="" />
        </div>

        <button
          className="md:hidden text-blue-800 p-2 m-4 "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RxCross1 className="w-10 h-10 " />
          ) : (
            <IoMenu className="w-10 h-10" />
          )}
        </button>

        <div className="flex gap-10 text-lg font-serif font-normal  py-6 px-3 max-sm:hidden">
          <div>
            <a href="/Home">Home</a>
          </div>

          <div>
            <a href="/Cars">Cars</a>
          </div>
          <div>
            <a href="/Service">Service</a>
          </div>

          <div>
            <a href="/Contact">Contact</a>
          </div>
          <div className="bg-blue-800  border rounded-md text-white">
            <a className="p-5 " href="/BookCar">
              Book Now
            </a>
          </div>
        </div>
        {isMenuOpen && (
                    <div className="absolute top-16 right-3 bg-white shadow-lg rounded-md p-5 w-48 flex flex-col gap-4 text-lg font-serif font-normal md:hidden">
                        <a href="/Home" className="hover:text-blue-800">Home</a>
                        <a href="/Cars" className="hover:text-blue-800">Cars</a>
                        <a href="/Service" className="hover:text-blue-800">Service</a>
                        <a href="/Contact" className="hover:text-blue-800">Contact</a>
                        <a href="/BookCar" className="bg-blue-800 text-white border rounded-md py-2 px-5 text-center">
                            Book Now
                        </a>
                    </div>
                )}
      </header>
    </>
  );
}

export default Nav;
