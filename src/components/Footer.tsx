import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black pt-12 px-6 md:px-12 lg:px-40 relative">
      <div className="font-bold text-xl text-slate-400 text-center mb-8">
        BLACK OLIVE
      </div>

      <ul className="flex text-sm text-slate-400 font-medium gap-4 justify-center max-sm:flex-col items-center">
        <li><Link to={"about"}>ABOUT US</Link></li>
        <li><Link to="shipping">SHIPPING POLICY</Link></li>
        <li><Link to="terms">TERMS & CONDITION</Link></li>
        <li><Link to="policy">PRIVACY POLICY</Link></li>
        <li><Link to={"contact"}>CONTACT US</Link></li>
      </ul>

      <div className="mt-8 text-sm text-slate-400 font-medium gap-1 flex flex-wrap justify-center">
        <p>
          © 2024 BLACK OLIVE, Website Developed by
        </p>
        <p> Vaibhav Gupta</p>
      </div>
    </footer>
  );
}

export default Footer;
