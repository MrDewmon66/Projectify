import { useState } from "react";
import NavBar from "../components/NavBar";
import NewProjectForm from "../components/NewProjectForm";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <NavBar />
      <h1 className="">Hello world</h1>
      <button
        onClick={() => setIsVisible(true)}
        className="flex items-center justify-center text-xl border border-solid border-black rounded-md text-center p-2 hover:bg-gray-500 hover:text-white"
      >
        New Project...
      </button>

      {isVisible && <NewProjectForm onClose={() => setIsVisible(false)} />}
    </>
  );
}
