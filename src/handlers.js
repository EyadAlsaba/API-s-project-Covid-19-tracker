import { RESULTCONTAINER } from "./constant.js";
import { renderResultSection,renderError,renderFooter} from "./view.js";
import {fetchData, getDOMElement} from "./utils.js";




export function renderUserQuery () {
    
        getDOMElement('form-sub').addEventListener('submit',function(Event){

        Event.preventDefault();

        let userQuery = getDOMElement('country').value;  
            
         async function makeRequest () {
                const resultDiv = document.getElementById('resultContainer');
                const  errorContainer = document.querySelector('.errorContainer');
                const welcomeContainer = document.querySelector('.welcomeContainer')

                if(resultDiv) {
                    resultDiv.remove();
                } 
                if(errorContainer) {
                    errorContainer.remove();     
                }
                if(welcomeContainer) {
                    welcomeContainer.remove();
                }

            const url = `https://api.covid19api.com/total/dayone/country/${userQuery}`;
            const urlCountry = `https://restcountries.eu/rest/v2/name/${userQuery}`;

            if(isNaN(userQuery) === false || !userQuery) {

                if(RESULTCONTAINER){
                    RESULTCONTAINER.remove();
                    document.querySelector('.flag').remove();
                }
                renderError();
            } else {

                const request = await fetchData(url);   
                const lastIndex = request.pop();
                const { Country, Active, Confirmed, Deaths, Date } = lastIndex;   
    
                const countryRequest = await fetchData(urlCountry);
                const { flag, population } = countryRequest[0];

                renderResultSection();
                document.querySelector('.countryName').textContent = Country;
                document.querySelector('.countryPopulation').textContent = `population: ${population.toLocaleString()}`;               
                document.querySelector('.activeCases').textContent = `Active cases: ${Active.toLocaleString()}`;
                document.querySelector('.confirmedCases').textContent = `Confirmed Cases: ${Confirmed.toLocaleString()}`;
                document.querySelector('.deathsCases').textContent = `Deaths Cases: ${Deaths.toLocaleString()}`;
                document.querySelector('.lastUpdate').textContent = `Last updated: ${Date.slice(0,10)}`;
    
                document.querySelector('.flag').src = flag;
                
                if(errorContainer){
                    errorContainer.remove(); 
                }             
            } 
        };
        
        makeRequest();
    });
}   

export function renderDateAndTime (){
    let time = document.querySelector('.time');
    let date = document.querySelector('.date');

    function addCurrentTime() {
        time.innerHTML = `time now <br>${new Date().toLocaleTimeString()}`;
      }
    setInterval(addCurrentTime, 1000);

    function addDate (){
        date.innerHTML = `Today is <br>${new Date().toLocaleDateString()}`
    }
    addDate();
}
