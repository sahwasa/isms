$(function () {
  /*calendar*/
  $.datepicker.setDefaults({
    buttonImageOnly: true,
    showOn: "both",
    buttonImage: "../img/calendar.png",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    regional : ["ko"],
    dateFormat : "yy-mm-dd"
  });
  $( "[role='datepic']" ).datepicker({
      buttonText: "날짜를 선택해주세요."
  });  
  var from = $( "[role='from']" ).datepicker({
    buttonText: "시작날짜를 선택해주세요.",
    onClose: function( selectedDate ) {
      var getName=$(this).attr('name');
      $("input[name='"+ getName +"'].to").datepicker( "option", "minDate", selectedDate );
    }  
  });
  var to = $( "[role='to']" ).datepicker({
    buttonText: "종료날짜를 선택해주세요.",
    onClose: function( selectedDate ) {
      var getName=$(this).attr('name');
      $("input[name='"+ getName +"'].from").datepicker( "option", "maxDate", selectedDate );
    }
  }); 

  // pop
  var popBtn = $('[openpop]');
  popBtn.on('click', function () {
    var target = $(this).attr('openpop');
    $('#' + target).show();
  })
  var closePop = $('.btn_pop_close');
  closePop.on('click', function () {
    $(this).parents('.pop_overlay').hide();
  })
  
  $('.con_list .more').on('click', function () {
    $(this).toggleClass('on');
    $(this).parent('p').nextAll('ul').slideToggle('fast');
  })
})
