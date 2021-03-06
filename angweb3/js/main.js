
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


    function getRequestType(callback) {
        var gettingRequestType = $.post('/ws/getRequestType.aspx', {
        });

        gettingRequestType.done(function (data) {
            var json = JSON.parse(data)
            console.log(json);
            callback(json);



        })
    }

    function getRequestStatus(callback) {
        var gettingRequestStatus = $.post('/ws/getRequestStatus.aspx', {
        });

        gettingRequestStatus.done(function (data) {
            var json = JSON.parse(data)
            console.log(json);
            callback(json);



        })
    }


    // Attach a submit handler to the form
    $("#loginForm").submit(function (event) {

        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this),
            login = $form.find("input[name='login']").val(),
            pass = sha256($form.find("input[name='pass']").val()),
            url = $form.attr("action");

        // Send the data using post
        var posting = $.post(url, { Login: login, Password: pass });

        // Put the results in a div
        posting.done(function (data) {
            var json = JSON.parse(data)
            if (json.error !== '') {
                $("#note").html(json.error);
            } else {

                getRequestType(function (list) {
                    localStorage.setItem("Requesttype", JSON.stringify(list));

                    console.log(json);
                    //   ConnectedUser = json;
                    if (json.Type === "Client") {
                        document.location.href = "/tasks.html";
                    } else if (json.Type === "Manager") {
                        document.location.href = "/index.html";
                    } else if (json.Type === "Developer") {
                        document.location.href = "/developer.html";
                    }
                });
                getRequestStatus (function (list) {
                    localStorage.setItem("RequestStatus", JSON.stringify(list));

                    console.log(json);
                });
            }

        });
    });








})(jQuery);