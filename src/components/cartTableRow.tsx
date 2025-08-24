import { type Product, useProductStore } from "../store/productStore";
import { TableCell, TableRow } from "flowbite-react";

export default function CartTableRow({ product }: { product: Product }) {
  const { deleteFromCart, quantity } = useProductStore();
  const productQuantity =
    quantity.find((q) => q.id === product.id)?.quantity ?? 0;
  return (
    <>
      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
        <TableCell className="whitespace-nowrap w-20 h-20">
          <img src={product.images[0]} alt="" />
        </TableCell>
        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {product.title}
        </TableCell>
        <TableCell>{product.category}</TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>{productQuantity}</TableCell>
        <TableCell>
          <span
            className="cursor-pointer font-medium text-red-600 hover:underline dark:text-primary-500"
            onClick={() => {
              deleteFromCart(product, productQuantity);
            }}
          >
            Delete
          </span>
        </TableCell>
      </TableRow>
    </>
  );
}
