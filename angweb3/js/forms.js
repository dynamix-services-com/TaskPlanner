url = "/ws/AjoutRequest.aspx";
url_Projects = "ws/Projects.aspx";
url_Clients = "ws/Clients.aspx";

//
var getting_Project = $.get(url_Projects, { Project: "", client:'' });
getting_Project.done(function (data) {
    var json = JSON.parse(data)
    FillSelectBox("ProjectCode", '<option value="null" disabled selected>choisir Projet...</option>')

    $.each(json, function (index, Task) {
        FillSelectBox("ProjectCode", '<option  value="' + Task.Project + '" >' + Task.Project + '</option>')
    })
})
function FillSelectBox(elementID, OptList) {
    $("#" + elementID).append(OptList);
}

var getting_Client = $.get(url_Clients, { Client: "" });
getting_Client.done(function (data) {
    var json = JSON.parse(data)
    FillSelectBox("Client", '<option value="null" disabled selected>choisir Client...</option>')

    $.each(json, function (index, Task) {
        FillSelectBox("Client", '<option value="' + Task.Client + '" >' + Task.Client + '</option>')
    })
})
function FillSelectBox(elementID, OptList) {
    $("#" + elementID).append(OptList);
}
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
    Date_deadline = $form.find("input[name='Date_deadline']").val();
    //var Client = document.getElementById('Client');
    var Client = $("#Client").val();
    var ProjectCode = $("#ProjectCode").val();
    // var SelectElem_ProjectCode = document.getElementById('ProjectCode');





    checkSession(function (json) {

        if (json !== null) {
            ClientCode = json.No;
            if (json.Type === "Client") {
                /* ClientCode = ' ' + ClientCode + ' : '
                $('#ClientCode').append(ClientCode);
            } 
            else if (json.Type === "Manager" || json.Type === "Developer") {

                Client = $("#Client").val();

            }*/

            }

        }



    });

    /*var SelectElem_ProjectCode = document.getElementById('ProjectCode');
    ProjectCode = SelectElem_ProjectCode.selectedIndex;*/


    // Send the data using post
    var posting = $.post(url, {
        Title: Title, Type: Type, Description: Description, ClientCode: ClientCode,
        ProjectCode: ProjectCode, date_Echeance: Date_deadline, Client: Client/*, Photo: Photo*/
    });



    // Put the results in a div
    posting.done(function (data) {
        var json = JSON.parse(data)
        if (json.OK !== 'OK') {
            alert(json.message);
            //$("#note").html(json.error);
        }
        else {

            alert(json.message);
            document.location.href = "/tasks.html";
        }


        if (location.pathname.substring(1) !== 'login.html') { // avoiding infinit loop
            document.location.href = "/login.html";
        }


    });

});






