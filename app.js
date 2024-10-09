
window.addEventListener('load',calculateTime);

function calculateTime(){
    
   let date = new Date(); //Built in Date function that gives the current date and time
   let dayNumber = date.getDay(); //GEtting day number from the date() function 
   let hour = date.getHours(); //Getting hour from the Date() Function
   let mins = date.getMinutes(); // Getting minute from the Date() function
   let ampm =  hour >= 12 ? "PM" : "AM"; //Ensures that if hour is greater than 12 than it will be pm

   // Creating array for days in a weak 
   let dayNames = ["sunday","Monday","Tuseday","Wednesday","Thusday","Friday","Saturday"];

   //sets time in 12 hour sytem for hours above 12 
   hour = hour % 12;  
   //Ensures that if hour's value is truthy then return it as it is else return 12
   hour = hour ? hour : "12";  
   //This ensures that if hour's are less than 10 then show 0 to the left hour number
   hour = hour < 10 ? "0" +hour : hour; 
   //This ensures for minutes if they are less than 10 then show 0 to the left minute number
   mins = mins < 10 ? "0" +mins : mins; 


   let Day = document.querySelector("#day");
   Day.innerHTML = dayNames[dayNumber]; //Setting day number names of array to the day number 

   let Hour = document.querySelector("#hour");
   Hour.innerHTML = hour; //setting hour to the hour element in html

   let Mins = document.querySelector("#min");
   Mins.innerHTML = mins; //setting minutes to the minutes element of html 

   let AmPM = document.querySelector("#ampm");
   AmPM.innerHTML = ampm; //Setting Am PM to the ampm htl element

   setTimeout(calculateTime,200); //This ensures that the calculateFunction Time will update after every 2 mili seconds
}
