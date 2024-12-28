import saladImg from "../assets/salad.jpg"
import HeroCard from './HeroCard'

function HeroSection() {
  return (
    <div className="h-full w-full relative">
      <img
        src={saladImg}
        alt="Delicious Salad"
        className="h-full w-full object-cover md:object-center"
      />
      <HeroCard />
    </div>
  )
}

export default HeroSection