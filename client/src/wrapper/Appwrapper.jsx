import React from "react";
import { SocialMedia, NavigationDots } from "../components";

const AppWrapper = (Component, idName, classNames)=> function HOC() {
return (
    <div id={idName} className="app__container">
         <SocialMedia/>
         <div className={`app__flex ${classNames}`}>
         <Component/>
      
         <NavigationDots active={idName}/>
         </div>
       
    </div>
   
)
}
export default AppWrapper