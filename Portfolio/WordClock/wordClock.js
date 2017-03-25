//$(document).ready(function(){
    
    function colorizeHours(){
        var now = new Date();
        var h = now.getHours();
        if (h > 12){
            h-=12;
        }
        $("span.hour").css({"color": "black", "text-shadow": "none"});
        for(var i = 0; i < 12; i++){
            if(i === h){
                $("div.hour span:nth-child("+i+")").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
            }
        }
        setTimeout("colorizeHours()", 1000);
    };
    
    function colorizeMinutes(){
        var now = new Date();
        var m = now.getMinutes();
        $("span.min").css({"color": "black", "text-shadow": "none"});
        for(var i = 0; i < 11; i++){
            if(i === m){
                var index = m + 1;
                $("div.digits span:nth-child("+index+")").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
            }
        }

        for(var i = 11; i < 20; i++){
            if(i === m){
                var index = i-10;
                $("div.11_19 span:nth-child("+index+")").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
            }
        }

        for(var i = 20; i < 60; i++){
            if(m >= 20 && m < 30){
                $("div.tens span:nth-child(1)").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
            }
            else if(m >= 30 && m < 40){
                $("div.tens span:nth-child(2)").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
            }
            else if(m >= 40 && m < 50){
                $("div.tens span:nth-child(3)").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
            }
            else if(m >= 50 && m < 60){
                $("div.tens span:nth-child(4)").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
            }
        }
        
        for(var i = 20; i < 60; i++){
            if(i === m){
                var lastDigit = m;
                while (lastDigit > 9){
                    lastDigit-=10;
                }
            if(lastDigit===0){
                continue;
            }
            var index = lastDigit+1;
                $("div.digits span:nth-child("+index+")").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
            }
        }
        
        setTimeout("colorizeMinutes()", 1000);
    };
    
    function colorizeAmPm(){
        var now = new Date();
        var h = now.getHours();
        if (h <= 12){
            $("div.am_pm span:nth-child(2)").css({"color": "black", "text-shadow": "none"});
            $("div.am_pm span:nth-child(1)").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
        } else{
            $("div.am_pm span:nth-child(1)").css({"color": "black", "text-shadow": "none"});
            $("div.am_pm span:nth-child(2)").css({"color": "rgb(2, 255, 238)", "text-shadow": "0 0 0.3em rgb(2, 255, 238)"});
        }
        setTimeout("colorizeAmPm()", 1000);
    };
    
    function timing(){  // why does not it work when it si wrraped like self-initializing????
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        if(hours < 10){
            hours = "0" + hours;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        $(".cypherClock").html(hours +":"+ minutes +":"+ seconds);
        setTimeout("timing()", 1000);
    };
    
    colorizeHours();
    colorizeMinutes();
    colorizeAmPm();
    timing();   // why does not it work in  "$(document).ready(function(){...})??????
    
//})();


