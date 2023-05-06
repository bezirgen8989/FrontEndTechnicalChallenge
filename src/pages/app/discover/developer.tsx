import {HeaderNavigation} from "@/components/HeaderNavigation";
import {useContext} from "react";
import {AppContext} from "@/Context";

const Developer = () => {
  const {discoverWeb3HeaderNavigators} = useContext(AppContext);
  return (
    <>
      <HeaderNavigation headerNavigators={discoverWeb3HeaderNavigators}/>
     <h1>Developer</h1>
    </>
  );
};

export default Developer;
