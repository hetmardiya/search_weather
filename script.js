// for current date and time
let current = new Date()

let fulldate = current.toLocaleString(("en-IN"),{
    year:"numeric",
    month : 'long',
    day:'2-digit'
})
let date = document.querySelectorAll('.date p');
date[0].textContent = fulldate;
setInterval(() => {
    let current = new Date()
    let fulltime = current.toLocaleString(("en-IN"),{
    hour:'2-digit',
    hourCycle:'h23',
    minute:'2-digit',
    second:'2-digit'
    })
    let time = document.querySelectorAll('.time_date p');
    time[0].textContent = fulltime;
}, 0);
let get_day = ()=>{
    let days = ["Sunday","Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "saturday"]
    let day = days[current.getDay()]
    return day;
}
let day = document.querySelectorAll('.date p')
day[1].textContent = `_${get_day()}`;

// for api calls and showing imgs and condition
let condition = document.querySelectorAll('.emoji p');
let imgs = document.querySelector('.emoji img')

document.querySelector('.search button').addEventListener('click',()=>{
    let target = document.querySelector('input').value;
    let fetchData = async()=>{
        let URL = `https://api.weatherapi.com/v1/current.json?key=fc2c1647f363418db34140601240108&q=${target}`
    
        let response = await fetch(URL);
        let data = await response.json()
        condition[0].textContent = `${data.current.temp_c}°C_`
        condition[1].textContent = data.current.condition.text;
        condition_text = data.current.condition.text.toLowerCase()
        if (condition_text.includes(`sunny`)) {
            imgs.src = `sun.png`
        }else if (condition_text.includes('haze')) {
            imgs.src = `haze.png`
        }else if(condition_text.includes(`mist`)){
            imgs.src = `mist.png`
        }else if(condition_text.includes(`rain`)){
            imgs.src = `raining.png`
        }else if(condition_text.includes(`snow`)){
            imgs.src = `snow.png`
        }else if(condition_text.includes(`thunderstorm`)){
            imgs.src = `thunderstorm.png`
        }else if(condition_text.includes(`cloudy`)){
            imgs.src = `cloudy.png`
        }else {
            imgs.src = `cloud.png`
        }
    }
    fetchData()
})