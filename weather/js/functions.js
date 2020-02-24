'use strict';

/* *************************************
*  Weather Site JavaScript Functions
************************************* */
// Listen for the DOM to finish building
document.addEventListener("DOMContentLoaded", function(){
    lastModified();
    
    const menuButton = document.querySelector("#menuBtn");
    menuButton.addEventListener('click', mobileMenu);

    // Variables for Wind Chill function
    let temp = 31;
    let speed = 5;
    buildWC(speed, temp);

    // The Time Indictor function
    let hour="11";
    timeBall(hour);
})
// Last updated function
function lastModified(){
    document.getElementById("lastModified").innerHTML = "Last Updated " + document.lastModified;
}

/* const menuButton = document.querySelector("#menuBtn");
menuButton.addEventListener('click',function(event){
  const navList = document.querySelector('#navList');
  navList.classList.toggle("mobileNav");
}) */

function mobileMenu(event){
    const navList = document.querySelector('#navList');
    navList.classList.toggle("mobileNav");
  }

function buildWC(speed, temp) {
    let feelTemp = document.getElementById('feelTemp');
    
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);
    
    // If chill is greater than temp, return the temp
    wc = (wc > temp)?temp:wc;
   
    // Display the windchill
    console.log(wc);
    feelTemp.innerHTML = wc;
}

// Time Indicator Function
function timeBall(hour){
    // Find all "ball" classes and remove them
    let x = document.querySelectorAll(".ball");
    for (let item of x) {
        console.log(item);
        item.classList.remove("ball");
    }
    
    // Find all hours that match the parameter and add the "ball" class
    let hr = document.querySelectorAll(".i"+hour);
    for (let item of hr){
        item.classList.add("ball");
    }
}