 url = "/ws/getRequests.Aspx";


// Send the data using post
var getting = $.get(url, {});
var DetMissDatatable = null;
// Put the results in a div
getting.done(function (data) {
    var json = JSON.parse(data)

    console.log(json);
    parsedJson = json;
    let tbody = "<tbody>";

    $.each(json, function (index, Task) {
        // alert(index + ": " + value);
        tbody += "<tr row_id=\"'+row_id+'\">";
        tbody += "<td class='row_data' edit_type='click' col_name='ID'>" + Task.ID + "</td>";
        tbody += "<td class='row_data' edit_type='click' col_name='Type'>" + Task.Type + "</td>";
        tbody += "<tdclass='row_data' edit_type='click' col_name='Status'>" + Task.Status + "</td>";
        tbody += "<td class='row_data' edit_type='click' col_name='Titre'>" + Task.Titre + "</td>";
        tbody += "<td class='row_data' edit_type='click' col_name='Description'>" + Task.Description + "</td>";
        tbody += "<td class='row_data' edit_type='click' col_name='CreePar'>" + Task.Nom_Cree_Par + "</td>";
        
        tbody += "</tr>";
    });

        tbody += "</tbody>";
        // $('#TaskList').append(tbody);


    DetMissDatatable = $('#tab').DataTable({
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
                {
                    "data": "Action", 'render': function (data, type, row, meta) {
                   
                        return ' <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title = "Edit" data - toggle="tooltip" > <i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip" id="request_' + row.ID + '" onclick="removeRequest(\'' + row.ID + '\')" ><i class="material-icons">&#xE872;</i></a>';
                       
//                        return ' <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title = "Edit" data - toggle="tooltip" > <i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip" id="request_' + row.ID + '" onclick="deleteRequest(\'' + row.ID +'\',\'\')"><i class="material-icons">&#xE872;</i></a>';
                       // return '<span class="btn_edit" > <a href="#" class="btn btn-link " row_id="\' + row_id +\'" > Edit</a> </span><span class="btn_save" > <a href="#" class="btn btn-link" row_id="\'+row_id+\'"> Save</a> </span > <span class="btn_cancel"> <a href="#" class="btn btn-link" row_id="\' + row_id + \'"> Cancel</a> </span>';
                    }
                }
        ],
        "createdRow": function (row, data, dataIndex) {
            //console.log(row);
            //console.log(data);
            $(row).addClass('request_' + data.ID);
        }
        });


});


$('#tab').on('click', 'tr', function (e, row, $element) {
  //  console.log(e);
  //  console.log(row);
  //  console.log($element);
  //  console.log(DetMissDatatable.row(this).data());
    //alert(row.ID + ' clicked');   
});


var table = $('#tab').DataTable();

function removeRequest(id) {
    if (confirm('Voulez-vous supprimer la requete No: ' + id)) {
        checkSession(function (json) {

            if (json !== null) {
                ClientCode = json.No;
                delete_Request(id, json.No, function (res) {

                    if (res = "ok") {
                        console.log(res);
                        // alert("Request " + id + " removed");
                        //DetMissDatatable.row($(this).parents('tr')).remove();
                        $(".request_" + id).remove();
                    } else {
                        alert(res);
                    }
                })
            } else {
                document.location.href = "/login.html";
            }

        })

    }
}

/*
$('#tab tbody').on('click', '.delete', function () {
    DetMissDatatable.row($(this).parents('tr')).remove();
    console.log(DetMissDatatable.row($(this).parents('tr')).data());
  //  var id = DetMissDatatable.row($(this).parents('tr')).data().ID;
    var userid = "";
    //console.log(DetMissDatatable.row($(this).parents('tr')));
   
   /* delete_Request(id, userid, function (res) {
       
        if (res = "ok") {
            console.log(res);
           // alert("Request " + id + " removed");
            //DetMissDatatable.row($(this).parents('tr')).remove();
            $(this).parents("tr").remove();
        } else {
            alert(res);
        }
    })
  
});*/

var requestID = "";
url_delete = "/ws/deleteRequest.aspx";

function deleteRequest(id,userid)
{
    delete_Request(id, userid, function (res) {
        if (res = "ok") {
            alert("Request "+id+" removed");
           // $(this).parents("tr").remove();
        } else {
            alert(res);
        }
    })
}
// Send the data using post
//var gettingDelete = $.get(url_delete, {});
// Put the results in a div
function delete_Request(id, userid, callback) {

    var gettingDelete = $.post(url_delete, { id: id, userid: userid });
    gettingDelete.done(function (data) {
        var json = JSON.parse(data)
        console.log(json);
        callback(json.OK);
        
       

    })


}