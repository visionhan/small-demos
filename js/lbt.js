var getRandomColor = function(){
    var bjs = '#'
    var str = '1234567890abcdef'
    for(var i= 0;i<6;i++){
        var randoms = parseInt(Math.random()*str.length)
        bjs += str[randoms]
    }
    return bjs 
}
var getRandomColor = function() {
    var bjs = '#'
    var str = '1234567890abcdef'
    for(var i = 0; i < 6; i++) {
        var randroms = parseInt(Math.random() * str.length)
        bjs += str[randroms]
    
    }
    return bjs
}
var list5 = document.getElementsByClassName('list5')
for(var j = 0; j < list5.length; j++) {
    list5[j].style.backgroundColor=getRandomColor()
}
var getColor = function() {
    
    var str = 'rgb(n,n,n)'
    for(var v = 0; v<3;v++ ){
        str = str.replace('n',parseInt(Math.random()*256))
    }
    
//				str = str.replace('n', Math.random().toFixed(2))// 小数点后保留2位
    return str 
}
for(var k = 0; k < list5.length; k++) {
    list5[k].style.color = getColor()
     
}
var points = document.getElementsByClassName('point')
var getActiveIndex = function(){
    var activeIndex = 0
    for(var l = 0; l < list5.length; l++) {
        if(list5[l].className.indexOf('qian') > -1) { //存在 active元素
            activeIndex = l
        }
    
    }
    points[activeIndex].className='point'
    list5[activeIndex].className = 'list5'
   return activeIndex
}
var hou = function() {
    var activeIndex = getActiveIndex()
    
    if(activeIndex + 1 === list5.length) {
        list5[0].className = 'list5 qian'
        points[0].className = 'point active'
    } else {
        list5[activeIndex + 1].className = 'list5 qian'
        points[activeIndex + 1].className = 'point active'
    }
}
var qian = function() {
    var activeIndex = getActiveIndex()
    
if(activeIndex === 0) {
    list5[list5.length - 1].className = 'list5 qian'
    points[points.length - 1].className = 'point active'
    
} else {
    list5[activeIndex - 1].className = 'list5 qian'
    points[activeIndex - 1].className = 'point active'
    
}
}
var goIndex = function(index){
    if(!(index>=0&&index<list5.length)) return
    var activeIndex= getActiveIndex()
    list5[activeIndex].className='list5'
    points[activeIndex].className='point'
    list5[index].className='list5 qian'
    points[index].className='point active'
}

var btn5s=document.getElementsByClassName('btn5')
for(var i=0;i<btn5s.length;i++){
    btn5s[i].addEventListener('mouseenter',function(e){
        e.target.className='btn5 active'
    })
    btn5s[i].addEventListener('mouseenter',function(e){
        e.target.className='btn5 active'
    })
    btn5s[i].addEventListener('mouseleave',function(e){
        e.target.className='btn5'
    })
}
var xqian=document.getElementById('xqian')
xqian.addEventListener('click',qian)
var xhou= document.getElementById('xhou')
xhou.addEventListener('click',hou)

for(var i=0;i<points.length;i++){
    points[i].addEventListener('click',function(e){
        var index = e.target.getAttribute('data-index')
        goIndex(parseInt(index))
    })
}

