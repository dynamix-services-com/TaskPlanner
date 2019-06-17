
url = "/ws/getRequests.Aspx";
checkSession(function (json) {

    if (json !== null) {
        getRequestList("/ws/getRequests.Aspx", json.No);
    } else {
        document.location.href = "/login.html";
    }

})
function getRequestList(url, iduser) {
    var getting = $.get(url, { iduser: '', client:iduser });
    getting.done(function (data) {
        var json = JSON.parse(data)

        console.log(json);
        parsedJson = json;
        let tbody = "<tbody>";

        $.each(json, function (index, Task) {

            // alert(index + ": " + value);
            tbody += "<tr>";
            tbody += "<td class='row_data' edit_type='click' col_name='ID'>" + Task.ID + "</td>";
            tbody += "<td class='row_data' edit_type='click' col_name='Type'>" + Task.Type + "</td>";
            tbody += "<td class='row_data' edit_type='click' col_name='Status'>" + Task.Status + "</td>";
            tbody += "<td>" + Task.Titre + "</td>";
            tbody += "<td>" + Task.Description + "</td>";
            tbody += "<td>" + Task.Nom_Cree_Par + "</td>";
            tbody += "<td>" + Task.Date_Creation + "</td>";
            tbody += "<td>" + Task.Client + "</td>";
            tbody += "<td>" + Task.No_Projet + "</td>";
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
                { "className": "reqType", "data": "Type" },
                { "className": "reqStatus", "data": "Status" },
                { "className": "reqTitre", "data": "Titre" },
                { "className": "reqDesc", "data": "Description" },
                { "className": "reqCp", "data": "Nom_Cree_Par" },
                { "className": "reqDCre", "data": "Date_Creation" },
                { "className": "reqNC", "data": "Client" },
                { "className": "reqNP", "data": "No_Projet" },
                { "className": "reqDEch", "data": "Date_Echeance" },
            ],
            "createdRow": function (row, data, dataIndex) {
                $(row).addClass('request_' + data.ID);
                $(row).find(".reqid").removeClass(".reqid").addClass('req_ID_' + data.ID);
                $(row).find(".reqType").removeClass(".reqType").addClass('req_Type_' + data.ID);
                $(row).find(".reqStatus").removeClass(".reqStatus").addClass('req_Status_' + data.ID);
                $(row).find(".reqTitre").removeClass(".reqTitre").addClass('req_Titre_' + data.ID);
                $(row).find(".reqDesc").removeClass(".reqDesc").addClass('req_Desc_' + data.ID);
                $(row).find(".reqCP").removeClass(".reqCP").addClass('req_CP_' + data.ID);
                $(row).find(".reqDCre").removeClass(".reqDCre").addClass('req_DCre_' + data.ID);
                $(row).find(".reqNC").removeClass(".reqNC").addClass('req_NC_' + data.ID);
                $(row).find(".reqNP").removeClass(".reqNP").addClass('req_NP_' + data.ID);
                $(row).find(".reqDEch").removeClass(".reqDEch").addClass('req_DEch_' + data.ID);





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
} 
    
         




$('#TaskList').on('click', 'tr', function (e, row, $element) {
   
    
    // console.log(row);
    console.log(DetMissDatatable.row(this).data());


    });

   
