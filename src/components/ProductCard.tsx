import { Link } from 'react-router-dom';

type SaladDetails = {
  id: number,
  img: any;
  title: string;
  speciality: string;
  price: number;
  finalPrice: number;
  details: string;
};

function ProductCard({ id, img, title, speciality, price, finalPrice, details }: SaladDetails) {
  const productDetails = { id, img, title, speciality, price, finalPrice, details };

  return (
    <Link
      to={"/product"}
      state={productDetails}
      className="block group"
    >
      <div className="border border-gray-300 w-fit p-4 rounded-3xl pb-8 transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="overflow-hidden rounded-lg">
          <img
            src={img}
            alt={title}
            className="h-[24rem] w-[19rem] object-cover mb-4 transition-transform transform group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <p className="text-lg font-semibold text-gray-800 group-hover:text-black transition-colors">
          {title}
        </p>
        <p className="text-slate-500">{speciality}</p>
        <div className="flex gap-4 mt-2 items-center">
          <p className="line-through text-gray-400">Rs. {price}.00</p>
          <p className="text-lg font-bold text-green-600">Rs. {finalPrice}.00</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
