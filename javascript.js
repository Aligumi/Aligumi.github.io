var database = [
    {
        handle: "aligee",
        password: "super"
    }
];
 var newsFeed = [
    {
        handle: "Elon Musk",
        tweet: "#NukeMars"
    },
    {
        handle: "Donald Trump",
        tweet: "FAKE NEWS!!!"
    }
 ];

 var handlePrompt = prompt("Enter handle name");
 var passwordPrompt = prompt("Enter password");

 function signIn(handle, password) {
     if (handle === database[0].handle &&
        password === database[0].password) {
        console.log(newsFeed);
     } else {
        alert("sorry your handle and password don't match");
     }
 }
 signIn(handlePrompt, passwordPrompt);