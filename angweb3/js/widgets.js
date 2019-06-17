function editEvent(event) {
    $('#event-modal input[name="event-index"]').val(event ? event.id : '');
    $('#event-modal input[name="event-name"]').val(event ? event.name : '');
    $('#event-modal input[name="event-location"]').val(event ? event.location : '');
    $('#event-modal input[name="event-start-date"]').datepicker('update', event ? event.startDate : '');
    $('#event-modal input[name="event-end-date"]').datepicker('update', event ? event.endDate : '');
    $('#event-modal').modal();
}

function deleteEvent(event) {
    var dataSource = $('#calendar').data('calendar').getDataSource();

    for (var i in dataSource) {
        if (dataSource[i].id == event.id) {
            dataSource.splice(i, 1);
            break;
        }
    }

    $('#calendar').data('calendar').setDataSource(dataSource);
}

function saveEvent() {
    var event = {
        id: $('#event-modal input[name="event-index"]').val(),
        name: $('#event-modal input[name="event-name"]').val(),
        location: $('#event-modal input[name="event-location"]').val(),
        startDate: $('#event-modal input[name="event-start-date"]').datepicker('getDate'),
        endDate: $('#event-modal input[name="event-end-date"]').datepicker('getDate')
    }

    var dataSource = $('#calendar').data('calendar').getDataSource();

    if (event.id) {
        for (var i in dataSource) {
            if (dataSource[i].id == event.id) {
                dataSource[i].name = event.name;
                dataSource[i].location = event.location;
                dataSource[i].startDate = event.startDate;
                dataSource[i].endDate = event.endDate;
            }
        }
    }
    else {
        var newId = 0;
        for (var i in dataSource) {
            if (dataSource[i].id > newId) {
                newId = dataSource[i].id;
            }
        }

        newId++;
        event.id = newId;

        dataSource.push(event);
    }

    $('#calendar').data('calendar').setDataSource(dataSource);
    $('#event-modal').modal('hide');
}

$(function () {
    var currentYear = new Date().getFullYear();
    getDatasourse1(function (ds) {
        console.log(ds);
    $('#calendar').calendar({
        enableContextMenu: true,
        enableRangeSelection: true,
        contextMenuItems: [
            {
                text: 'Update',
                click: editEvent
            },
            {
                text: 'Delete',
                click: deleteEvent
            }
        ],
        selectRange: function (e) {
            editEvent({ startDate: e.startDate, endDate: e.endDate });
        },
        mouseOnDay: function (e) {
            if (e.events.length > 0) {
                var content = '';

                for (var i in e.events) {
                    content += '<div class="event-tooltip-content">'
                        + '<div class="event-name" style="color:' + e.events[i].color + '">' + e.events[i].name + '</div>'
                        + '<div class="event-location">' + e.events[i].location + '</div>'
                        + '</div>';
                }

                $(e.element).popover({
                    trigger: 'manual',
                    container: 'body',
                    html: true,
                    content: content
                });

                $(e.element).popover('show');
            }
        },
        mouseOutDay: function (e) {
            if (e.events.length > 0) {
                $(e.element).popover('hide');
            }
        },
        dayContextMenu: function (e) {
            $(e.element).popover('hide');
        },
        dataSource: ds
       /* dataSource: [
            {
                id: 0,
                name: 'Google I/O',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 4, 28),
                endDate: new Date(currentYear, 4, 29)
            },
            {
                id: 1,
                name: 'Microsoft Convergence',
                location: 'New Orleans, LA',
                startDate: new Date(currentYear, 2, 16),
                endDate: new Date(currentYear, 2, 19)
            },
            {
                id: 2,
                name: 'Microsoft Build Developer Conference',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 3, 29),
                endDate: new Date(currentYear, 4, 1)
            },
            {
                id: 3,
                name: 'Apple Special Event',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 8, 1),
                endDate: new Date(currentYear, 8, 1)
            },
            {
                id: 4,
                name: 'Apple Keynote',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 8, 9),
                endDate: new Date(currentYear, 8, 9)
            },
            {
                id: 5,
                name: 'Chrome Developer Summit',
                location: 'Mountain View, CA',
                startDate: new Date(currentYear, 10, 17),
                endDate: new Date(currentYear, 10, 18)
            },
            {
                id: 6,
                name: 'F8 2015',
                location: 'San Francisco, CA',
                startDate: new Date(currentYear, 2, 25),
                endDate: new Date(currentYear, 2, 26)
            },
            {
                id: 7,
                name: 'Yahoo Mobile Developer Conference',
                location: 'New York',
                startDate: new Date(currentYear, 7, 25),
                endDate: new Date(currentYear, 7, 26)
            },
            {
                id: 8,
                name: 'Android Developer Conference',
                location: 'Santa Clara, CA',
                startDate: new Date(currentYear, 11, 1),
                endDate: new Date(currentYear, 11, 4)
            },
            {
                id: 9,
                name: 'LA Tech Summit',
                location: 'Los Angeles, CA',
                startDate: new Date(currentYear, 10, 17),
                endDate: new Date(currentYear, 10, 17)
            }
        ]*/
    });

    $('#save-event').click(function () {
        saveEvent();
    });

   /* getDatasourse(function (dataSource) {
        $('#calendar').data('calendar').setDataSource(dataSource);
    })*/
  
    })
});
function getDatasourse1(callback) {
    //checkSession(function (json) {

    //  if (json !== null) {
    var getting = $.get("/ws/getCalendarRequests.Aspx", { iduser: '', client: '' });
    //console.log(new Date(2019, 2, 19));
    getting.done(function (response) {
      //  var json = JSON.parse(data)

        //console.log(json);
        //parsedJson = json;
        var data = [];
        for (var i = 0; i < response.length; i++) {
            data.push({
                startDate: new Date('2019-06-17'),
                endDate: new Date('2019-06-20'),
                color: '#333333',
                title: 'test'
            });
        }
        callback(data);



    });
    //}
    //});
}

function getDatasourse(callback) {
//checkSession(function (json) {

  //  if (json !== null) {
    var getting = $.get("/ws/getCalendarRequests.Aspx", { iduser: '', client: '' });
    console.log(new Date(2019, 2, 19));
        getting.done(function (data) {
            var json = JSON.parse(data)

            console.log(json);
            parsedJson = json;
            callback(parsedJson);
      


        });
    //}
//});
}


/*
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
});*/