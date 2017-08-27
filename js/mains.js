'use strict'

$(function () {
    $.ajax({
        url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
        dataType: 'json',
        success: function (resultJson) {
            console.log(resultJson);
        },
        oneerror: function (msg) {
            console.log(msg);
        }
    });
});
