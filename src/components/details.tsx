import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState } from "react";
export default function Details() {
  let params = useParams().productId;
  const [loaded, setLoaded] = useState(false);
  const [product, setProductDetails] = useState("");
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params}`)
      .then(function (response) {
        setProductDetails(response.data);
        setLoaded(true);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  if (!loaded) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else if (loaded) {
    return (
      <>
        <section>
          <div
            className="w-[80%] mx-auto flex flex-wrap my-3 justify-center"
            id="productDetailsContainer"
          >
            <div className="w-[80%] mx-auto grid grid-cols-5 gap-4">
              <div className="col-span-2 lg:col-span-1 flex flex-col content-between h-[40vh] lg:h-[70vh] overflow-auto gap-2 custom-scroll">
                <div className="flex-1">
                  <img
                    src={
                      product.images[1] ? product.images[1] : product.images[0]
                    }
                    alt={product.title}
                    className="w-100"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src={
                      product.images[2] ? product.images[2] : product.images[0]
                    }
                    alt={product.title}
                    className="w-100"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-100"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src={
                      product.images[3] ? product.images[3] : product.images[0]
                    }
                    alt={product.title}
                    className="w-100"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 col-span-3 h-[40vh] lg:h-[70vh] overflow-hidden flex items-center">
                <img
                  src={
                    product.images[4] ? product.images[4] : product.images[0]
                  }
                  alt={product.title}
                />
              </div>
              <div className="lg:col-span-2 col-span-5 px-2">
                <h2 className="font-bold text-xl">{product.title}</h2>
                <div className="flex items-center my-3 flex-wrap">
                  <p className="md:pe-2 pe-0.5">stars{product.rating}</p>
                  <p className="text-lg text-gray-500 font-semibold relative after:content-[''] after:absolute after:top-0 after:right-[-12px] after:w-[2px] after:h-full after:bg-gray-400 after:ml-2">
                    {product.rating}
                  </p>
                  <p className="ml-4 text-[var(--color-button1)] text-xl">
                    {product.availabilityStatus}
                  </p>
                </div>
                <h2 className="font-semibold text-xl">${product.price}</h2>
                <p className="my-2 text-lg">{product.description}</p>
                <hr />
                <div className="my-4 border border-black">
                  <div className="flex gap-4 items-center w-full p-2">
                    <div>
                      <i className="fa-solid fa-truck"></i>
                    </div>
                    <div>
                      <h3>Free Delivery</h3>
                      <p className="underline">
                        Enter Your Postal code for delivery
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center w-full p-2 border-t">
                    <div>
                      <i className="fa-regular fa-clock"></i>
                    </div>
                    <div>
                      <h3>{product.shippingInformation}</h3>
                    </div>
                  </div>
                </div>
                <details>
                  <summary className="text-lg text-gray-500 font-semibold cursor-pointer ">
                    reviews {product.reviews.length}
                  </summary>

                  <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4"></div>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
