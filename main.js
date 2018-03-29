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
let refreshTimerButton = document.getElementById("refreshTimer");
let pauseTimerButton = document.getElementById("pauseTimer");
let stopTimerButton = document.getElementById("stopTimer");

//Counters
let sessionLength = 25;
let breakLength = 5;

//Timer elements
let minutes = sessionLength;
let seconds = 60;
let isBreak = false;
let stop = false;
let run;

runningTimer.innerHTML = sessionLength + ":" + "00"

function displayTimer() {
	if (seconds < 60) {
		runningTimer.innerHTML = sessionLength + ":" + seconds
	} else {
		runningTimer.innerHTML = sessionLength + ":" + "00"
	}
}

function incrementSession() {
	if (seconds == 60) {
		value = Number(sessionSetting.innerHTML)
		sessionSetting.innerHTML = value + 1
		sessionLength = value + 1
		minutes = sessionLength
		displayTimer()
	}
};

function decreaseSession() {
	if (seconds == 60) {
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
	}
};

function incrementBreak() {
	if (seconds == 60) {
		value = Number(breakSetting.innerHTML)
		breakSetting.innerHTML = value + 1
		breakLength = value + 1		
	}
};

function decreaseBreak() {
	if (seconds == 60) {
		value = Number(breakSetting.innerHTML)
		if (value > 1) {
			breakSetting.innerHTML = value - 1
			breakLength = value - 1
		} else {
			breakSetting.innerHTML = value
			breakLength = value
		}
	}
};

function countdown(minutes) {
    let mins = minutes
    stop = false;
    function tick() { 
        let current_minutes = mins-1;
        seconds--;
        runningTimer.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (current_minutes < 1 && seconds < 10 && seconds > 0) {
        	runningTimer.style.color = "Red";
        } else {
        	runningTimer.style.color = "White";
        }
        if ( seconds > 0 ) {
        	if (stop === false) {
           	  run = setTimeout(tick, 1000)
        	}
        } else if (runningTimer.innerHTML = "0:00" && isBreak == true) {
            		isBreak = false;
            		timerIndicator.innerHTML = "SESSION";
            		timerIndicator.style.color = "White";
            		countdown(sessionLength);
        } else {
            if (mins > 1) {
            	seconds = 60;
                countdown(minutes -1);        
            } else {
            	if (seconds == 0) {
            		isBreak = true;
            		timerIndicator.innerHTML = "BREAK";
            		timerIndicator.style.color = "Green";
            		seconds = 60;
            		countdown(breakLength);
            	}
            }
        }
    }
    if (stop === false) {
    	tick();
	}
}

function pause() {
	stop = true;
	clearTimeout(run);
}

function stopTimer() {
		stop = true;
		clearTimeout(run);
		seconds = 60;
		minutes = sessionLength;
		runningTimer.innerHTML = minutes.toString() + ":" + "00"
		timerIndicator.innerHTML = "SESSION";
}

function refreshTimer() {
		stop = true;
		clearTimeout(run);
		seconds = 60;
		sessionLength = 25;
		breakLength = 5;
		sessionSetting.innerHTML = sessionLength.toString();
		breakSetting.innerHTML = breakLength.toString();
		minutes = sessionLength;
		runningTimer.innerHTML = minutes.toString() + ":" + "00"
		timerIndicator.innerHTML = "SESSION";
	
}