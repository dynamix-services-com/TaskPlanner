url = "/ws/getRequests.Aspx";

var getting = $.get(url, {});
var DetMissDatatable = null;
getting.done(function (data) {
    var json = JSON.parse(data)

   // console.log(json);
    parsedJson = json;
    let div = '<div class=" col-xs-12"><div class="row">';

    $.each(json, function (index, Task) {
        div += "<div class='col - xs - 2 col - md - 2 date'>";
        div += "<h4><a href='#' class='row_data' edit_type='click' col_name='ID'> Task " + Task.ID + "</a><div class='text-muted'>" + Task.Date_Creation + "</div></h4>";
        div += "</div>";
        div += "<div class='col - xs - 10 col - md - 10'>";
        div += "";
        div += "<p>" + Task.Description + "</p>";
        div += "</div>";
    });

    div += "</div></div>";

    $("#list").html(div);
  
});


$('#list').on('click', 'div', function (e, row, $element) {
    console.log(DetMissDatatable.row(this).data());
});
