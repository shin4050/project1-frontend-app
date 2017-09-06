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
    var year = nowdate.getFullYear();    // 年(4桁の西暦)
    var mon  = nowdate.getMonth() + 1;   // 月(1～12)
    var date = nowdate.getDate();        // 日(1～31)
    var week = nowdate.getDay();         // 曜日(※0～6)
    var weekchars = new Array( "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" );
    var todayweek = weekchars[ week ];   // 曜日を文字列で得る
    var output2 = document.getElementById('output2');
    
    output2.textContent = ("今日は、" + year + "年" + mon + "月" + date + "日" + todayweek + "です。");
}

function showClock1(){    
    var nowTime = new Date(); //  現在日時
    var nowHour = nowTime.getHours(); // 時
    var nowMin  = nowTime.getMinutes(); // 分
    var nowSec  = nowTime.getSeconds(); // 秒
    var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
}
setInterval('showClock1()',1000);