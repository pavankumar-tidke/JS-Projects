let p1 = document.getElementById('p1')
let clock = document.getElementById('clock')
let p2 = document.getElementById('p2')
const options = {
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
}


setInterval( ()=>{
    let d = new Date();
    date = d.toLocaleTimeString(undefined, options)
    let hours = d.getHours(); 
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;    
    min = min < 10 ? '0'+ min : min;
    sec = sec < 10 ? '0'+ sec : sec;
    time =  hours + ' : '+ min + ' : ' + sec;
    clock.setAttribute('data-text', time)
    clock.innerText = time      
    p1.setAttribute('data-text', ampm)
    p1.innerText = ampm 

}, 1000)