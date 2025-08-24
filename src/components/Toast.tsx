"use client";

import { Toast, ToastToggle } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { useProductStore } from "../store/productStore";
export default function ToastComponent() {
  const { showToast, setShowToast } = useProductStore();

  return (
    <div className="space-y-4">
      {showToast && (
        <Toast className="fixed top-14 left-14">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
            <HiCheck className="h-5 w-5" />{" "}
          </div>
          <div className="ml-3 text-sm font-normal">
            Item Added successfully
          </div>
          <ToastToggle onDismiss={() => setShowToast(false)} />
        </Toast>
      )}
    </div>
  );
}
