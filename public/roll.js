

$(document).ready(function(){
  $("#roll").on('submit', function(e){
      e.preventDefault();
      // var data = $('input[name=quote]').val();
      const newD6 = Math.floor(Math.random()*6 + 1)
      $.ajax({
          type: 'post',
          url: '/',
          data: newD6,
          dataType: 'text'
      })
      .done(function(data){
        console.log("MY DATA: ", data)
        //res.cookie('d6-value', newD6)

        // REQUIRED TO MAKE THE COOKIE ZERO, RANDOM ETC.

      });
  });
});