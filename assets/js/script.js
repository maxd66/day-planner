// need timer to constantly update the page with new time and day
// timer will dictate color of text areas throughout the day 
//      for loop, loop through ids in an array and set if statements
//      if current time matches id, starting at nine would be i+9
//      set color to red, if id is less than current hour, gray, else green
// when save button is clicked (listen on whole page and select sibling of event.target)
// save sibling to local storage
setInterval(function(){
    var currentDate = moment().format('MMMM Do, YYYY   hh:mm:ss');
    document.querySelector('#currentDay').textContent = currentDate;
}, 1000)