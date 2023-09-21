"use strict"
//定义获取时间的函数
function GetTime(){
    const date = new Date()
    const minutes = date.getMinutes()
    const hours = date.getHours()
    //分钟只有一位数时补齐0
    if (minutes <= 9){
        document.getElementById("timetext").innerHTML = `${hours} : 0${minutes}`
    } else {
        document.getElementById("timetext").innerHTML = `${hours} : ${minutes}`
    }

}
//定义获取日期的函数
function GetDate(){
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    document.getElementById("datetext").innerHTML = `${month}月${day}日`
}
GetTime()
GetDate()
setInterval("GetTime()", 1000)
setInterval("GetDate()", 1000)