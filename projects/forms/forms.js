document.getElementById("theForms").addEventListener("submit", function(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const phone = document.getElementById("phone").value;
    const birthdate = document.getElementById("birthdate").value;
    const comments = document.getElementById("comments").value;


    if (!fullname || !email || !password) {
        alert("Please fill in Full Name, Email, and Password.");
        return;
    }

    if (!agree) {
        alert("You must agree to the terms.");
        return
    }

    const formData = {
        fullname,
        email,
        password,
        phone,
        birthdate,
        comments
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("theForms").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert("There was an error processing your form.")
        }
    };

    xhr.send(JSON.stringify(formData));
})