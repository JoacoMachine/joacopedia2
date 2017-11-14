window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function iniciarGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider(); firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        alert(user.displayName)
        
        
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

$(document).ready((XD) => {
    var config = {
        apiKey: "AIzaSyC6VVKh5CCUNZNoFXivyWIvDy5hXXwM0l4",
        authDomain: "joacopedia.firebaseapp.com",
        databaseURL: "https://joacopedia.firebaseio.com",
        projectId: "joacopedia",
        storageBucket: "joacopedia.appspot.com",
        messagingSenderId: "476420623860"
    };
    firebase.initializeApp(config);
})