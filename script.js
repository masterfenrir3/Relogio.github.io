let digital = document.querySelector('.digital')
let secondElement = document.querySelector('.p_s')
let minuteElement = document.querySelector('.p_m')
let hourElement = document.querySelector('.p_h')


setInterval(updatetime, 1000)

function updatetime() {   

    let date = new Date()
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    digital.textContent = `${fixedtime(hour)} : ${fixedtime(min)} : ${fixedtime(sec)}`

    let secPointer = ((360 / 60) * sec) - 90;
    secondElement.style.transform = `rotate(${secPointer}deg)`

    let minPointer = ((360 / 60) * min) - 90;
    minuteElement.style.transform = `rotate(${minPointer}deg)`

    let hourPointer = ((360 / 12) * hour) - 90;
    hourElement.style.transform = `rotate(${hourPointer}deg)`

}
updatetime();

function fixedtime(time) {
    if(time < 10) {
        return '0' + time
    } else {
        return time
    }
}



    
function analogic(pointer) {
    let ponteiros = document.body.querySelector('.ponteiros')
    let pps = ponteiros.getElementsByClassName('p p_s')



    
    
}
