$(document).ready(function(){

  const showResult = function(rollValue) {
    if (rollValue !== '0') {  
      $("#result")
      .empty()
      .append(`<p>You rolled number ${rollValue}!</p>`)
    } else {
      $("#result")
      .empty()
      .append(`Click Roll to make a Roll.</p>`)
    }

  }

  const fetchResult = function() {
    $.ajax({
      url: '/',
      success: () => showResult(document.cookie.split('=')[1])
    })
  }

  fetchResult();

  $("#roll").on('submit', function(e){
      e.preventDefault();
      $.ajax({
          type: 'post',
          url: '/',
          success: () => document.cookie = `d6_value=${Math.floor(Math.random()*6 + 1)}`
      })
        .done( () => fetchResult())
  });

  $("#reset").on('submit', function(e){
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: '/',
        dataType: 'text',
        success: () => document.cookie = `d6_value=0`
    })
    .done( () => fetchResult())
  });
});