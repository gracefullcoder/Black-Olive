import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

function HeroCard() {
  return (
    <div className='absolute top-1/4 left-48 bg-white p-8 rounded-3xl flex flex-col gap-6 
                    max-lg:left-8 max-lg:p-6 
                    max-md:p-4 max-md:gap-4
                    max-sm:left-2 max-sm:top-8 max-sm:gap-[0.5rem]'>
      <div className='flex gap-2 items-center'>
        <img src={logo} className='h-12 w-12 max-md:h-10 max-md:w-10 max-sm:h-8 max-sm:w-4' alt="Logo" />
        <h1 className='text-4xl font-bold tracking-wide max-lg:text-3xl max-md:text-2xl max-sm:text-base'>
          BLACK OLIVE
        </h1>
      </div>
      <p className='text-slate-400 max-lg:text-sm max-md:text-xs'>
        We Believe in Taste & Quality
      </p>
      <Link to={"salads"}>
        <button className='rounded-3xl bg-black px-8 py-2 text-white w-full max-sm:py-[2px] max-sm:text-sm'>View All</button>
      </Link>
    </div>
  );
}

export default HeroCard;
