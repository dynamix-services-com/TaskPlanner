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
        tbody += "<td class='row_data' edit_type='click' col_name='Status'>" + Task.Status + "</td>";
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
        "bSort": false,
        "data": parsedJson,
        "columns": [
                {"className" : "reqid","data": "ID" },
                { "className": "reqType", "data": "Type" }, 
               /* {
                    "className": "reqType", "data": "Type", 'render': function (data, type, row, meta) {
                        console.log(row);
                        console.log(data);
                        $.each(JSON.parse(localStorage.getItem("Requesttype")), function (index, value) {
                           // console.log(row.Type + '  vs  ' + value.value);
                            if (row.Type === value.index) {
                                return ' <td>' + value.value+'</td>';
                            }  

                        });
                    

                        //                        return ' <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title = "Edit" data - toggle="tooltip" > <i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip" id="request_' + row.ID + '" onclick="deleteRequest(\'' + row.ID +'\',\'\')"><i class="material-icons">&#xE872;</i></a>';
                        // return '<span class="btn_edit" > <a href="#" class="btn btn-link " row_id="\' + row_id +\'" > Edit</a> </span><span class="btn_save" > <a href="#" class="btn btn-link" row_id="\'+row_id+\'"> Save</a> </span > <span class="btn_cancel"> <a href="#" class="btn btn-link" row_id="\' + row_id + \'"> Cancel</a> </span>';
                    }
                },*/
                { "className": "reqStatus", "data": "Status" },
                { "className": "reqTitre", "data": "Titre" },
                { "className": "reqDesc", "data": "Description" },
                { "className": "reqCp", "data": "Nom_Cree_Par" },
                    {
                    "data": "Action", 'render': function (data, type, row, meta) {

                        return ' <a class="add" title="Add" data-toggle="tooltip"  onclick="editRequest(\'' + row.ID + '\')"><i class="material-icons">&#xE03B;</i></a><a class="edit"   title = "Edit" data - toggle="tooltip" > <i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip"  onclick="removeRequest(\'' + row.ID + '\')" ><i class="material-icons">&#xE872;</i></a>';
                       
//                        return ' <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a><a class="edit" title = "Edit" data - toggle="tooltip" > <i class="material-icons">&#xE254;</i></a><a class="delete" title="Delete" data-toggle="tooltip" id="request_' + row.ID + '" onclick="deleteRequest(\'' + row.ID +'\',\'\')"><i class="material-icons">&#xE872;</i></a>';
                       // return '<span class="btn_edit" > <a href="#" class="btn btn-link " row_id="\' + row_id +\'" > Edit</a> </span><span class="btn_save" > <a href="#" class="btn btn-link" row_id="\'+row_id+\'"> Save</a> </span > <span class="btn_cancel"> <a href="#" class="btn btn-link" row_id="\' + row_id + \'"> Cancel</a> </span>';
                    }
                }
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
              $.each(JSON.parse(localStorage.getItem("Requesttype")), function (index, value) {
                       // console.log(row.Type + '  vs  ' + value.value);
                        if (data.Type === value.index) {
                            $(row).find(".reqType").html( value.value);
                        }
        
                    });
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

url_edit = "/ws/editRequest.aspx";


function editRequest(id) {
    /*
      $(row).addClass('request_' + data.ID);
            $(row).find(".reqid").addClass('reqID_' + data.ID);
            $(row).find(".reqType").addClass('reqType_' + data.ID);
            $(row).find(".reqStatus").addClass('reqStatus_' + data.ID);
            $(row).find(".reqTitre").addClass('reqTitre_' + data.ID);
            $(row).find(".reqDesc").addClass('reqDesc_' + data.ID);*/
    var Status = $('.req_ID_' + id).html();
    var Titre = $('.input_Titre_' + id).val();
    var Description = $('.input_Desc_' + id).val();
    var Type = $(".opt_Type_" + id).val();
    edit_Request(id, Status, Titre, Description, Type, function (res) {
        if (res = "ok") {
            alert("Request " + id + " modified");
        } else {
            alert(res);
        }
    })

}

function edit_Request(id, Status, Titre, Description, Type, callback) {

    var PostingEdit = $.post(url_edit, {
        id: id, Status: Status, Titre: Titre, Description: Description, Type: Type, Cree_par: 'X'
    });

   PostingEdit.done(function (data) {
        var json = JSON.parse(data)
        console.log(json);
        callback(json.OK);



    })




}





$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    // Add row on add button click
    $(document).on("click", ".add", function () {
        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function () {
            if (!$(this).val()) {
                $(this).addClass("error");
                empty = true;
            } else {
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if (!empty) {
            input.each(function () {
                $(this).parent("td").html($(this).val());
            });
            $(this).parents("tr").find(".add, .edit").toggle();
        }
    });
    // Edit row on edit button click
    $(document).on("click", ".edit", function () {
        var preSelectType = '';
     //   getRequestType(function (list) {
        var cellValue = '';
        $(this).parents("tr").find("td:not(:last-child, :first-child)").each(function () {
            cellValue = $(this).text();
            var classnm = $(this).attr("class").split(' ')[1];
            var clm = classnm.split("_")[1];
            var id = classnm.split("_")[2];
                if ($(this)[0].cellIndex === 1) {
                    preSelectType = '<select  class="form-control opt_' + clm + '_' + id + '" name="Type">';

                    $.each(JSON.parse(localStorage.getItem("Requesttype")), function (index, value) {
                        console.log(cellValue +'  vs  '+ value.value);
                        if (cellValue === value.value) {
                            preSelectType += '<option value="' + value.index + '" selected>' + value.value + '</option>';
                        } else {
                            preSelectType += '<option value="' + value.index + '">' + value.value + '</option>';
                        }
                       
                    });
                    preSelectType += '</select >';
                    $(this).html(preSelectType);

                } else {
                    $(this).html('<input type="text" class="form-control input_' + clm + '_' + id + '" value="' + $(this).text() + '">');

                }
          
            });

      
            $(this).parents("tr").find(".add, .edit").toggle();

      //  })
    });
    // Delete row on delete button click

    //  $(document).on("click", ".delete", function () {
    // console.log($($(this)[0]));
    /*  deleteRequest("", "", function (res) {
          if (res = "ok") {
              $(this).parents("tr").remove();
          } else {
              alert(res);
          }
      })*/

    //  });
});

