window.onload = () => {
	"use strict";
	console.log(1);
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register("./sw.js");
	} else {
		alert("No service worker");
	}
};
