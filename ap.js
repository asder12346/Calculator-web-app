async function convertCurrency() {
     const amount = document.getElementById('amount').value;
     const fromCurrency = document.getElementById('fromCurrency').value;
     const toCurrency = document.getElementById('toCurrency').value;
 
     if (amount === '') {
         document.getElementById('result').textContent = 'Please enter an amount.';
         return;
     }
 
     const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
     const data = await response.json();
 
     if (!data.rates[toCurrency]) {
         document.getElementById('result').textContent = 'Invalid currency code.';
         return;
     }
 
     const rate = data.rates[toCurrency];
     const convertedAmount = (amount * rate).toFixed(2);
     document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
 }
 