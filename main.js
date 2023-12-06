
function clockTime(){
    // to get system time

    let date=new Date()
    let hours=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    let session= "AM"

    if(hours==0){
        hours=12
    }
    if(hours>12){
        hours=hours-12
        session="PM"
    }

    hours=(hours<10)?"0"+hours:hours
    minute=(minute<10)?"0"+minute:minute
    second=(second<10)?"0"+second:second

    clock.innerHTML=`${hours}:${minute}:${second} ${session}`

    setTimeout(() => {
        clockTime()
    }, 1000);
}

// function call
clockTime()