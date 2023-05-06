import {HeaderNavigation} from "@/components/HeaderNavigation";
import {useContext} from "react";
import {AppContext} from "@/Context";

const News = () => {
  const {discoverWeb3HeaderNavigators} = useContext(AppContext);
  return (
    <>
      <HeaderNavigation headerNavigators={discoverWeb3HeaderNavigators}/>
     <h1>News</h1>
    </>
  );
};

export default News;
