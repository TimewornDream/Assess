"use strict"

var s_btn = document.getElementById("s_button")
var b_btn = document.getElementById("b_button")
var h_btn = document.getElementById("h_button")
var LastInput, tag
LastInput = ""
//定义search功能的函数
function search(){
    var input = document.getElementById("input").value
    if (input != ""){
        window.open(`https://cn.bing.com/search?q=${input}`)
        return input
    }
}

//search按钮点击
s_btn.onclick = function(){
    LastInput = search()
    createHistory()
}

//search按钮热键
window.onkeydown = function(event){
    var key = event.key
    if (key == "Enter"){
        LastInput = search()
        createHistory()
    }
}

//back按钮点击
b_btn.onclick = function(){
    if (LastInput != ""){
        window.open(`https://cn.bing.com/search?q=${LastInput}`)
    }
}

//定义取"南⼤家园"，"云家园"，"家园⼯作室"，"⼩家园传声机"中随机一个标签的函数
function getTag(){
    var randomNumber1 = Math.round(Math.random())
    var randomNumber2 = Math.round(Math.random())

    if (randomNumber1 == 0 && randomNumber2 == 0){
        tag = "南大家园"
    } else if (randomNumber1 == 0 && randomNumber2 == 1){
            tag = "云家园"
    } else if (randomNumber1 == 1 && randomNumber2 == 0){
            tag = "家园工作室"
    } else if (randomNumber1 == 1 && randomNumber2 == 1){
            tag = "⼩家园传声机"
    }
}

//home按钮点击
h_btn.onclick = function(){
    getTag()
    document.getElementById("input").value = tag
}

//定义获取found类的value值启动搜索的函数
function searchFound(x){
    var list = document.getElementsByClassName("found")
    window.open(`https://cn.bing.com/search?q=${list[x].innerHTML}`)
}

//定义搜索后生成历史记录的函数
function createHistory(){
    var searchHistory = document.getElementById("searchHistory")
    var history = document.createElement("button")
    history.type = "button"
    history.class = "history"
    history.onclick = function(){
        window.open(`https://cn.bing.com/search?q=${history.innerHTML}`)
    }
    history.innerHTML = LastInput

    //设置历史记录样式
    history.style.fontSize = '15px'
    history.style.color = 'black'
    history.style.backgroundColor = 'white'
    history.style.borderRadius = '3px'
    history.style.paddingInline =' 8px'
    history.style.height = '25px'
    history.style.border = '0'
    history.style.fontWeight = '550'
    history.style.textDecoration = 'none'
    history.style.cursor = 'pointer'
    history.style.marginRight = '7px'
    history.style.position = 'relative'
    history.style.top = '15px'

    searchHistory.appendChild(history)
}

//定义清空历史记录的函数
function clearHistory(){
    var history = document.getElementById("searchHistory")
    history.replaceChildren()
}
