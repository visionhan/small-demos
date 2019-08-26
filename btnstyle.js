var getRandomColor = function () {
    // var color='#'
    // for(var i=0;i<6;i++){
    //     color += parseInt(Math.random()*16).toString(16)
    // }
    // console.log(color)
    //es6写法

    return color
}
var Circle = function (x, y) {
    var dom = document.createElement('div');
    var size = 0;
    var opcity = 0.7;
    dom.style.width = size + 'px';
    dom.style.height = size + 'px';
    dom.style.position = 'absolute';
    dom.style.backgroundColor = '#' + Array(6).fill(0).map(e => parseInt(Math.random() * 16).toString(16)).join('')
    dom.style.top = y - size / 2 + 'px';
    dom.style.left = x - size / 2 + 'px';
    dom.style.opacity = opcity;
    dom.style.borderRadius = '50%'
    var t = setInterval(function () {
        if (size < 400) {
            size++
            dom.style.width = size + 'px';
            dom.style.height = size + 'px';
            dom.style.position = 'absolute';
            dom.style.top = y - size / 2 + 'px';
            dom.style.left = x - size / 2 + 'px';
            opcity -= 0.005
            dom.style.opacity = opcity;


        } else {
            //清除定时器
            clearInterval(t)
            //清除掉dom那个div
            dom.remove()
        }
    }, 2)
    this.dom = dom //btn3中的c.dom 被赋值为dom
}
var btn3Style = function (bt) {
    bt.classList.add('btn3style');
    bt.addEventListener('click', function (e) {
        var x = e.x - this.offsetLeft
        var y = e.y - this.offsetTop
        var c = new Circle(x, y)
        this.appendChild(c.dom)

    })
}
var textStyle=`
.btn3style {
    background-color: #f2f2f2;
    border: none;
    border-radius: 3px;
    outline: none;
    font-size:50px;
    width: 300px;
    height: 150px;
    /* 变成小手  */
    cursor: pointer;
    position: relative;
    transition: all .3s;
    overflow: hidden;

}

.btn3style:hover {
    background-color: rgb(112, 125, 180);
}

`
var styleDom=document.createElement('style')
styleDom.innerHTML=textStyle
document.head.appendChild(styleDom)
  var btn3 = document.getElementsByClassName('btn3')
  for(var i=0;i<btn3.length;i++){
      btn3Style(btn3[i])
  }