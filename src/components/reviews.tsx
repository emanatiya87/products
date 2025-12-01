import { LiaStarSolid } from "react-icons/lia";
import { type Reviewer } from "../store/productStore";
interface ReviewsProps {
  reviewer: Reviewer;
}
export default function Reviews({ reviewer }: ReviewsProps) {
  return (
    <li className="py-3 sm:py-4 shadow border-gray-100 border dark:border-gray-500 rounded-2xl p-2 list-none  w-full">
      <div className="flex items-center">
        <div className="shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="/images/user.png"
            alt={reviewer.reviewerName}
          />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {reviewer.reviewerName}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {reviewer.reviewerEmail}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white my-2">
          {reviewer.comment}
        </div>
        <div className="flex items-center flex-wrap">
          {/* rating with stars */}
          {[...Array(Math.round(reviewer.rating ?? 0))].map((_, i) => (
            <LiaStarSolid key={i} className="text-yellow-300 text-xl" />
          ))}
          <p className="text-lg text-gray-500 font-semibold relative">
            ({reviewer.rating})
          </p>
        </div>
      </div>
    </li>
  );
}
