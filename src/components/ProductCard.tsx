import { Link } from 'react-router-dom'

type saladDetails = {
  img: any,
  title: string,
  speciality: string,
  price: number,
  finalPrice: number
  details:string
} 

function ProductCard({ img, title, speciality, price, finalPrice,details }: saladDetails) {
  const productDetails = { img, title, speciality, price, finalPrice,details }; 

  return (
    <Link to={"/product"} state={productDetails}>
       <div className='border  border-black w-fit p-4 rounded-3xl pb-8'>
      <img src={img} alt="" className='h-[24rem] w-[19rem] mb-4' />
      <p className='text-semibold'>{title}</p>
      <p className='text-slate-400'>{speciality}</p>
      <div className='flex gap-4 mt-2 items-center'>
        <p className='line-through text-slate-400'> Rs. {price}.00</p>
        <p className='text-lg'>Rs. {finalPrice}.00</p>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard