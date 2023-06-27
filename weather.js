const suggestionBtn=document.querySelector('.suggestion-button')
const suggestionForRain =document.querySelector('.suggestion-for-rain');
const suggestionForSun =document.querySelector('.suggestion-for-sun');
const moreInfo = document.querySelector('.more-info'); 
const weatherCard=document.querySelector('.weather-attributes-sun');
const mainbg=document.querySelector('.main-body')
const datasun=document.querySelector('.data-sun-day')
const suggestionbutton=document.querySelector('.suggestion-button')
const w2=document.querySelector('.w2');
const surya=document.querySelector('.surya-dev');
const w1=document.querySelector('.w1');
const dataSunday=document.querySelector('.data-sun-day');
const weatherTxt=document.querySelector('.weather-text');

let displaySuggestion=1;
let morebtn=1;

let weather='ran';

if(weather==='rain'){

  datasun.style.display='flex';
  datasun.style.width='100%';
  datasun.style.justifyContent='center';
  
  
  moreInfo.style.backgroundColor='green'
  suggestionbutton.style.backgroundColor='green';
  mainbg.style.backgroundImage="url(background-of-landscape-with-deep-fir-forest-vector-12420324.jpg)";
  mainbg.style.backgroundSize='cover';
  weatherTxt.style.marginTop='-3%'

  weatherCard.style.backgroundImage="url(r1.gif)";

  surya.remove();
  
  weatherCard.style.
  backgroundSize='cover';

  
 
  suggestionForRain.style.backgroundImage="url(r1.gif)";
  suggestionForRain.style.marginTop='6%';     
}
else{
  moreInfo.style.backgroundColor='rgba(149, 84, 209, 0.849)';
  suggestionbutton.style.backgroundColor='rgba(149, 84, 209, 0.849)';
  mainbg.style.backgroundImage="url(89bf92102311059.5f33aaf4d90ba.png)";
  
  suggestionForRain.innerHTML=`
  <ul>

  <li>Stay Hydrated: The most important thing to do in hot weather is to stay hydrated. Drink plenty of water and avoid alcoholic and caffeinated beverages, which can dehydrate you.
  </li>

</ul>
  `
}

moreInfo.addEventListener('click',render);


function render(){
  if(morebtn%2===1){
  weatherCard.className='weather-attributes-sun-absent';
  moreInfo.textContent='More';
  
  w2.style.display='none';

  }else{
    weatherCard.className='weather-attributes-sun';
  moreInfo.textContent='Less';
  
  w2.style.display='inline-block';
  }
  morebtn++;

}

suggestionBtn.addEventListener('click',()=>{
   
  
 
  if(displaySuggestion%2===1){
    suggestionForRain.className='suggestion-for-rain';

  }
  else{
  suggestionForRain.className='suggestion-for-rain-absent'
  
  }
  displaySuggestion++;
})