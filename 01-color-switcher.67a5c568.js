document.addEventListener("DOMContentLoaded",(function(){var t=null;document.getElementById("startButton").addEventListener("click",(function(){document.getElementById("startButton").disabled=!0,document.getElementById("stopButton").disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),document.getElementById("stopButton").addEventListener("click",(function(){document.getElementById("startButton").disabled=!1,document.getElementById("stopButton").disabled=!0,clearInterval(t)}))}));
//# sourceMappingURL=01-color-switcher.67a5c568.js.map
