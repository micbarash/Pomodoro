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

function incrementSession() {
	value = Number(sessionSetting.innerHTML)
	sessionSetting.innerHTML = value + 1
	sessionLength = value + 1
};

function decreaseSession() {
	value = Number(sessionSetting.innerHTML)
	if (value > 1) {
		sessionSetting.innerHTML = value - 1
		sessionLength = value - 1
	} else {
		sessionSetting.innerHTML = value
		sessionLength = value
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

