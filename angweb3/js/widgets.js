
$(document).ready(function () {
    // Event Demo init
    $("#calendar")({
        events: ['2019-03-04', '2019-03-08', '2019-03-12', '2019-03-15'],
        eventsInfo: ['John\'s Birthday', 'Janet\'s Marriage', 'Graduation Day', 'Final Exams !'],
        selectCallback: function (date) {
            console.log('date selected ' + date);
        }
    });

    tippy('.day.event', {
        theme: 'translucent',
    });
});