import { useProductStore } from "../store/productStore";
interface catProps {
  type: string;
}
export default function CategoriesCards({ type }: catProps) {
  const { setCategory } = useProductStore();
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-3 cursor-pointer">
        <div
          className="w-28 h-28 overflow-hidden rounded-[50%] flex items-center justify-center border border-transparent shadow hover:shadow-2xl hover:border-blue-300"
          onClick={() => {
            setCategory(type);
          }}
        >
          <img src={`/images/${type}.jpg`} alt={type} className="" />
        </div>
        <h3 className="text-gray-900 dark:text-white">{type}</h3>
      </div>
    </>
  );
}
