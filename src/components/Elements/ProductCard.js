import { Link } from "react-router-dom";
import { Rating } from "./Rating";

export const ProductCard = ({ product }) => {
  const { id, category, name, image_local, price, rating, best_seller } = product;

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md transform transition-transform duration-200 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-4 px-2 bg-orange-600 bg-opacity-85 text-white rounded">
            Best Seller
          </span>
        )}
        <div className="px-8 py-2">
          <img className="rounded-t-lg w-full h-64" src={image_local} alt={name} />
        </div>
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <span className="text-sm font-normal px-2.5 py-0.5 rounded-md bg-yellow-500 text-white dark:text-white">
            {category}
          </span>
          <h5 className="my-1 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
            {name}
          </h5>
        </Link>

        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
            <span>$</span>
            <span>{price}</span>
          </span>
          <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700">
            Add To Bag <i className="ml-1 bi bi-plus-lg"></i>
          </button>
          {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
        </p>
      </div>
    </div>
  );
};
