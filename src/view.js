import { BODY } from "./constant.js";
import { createElementWithClass, createDOMElementWithId } from "./utils.js"; 

export function renderStartingPage () {

    const container = createElementWithClass(BODY,'div','container');
    const header = createElementWithClass(container,'h1','header');

    const dateContainer = createElementWithClass(container,'div','dateContainer')
    const headerTime = createElementWithClass(dateContainer,'span','time');
    const headerDate = createElementWithClass(dateContainer,'span','date');   

    const form = createDOMElementWithId(container,'form',{id:'form-sub'});
    const inputCountry = createDOMElementWithId(form,'input', {id:'country'});
    const submitBtn = createDOMElementWithId(form,'input', {id:'submit-btn'});
    const welcome = createElementWithClass(container,'p','welcomeContainer');

    welcome.textContent = `Welcome to covid-19 tracker, our application shows last updated statistic's just in one click... ,
     all you need to do is type in your search country... `;

    inputCountry.setAttribute('placeholder','search country...');
    submitBtn.setAttribute('type','submit');

    header.textContent = 'COVID-19 INFO';

    const logo = createElementWithClass(header,'img','logo')
    logo.src = './Public/virus-36773.png';

}

export function renderResultSection (){
    const resultContainer = createDOMElementWithId(BODY,'div', {id:'resultContainer'});
    const countryContainer = createElementWithClass(resultContainer,'div','countryContainer');

     const countryName = createElementWithClass(countryContainer,'p','countryName');
    // const countryFlag = createElementWithClass(countryContainer,'img','flag');
    
   // const countryPopulation = createElementWithClass(resultContainer,'p','countryPopulation');   
    const activeCases = createElementWithClass(resultContainer,'p','activeCases');
    const confirmedCases = createElementWithClass(resultContainer,'p','confirmedCases');
    const deathsCases = createElementWithClass(resultContainer,'p','deathsCases');
    const lastUpdate = createElementWithClass(resultContainer,'p','lastUpdate');
    const percentageMsg = createElementWithClass(resultContainer,'p','percentageMsg');
}

export function renderError(){
    const errorContainer = createDOMElementWithId(BODY,'div',{id:'errorContainer'})
    const errorMessage = createElementWithClass(errorContainer,'h2','errorHeader')
    const errorImg = createElementWithClass(errorContainer,'img','error-img')
    errorMessage.textContent = `Please type in an valid country name !!!`;
    errorImg.src = './Public/error.png';
}
export function renderFooter (){
    const footerContainer = createDOMElementWithId(BODY,'div', {id:'footer'});
    const footerMsg = createElementWithClass(footerContainer,'p','footerMsg');
    footerMsg.textContent = `Made with love 🍉`
}