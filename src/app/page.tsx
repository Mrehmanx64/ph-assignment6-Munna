import { Suspense } from "react";
import Banner from "@/components/homepage/Banner";
import Books from "@/components/homepage/Books";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<div className="container mx-auto mt-10">Loading workouts...</div>}>
        <Books />
      </Suspense>
      <ToastContainer />
    </>
  );
}
