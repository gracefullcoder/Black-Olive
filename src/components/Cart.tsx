import { X, ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartContext } from '../context/CartContext';
import { IncQty, DecQty, removeFromCart } from '../utility/CartFunction';
import { Message } from '../utility/SendMessage';

// interface CartItem {
//   id: string;
//   title: string;
//   price: number;
//   quantity: number;
//   img: string;
// }


const Cart = () => {
  const { items, isOpen, setIsOpen } = useCartContext();

  const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const checkout = () => {
    const message = items
      .map((details,idx) => {
        return `PRODUCT ${idx + 1}: ${details.title}\n -Quantity: ${details.quantity}\n-Time : ${details.time}\n`;
      })
      .join("\n");

    Message(message);
  }

  const { setItems } = useCartContext();

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full bg-white w-full sm:w-96 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            onClick={toggleCart}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCart className="w-16 h-16 mb-4" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-2 border rounded-lg"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-green-600">Rs. {item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => DecQty(item.id, setItems)}
                        className="p-1 hover:bg-gray-100 rounded"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => IncQty(item.id, setItems)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, setItems)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">Rs. {totalAmount.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length === 0}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleCart}
        />
      )}
    </>
  );
};

export default Cart;