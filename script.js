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