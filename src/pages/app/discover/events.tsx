import {HeaderNavigation} from "@/components/HeaderNavigation";
import {useContext} from "react";
import {AppContext} from "@/Context";

const Events = () => {
  const {discoverWeb3HeaderNavigators} = useContext(AppContext);
  return (
    <>
      <HeaderNavigation headerNavigators={discoverWeb3HeaderNavigators}/>
     <h1>Events</h1>
    </>
  );
};

export default Events;
