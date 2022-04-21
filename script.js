let timer_lable = document.querySelector('.timer');
let stopwath_lable = document.querySelector('.stop-watch');
let dis_hour = document.querySelector('.hour');
let dis_minute = document.querySelector('.minute');
let dis_second = document.querySelector('.second');
let dis_miliseconds = document.querySelector('.miliseconds');
let btn_start = document.querySelector('.start');
let btn_rest = document.querySelector('.reset');
let hour=0;
let minute=0; 
let second =0;
let mili_second=0;
var intr; 

function stopwatch(){
    intr = setInterval(() => {
        mili_second++;
        if(mili_second == 1000){
            mili_second =0;
            second++;
        }
        if(second==60){
            second=0; 
            minute++;
        }
        if(minute==60 && second ==59){
            second=0; 
            minute=0; 
            hour++; 
        }
        dis_hour.textContent = hour.pad(2); 
        dis_minute.textContent = minute.pad(2); 
        dis_second.textContent = second.pad(2);
        dis_miliseconds.textContent = mili_second.pad(3);
    }, 1);
}

btn_start.addEventListener('click', e =>{
    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0+n);
        return n;
    }

    btn_rest.style.display="inline-block";
    btn_rest.addEventListener('click', () => {
        clearInterval(intr);
        hour =0;
        minute =0;
        second=0;
        mili_second =0;
        dis_hour.textContent= "00"; 
        dis_minute.textContent = "00";
        dis_second.textContent = "00";
        dis_miliseconds.textContent = "000";
        btn_start.textContent = "Start";
        btn_rest.style.display="none";
    });
    if(btn_start.textContent === "Pause"){
            clearInterval(intr);
            btn_start.textContent = "Resume"
    
    }else{
        stopwatch();
        btn_start.textContent = "Pause";
    }
    
});

