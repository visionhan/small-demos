var line=document.getElementsByClassName('line')[0]
var result=document.getElementsByClassName('result')[0]
var btn = document.getElementsByClassName('btn1')

var per = ''
var res = ''
var dataValue=0
var ac = document.getElementById('ac')
var percent = document.getElementById('percent')
var qufan=document.getElementById('qufan')
percent.addEventListener('click',function(){
    res = parseFloat(per) /100  
//				取小数 parseFloat 
    result.innerHTML=res
    per =""
})
qufan.addEventListener('click',function(){
    if(per>0){
        res=parseFloat('-'+per)
    }else{
        res=Math.abs(per)
///					取绝对值方法
    }
    result.innerHTML=res
    per =""
})


ac.addEventListener('click',function(){
    per=''
    res=''
    line.innerHTML=per
    result.innerHTML='0'
})
var handleCick = function(value){
    
    if(value==null){
        return
    }else {
        if(value=='='){
        console.log('=')
            res =eval(per)
//						eval()函数 将传入内容进行计算并返回结果
            result.innerHTML=res
            per = ""
        }
    else{
        per += value
    line.innerHTML = per
        }
    }
    
    
}
for(var i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        dataValue = this.getAttribute('data-value')
        handleCick(dataValue)
        console.log(this.getAttribute('data-value')) //特别注意这里要用this因为执行后的for循环i是最后一个的值
    })
}
