let timer_lable = document.querySelector('.timer');
let stopwath_lable = document.querySelector('.stop-watch');
let dis_hour = document.querySelector('.hour');
let dis_minute = document.querySelector('.minute');
let dis_second = document.querySelector('.second');
let dis_miliseconds = document.querySelector('.miliseconds');
let btn_start = document.querySelector('.start');
let btn_rest = document.querySelector('.reset');
let countdown_time = document.querySelector('.countdown-timer');
let hour_dropdown = document.querySelector('.hour-dropdown');
let minute_dropdown = document.querySelector('.minute-dropdown');
let second_dropdown = document.querySelector('.second-dropdown');
let hour=0, minute =0, second = 0, mili_second =0;
var intr; 
var  flag = 0; 

Number.prototype.pad = function(digits){
    for(var n = this.toString(); n.length < digits; n = 0+n);
    return n;
}



var dropDown = () => {

        for (let i = 0; i < 100; i++){

            var hour_option = document.createElement("option");
            hour_option.setAttribute('class','hour-option');
            if(i<10){
                var hour_option_content = document.createTextNode("0" + i); 
            }else{
                var hour_option_content = document.createTextNode(i);
            }
            hour_option.appendChild(hour_option_content);
            hour_dropdown.appendChild(hour_option);
        }
        let counter =0;
        for (let i = 0; i < 59; i++){
           
            var m_option = document.createElement("option");
            m_option.setAttribute('class','minute-option');
            var s_option = document.createElement("option");
            s_option.setAttribute('class','second-option');
            if(i<10){
                var m_option_content = document.createTextNode("0" + i); 
                var s_option_content = document.createTextNode("0" + counter); 

            }else{
                var m_option_content = document.createTextNode(i);
                var s_option_content = document.createTextNode(counter); 
            }
            m_option.appendChild(m_option_content);
            s_option.appendChild(s_option_content);

            minute_dropdown.appendChild(m_option);
            second_dropdown.appendChild(s_option);

            counter++;
        }
}

const countDonw = () => {
    console.log("CountDown Called");
    mili_second = 100;
    intr = setInterval(() => {
        mili_second--;
        if(mili_second == 1){
            mili_second =100;
            second--;
        }
        if(second==1){
            mili_second = 100;
            second=60; 
            minute--;
        }
        if(minute==0 && second ==1){
            mili_second=100;
            second=60; 
            minute=60; 
            hour--; 
        }

       dis_hour.textContent = hour <10? "0"+hour :hour; 
        dis_minute.textContent = minute < 10 ? "0" + minute: minute; 
    
        dis_second.textContent = second < 10 ? "0" + second: second;
        dis_miliseconds.textContent = mili_second < 10 ? "0" + mili_second:mili_second;


    },10);

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
    dropDown(); // call dropDown function to add hours, minutes and seconds values with JavaScript.
    let countDown_time_set = document.querySelector('.countdown-set-btn');

    countDown_time_set.addEventListener('click', e => {
        hour = parseInt(hour_dropdown.options[hour_dropdown.selectedIndex].text);
        minute = parseInt(minute_dropdown.options[minute_dropdown.selectedIndex].text); 
        second = parseInt(second_dropdown.options[second_dropdown.selectedIndex].text);

        dis_hour.textContent = hour <10? "0"+hour :hour; 
        dis_minute.textContent = hour <10? "0"+hour :hour; 
        dis_minute.textContent = second < 10 ? "0" + second: second;
        dis_miliseconds.textContent = 100;



        // dis_hour.textContent = hour; 
        // dis_minute.textContent = minute;
        // dis_second.textContent = second; 
        // dis_miliseconds.textContent = 100;
        countdown_time.style.display="none";
        flag = 1; 

    },{once:true});

});


btn_start.addEventListener('click', e =>{
   

    if(flag === 1){
        console.log("Timer");
        countDonw();
    }
    else{
        console.log("Not Timer");
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
    }
    
});

