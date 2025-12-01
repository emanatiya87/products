import { useEffect } from "react";
import { useParams } from "react-router";
import { useProductStore } from "../store/productStore";
import SmallImg from "./smallImg";
import { FaTruck, FaClock } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Reviews from "./reviews";
export default function Details() {
  const { productId } = useParams<{ productId: string }>();
  const { loaded, productDetails, selectedImgId, fetchProductDetails } =
    useProductStore();

  useEffect(() => {
    fetchProductDetails(Number(productId));
  }, [productId, fetchProductDetails]);

  if (!loaded || !productDetails) {
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
                {productDetails.images.map((_, i) => {
                  return <SmallImg index={i} key={i} />;
                })}
              </div>
              <div className="lg:col-span-2 col-span-3 h-[40vh] lg:h-[70vh] overflow-hidden flex items-center">
                <Zoom>
                  <img
                    src={productDetails.images[selectedImgId]}
                    alt={productDetails.title}
                  />
                </Zoom>
              </div>
              <div className="lg:col-span-2 col-span-5 px-2">
                <h2 className="font-bold text-xl text-gray-900 dark:text-white">
                  {productDetails.title}
                </h2>
                <div className="flex items-center my-3 flex-wrap">
                  <p className="md:pe-2 pe-0.5 flex">
                    {/* rating with stars */}
                    {[...Array(Math.round(productDetails.rating ?? 0))].map(
                      (_, i) => (
                        <LiaStarSolid
                          key={i}
                          className="text-yellow-300 text-xl"
                        />
                      )
                    )}
                    {[...Array(5 - Math.round(productDetails.rating ?? 0))].map(
                      (_, i) => (
                        <LiaStarSolid
                          key={i}
                          className="text-gray-300 text-xl"
                        />
                      )
                    )}
                  </p>
                  <p className="text-lg text-gray-500 font-semibold relative after:content-[''] after:absolute after:top-0 after:right-[-12px] after:w-[2px] after:h-full after:bg-gray-400 after:ml-2">
                    ({productDetails.rating})
                  </p>
                  <p className="ml-4 text-teal-400 text-xl">
                    {productDetails.availabilityStatus}
                  </p>
                </div>
                <h2 className="font-semibold text-xl text-gray-900 dark:text-white">
                  ${productDetails.price}
                </h2>
                <p className="my-2 text-lg text-gray-900 dark:text-white">
                  {productDetails.description}
                </p>
                <hr />
                <div className="my-4 border border-black dark:border-white">
                  <div className="flex gap-4 items-center w-full p-2">
                    <div>
                      <FaTruck className="text-2xl text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white">
                        Free Delivery
                      </h3>
                      <p className="underline text-gray-900 dark:text-white">
                        Enter Your Postal code for delivery
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center w-full p-2 border-t dark:border-white">
                    <div>
                      <FaClock className="text-2xl text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white">
                        {productDetails.shippingInformation}
                      </h3>
                    </div>
                  </div>
                </div>
                <details>
                  <summary className="text-lg text-gray-500  dark:text-white font-semibold cursor-pointer ">
                    reviews {productDetails?.reviews?.length}
                  </summary>

                  <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col gap-2 items-center justify-between mb-4 ">
                      {productDetails?.reviews?.map((rev) => (
                        <Reviews
                          key={`${rev.reviewerName}-${rev.date}`}
                          reviewer={rev}
                        />
                      ))}
                    </div>
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
