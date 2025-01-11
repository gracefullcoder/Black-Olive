import Button from './Button'
import ListProducts from './ListProducts'
import { allProductsIK } from '../utility/Productdetails'
import { useState } from 'react'


function Products() {
    const [isClick, setisClick] = useState(false);
    return (
        <section className='relative py-4 px-8 flex flex-col gap-12 items-center '>
            <h1 className='font-semibold text-2xl tracking-wide'>PRODUCTS</h1>
            <ListProducts products={isClick ? allProductsIK : allProductsIK.slice(0, 4)} />
            <span onClick={() => setisClick((prev) => !prev)} className={isClick ? 'hidden' : ''}><Button /></span>
        </section>
    )
}

export default Products