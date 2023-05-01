import { useRouter } from "next/router";
import { useEffect } from "react";

const App = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("userFormData");

    if (!token) {
      router.push("/auth");
    } else {
      router.push("/app");
    }
  }, [router]);
};

export default App;
