let timer_lable = document.querySelector('.timer');
let stopwath_lable = document.querySelector('.stop-watch');
let dis_hour = document.querySelector('.hour');
let dis_minute = document.querySelector('.minute');
let dis_second = document.querySelector('.second');
const btn_start = document.querySelector('.start');
let hour=0;
let minute=0; 
let second =0;
let intr; 

btn_start.addEventListener('click', e =>{
    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0+n);
        return n;
    }
    intr = setInterval(() => {
        second++;
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
    }, 10);
});

