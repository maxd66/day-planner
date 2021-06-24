// timer will dictate color of text areas throughout the day 
//      for loop, loop through ids in an array and set if statements
//      if current time matches id, starting at nine would be i+9
//      set color to red, if id is less than current hour, gray, else green
// when save button is clicked (listen on whole page and select sibling of event.target)
// save sibling to local storage
setInterval(function(){
    var currentDate = moment().format('MMMM Do, YYYY   hh:mm:ss');
    document.querySelector('#currentDay').textContent = currentDate;
    updateTimeSlots();
}, 1000)

var timeArr = ['hour-9', 
    'hour-10', 
    'hour-11', 
    'hour-12', 
    'hour-13', 
    'hour-14', 
    'hour-15', 
    'hour-16', 
    'hour-17'];

var currentTime = moment().format('H')

function updateTimeSlots() {
    for(var i = 0; i <timeArr.length; i++) {
        if((i + 9) == currentTime) {
            document.getElementById(timeArr[i]).setAttribute('class', 'mediaRow row time-block present')
        } else if((i + 9) < currentTime) {
            document.getElementById(timeArr[i]).setAttribute('class', 'mediaRow row time-block past')
        } else {
            document.getElementById(timeArr[i]).setAttribute('class', 'mediaRow row time-block future')
        }
    }
};