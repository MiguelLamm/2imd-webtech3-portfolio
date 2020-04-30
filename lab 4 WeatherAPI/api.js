class App{
    constructor(){
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this)
        );  
    }

    gotLocation(result){
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        console.log(this.lat, this.lng);
        this.getWeather();
        this.getSuper();
    }

   getWeather(){
    const cors = "https://cors-anywhere.herokuapp.com/";
       const key= "cf08e49c0e3241eea60ea6a855597072";
       let url = `${cors}https://api.weatherbit.io/v2.0/current?&lat=${this.lat}&lon=${this.lng}&key=cf08e49c0e3241eea60ea6a855597072`;
       
       fetch(url).then(response => {
           return response.json();
       }).then(data => {


        let temps = localStorage.setItem("temps", (data.data[0].app_temp));
          // console.log(data.data[0].app_temp);
           
           document.querySelector('.temp').innerHTML= data.data[0].app_temp + "°C";
           document.querySelector('.sunrise').innerHTML= data.data[0].sunrise;
           document.querySelector('.sundown').innerHTML= data.data[0].sunset;
           document.querySelector('.location').innerHTML= data.data[0].city_name;

         console.log(data);
       })
   }

   getSuper(){
    const cors = "https://cors-anywhere.herokuapp.com/";
       let r = Math.round(Math.random()*731);
       console.log(r);
       let url =`${cors}https://superheroapi.com/api/1952023004942356/${r}/image`;
        
       fetch(url).then(response => {
        return response.json();
    }).then(data => {

console.log(data);
document.querySelector('.img').src= data.url;
document.querySelector('.title').innerHTML= data.name;
    })
   }
}
let app = new App();