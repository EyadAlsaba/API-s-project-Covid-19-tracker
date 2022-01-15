import { RESULTCONTAINER } from "./constant.js";
import { renderResultSection,renderError} from "./view.js";
import {fetchData, getDOMElement} from "./utils.js";

export function renderUserQuery () {
    
        getDOMElement('form-sub').addEventListener('submit',function(Event){

        Event.preventDefault();

        let userQuery = getDOMElement('country').value;  
            
         async function makeRequest () {
                const resultDiv = document.getElementById('resultContainer');
                const  errorContainer = document.querySelector('#errorContainer');
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
            // The API is not working anymore 
            //const urlCountry = `https://restcountries.eu/rest/v2/name/${userQuery}`;

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
                //const { flag, population } = countryRequest[0];

                const percentageDeathsOfConfirmedCases = Deaths / Confirmed * 100;
                const percentageMessage = percentageDeathsOfConfirmedCases.toFixed(2);

                renderResultSection();
                document.querySelector('.countryName').textContent = Country;
                // document.querySelector('.countryPopulation').textContent = `population: ${population.toLocaleString()}`;               
                document.querySelector('.activeCases').textContent = `Active cases: ${Active.toLocaleString()}`;
                document.querySelector('.confirmedCases').textContent = `Confirmed Cases: ${Confirmed.toLocaleString()}`;
                document.querySelector('.deathsCases').textContent = `Deaths Cases: ${Deaths.toLocaleString()}`;
                document.querySelector('.lastUpdate').textContent = `Last updated: ${Date.slice(0,10)}`;
                document.querySelector('.percentageMsg').innerHTML =
                 `Based on the statistics, we provide you with a percentage numbers of deaths cases from the confirmed cases!<br> for <span><em style="color: red;">${Country}</em><br></span> the percentage is <em><span style="color: red;">${percentageMessage}%</span></em>`
                // document.querySelector('.flag').src = flag;

                if(errorContainer){
                    errorContainer.remove(); 
                }             
            } 
        };
        
        makeRequest();
    });
}   

export function renderDateAndTime (){
    const time = document.querySelector('.time');
    const date = document.querySelector('.date');

    function addCurrentTime() {
        time.innerHTML = `time now <br>${new Date().toLocaleTimeString()}`;
      }
    setInterval(addCurrentTime, 1000);

    function addDate (){
        date.innerHTML = `Today is <br>${new Date().toLocaleDateString()}`
    }
    addDate();
}
