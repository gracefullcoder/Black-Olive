import React from 'react'
import SaladCard from './SaladCard'
import marvella from "../assets/paneermarvella.jpg"
import Button from './Button'
import { Link } from 'react-router-dom'


function Products() {
    return (
        <section className='relative py-4 px-8 flex flex-col gap-12 items-center '>
            <h1 className='font-semibold text-2xl tracking-wide'>PRODUCTS</h1>
            <div className='flex w-full justify-between'>
                <SaladCard img={marvella} title={'PANNER MARVELLA'} speciality={'BLACK OLIVE'} price={247} finalPrice={123} />
                <SaladCard img={marvella} title={'PANNER MARVELLA'} speciality={'BLACK OLIVE'} price={247} finalPrice={123} />
                <SaladCard img={marvella} title={'PANNER MARVELLA'} speciality={'BLACK OLIVE'} price={247} finalPrice={123} />
                <SaladCard img={marvella} title={'PANNER MARVELLA'} speciality={'BLACK OLIVE'} price={247} finalPrice={123} />
            </div>

            <Link to={"/salads"}> <Button /></Link>
        </section>
    )
}

export default Products