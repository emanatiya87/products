import { useProductStore } from "../store/productStore";
interface imgProps {
  index: number;
}
export default function SmallImg({ index }: imgProps) {
  const { productDetails, setSelectedImgId } = useProductStore();
  if (!productDetails) {
    return <>loading...</>;
  } else {
    return (
      <>
        <div className="flex-1 hover:shadow-xl">
          <img
            src={productDetails.images[Number(index)]}
            alt={productDetails.title}
            className="w-100 cursor-pointer"
            onClick={() => {
              setSelectedImgId(index);
            }}
          />
        </div>
      </>
    );
  }
}
