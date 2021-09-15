import { renderStartingPage,renderResultSection } from "./view.js";
import { renderUserQuery,renderDateAndTime} from "./handlers.js";

function appStart (){
    renderStartingPage();
    renderDateAndTime();
    renderUserQuery();
}

window.addEventListener('load',appStart)