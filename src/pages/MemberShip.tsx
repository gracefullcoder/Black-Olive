import ListProducts from '../components/ListProducts'
// import { membership } from '../utility/Productdetails'
import { membershipIk } from '../utility/Productdetails'


function MemberShip() {
  return (
    <section className='relative px-8 pb-16 '>
      <h1 className='font-bold text-3xl tracking-wide text-center my-8'>Membership</h1>
      <ListProducts products={membershipIk}/>
    </section>
  )
}

export default MemberShip