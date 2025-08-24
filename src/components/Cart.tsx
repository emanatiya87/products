import { useProductStore } from "../store/productStore";
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import CartTableRow from "./cartTableRow";

export default function Cart() {
  const { cartProducts } = useProductStore();

  return (
    <>
      <div className="overflow-x-auto w-[80%] mx-auto my-4">
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
            {cartProducts.map((p) => {
              return <CartTableRow key={p.id} product={p} />;
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
