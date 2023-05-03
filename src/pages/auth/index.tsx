import { useRouter } from "next/router";
import { useEffect } from "react";

const Auth = () => {
  const router = useRouter();
  useEffect(() => {
    const isUserAut = localStorage.getItem("userFormData");

    if (!isUserAut) {
      router.push("app/nodes");
    } else {
      router.push("auth/selectRole");
    }
  }, [router]);
};

export default Auth;
