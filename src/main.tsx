import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext.tsx';


createRoot(document.getElementById('root')!).render(
    <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <CartProvider>
            <App />
        </CartProvider>
    </>
)
