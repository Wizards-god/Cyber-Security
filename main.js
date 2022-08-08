// JavaScript Document

//If you found this here, please do not ruin the experience by opening the links, instead let this be a surprise for all of the website visitors.
var thm = "https://pastebin.com/7e1v5pRv";
var thm_btn = "https://pastebin.com/xf4sqC2Z";
var img_thm = "https://pastebin.com/HMsxNAGz";

function theme() {
	//Setting class for the whole website
	var thm = document.body;
	if (thm.className == "light-mode") {
		thm.className = "dark-mode";
		console.log("Successfully switched over to Dark Mode")
	}
	else if (thm.className == "dark-mode") {
		thm.className = "light-mode";
		console.log("Successfully switched over to Light Mode")
	}
	else {
		thm.className = "light-mode";
		console.log("Failure!")
	}

	//Setting class for the theme toggling button
	var thm_btn = document.getElementById("mode_switch");
	if (thm_btn.className == "light-button mode-switch") {
		thm_btn.className = "dark-button mode-switch";
		console.log("Successfully switched Button theme to Dark Mode")
	}
	else if (thm_btn.className == "dark-button mode-switch") {
		thm_btn.className = "light-button mode-switch";
		console.log("Successfully switched Button theme to Light Mode")
	}
	else {
		thm_btn.className = "light-button mode-switch";
		console.log("Failure!")
	}

	//Setting theme for nav button
	var thm_btn = document.getElementById("menu_btn");
	if (thm_btn.className == "nav-button-dark") {
		thm_btn.className = "nav-button-light";
		console.log("Successfully switched Button theme to Dark Mode")
	}
	else if (thm_btn.className == "nav-button-light") {
		thm_btn.className = "nav-button-dark";
		console.log("Successfully switched Button theme to Light Mode")
	}
	else {
		thm_btn.className = "light-button mode-switch";
		console.log("Failure!")
	}

	//Setting Image border colours(This is just a temporary work-around)
	var img_thm = document.getElementById("img1");
	if (thm.className == "light-mode") {
		img_thm.className = "light-img";
		console.log("Successfully switched Image 1's theme to Dark Mode")
	}
	else if (thm.className == "dark-mode") {
		img_thm.className = "dark-img";
		console.log("Successfully switched Image 1's theme to Light Mode")
	}
	else {
		img_thm.className = "dark-img";
		console.log("Failure!")
	}

	//Lol, nice line...
	var img_thm = document.getElementById("img4");
	if (thm.className == "light-mode") {
		img_thm.className = "light-img";
		console.log("Successfully switched Image 4's theme to Dark Mode")
	}
	else if (thm.className == "dark-mode") {
		img_thm.className = "dark-img";
		console.log("Successfully switched Image 4's theme to Light Mode")
	}
	else {
		img_thm.className = "dark-img";
		console.log("Failure!")
	}

	var img_thm = document.getElementById("img5");
	if (thm.className == "light-mode") {
		img_thm.className = "light-img";
		console.log("Successfully switched Image 5's theme to Dark Mode")
	}
	else if (thm.className == "dark-mode") {
		img_thm.className = "dark-img";
		console.log("Successfully switched Image 5's theme to Light Mode")
	}
	else {
		img_thm.className = "dark-img";
		console.log("Failure!")
	}

	var img_thm = document.getElementById("img6");
	if (thm.className == "light-mode") {
		img_thm.className = "light-img";
		console.log("Successfully switched Image 6's theme to Dark Mode")
	}
	else if (thm.className == "dark-mode") {
		img_thm.className = "dark-img";
		console.log("Successfully switched Image 6's theme to Light Mode")
	}
	else {
		img_thm.className = "dark-img";
		console.log("Failure!")
	}

	var img_thm = document.getElementById("img7");
	if (thm.className == "light-mode") {
		img_thm.className = "light-img";
		console.log("Successfully switched Image 7's theme to Dark Mode")
	}
	else if (thm.className == "dark-mode") {
		img_thm.className = "dark-img";
		console.log("Successfully switched Image 7's theme to Light Mode")
	}
	else {
		img_thm.className = "dark-img";
		console.log("Failure!")
	}

	var img_thm = document.getElementById("img8");
	if (thm.className == "light-mode") {
		img_thm.className = "light-img";
		console.log("Successfully switched Image 8's theme to Dark Mode")
	}
	else if (thm.className == "dark-mode") {
		img_thm.className = "dark-img";
		console.log("Successfully switched Image 8's theme to Light Mode")
	}
	else {
		img_thm.className = "dark-img";
		console.log("Failure!")
	}

	var img_thm = document.getElementById("img9");
	if (thm.className == "light-mode") {
		img_thm.className = "light-img";
		console.log("Successfully switched Image 9's theme to Dark Mode")
	}
	else if (thm.className == "dark-mode") {
		img_thm.className = "dark-img";
		console.log("Successfully switched Image 9's theme to Light Mode")
	}
	else {
		img_thm.className = "dark-img";
		console.log("Failure!")
	}
}

function openNav() {
	document.getElementById("navPane").style.width = "200px";
}

function closeNav() {
	document.getElementById("navPane").style.width = "0px";
}