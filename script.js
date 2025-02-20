function clearDisplay() {
     document.getElementById('display').value = '';
     document.getElementById('input-result').textContent = '';
     document.getElementById('final-result').textContent = '';
 }
 
 function appendCharacter(character) {
     const display = document.getElementById('display');
     display.value += character;
     updateDisplay();
 }
 
 function calculate() {
     const display = document.getElementById('display');
     const finalResult = document.getElementById('final-result');
     try {
         const result = eval(display.value);
         display.value = result;
         finalResult.textContent = result;
     } catch (error) {
         display.value = 'Error';
         finalResult.textContent = 'Error';
     }
 }
 
 function updateDisplay() {
     const display = document.getElementById('display').value;
     document.getElementById('input-result').textContent = display;
 }
 