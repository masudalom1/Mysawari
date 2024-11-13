
import logo from '../assets/loog.webp'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
function Footer(){
    return(<>
  <div className='w-full text-white p-7 flex justify-around bg-blue-900 pb-10 max-sm:flex-col'>
  <div className='mt-10'>
        <img className='' src={logo} alt="logo" />
        <div className='flex p-4'>
        <a className='ml-5 text-2xl' href=""><FiInstagram /></a>
        <a className='ml-5 text-2xl' href=""><FaFacebookSquare /> </a>
        </div>
    </div>

    <div className='mt-10'>
        <p className='font-semibold mb-7'>Contact Info </p>
        <p className=''>Kahilipara, Guwahati, Assam-781019</p>
        <p>Call Us: 9355023248</p>
        <p>Email:hello@mysawari.in</p>
        <p>Everyday:9:00 AM - 8:00 PM</p>
    </div>
    <div  className='mt-10'>
        <p>"MySawari" is a brand of yumly Lifestyle OPC Private Limited.</p>
    </div>
    <div className='mt-10'>
        <p><a href="">Privacy Policy</a></p>
        <p>Terms & Conditions</p>
    </div>
  </div>
    </>)
}

export default Footer