var video = document.getElementById('video')

//1时间展示
var currentEle = document.getElementById('current')
var durationEle = document.getElementById('duration')
var formatTime = function (time) {
    time = parseInt(time)
    var min = parseInt(time / 60)
    var second = time % 60
    min = min > 9 ? min : '0' + min
    second = second > 9 ? second : '0' + second
    var formatTime = min + ':' + second
    return formatTime
}


//2进度条
var progress = document.getElementById('progress')
var progressChange = function (per) {
    progress.style.width = per * 1000 + 'px'
}
var control = document.getElementsByClassName('control')[0]
var nowControl = false
var nowIn = false
var inall = document.getElementById('inall')
//弹幕输入
var input = document.getElementById('input')
var btn = document.getElementById('btn')
var list = document.getElementsByClassName('list')[0]
//1时间显示// 2进度条
currentEle.innerHTML = formatTime(video.currentTime) //视频未播放也因该显示
video.addEventListener('timeupdate', function () {
    currentEle.innerHTML = formatTime(video.currentTime)
    var percent = video.currentTime / video.duration
    progressChange(percent)
})

video.addEventListener('canplay', function () {
    durationEle.innerHTML = formatTime(video.duration)
})


control.addEventListener('mousedown', function () {
    nowControl = true

})
inall.addEventListener('click',function(e){
   var x = e.clientX -100- 7.5
   progress.style.width = x + 'px'
   perce = x / 1000
   video.currentTime = perce * video.duration
//    console.log('触发')
})


document.addEventListener('mouseup', function () {
    nowControl = false

})
document.addEventListener('mousemove', function (e) {
    if (nowControl) {
        // console.log(e)
        var perce = 0
        perce = video.currentTime / video.duration
        var x = 1000 * perce
        x = e.clientX -100- 7.5
        progress.style.width = x + 'px'
        perce = x / 1000
        video.currentTime = perce * video.duration
    }
})

// 播放暂停
var isPlay =false 
video.addEventListener('click',function(){
    if(isPlay){
        video.pause()
        isPlay = false
    }else{
        video.play()
        isPlay = true

    }
})

//弹幕发送
var danmuList = []
var translate = function(content){
    var span = document.createElement('span')
    span.innerHTML =content
    span.style.marginTop = Math.random()*150 +'px'
    span.classList.add('tip')
    list.appendChild(span)
    setTimeout(function(){
        span.classList.add('active')

    },10)  
    setTimeout(function(){
        span.remove()
    },4000)  
}
var rander = function(){
    var nowTime = parseInt(video.currentTime)
    danmuList.forEach(function(item,index){
        var tm = parseInt(item.tm)
       if(isPlay){
             if(tm==nowTime){
               translate(item.content)
        }
       }
       
    })
}
btn.addEventListener('click',function(){
     var list = {
         content:input.value,
         tm:video.currentTime
     }
     danmuList.push(list)
     danmuList.sort(function(a,b){
         return a.tm - b.tm 
     })
     localStorage.setItem('danmu',JSON.stringify(danmuList))
     input.value =''
     rander()
})

danmuList = JSON.parse(localStorage.getItem('danmu'))
if(danmuList){
    
}else{
    danmuList = []
}
setInterval(function(){
 rander()
},1000)





