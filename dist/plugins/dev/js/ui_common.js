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
  $(".xl_tab li").on("click", function () {
    $(this).addClass("on").siblings().removeClass("on");
    var link = $(this).find("a").attr("href");
    var link_num = link.substr(link.length - 1);
    $(".m_tab option")
      .eq(link_num - 1)
      .prop("selected", "selected");
    $(".tab_contents").hide();
    $(link).show().focus();
  });
  $(".tab_select").on("change", function () {
    var select_link = $(".tab_select").val();
    var select_num = $(this).prop("selectedIndex");
    $(".xl_tab li").eq(select_num).addClass("on").siblings().removeClass("on");
    $(".tab_contents").hide();
    $("#" + select_link)
      .show()
      .focus();
    console.log(select_link);
  });
});


$(function () {
  
$('#datetimepicker').datetimepicker();
  $("#date_timepicker_start").datetimepicker({
    format: "Y/m/d",
    onShow: function (ct) {
      this.setOptions({
        maxDate: jQuery("#date_timepicker_end").val()
          ? jQuery("#date_timepicker_end").val()
          : false,
      });
    },
    timepicker: false,
  });
  jQuery("#date_timepicker_end").datetimepicker({
    format: "Y/m/d",
    onShow: function (ct) {
      this.setOptions({
        minDate: jQuery("#date_timepicker_start").val()
          ? jQuery("#date_timepicker_start").val()
          : false,
      });
    },
    timepicker: false,
  })
})

