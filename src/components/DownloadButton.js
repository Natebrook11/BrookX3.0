import React, { useState, useEffect } from "react";

const DownloadButton = () => {
const [downloadCounter, setDownloadCounter] = useState(
parseInt(localStorage.getItem("downloadCounter")) || 0
);
const [currentCount, setCurrentCount] = useState(0);
const [animationStarted, setAnimationStarted] = useState(false);

useEffect(() => {
if (!animationStarted) return;
let start = performance.now();
let duration = 2500;
let intervalId = setInterval(() => {
let time = performance.now() - start;
let easedValue = easeInOutCubic(time, 0, downloadCounter, duration);
setCurrentCount(easedValue.toFixed(0));
if (time >= duration) {
clearInterval(intervalId);
setAnimationStarted(false);
}
}, 10);
return () => clearInterval(intervalId);
}, [animationStarted, downloadCounter]);

useEffect(() => {
window.addEventListener("load", handleAnimationClick);
return () => window.removeEventListener("load", handleAnimationClick);
}, []);

const handleDownloadClick = () => {
setDownloadCounter(downloadCounter + 1);
localStorage.setItem("downloadCounter", downloadCounter + 1);
};

const handleAnimationClick = () => {
setAnimationStarted(true);
};

const formatNumberWithCommas = (number) => {
return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const easeInOutCubic = (t, b, c, d) => {
if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
return c / 2 * ((t -= 2) * t * t + 2) + b;
};

return (

<div>
<span id="download-counter">
{formatNumberWithCommas(animationStarted ? currentCount : downloadCounter)} Downloads
</span><br/><br/><br/>
<a target={"_blank"} id="download-btn" onClick={handleDownloadClick}>
Download Now!
</a>
</div>

);
};
export default DownloadButton;
