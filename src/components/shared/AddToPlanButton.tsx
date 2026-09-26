"use client";

import { toast } from "react-toastify";
import { IBook } from "@/types/bookstype";
import { usePlan } from "@/context/PlanContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

interface IAddToPlanButton {
  book: IBook;
}

const AddToPlanButton = ({
  book,
}: IAddToPlanButton) => {
  const {
    addToPlan,
    isInPlan,
  } = usePlan();

  const alreadyInPlan =
    isInPlan(book.id);

  return (
    <button
      onClick={() => {
        addToPlan(book);
        toast.success("Added to today's plan");
      }}
      disabled={alreadyInPlan}
      className={`rounded-lg px-4 py-3 min-h-12 text-xs font-bold uppercase transition ${
        alreadyInPlan
          ? "cursor-not-allowed bg-[#2B3038] text-[#8A92A0]"
          : "bg-[#C2F800] text-black hover:opacity-90 cursor-pointer"
      }`}
    >
      {alreadyInPlan
        ? (<span><FontAwesomeIcon icon={faCheck} className="mr-2"/>Added to plan</span>)
        : (<span><FontAwesomeIcon icon={faPlus} className="mr-2"/>Add to todays plan</span>)}
    </button>
  );
};

export default AddToPlanButton;