var CreatDiv =function(){
    this.height=Math.random()*15+10
    this.width=Math.random()*5+20
    this.vx=Math.random()>0.5?(Math.random()*5):(-Math.random()*5)
    this.vy=(Math.random()*4+2)
    this.ay=Math.random()>0.5?(Math.random()*0.05):(-Math.random()*0.05)
    this.ax=Math.random()>0.5?(Math.random()*0.01):(-Math.random()*0.01)
    //速度为0是透明度也为零
    
    this.time=this.vy/this.ay
    
     
}
CreatDiv.prototype ={
    background: 'url(img/音符1_看图王.png)',
    background2:'url(img/音符2_看图王.png)',
    background3:'url(img/音符3_看图王.png)',
    
    opacity:1,
    x:window.innerWidth/2-15,
    y: 400,
    move:function(){
        this.vy -=this.ay
        this.y -=this.vy
    this.opacity -=Math.random()*0.02
        this.vx -=this.ax
//					console.log(this.vx)
        this.x -=this.vx
    }
}

//定时器
   setInterval(function(){
    var span =document.createElement('span') //在document中新建span标签
    var newImg =new CreatDiv()
//				console.log(newImg)
    
    span.style.background=newImg.background
    span.style.height=newImg.height+'px'
    span.style.width=newImg.width+'px'
    span.style.backgroundSize= "100% 100%"
     document.body.appendChild(span)
    
    var t = setInterval(function(){
        newImg.move()//运行move的函数
        span.style.opacity=newImg.opacity
//				console.log(span.style.opacity)
    span.style.left=newImg.x+'px'
    span.style.top=newImg.y+'px'
    if(span.style.opacity<0){
        clearInterval(t)
        document.body.removeChild(span)
    }
    },1000/60)
    

},300)
   
      setInterval(function(){
    var span =document.createElement('span')
    var newImg =new CreatDiv()
//				console.log(newImg)
    
    span.style.background=newImg.background2
    span.style.height=newImg.height+'px'
    span.style.width=newImg.width+'px'
    span.style.backgroundSize= "100% 100%"
     document.body.appendChild(span)
    var t = setInterval(function(){
        newImg.move()
        span.style.opacity=newImg.opacity
//				console.log(span.style.opacity)
    span.style.left=newImg.x+'px'
    span.style.top=newImg.y+'px'
    if(span.style.opacity<0){
        clearInterval(t)
        document.body.removeChild(span)
    }
    },1000/60)
    
    
},500)
         setInterval(function(){
    var span =document.createElement('span')
    var newImg =new CreatDiv()
//				console.log(newImg)
    
    span.style.background=newImg.background3
    span.style.height=newImg.height+'px'
    span.style.width=newImg.width+'px'
    span.style.backgroundSize= "100% 100%"
     document.body.appendChild(span)
    
    var t = setInterval(function(){
        newImg.move()
        span.style.opacity=newImg.opacity
//				console.log(span.style.opacity)
    span.style.left=newImg.x+'px'
    span.style.top=newImg.y+'px'
    if(span.style.opacity<0){
        clearInterval(t)
        document.body.removeChild(span)
    }
    },1000/60)
    

},600)