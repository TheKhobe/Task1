    function displayCurrentTimeUTC() {
            const currentTimeUTC = new Date().toISOString();
            document.getElementById('currentTimeUTC').textContent = currentTimeUTC;
        }
   displayCurrentTimeUTC();
        setInterval(displayCurrentTimeUTC, 1000);
        

 function displayCurrentDayOfWeek() {
            const currentDate = new Date();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDay = daysOfWeek[currentDate.getUTCDay()];
            document.getElementById('currentDayOfTheWeek').textContent = `${currentDay}`;
        }

        displayCurrentDayOfWeek();


     