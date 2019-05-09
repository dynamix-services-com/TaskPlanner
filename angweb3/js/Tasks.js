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
        tbody += "<td>" + Task.ID + "</td>";
        tbody += "<td>" + Task.Type + "</td>";
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
            { "className": "reqid", "data": "ID" },
            { "className": "reqType","data": "Type" },
            { "className": "reqStatus","data": "Status" },
            { "className": "reqTitre","data": "Titre" },
            { "className": "reqDesc", "data": "Description" },
            { "className": "reqCp","data": "Nom_Cree_Par" },
            { "className": "reqCr","data": "Date_Creation" },
            { "className": "reqNc","data": "Nom_Client" },
            { "className": "reqNp","data": "Nom_Projet" },
            { "className": "reqDe","data": "Date_Echeance" },
         ],
         "createdRow": function (row, data, dataIndex) {
             //console.log(row);
             //console.log(data);
             $(row).addClass('request_' + data.ID);
             $(row).find(".reqid").removeClass(".reqid").addClass('req_ID_' + data.ID);
             $(row).find(".reqType").removeClass(".reqType").addClass('req_Type_' + data.ID);
             $(row).find(".reqStatus").removeClass(".reqStatus").addClass('req_Status_' + data.ID);
             $(row).find(".reqTitre").removeClass(".reqTitre").addClass('req_Titre_' + data.ID);
             $(row).find(".reqDesc").removeClass(".reqDesc").addClass('req_Desc_' + data.ID);
             $(row).find(".reqCp").removeClass(".reqCp").addClass('req_Cp_' + data.ID);
             $(row).find(".reqCr").removeClass(".reqCr").addClass('req_Cr_' + data.ID);
             $(row).find(".reqNc").removeClass(".reqNc").addClass('req_Nc_' + data.ID);
             $(row).find(".reqNp").removeClass(".reqNp").addClass('req_Np_' + data.ID);
             $(row).find(".reqDe").removeClass(".reqDe").addClass('req_De_' + data.ID);
             $.each(JSON.parse(localStorage.getItem("Requesttype")), function (index, value) {
                 // console.log(row.Type + '  vs  ' + value.value);
                 if (data.Type === value.index) {
                     $(row).find(".reqType").html(value.value);
                 }

             });

             $.each(JSON.parse(localStorage.getItem("RequestStatus")), function (index, value) {
                 // console.log(row.Type + '  vs  ' + value.value);
                 if (data.Status === value.index) {
                     $(row).find(".reqStatus").html(value.value);
                 }

             });

         }           
         
     });
    
    
         
});



$('#TaskList').on('click', 'tr', function (e, row, $element) {
 
        console.log(DetMissDatatable.row(this).data());






    });
