import { useEffect } from "react";
import Card from "./card";
import Header from "./header";
import { useProductStore } from "../store/productStore";
import CategoriesCards from "./categoriesCards";

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
        <h2 className="text-gray-500 font-bold border-b-4 border-b-blue-400 inline py-2  ">
          Shop from <span className="text-blue-400"> Top categories</span>
        </h2>
      </section>
      <section className=" my-4 flex items-center justify-center">
        <CategoriesCards type={"beauty"} />
        <CategoriesCards type={"fragrances"} />
        <CategoriesCards type={"groceries"} />
        <CategoriesCards type={"furniture"} />
      </section>
      <div className="w-[80vw] mx-auto flex flex-wrap">
        {products
          .filter((p) => p.category === category)
          .map((p) => (
            <Card
              key={p.id}
              Id={p.id}
              title={p.title}
              brand={p.brand}
              image={p.images[0]}
              price={p.price}
              discountPercentage={p.discountPercentage}
            />
          ))}
      </div>
    </>
  );
}
