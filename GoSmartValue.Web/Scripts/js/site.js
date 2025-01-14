﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var $sidenav = $(".sidenav"),
    $toggler = $(".navbar-toggler"),
    collapsed = false;

$sidenav.css("top", $(".navbar").outerHeight());

if (window.innerWidth < 768) {
    collapse();
}

$(window).resize(function () {
    if (window.innerWidth < 768) {
        console.log(collapsed);
        collapse();
    } else {
        console.log(collapsed);
        restore();
    }
});

$toggler.click(function () {
    if (!$sidenav.hasClass("show")) {
        showSidenav();
    } else {
        hideSidenav();
    }
})

function showSidenav() {
    $sidenav.css("display", "flex");
    window.setTimeout(function () {
        // Must be number value. Adjust as needed.
        $sidenav.css({
            'width': "200px",
            'box-shadow': "-10px 10px 512px 256px #000000",
            'background-color': "#000000"
        });
    }, 10);
    $toggler.css("color", "white");
    $sidenav.addClass("show");
}

function hideSidenav() {
    $sidenav.css({
        'width': "0px",
        'box-shadow': "none",
        'background': "transparent"
    });
    window.setTimeout(function () {
        $sidenav.css("display", "none");
    }, 500);
    $toggler.css("color", "white")
    $sidenav.removeClass("show");
}

function collapse() {
    if (!collapsed) {
        $(".navbar-collapse > ul").appendTo(".sidenav").addClass("w-100 text-center");
        $(".sidenav > ul .nav-link").addClass("w-100");
        collapsed = true;
    }
}

function restore() {
    if (collapsed) {
        $(".sidenav > ul").appendTo(".navbar-collapse").removeClass("w-100 text-center");
        $(".sidenav > ul .nav-link").removeClass("w-100");
        hideSidenav();
        collapsed = false;
    }
}

function datetimeFormatter() {
    $(".time").timepicker({
        timeFormat: "hh:mm p",
        interval: 10,
        minTime: "07",
        maxTime: "20:00pm",
        defaultTime: "10",
        startTime: "07:00",
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    $(".date").datepicker();
}

$(document).ready(function () {
    datetimeFormatter();
});