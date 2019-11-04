const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if(address == undefined)
{
    console.log('Please provide the place of which you want the weather details')
}
else{
geocode(address,(error,{latitude,longitude,location}) =>{
    if(error){
        return console.log('Error')
    }
    
    forecast(latitude, longitude, (error, forecastdata) => {
        if (error)
        {
            return console.log('Error')
        }
        console.log(location)
        console.log(forecastdata)
      })
})

}