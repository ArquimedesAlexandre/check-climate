//variaveis e seleçao de elementos
 const apikey = "6ca08a75c339068d89f60222c9b06ab5";
 const apicountryurl = "https://flagsapi.com/BE/flat/64.png";
 
 
 const cityinput = document.querySelector("#city-input");
 const searchBtn = document.querySelector("#search");

 // eventos
 searchBtn.addEventListener("click",(e) =>{
    const city = cityinput.value;
    e.preventDefault();
    console.log(city);
 });