function calculateDateDifference() {
     const startDate = new Date(document.getElementById('startDate').value);
     const endDate = new Date(document.getElementById('endDate').value);
 
     if (!startDate || !endDate || startDate > endDate) {
         document.getElementById('result').textContent = 'Please enter valid dates.';
         return;
     }
 
     // Calculate the difference in milliseconds
     const diffTime = Math.abs(endDate - startDate);
 
     // Calculate years, days, hours, minutes, and seconds
     const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) % 365;
     const diffHours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
 
     // Display the result with years, days, hours, minutes, and seconds
     document.getElementById('result').textContent = 
         `${diffYears} years, ${diffDays} days,`;
 }
 