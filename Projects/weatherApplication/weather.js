let tempicon=document.getElementById("image");
window.addEventListener("load" ,()=>{
    let long;
    let lat;
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>
        {
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/";

            const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6b0bab5fdaa9b2066e7d76034366e52b `
            fetch(api).then((response)=>{
                
                return response.json();
                
            })
            .then (data =>
                {
                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];

                    document.getElementById("city").innerHTML=name;
                    document.getElementById("weather").innerHTML=main;
                    document.getElementById("degree").innerHTML=Math.round(feels_like-273);
                    if(id<300 && id>200){
                        tempicon.src="./images/storm.png";
                    }
                    else if(id<400 && id>300){
                        tempicon.src="./images/cloudy.png";
                    }
                    else if(id<600 && id>500){
                        tempicon.src="./images/rain.png";
                    }
                    else if(id<700 && id>600){
                        tempicon.src="./images/snowflake.png";
                    }
                    else if(id<800 && id>700){
                        tempicon.src="./images/cloud.png";
                    }
                    else if(id==800){
                        tempicon.src="./images/clouds-and-sun.png";
                    }
                })
        }
        )
    }
})
const searchButton=document.getElementById("searchbutton");
let city=document.getElementById("cityname");

searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(city.value);

})

const getWeather=async(loc)=>{
    
    
    if(loc==""){
        alert("Please Enter City Name!!")
    }
    else{
        try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=6b0bab5fdaa9b2066e7d76034366e52b`,{mode: 'cors'});
        const weatherData=await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        document.getElementById("city").innerHTML=name;
        document.getElementById("weather").innerHTML=main;
        document.getElementById("degree").innerHTML=Math.round(feels_like-273);

        if(id<300 && id>200){
            tempicon.src="./images/storm.png";
        }
        else if(id<400 && id>300){
            tempicon.src="./images/cloudy.png";
        }
        else if(id<600 && id>500){
            tempicon.src="./images/rain.png";
        }
        else if(id<700 && id>600){
            tempicon.src="./images/snowflake.png";
        }
        else if(id<800 && id>700){
            tempicon.src="./images/cloud.png";
        }
        else if(id==800){
            tempicon.src="./images/clouds-and-sun.png";
        }
    }catch{
        alert("Please Enter a valid city name");
    }
    }
    
}
