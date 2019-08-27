var year = 2019
var month = 3
var days = 31
var theFirstDay = 3
var riliBody = document.getElementsByClassName('rili-body')[0]
var gpy = document.getElementsByClassName('gpyear')[0]
var gny = document.getElementsByClassName('gnyear')[0]
var gnm = document.getElementsByClassName('gnmon')[0]
var gpm = document.getElementsByClassName('gpmon')[0]
var monthnum = document.getElementsByClassName('month')[0]
var yearnum = document.getElementsByClassName('year')[0]
var today = new Date()
var back = document.getElementById('back')
var isthisMonth = false
var thisMonthThing = []
var add = document.getElementById('add')
//获取月份有多少天
var getDays = function() {
	if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		days = 31
	} else if(month == 2) {
		year % 4 == 0 ? days = 29 : days = 28
	} else {
		days = 30
	}
	return days
}

//获取每月一号是星期几的函数
var whichDay = function() {
	var todayStr = ''
	todayStr = year + '-' + month + '-' + '01'
//	console.log(todayStr)
	var todayTime = new Date(todayStr)
	//	把 todayStr变成一个newDate日期
	//	获取该月一号是周几	
	theFirstDay = todayTime.getDay()
	//	getFullYear getDate() /getDay()星期 星期日是0/.getMonth从零开始  来获取 时间的星期  日 月
	return theFirstDay
	//	返回一号的周期
}

//添加事件
var thingList = []

// 把事件存在localStorage中
var saveThing=function(){
	localStorage.setItem("event",JSON.stringify(thingList)) // setItem添加元素 JSON。stringify () 把对象数组变为字符串 传入
}

//把localStorage中的内容调取出来
var loadThing=function(){
	thingList = JSON.parse(localStorage.getItem('event'))  //JSON.parse（） 是吧内容变为对象传出
//	console.log(thingList)
}

//判断当前展示月事件
var judeThing = function() {
	thisMonthThing = []
	  isthisMonth = false
	  if(thingList!=null){
	thingList.forEach(function(item, index) { //数组的遍历foreach
		var riqi = new Date(item.time) //		newDate 变成时间的形式才有下面的这些方法
//		console.log(riqi.getFullYear(), riqi.getMonth() + 1, year, month)
		if(year == riqi.getFullYear() && riqi.getMonth() + 1 == month) {
			isthisMonth = true
			thisMonthThing.push({ //在thisMonthThing后面添加新内容
				date: riqi.getDate(),
				content: item.content,
				month: riqi.getMonth() + 1
			})
		}
	})}
//	console.log(thisMonthThing)
	return thisMonthThing
}

var tianchong = function() {
	getDays()
	whichDay()
	loadThing()
	judeThing()
	var str = "<div class='kong'></div>"
	var tmp = "<div class='num'>1号<br /></div>"
	for(var i = 0; i < days; i++) {
		str += tmp.replace('1', i + 1)
	}
	
	riliBody.innerHTML = str

	var kong = document.getElementsByClassName('kong')[0]//	kong被覆盖了所以要在循环中获取

	var num = document.getElementsByClassName('num')
	for(var i = 0; i < num.length; i++) {
		if(year == today.getFullYear() && month == today.getMonth() + 1 && i == today.getDate() - 1) {
 //今天高亮
			num[i].style.backgroundColor = "#DC143C"
		}
		if(isthisMonth) {
			for(var j = 0; j < thisMonthThing.length; j++) {
				if(thisMonthThing[j].date == i) {
					num[i - 1].innerHTML += thisMonthThing[j].content
					num[i - 1].style.color = "gold"
				}
			}
		}

	}
	kong.style.width = theFirstDay * 80 + 'px'//	周日 getDate()返回值为0
	monthnum.innerHTML = month
	yearnum.innerHTML = year
//	console.log("ss")
}



//弹窗 
var addEvent=function(){
	var event= prompt("重要事件：")
	var eventTime = prompt("重要事件的时间：(格式为2019-1-1 00:00:00)")
	var obj={
		content:event,
		time:eventTime
	}
//	console.log(obj)
thingList = thingList ||[]
	thingList.push(obj)
//	console.log(thingList)
	saveThing()
	tianchong()

}

var goNextMonth = function() {
	if(month == 12) {
		year++
		month = 1
	} else {
		month++
	}
//	console.log(month)
	tianchong()
}
var goNextYear = function() {
	year++
	tianchong()
}
var goPreMoth = function() {
	if(month == 1) {
		year--
		month = 12
	} else {
		month--
	}
//	console.log(month)
	tianchong()

}
var goPreYear = function() {
	year--
	tianchong()
}

//回到本月
var now = function() {
	month = today.getMonth() + 1
	year = today.getFullYear()
	tianchong()
	}
now()
back.addEventListener('click',now)
add.addEventListener("click",addEvent)

gpy.addEventListener('click', goPreYear)
gny.addEventListener('click', goNextYear)
gpm.addEventListener('click', goPreMoth)
gnm.addEventListener('click', goNextMonth)