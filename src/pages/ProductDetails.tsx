import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {Message} from "../utility/SendMessage"

function ProductDetails() {
  const location = useLocation();
  const product = location.state;

  const [details, setDetails] = useState({ title: product.title, quantity: 1, time: "9:00AM" })

  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">

        <img src={product.img} alt="" className='h-[32rem] rounded-3xl' />

        <div className="max-w-xl text-center lg:text-left">
          <p className="text-sm md:text-base text-slate-400">{product.speciality}</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide mt-4">{product.title}</h1>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-4">
            <p className="text-sm md:text-base line-through text-slate-400">Rs. {product.price}.00</p>
            <p className="text-lg md:text-xl">Rs. {product.finalPrice}.00</p>
          </div>
          <p className="mt-6 text-sm md:text-base text-slate-600">{product.details}</p>
          <p className="mt-8 text-sm md:text-base text-slate-600">
            Delivery Time: 9:00 AM, 12:00 PM, 4:00 PM, 7:00 PM
          </p>

          <p className='text-slate-500 mt-6'>Quantity</p>
          <div className='flex gap-8 px-4 py-2 border w-fit rounded-3xl mt-2 items-center text-3xl'>
            <div className = 'cursor-pointer font-bold' onClick={() => setDetails((prev) => { return { ...prev, quantity: prev.quantity == 1 ? 1 :  prev.quantity- 1 } })}>-</div>
            <div className='text-xl'>{details.quantity}</div>
            <div className = 'cursor-pointer font-bold' onClick={() => setDetails((prev) => { return { ...prev, quantity: prev.quantity + 1 } })}>+</div>
          </div>
          <p className='mt-4'> Select Delivery Time :</p>
          <select className='mt-4 border rounded-3xl w-full px-4 py-2'>
            <option value="9:00 AM">9:00 AM</option>
            <option value="2:00 PM">12:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
          </select>
          <div className = "w-1/2 p-2 mt-4 text-center text-2xl rounded-3xl mx-auto bg-black text-white"
          onClick={() => Message(`I want to buy ${product.title} having quantity of ${details.quantity}, Expected to get delivered by ${details.time}.`)}>ORDER NOW</div>
        </div>
      </div>
    </section >
  );
}

export default ProductDetails;
