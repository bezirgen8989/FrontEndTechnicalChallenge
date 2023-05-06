import {HeaderNavigation} from "@/components/HeaderNavigation";
import {useContext} from "react";
import {AppContext} from "@/Context";

const Projects = () => {
  const {discoverWeb3HeaderNavigators} = useContext(AppContext);
  return (
    <>
      <HeaderNavigation headerNavigators={discoverWeb3HeaderNavigators}/>
      <div style={{display:"block"}}>
        <h1>Projects</h1>
      </div>
    </>
  );
};

export default Projects;
