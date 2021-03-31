var mql = window.matchMedia("screen and (max-width: 767px)");

var mql = window.matchMedia("screen and (max-width: 767px)");

if (mql.matches) {
    $(".yr-header").addClass("mobile");
} else {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 800 && scroll <= 2600) {
            $(".yr-header").addClass("on");
            $(".con01").addClass("on");
        }
        if (scroll <= 820) {
            $(".yr-header").removeClass("on");
            $(".con01").removeClass("on");
            $("#topBtn").fadeOut();
        } else {
            $("#topBtn").fadeIn();
        }
        if (scroll >= 1600) {
            $(".con02").addClass("on");
        }
        if (scroll <= 1620) {
            $(".con02").removeClass("on");
        }
        if (scroll <= 5500) {
            $("#topBtn").removeClass("on");
        } else {
            $("#topBtn").addClass("on");
        }
    }); //Scroll event
}
$(".burger").click(function () {
    $("body").addClass("on");
});
$(".close-btn").click(function () {
    $("body").removeClass("on");
}); //Toggle btn
$("#topBtn").click(function () {
    $("html, body").animate(
        {
            scrollTop: 0
        },
        400
    );
    return false;
}); //top btn
var $banner = $(".title").find("ul");
var $bannerHeight = $banner.children().outerHeight();
var $bannerLength = $banner.children().length;
var rollingId;
rollingId = setInterval(function () {
    rollingStart();
}, 2000);

function rollingStart() {
    $banner.animate({ top: -$bannerHeight + "px" }, 300, function () {
        $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
        $(this).find("li:first").remove();
        $(this).css("top", 0);
    });
} //notice - rolling banner
$(function () {
    $(".sfw-con__img")
        .mouseover(function () {
            imgAttr = $(this).find(">img").attr("src");
            dataAttr = $(this).find(">img").attr("data-over");
            $(this).find(">img").attr("src", dataAttr);
        })
        .mouseout(function () {
            $(this).find(">img").attr("src", imgAttr);
        });
}); //image hover
// 2021 SS OffShow 행사 추가
function fnViewSchedule(day) {
    if (day == "all") {
        $("td.tdDay1").removeClass("hidden");
        $("td.tdDay2").removeClass("hidden");
        $("td.tdDay3").removeClass("hidden");
        $("td.tdDay4").removeClass("hidden");
        $("td.tdDay5").removeClass("hidden");
        $("td.tdDay6").removeClass("hidden");
    } else {
        $("td.tdDay1").addClass("hidden");
        $("td.tdDay2").addClass("hidden");
        $("td.tdDay3").addClass("hidden");
        $("td.tdDay4").addClass("hidden");
        $("td.tdDay5").addClass("hidden");
        $("td.tdDay6").addClass("hidden");
        $("td.tdDay" + day).removeClass("hidden");
    }
}
function fnViewSchedule2(day) {
    if (day == "all") {
        $("td.td2Day1").removeClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
        $("td.td2Day2").removeClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
        $("td.td2Day3").removeClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
        $("td.td2Day4").removeClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
        $("td.td2Day5").removeClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
    } else {
        $("td.td2Day1").addClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
        $("td.td2Day2").addClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
        $("td.td2Day3").addClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
        $("td.td2Day4").addClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
        $("td.td2Day5").addClass("hidden");
        $("td.td2Day1020").addClass("hidden");
        $("td.td2Day1105").addClass("hidden");
        $("td.td2Day" + day).removeClass("hidden");
    }
}
$(document).ready(function () {
    if ($(window).width() < 1200) {
        fnViewSchedule("2");
        fnViewSchedule2("2");
    }
    $(".itemSchedule").each(function (idx) {
        var bgcolor = $(this).attr("data-bgcolor");
        if (bgcolor != "") {
            $(this).find(".itemScheduleC").css("background-color", bgcolor);
        }
    });
    if ($(window).width() > 768) {
        $("#item167 p.designer").css({ "font-size": "13px", "letter-spacing": "-1px" });
    }
});
$(window).resize(function () {
    if ($(window).width() < 1200) {
        //fnViewSchedule('2');
    } else {
        fnViewSchedule("all");
        fnViewSchedule2("all");
    }
}); //Schedule
