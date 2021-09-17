import { renderStartingPage,renderFooter } from "./view.js";
import { renderUserQuery,renderDateAndTime} from "./handlers.js";

function appStart (){
    
    renderStartingPage();
    
    renderDateAndTime();
    renderUserQuery();
    //renderFooter();
}

window.addEventListener('load',appStart)