import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

export default function Card({
  Id,
  image,
  title,
  brand,
  price,
  discountPercentage,
}) {
  return (
    <>
      <div className="w-full sm:w-1/4 ">
        <div className="relative mx-2 my-1  bg-white border border-gray-200 hover:border-blue-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700  hover:shadow-2xl h-[350px]">
          <Link to={`/${Id}`}>
            <img
              className="p-8 rounded-t-lg h-40 pb-2 cursor-pointer"
              src={image}
              alt="product image"
            />
          </Link>
          <hr className="my-2 bg-gray-300 border border-gray-300" />
          <div className="px-5 pb-5">
            <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <div className="flex items-center my-2">
              <p className="text-md  text-gray-900 dark:text-white ">
                ${(price * (1 - discountPercentage / 100)).toFixed(2)}
              </p>
              <p className="text-md  text-gray-500 dark:text-white line-through ps-2">
                ${price}
              </p>
            </div>
            <hr className="my-2 bg-gray-300 border border-gray-300" />
            <div className="grid grid-cols-2  py-2">
              <h4 className="text-md text-teal-500">{brand}</h4>
              <div className=" flex justify-end text-xl text-teal-500 cursor-pointer hover:text-2xl">
                <FaCartPlus />
              </div>
            </div>
          </div>
          {/* discount box */}
          <div className=" top-0 absolute right-0 bg-blue-300 rounded-tr-lg rounded-bl-lg  flex flex-col items-center justify-center h-15 gap-0">
            <span className="text-white font-semibold px-1">
              %{discountPercentage}
            </span>

            <span className="text-white font-semibold px-1">Off</span>
          </div>
        </div>
      </div>
    </>
  );
}
