"use client";

import React from "react";
import { toast } from "react-toastify";
import { usePlan } from "@/context/PlanContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface IRemoveFromPlanButton {
  bookId: number;
  showMarkAsDone?: boolean;
}

const RemoveFromPlanButton = ({
  bookId,
  showMarkAsDone = true,
}: IRemoveFromPlanButton) => {
  const { removeFromPlan, removeFromSaved } = usePlan();

  const handleMarkAsDone = () => {
    toast.success("Workout marked as done!");
    removeFromPlan(bookId);
  };

  const handleRemove = () => {
    removeFromPlan(bookId);
    removeFromSaved(bookId);
    toast.info("Workout removed");
  };

  return (
    <>
      {showMarkAsDone && (
        <button
          type="button"
          onClick={handleMarkAsDone}
          className="font-semibold text-black bg-[#CCFF00] rounded-full px-6 py-3 cursor-pointer hover:bg-[#b2e500]"
        >
          <FontAwesomeIcon icon={faCheck} className="mr-2" />
          Mark as Done
        </button>
      )}
      <button type="button" onClick={handleRemove} className="cursor-pointer ml-2">
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </>
  );
};

export default RemoveFromPlanButton;
