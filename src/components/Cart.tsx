import { useProductStore } from "../store/productStore";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
  TableCell,
} from "flowbite-react";
import CartTableRow from "./cartTableRow";

export default function Cart() {
  const { cartProducts } = useProductStore();

  return (
    <>
      <div className="overflow-x-auto w-[80%] mx-auto my-4 min-h-90">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>Product image</TableHeadCell>
              <TableHeadCell>Product name</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>Quantity</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Delete</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody className="divide-y">
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <CartTableRow key={product.id} product={product} />
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No products in cart now go to Shoping !
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
