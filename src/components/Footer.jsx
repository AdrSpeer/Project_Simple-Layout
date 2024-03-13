import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="grid justify-center  grid-cols-3 py-10 px-40">
        <div>
          <h5 className="mb-3 uppercase font-bold ">Our Company</h5>
          <p>About us</p>
          <p>Become a Partner</p>
          <p>Contact us</p>
        </div>
        <div>
          <h5 className="mb-3 uppercase font-bold ">Learn More</h5>
          <p>How it works</p>
          <p>FAQs</p>
          <p>Terms and Conditions</p>
          <p>Private Policy</p>
        </div>
        <div>
          <h5 className="mb-3 uppercase font-bold ">Subscribe</h5>
          <input
            placeholder="Input your email address"
            className="bg-gray-100 p-2"
            type="email"
          />
          <button className="text-white bg-black p-2 rounded-md">send</button>
        </div>
      </div>

      <div className="bg-black p-2 pl-10 flex justify-between">
        <p className="text-white">
          By using this website you accept our
          <span className="font-bold"> Terms</span> and use and
          <span className="font-bold"> Private</span> Policy
        </p>
        <img
          className="cursor-pointer"
          src="arrow.png
      "
          alt=""
          onClick={scrollToTop}
        />
      </div>
    </footer>
  );
};

export default Footer;
