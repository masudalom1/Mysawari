import emoji from "../assets/emoji-1.png";
function Contact() {
  return (
    <>
      <div className="flex max-sm:flex-col">
        <div className=" p-10">
          <h1 className="font-bold text-2xl">Have questions?</h1>
          <div className="border-t-4 mt-4 border-yellow-400 w-16"></div>
          <p className=" mt-5">
            If you have any questions, please fill the form and we’ll get back
            to you at the earliest.
          </p>
        </div>
        <div className="flex justify-center items-center p-6">
          <form className="flex-1 w-96 max-sm:w-auto h-auto space-y-4">
            <input
              className="w-full p-2 font-semibold border rounded border-slate-500"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full p-2 font-semibold border rounded border-slate-500"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full p-2 font-semibold border rounded border-slate-500"
              type="tel"
              placeholder="Contact Number"
            />
            <input
              className="w-full p-2 font-semibold border rounded border-slate-500"
              type="text"
              placeholder="Send Message"
            />
            <button
              type="submit"
              className="w-full p-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>

          <div className="ml-6 max-sm:ml-1">
            <img src={emoji} alt="emoji" className="w-64 h-96 max-sm:w-40 max-sm:h-44 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
