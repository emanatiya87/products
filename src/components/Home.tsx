import { useEffect } from "react";
import { useProductStore } from "../store/productStore";

import Card from "./card";
import Header from "./header";
import CategoriesCards from "./categoriesCards";
import ToastComponent from "./Toast";

export default function Home() {
  const { products, fetchProducts, category } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <>
      <Header />
      {/* filteration */}
      <section className="w-[80%] mx-auto my-4">
        <h2 className="text-gray-500 dark:text-white font-bold border-b-4 border-b-blue-400 inline py-2  ">
          Shop from <span className="text-blue-400"> Top categories</span>
        </h2>
      </section>
      <section className=" my-4 flex flex-wrap items-center justify-center">
        <CategoriesCards type={"beauty"} />
        <CategoriesCards type={"fragrances"} />
        <CategoriesCards type={"groceries"} />
        <CategoriesCards type={"furniture"} />
      </section>
      <div className="w-[80vw] mx-auto flex flex-wrap">
        {products
          .filter((p) => p.category === category)
          .map((p) => (
            <Card key={p.id} cardProduct={p} />
          ))}
      </div>
      {/* toast */}
      <ToastComponent />
    </>
  );
}
