import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Message } from "../utility/SendMessage";
import { toast } from "react-toastify";
import { addToCart, IncQty, DecQty } from '../utility/CartFunction';
import { useCartContext } from '../context/CartContext';

function ProductDetails() {
  const location = useLocation();
  const product = location.state;
  const { items, setItems } = useCartContext();

  const timings = ["09:00 Morning", "12:00 Noon", "15:00 Afternoon", "18:00 Evening"];
  const currTime = new Date().getHours();

  // Check if item exists in cart
  const existingCartItem = items.find(item => item.id === product.id);

  const [details, setDetails] = useState({
    id: product.id,
    title: product.title,
    quantity: existingCartItem ? existingCartItem.quantity : 1,
    time: existingCartItem ? existingCartItem.time : ""
  });

  // Update local state when cart changes
  useEffect(() => {
    if (existingCartItem) {
      setDetails(prev => ({
        ...prev,
        quantity: existingCartItem.quantity,
        time: existingCartItem.time
      }));
    }
  }, [existingCartItem]);

  const formatTime = (timing: string, suffix: string): string => {
    const hour = parseInt(timing.slice(0, 2));
    if (hour > 12) {
      return (hour - 12).toString().padStart(2, '0').concat(timing.slice(2)).concat(` ${suffix}`);
    }
    return timing.concat(` ${suffix}`);
  };

  const validateTime = () => {
    if (details.time) {
      return true
    } 
    toast.error("Please Select Time!")
    return false;
  };

  const createOrder = () => {
    validateTime() && Message(`I want to buy ${details.title} having quantity of ${details.quantity}, Expected to get delivered by ${details.time}.`);
  }

  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
        <img src={product.img} alt={product.title} className="h-[32rem] rounded-3xl" />

        <div className="max-w-xl text-center lg:text-left">
          <p className="text-sm md:text-base text-slate-400">{product.speciality}</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide mt-4">{product.title}</h1>

          <div className="flex md:flex-row items-center gap-2 md:gap-4 mt-4 max-lg:justify-center">
            <p className="text-sm md:text-base line-through text-slate-400">Rs. {product.price}.00</p>
            <p className="text-lg md:text-xl">Rs. {product.finalPrice}.00</p>
          </div>

          <p className="mt-6 text-sm md:text-base text-slate-600">{product.details}</p>
          <p className="mt-8 text-sm md:text-base text-slate-600">
            Delivery Time: 9:00 AM, 12:00 PM, 3:00 PM, 6:00 PM
          </p>

          <p className="text-slate-500 mt-6">Quantity</p>
          <div className="flex gap-8 px-4 py-2 border w-fit rounded-3xl mt-2 items-center text-3xl max-lg:mx-auto">
            <button
              className="cursor-pointer font-bold"
              onClick={() => {
                if (existingCartItem) {
                  DecQty(details.id, setItems);
                } else {
                  setDetails(prev => ({ ...prev, quantity: prev.quantity === 1 ? 1 : prev.quantity - 1 }));
                }
              }}
            >
              -
            </button>
            <div className="text-xl">{details.quantity}</div>
            <button
              className="cursor-pointer font-bold"
              onClick={() => {
                if (existingCartItem) {
                  IncQty(details.id, setItems);
                } else {
                  setDetails(prev => ({ ...prev, quantity: prev.quantity + 1 }));
                }
              }}
            >
              +
            </button>
          </div>

          <p className="mt-4">Select Delivery Time:</p>
          <select
            className="mt-4 border rounded-3xl w-full px-4 py-2"
            name="time"
            value={details.time}
            onChange={(e) => setDetails(prev => ({ ...prev, time: e.target.value }))}
            disabled={existingCartItem ? true : false}
          >
            <option value="">Select</option>
            {currTime >= 17 ? (
              timings.map((t, i) => (
                <option key={i} value={formatTime(t, "tomorrow")}>
                  {formatTime(t, "tomorrow")}
                </option>
              ))
            ) : currTime >= 0 && currTime < 8 ? (
              timings.map((t, i) => (
                <option key={i} value={formatTime(t, "today")}>
                  {formatTime(t, "today")}
                </option>
              ))
            ) : (
              timings.map((t, i) => {
                const hour = parseInt(t.slice(0, 2));
                if (hour - currTime > 1) {
                  return (
                    <option key={i} value={formatTime(t, "today")}>
                      {formatTime(t, "today")}
                    </option>
                  );
                }
                return null;
              })
            )}
          </select>

          <button
            className="w-full p-2 mt-4 text-center text-2xl rounded-3xl mx-auto bg-green-600 hover:bg-green-700 text-white cursor-pointer"
            onClick={createOrder}
          >
            ORDER NOW
          </button>

          {!existingCartItem && (
            <button
              className="w-full p-2 mt-4 text-center text-2xl rounded-3xl mx-auto bg-green-600 hover:bg-green-700 text-white cursor-pointer"
              onClick={() => validateTime() && addToCart(
                items,
                setItems,
                details.id,
                details.title,
                product.finalPrice,
                details.quantity,
                product.img,
                details.time || ""
              )}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;