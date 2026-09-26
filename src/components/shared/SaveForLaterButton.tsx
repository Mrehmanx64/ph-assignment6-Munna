"use client";

import React from "react";
import { toast } from "react-toastify";
import { IBook } from "@/types/bookstype";
import { usePlan } from "@/context/PlanContext";

interface ISaveForLaterButton {
  book: IBook;
}

const SaveForLaterButton = ({
  book,
}: ISaveForLaterButton) => {
  const {
    saveForLater,
    isSaved,
  } = usePlan();

  const alreadySaved = isSaved(book.id);

  return (
    <button
      type="button"
      onClick={() => {
        saveForLater(book);
        toast.success("Saved for later");
      }}
      disabled={alreadySaved}
      className={`rounded-lg px-6 py-3 transition ${
        alreadySaved
          ? "cursor-not-allowed bg-[#2B3038] text-[#8A92A0]"
          : "text-[#E5E7EB] font-medium border border-[#374151] cursor-pointer hover:bg-[#1C2028]"
      }`}
    >
      {alreadySaved
        ? "Saved ✔"
        : "🔰 Save for later"}
    </button>
  );
};

export default SaveForLaterButton;