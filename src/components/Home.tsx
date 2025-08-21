import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./card";
export default function Home() {
  const [products, setProd] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        setProd(response.data.products);
        console.log(response.data.products);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <>
      <div className="w-[80vw] mx-auto flex flex-wrap">
        {products.map((p) => {
          return (
            <Card
              key={p.id}
              Id={p.id}
              title={p.title}
              brand={p.brand}
              image={p.images[0]}
              price={p.price}
            />
          );
        })}
      </div>
    </>
  );
}
