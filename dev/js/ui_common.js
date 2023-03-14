$(function () {
  $.datetimepicker.setLocale("kr");  
  $(".date_timepicker").datetimepicker();
  $(".date_timepicker_start").datetimepicker({
    format: "Y/m/d H:i",
    // step:1, 분단위로 선택하고 싶을때....주석을 푸세요....
    onShow: function (ct,$input){      
      this.setOptions({
        maxDate: $input.next('.date_timepicker_end').val()
          ? $input.next('.date_timepicker_end').val()
          : false
      });
    },
    timepicker: true,
  });
  $(".date_timepicker_end").datetimepicker({
    format: "Y/m/d H:i",
    // step:1, 분단위로 선택하고 싶을때....주석을 푸세요....
    onShow: function (ct,$input) {
      this.setOptions({
        minDate: $input.prev('.date_timepicker_start').val()
          ? $input.prev('.date_timepicker_start').val()
          : false
      });
    },
    timepicker: true,
  });
  $(".date_picker").datetimepicker({
    format: "Y/m/d",
    timepicker: false,
  });
  $(".date_picker_start").datetimepicker({
    format: "Y/m/d",
    onShow: function (ct,$input) {
      this.setOptions({
        maxDate: $input.next(".date_picker_end").val()
          ? $input.next(".date_picker_end").val()
          : false,
      });
    },
    timepicker: false,
  });
  $(".date_picker_end").datetimepicker({
    format: "Y/m/d",
    onShow: function (ct,$input) {
      this.setOptions({
        minDate: $input.prev(".date_picker_start").val()
          ? $input.prev(".date_picker_start").val()
          : false,
      });
    },
    timepicker: false,
  });

  // pop
  var popBtn = $("[openpop]");
  popBtn.on("click", function () {
    var target = $(this).attr("openpop");
    $("#" + target).show();
  });
  var closePop = $(".btn_pop_close");
  closePop.on("click", function () {
    $(this).parents(".pop_overlay").hide();
  });

  $(".con_list .more").on("click", function () {
    $(this).toggleClass("on");
    $(this).parent("p").nextAll("ul").slideToggle("fast");
  });

  // mobile gnb
  $(".allMenuOpen").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("close");
    $("#allMenuBox").toggle(0).attr("tabindex", 0);
    $("#allMenuBox").toggleClass("active");
  });

  $(".pc_con .gnb > li").on("mouseover", function (e) {
    e.preventDefault();
    $(this).children(".sub").addClass("active");
  });
  $(".pc_con .gnb > li").on("mouseleave", function (e) {
    e.preventDefault();
    $(this).children(".sub").removeClass("active");
  });
  $("#allMenuBox").removeClass("active").attr("tabindex", -1);

  $("#allMenuBox > ul > li").each(function () {
    $(this)
      .children("a")
      .on("click", function (e) {
        if ($(this).siblings().length > 0) {
          e.preventDefault();
          $(this).parent().addClass("active").siblings().removeClass("active");
        }
      });
  });
  $("#allMenuBox > ul > li > a").each(function () {
    if (!$(this).next().length) {
      $(this).addClass("empty");
    }
  });
  $(".m_con > li").each(function () {
    $(this)
      .children("a")
      .on("click", function (e) {
        if ($(this).siblings().length > 0) {
          e.preventDefault();
          $(this).parent().addClass("active").siblings().removeClass("active");
        }
      });
  });
  $(".m_con > li > a").each(function () {
    if (!$(this).next().length) {
      $(this).addClass("empty");
    }
  });

  // toggle button
  $(".btn_toggle").on("click", function (e) {
    e.preventDefault();
    var cur = $(this).attr("datavalue");
    if ($(this).attr("disabled") == "disabled") return false;
    if (cur == "on") {
      $(this).attr("datavalue", "off");
    } else {
      $(this).attr("datavalue", "on");
    }
  });

  //tab
  $(".xl_tab li").first().addClass("on");
  $(".tab_contents").not(":first").hide();
  $(".xl_tab li").on("click", function (e) {
    e.preventDefault();
    $(this).blur();
    $(this).addClass("on").siblings().removeClass("on");
    var link = $(this).find("a").attr("href");
    var link_num = link.substr(link.length - 1);
    $(".m_tab option")
      .eq(link_num - 1)
      .prop("selected", "selected");
    $(".tab_contents").hide();
    $(link).show();
  });
  $(".tab_select").on("change", function () {
    var select_link = $(".tab_select").val();
    var select_num = $(this).prop("selectedIndex");
    $(".xl_tab li").eq(select_num).addClass("on").siblings().removeClass("on");
    $(".tab_contents").hide();
    $("#" + select_link).show();
  });

  //표 줄선택
  $('.row_check').on({
    click : function(e){e.stopPropagation()},
    change : function(){
      var cur = $(this).prop('checked'),
          checkName = 'select_tr';
      if($(this).hasClass('all_check')){
        var childCheck = $(this).parents('table').children('tbody').find('.row_check');
        childCheck.each(function(){
          var elRow = $(this).parents('tr');
          $(this).prop('checked', cur);
          (cur) ? elRow.addClass(checkName) : elRow.removeClass(checkName);
        })
      }else{
        var thisRow = $(this).parents('tr');

        if($(this).prop('type') == 'radio') $(this).parents('table').find('tr').removeClass(checkName);

        (cur) ? thisRow.addClass(checkName) : thisRow.removeClass(checkName);
      }
    }
  });
});