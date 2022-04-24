let timer_lable = document.querySelector('.timer');
let stopwath_lable = document.querySelector('.stop-watch');
let dis_hour = document.querySelector('.hour');
let dis_minute = document.querySelector('.minute');
let dis_second = document.querySelector('.second');
let dis_miliseconds = document.querySelector('.miliseconds');
let btn_start = document.querySelector('.start');
let btn_rest = document.querySelector('.reset');
let countdown_time = document.querySelector('.countdown-timer');
let hour=0, minute =0, second = 0, mili_second =0;
var intr; 

var dropDown = () => {
    console.log("Drop Dwon Called!");
    let hour_dropdown = document.querySelector('.hour-dropdown');
    let minute_dropdown = document.querySelector('.minute-dropdown');
    let second_dropdown = document.querySelector('.second-dropdown');
        for (let i = 0; i < 100; i++){

            var hour_option = document.createElement("option");
            if(i<10){
                var hour_option_content = document.createTextNode("0" + i); 
            }else{
                var hour_option_content = document.createTextNode(i);
            }
            
            hour_option.appendChild(hour_option_content);
            hour_dropdown.appendChild(hour_option);
        }

        for (let i = 0; i < 59; i++){

            var ms_option = document.createElement("option");
            if(i<10){
                var ms_option_content = document.createTextNode("0" + i); 
            }else{
                var ms_option_content = document.createTextNode(i);
            }
            ms_option.appendChild(ms_option_content);
            minute_dropdown.appendChild(ms_option);
        }

        for (let i = 0; i < 59; i++){

            var ms_option = document.createElement("option");
            if(i<10){
                var ms_option_content = document.createTextNode("0" + i); 
            }else{
                var ms_option_content = document.createTextNode(i);
            }
            ms_option.appendChild(ms_option_content);
            second_dropdown.appendChild(ms_option);
        }

}

function stopwatch(){
    intr = setInterval(() => {
        mili_second +=1;
        if(mili_second == 99){
            mili_second =0;
            second++;
        }
        if(second==60){
            mili_second =0;
            second=0; 
            minute++;
        }
        if(minute==60 && second ==59){
            mili_second=0;
            second=0; 
            minute=0; 
            hour++; 
        }
        dis_hour.textContent = hour.pad(2); 
        dis_minute.textContent = minute.pad(2); 
        dis_second.textContent = second.pad(2);
        dis_miliseconds.textContent = mili_second.pad(2);
    },10);
}


timer_lable.addEventListener('click', e =>{


    countdown_time.style.display="block";
    document.querySelector('.close-img').addEventListener('click', e => {
        countdown_time.style.display="none";
    });

    dropDown();

});

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
        dis_miliseconds.textContent = "00";
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

