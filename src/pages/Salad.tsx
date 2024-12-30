import ListProducts from '../components/ListProducts'
// import { salads } from '../utility/Productdetails'
import { saladsIK } from '../utility/Productdetails'


function Salad() {
  return (
    <section className='relative px-8 pb-16 '>
      <h1 className='font-bold text-3xl tracking-wide text-center my-8'>SALADS</h1>
      <ListProducts products={saladsIK}/>
    </section>
  )
}

export default Salad