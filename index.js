const secondElement = document.querySelector('.second');
const minuteElement = document.querySelector('.minute');
const hourElement = document.querySelector('.hour');

let second = 0, minute = 0, hour = 0;

setInterval(() => {updateTime(); updateUI();},1000)

const updateTime = () => {
     second++;
     if(second === 60) {
	     second = 0;
	     minute++;
     }
     if(minute === 60){
	     minute = 0;
	     hour++
     }
     if(hour === 24){
	     hour = 0;
     }
}

const updateUI = () => {
   secondElement.innerHTML = format(second);
   minuteElement.innerHTML = format(minute);
   hourElement.innerHTML = format(hour);
 
}

const format = (time) => {
	return time.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
}	


