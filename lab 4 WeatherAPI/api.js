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
       })
   }
}
let app = new App();