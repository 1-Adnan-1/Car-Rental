import { FC, useEffect } from "react";
import { Car } from "../../types";
import Images from "./images";
import formatData from "../../utils/formatdData";

interface Props {
  isOpen: boolean;
  close: () => void;
  car: Car;
}

const Modal: FC<Props> = ({ isOpen, close, car }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] grid place-items-center z-20">
        <div className="bg-[#2F2F2F] p-6 relative min-w-[700px] max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-lg overflow-auto">
          <button
            onClick={close}
            className="cursor-pointer p-1 absolute right-1 top-1 z-10 bg-[#696969] rounded-full"
          >
            <img src="/close.svg" alt="close" />
          </button>

          <Images car={car} />

          {formatData(car).map(([key, value]) => (
            <p className="flex justify-between gap-20 text-md font-medium">
              <span className="capitalize text-gray-300">{key}</span>
              <span className="font-semibold capitalize text-gray-200">
                {value === "Y" ? "Var" : value === "N" ? "Yok" : value || "-"}
              </span>
            </p>
          ))}
        </div>
      </div>
    )
  );
};

export default Modal;
