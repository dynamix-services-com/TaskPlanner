/*
$(document).ready(function () {
    $('#table_id').DataTable({

        ajax: {
            url: '/ws/getRequests.Aspx',
            dataSrc: ''
        },
        "columns": [ 
            { "data": "ID" }
            ]
    });
});*/

/*$('#TaskList').DataTable({
     ajax: {
         url: '/ws/getRequests.Aspx',
        dataSrc: ''
    },
    columns: ["ID","Type"]
});*/

url = "/ws/getRequests.Aspx";

// Send the data using post
var getting = $.get(url, {  });
var DetMissDatatable = null;
// Put the results in a div
getting.done(function (data) {
    var json = JSON.parse(data)

    console.log(json);
    parsedJson = json;
    let tbody = "<tbody>";
  
    $.each(json, function (index, Task) {
       // alert(index + ": " + value);
        tbody += "<tr>";
        tbody += "<td>" + Task.ID+"</td>";
        tbody += "<td>" + Task.Type +"</td>";
        tbody += "<td>" + Task.Status + "</td>";
        tbody += "<td>" + Task.Titre + "</td>";
        tbody += "<td>" + Task.Description + "</td>";
        tbody += "<td>" + Task.Nom_Cree_Par + "</td>";
        tbody += "<td>" + Task.Date_Creation + "</td>";
        tbody += "<td>" + Task.Nom_Client + "</td>";
        tbody += "<td>" + Task.Nom_Projet + "</td>";
        tbody += "<td>" + Task.Date_Echeance + "</td>";
        tbody += "</tr>";

    });

    tbody += "</tbody>";
   // $('#TaskList').append(tbody);


     DetMissDatatable = $('#TaskList').DataTable({
        searching: true,
        destroy: true,
        "data": parsedJson,
        "columns": [
            { "data": "ID" },
            { "data": "Type" },
            { "data": "Status" },
            { "data": "Titre" },
            { "data": "Description" },
            { "data": "Nom_Cree_Par" },
            { "data": "Date_Creation" },
            { "data": "Nom_Client" },
            { "data": "Nom_Projet" },
            { "data": "Date_Echeance" },
        ]
    });


});



$('#TaskList').on('click','tr', function (e, row, $element) {
   // console.log(row);
    console.log(DetMissDatatable.row(this).data());
    //alert(row.ID + ' clicked');
});