import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const login = "/login?redirected=true";

const Wrapper = ({ children }) => {
  const router = useRouter();
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem("token") === null) {
        router.push("/login");
      }
      setTimeout(() => {
        setDone(true);
      }, 220);
    }
  }, []);

  if (!done) {
    return <h1>Checking ...</h1>;
  }
  return <>{children}</>;
};

export default Wrapper;
export async function getStaticProps() {}
