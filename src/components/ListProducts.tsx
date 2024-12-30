import ProductCard from './ProductCard'
import { product } from '../utility/Productdetails'

function ListProducts({products} : {products:product[]}) {
    return (
        <div className='flex flex-wrap w-full justify-center gap-4'>
            {
                products.map((product,idx) => (
                    <ProductCard key={idx} id={product.id} img={product.img} title={product.title} speciality={product.speciality} price={product.price} finalPrice={product.finalPrice} details={product.details}/>
                ))
            }
        </div>
    )
}

export default ListProducts