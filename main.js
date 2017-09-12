"use strict;"

function answer(){
        var input1 = document.getElementById('input1');
        var input2 = document.getElementById('input2');
        var output1 = document.getElementById('output1');


    //文字列として結合
    //var result = inout1.value + input2.value;

    //整数として足し算
    var result = parseInt(input1.value) - parseInt(input2.value);

    output1.textContent = result
}

function date(){
    var nowdate = new Date();
    var year = nowdate.getFullYear();       // 年(4桁の西暦)
    var mon  = nowdate.getMonth() + 1;      // 月(1～12)
    var date = nowdate.getDate();           // 日(1～31)
    var week = nowdate.getDay();            // 曜日(※0～6)
    var hour = setfig(nowdate.getHours());  // 時間(0~23)
    var min  = setfig(nowdate.getMinutes());// 分(0~59)
    var sec  = setfig(nowdate.getSeconds());// 秒(0~59)
    var weekchars = new Array( "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" );
    var todayweek = weekchars[ week ];      // 曜日を文字列で得る
    var output2 = document.getElementById('output2');
    
    output2.textContent = ("今日は、" + year + "年" + mon + "月" + date + "日" + todayweek + "です。");
    output3.textContent = ( "現在時刻は、" + hour + "時" + min + "分" + sec + "秒" + "です。");

    if(hour >= 9 && hour <= 12){
        if((hour == 9 && min < 20)||(hour==12 && min>10)){
            output4.textContent = ("授業外なのでは？");
        }else if(min >20 && min <= 35){
            output4.textContent = ("遅刻です");
        }else if(min >35){
            output4.textContent = ("欠課です");
        }else if((min >= 0 && min <= 10) ||( min > 40 && min < 60)){
            output4.textContent = ("欠課です");
        }
    }else if(hour >= 13 && hour <= 14){ 
        output4.textContent = ("授業中です");
        if(hour == 14 && min > 50){
            output4.textContent = ("授業外なのでは？");        
        }else if(min >0 && min <= 15){
            output4.textContent = ("遅刻です");
        }else if(min >15 && min <= 50){
            output4.textContent = ("欠課です");
        }
    }else{
        output4.textContent = ("授業外なのでは？");
    }

}

function setfig(num) {
   // 桁数が1桁だったら先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}

function showClock1(){    
    var nowTime = new Date(); //  現在日時
    var nowHour = setfig(nowTime.getHours()); // 時
    var nowMin  = setfig(nowTime.getMinutes()); // 分
    var nowSec  = setfig(nowTime.getSeconds()); // 秒
    var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
}
setInterval('showClock1()',1000);