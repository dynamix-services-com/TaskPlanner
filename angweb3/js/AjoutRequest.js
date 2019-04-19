﻿url = "/ws/AjoutRequest.aspx";



// Attach a submit handler to the form
$("#AjoutForm").submit(function (event) {


    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $(this),
        Title = $form.find("input[name='Title']").val();
    var SelectElem_Type = document.getElementById('Type');
    Type = SelectElem_Type.selectedIndex;
    Description = $form.find("input[name='Description']").val();
    var ClientCode = "";
    checkSession(function (json) {
        
        if (json !== null) {
            ClientCode = json.No;

            // Project_State = SelectElem_Project_State.selectedIndex;

          /*  var SelectElem_ProjectCode = document.getElementById('ProjectCode');
            ProjectCode = SelectElem_ProjectCode.selectedIndex;*/
            //  Photo = $form.find("input[name='Photo']").val();
            //     url = $form.attr("action");

            // Send the data using post
            var posting = $.post(url, {
                Title: Title, Type: Type, Description: Description, ClientCode: ClientCode,
                ProjectCode: $form.find("input[name='ProjectCode']").val()/*, Photo: Photo*/
            });

            // Put the results in a div
            posting.done(function (data) {
                var json = JSON.parse(data)
                if (json.OK !== 'OK') {
                    alert(json.message);
                    //$("#note").html(json.error);
                } else {

                    alert(json.message);
                    document.location.href = "/tasks.html";
                }

            });

        } else {
            if (location.pathname.substring(1) !== 'login.html') { // avoiding infinit loop
                document.location.href = "/login.html";
            }

            // 
        }
    })
    




    

});