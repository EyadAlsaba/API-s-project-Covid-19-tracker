import { BODY,RESULTCONTAINER } from "./constant.js";
import { renderResultSection,renderError } from "./view.js";
import {fetchData, getDOMElement,clearDOMElement,createElementWithClass} from "./utils.js";




export function renderUserQuery () {
        getDOMElement('form-sub').addEventListener('submit',function(Event){

        Event.preventDefault();

        let userQuery = getDOMElement('country').value;  
            
         async function makeRequest () {
                let x = document.getElementById('resultContainer');
                let y = document.querySelector('.errorContainer');
                let z = document.querySelector('.welcome')

                if(x) {
                    x.remove();
                } 
                if(y) {
                    y.remove();     
                }
                if(z) {
                    z.remove();
                }

            const url = `https://api.covid19api.com/total/dayone/country/${userQuery}`;
            const urlCountry = `https://restcountries.eu/rest/v2/name/${userQuery}`;
            
            getDOMElement('form-sub').addEventListener('submit', function(){
                renderUserQuery();
            })

            let errorContainer = document.querySelector('.errorContainer')
            
            if(isNaN(userQuery) === false) {

                if(RESULTCONTAINER){
                    RESULTCONTAINER.remove();
                    document.querySelector('.flag').remove();
                }
                renderError();

                let img = getDOMElement('error-img');
                document.querySelector('.errorHeader').textContent = `Please type in an valid country name !!!`;
                img.src = '../Public/error.png';

            } else {
                renderResultSection();
            
                const request = await fetchData(url);   
                        
                const lastIndex = request.pop();
                const { Country, Active, Confirmed, Deaths, Date } = lastIndex;   
    
                const countryRequest = await fetchData(urlCountry);
                const { flag, population } = countryRequest[0];
    
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
        time.textContent = `time now ${new Date().toLocaleTimeString()}`;
      }
    setInterval(addCurrentTime, 1000);

    function addDate (){
        date.textContent = `Today is : ${new Date().toLocaleDateString()}`
    }
    addDate();
}
