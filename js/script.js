/* Sidebar animations & actions */

$('#menu-icon').on('click',()=>{
  $('.aside').addClass('opened');
  $('aside').removeClass('closed');
  $('.menu-icon').addClass('d-none');
  $('#close-icon').removeClass('d-none');
})

$('#close-icon').on('click',()=>{
  $('aside').removeClass('opened');
  $('aside').addClass('closed');
  setTimeout(()=>{
    $('#menu-icon').removeClass('d-none')
  },300)
})

$('#message').on('input',()=>{
  let length = $('#message').val().length;
  $('#character-number').text(length);
})

let daysContainer = $('#days');
let hoursContainer = $('#hours');
let minutesContainer = $('#minutes');
let secondsContainer = $('#seconds');

function updateTimerUI(days,hours,minutes,seconds){
  daysContainer.text(days)
  hoursContainer.text(hours)
  minutesContainer.text(minutes)
  secondsContainer.text(seconds)
}

function startTimer(){
  let then = new Date(2024, 6, 30);
  setInterval(()=>{
    let now = Date.now();
    let diff = then - now ;
    let days = Math.floor(diff / (1000*60*60*24));
    let hours = Math.floor((diff % (1000*60*60*24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60 )) / (1000) );
    updateTimerUI(days,hours,minutes,seconds) 
  },1000);
}

startTimer();