let hrs =document.querySelector('#hrs')
let min =document.querySelector('#min')
let sec =document.querySelector('#sec')
let con =document.querySelector('.container')

setInterval(() =>{
    let clock = new Date();

    hrs.innerHTML = (clock.getHours()<10?"0":"")+ clock.getHours();
    min.innerHTML = (clock.getMinutes()<10?"0":"")+ clock.getMinutes();
    sec.innerHTML = (clock.getSeconds()<10?"0":"")+ clock.getSeconds();
    
    // con.innerHTML =   clock.toLocaleTimeString();

},1000)