//variaveis e seleçao de elementos
 const apikey = "6ca08a75c339068d89f60222c9b06ab5";
 const apicountryurl = "https://flagsapi.com/BE/flat/64.png";
 
 
 const cityinput = document.querySelector("#city-input");
 const searchBtn = document.querySelector("#search");


 const cityElement = document.querySelector("#city")
 const tempElement = document.querySelector("#temperature span")
 const countryElement = document.querySelector("#country")
 const descriptionElement = document.querySelector("#description")
 const umidityElement = document.querySelector("#umidity span")
 const windElement = document.querySelector("#wind span")
 const wheathericonElement = document.querySelector("#weather-icon")



 // eventos
 searchBtn.addEventListener("click",(e) =>{
    const city = cityinput.value;
    e.preventDefault();
    showWheatherdata(city);
 });



 // funcoes

  //const  showwatherdatte = (city) => {
    
 //}

 function showWheatherdata(city) {
    getweatherdata(city)
 }

 const getweatherdata = async(city) => {

    const Apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`
    const res =  await fetch(Apiurl)
    const data= await res.json()
    
    console.log(data)
 } 