var targetObject = {};
setInterval(function(){
    var currentDate = moment().format('MMMM Do, YYYY   hh:mm:ss');
    document.querySelector('#currentDay').textContent = currentDate;
    updateTimeSlots();
}, 1000)

var timeArr = ['#hour-9', 
    '#hour-10', 
    '#hour-11', 
    '#hour-12', 
    '#hour-13', 
    '#hour-14', 
    '#hour-15', 
    '#hour-16', 
    '#hour-17'];

var currentTime = moment().format('H')

function updateTimeSlots() {
    for(var i = 0; i <timeArr.length; i++) {
        if((i + 9) == currentTime) {
            $(timeArr[i]).attr('class', 'row time-block present')
        } else if((i + 9) < currentTime) {
            $(timeArr[i]).attr('class', 'row time-block past')
        } else {
            $(timeArr[i]).attr('class', 'row time-block future')
        }
    }
};

document.querySelector('.container').addEventListener('click', function(event) {
    var targetBtn = event.target;
    if (targetBtn.matches('.saveBtn')) {
        var targetLocation = event.target.closest('div').getAttribute('id');
        var targetObjectName = event.target.closest('div').getAttribute('id');
        var targetItem = event.target.closest('div').children[1].value.trim(); 
        var targetLocation = {
            location: targetObjectName,
            text: targetItem
        }
        localStorage.setItem(targetObjectName, JSON.stringify(targetLocation));
    }
})

secondTimeArr = ['hour-9', 
'hour-10', 
'hour-11', 
'hour-12', 
'hour-13', 
'hour-14', 
'hour-15', 
'hour-16', 
'hour-17'];

for(var i = 0; i < secondTimeArr.length; i++) {
    var savedItem = JSON.parse(localStorage.getItem(secondTimeArr[i]))
    if(savedItem !== null) {
        var targetEl = document.getElementById(savedItem.location);
        targetEl.querySelector('.description').textContent = savedItem.text
    }
}

console.log('Hi lo.')
