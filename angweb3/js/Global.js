ConnectedUser = null;

function Logout() {
    // Send the data using post
    var postingLogout = $.post('/Logout.aspx', {});

    // Put the results in a div
    postingLogout.done(function (data) {
        document.location.href = '/login.html';
    })
}

// Attach a submit handler to the form
$("#Logout").on('click',function (event) {
  Logout();
})


function checkSession(callback) {
    var posting = $.post('/checkSession.aspx', {});

        // Put the results in a div
    posting.done(function (data) {
        json = JSON.parse(data);
        if (json.error !== '') {
            callback(null);
           
            
        } else {
            callback(json);
        }
     })

}

checkSession(function (json) {
    console.log(json);
    if (json !== null) {
        if (location.pathname.substring(1) === 'login.html') { // avoiding infinit loop
        if (json.Type = "Client") {
            document.location.href = "/tasks.html";
        } else if (json.Type = "Manager") {
            document.location.href = "/index.html";
        } else if (json.Type = "Developer") {
            document.location.href = "/developer.html";
        }
    }
    } else {
        if (location.pathname.substring(1) !== 'login.html') { // avoiding infinit loop
            document.location.href = "/login.html";
        }
       // 
    }
})

