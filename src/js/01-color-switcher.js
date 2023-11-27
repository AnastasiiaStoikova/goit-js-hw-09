document.addEventListener('DOMContentLoaded', function () {
    // Весь ваш код JavaScript должен находиться здесь
  
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
  
    let intervalId = null;
  
    document.getElementById('startButton').addEventListener('click', startColorChange);
    document.getElementById('stopButton').addEventListener('click', stopColorChange);
  
    function startColorChange() {
      document.getElementById('startButton').disabled = true;
      document.getElementById('stopButton').disabled = false;
  
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
    }
  
    function stopColorChange() {
      document.getElementById('startButton').disabled = false;
      document.getElementById('stopButton').disabled = true;
  
      clearInterval(intervalId);
    }
  });
