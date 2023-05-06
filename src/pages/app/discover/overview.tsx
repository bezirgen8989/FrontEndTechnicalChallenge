import {HeaderNavigation} from "@/components/HeaderNavigation";
import {useContext} from "react";
import {AppContext} from "@/Context";

const Overview = () => {
  const {discoverWeb3HeaderNavigators} = useContext(AppContext);
  return (
    <>
      <HeaderNavigation headerNavigators={discoverWeb3HeaderNavigators}/>
     <h1>Overview</h1>
    </>
  );
};

export default Overview;
