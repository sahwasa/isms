$(function () {
  /*calendar*/
  $.datepicker.setDefaults({
    buttonImageOnly: true,
    showOn: "both",
    buttonImage: "../img/calendar.png",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    regional: ["ko"],
    dateFormat: "yy-mm-dd",
  });
  $("[role='datepic']").datepicker({
    buttonText: "날짜를 선택해주세요.",
  });
  var from = $("[role='from']").datepicker({
    buttonText: "시작날짜를 선택해주세요.",
    onClose: function (selectedDate) {
      var getName = $(this).attr("name");
      $("input[name='" + getName + "'].to").datepicker(
        "option",
        "minDate",
        selectedDate
      );
    },
  });
  var to = $("[role='to']").datepicker({
    buttonText: "종료날짜를 선택해주세요.",
    onClose: function (selectedDate) {
      var getName = $(this).attr("name");
      $("input[name='" + getName + "'].from").datepicker(
        "option",
        "maxDate",
        selectedDate
      );
    },
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
      console.log("1");
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
      console.log("3");
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
});
