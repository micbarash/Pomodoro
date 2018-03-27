//HTML Indicators
let sessionSetting = document.getElementById("sessionSetting");
let breakSetting = document.getElementById("breakSetting") ;
let runningTimer = document.getElementById("runningTimer"); 
let timerIndicator = document.getElementById("timerIndicator"); 

//Buttons
let incSession = document.getElementById("sessionUp");
let decSession = document.getElementById("sessionDown");
let incBreak = document.getElementById("breakUp");
let decBreak = document.getElementById("breakDown");
let runTimer = document.getElementById("runTimer");
let refreshTimer = document.getElementById("refreshTimer");
let pauseTimer = document.getElementById("pauseTimer");
let stopTimer = document.getElementById("stopTimer");

//Counters
let sessionLength = 25;
let breakLength = 5;

//Timer elements
let minutes = sessionLength;
let seconds = 60;
let isBreak = false;

runningTimer.innerHTML = sessionLength + ":" + "00"

function displayTimer() {
	if (seconds < 60) {
		runningTimer.innerHTML = sessionLength + ":" + seconds
	} else {
		runningTimer.innerHTML = sessionLength + ":" + "00"
	}
}

function incrementSession() {
	value = Number(sessionSetting.innerHTML)
	sessionSetting.innerHTML = value + 1
	sessionLength = value + 1
	minutes = sessionLength
	displayTimer()
};

function decreaseSession() {
	value = Number(sessionSetting.innerHTML)
	if (value > 1) {
		sessionSetting.innerHTML = value - 1
		sessionLength = value - 1
		minutes = sessionLength
		displayTimer()
	} else {
		sessionSetting.innerHTML = value
		sessionLength = value
		minutes = sessionLength
		displayTimer()
	}
};

function incrementBreak() {
	value = Number(breakSetting.innerHTML)
	breakSetting.innerHTML = value + 1
	breakLength = value + 1
};

function decreaseBreak() {
	value = Number(breakSetting.innerHTML)
	if (value > 1) {
		breakSetting.innerHTML = value - 1
		breakLength = value - 1
	} else {
		breakSetting.innerHTML = value
		breakLength = value
	}
};

function countdown(minutes) {
	seconds = 60;
    let mins = minutes
    function tick() { 
        let current_minutes = mins-1;
        seconds = seconds -1;
        runningTimer.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else if (runningTimer.innerHTML = "0:00" && isBreak == true) {
            		isBreak = false;
            		timerIndicator.innerHTML = "SESSION";
            		countdown(sessionLength);
        } else {
            if(mins > 1){
            	seconds = 60;
                countdown(minutes -1);           
            } else {
            	if (seconds == 0) {
            		isBreak = true;
            		timerIndicator.innerHTML = "BREAK";
            		seconds = 60;
            		countdown(breakLength);
            		console.log(isBreak);
            	} 
            }
        }
    }
    tick();
}