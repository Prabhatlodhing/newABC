"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handlePagechange = () => {
    router.push("/about");
    console.log("Button clicked!");
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handlePagechange}>Click Me</button>
    </div>
  );
}
