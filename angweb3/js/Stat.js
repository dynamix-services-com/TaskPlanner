url_Client = "/ws/Clients.Aspx";


var getting = $.get(url_Client, {});
var DetMissDatatable = null;
getting.done(function (data) {
    var json = JSON.parse(data)

    // console.log(json);
    parsedJson = json;
  //  let div = '<div class="col-xs-6 col-md-3 col-lg-3 no-padding">< div class="panel panel-teal panel-widget border-right" ><div class="row no-padding"><em class="fa fa-xl fa-shopping-cart color-blue"></em>';

    $.each(json, function (index, Task) {
     /*   div += '<div class="large">' + + '</div>';
        div += ' <div class="text-muted">New Orders</div>';
  */   
    });

    div += "</div></div>";

    $("#list").html(div);

});


$('#list').on('click', 'div', function (e, row, $element) {
    console.log(DetMissDatatable.row(this).data());
});
