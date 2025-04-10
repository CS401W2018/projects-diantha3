document.getElementById("forms").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const patronus = document.getElementById("patronus").value;


    if (!name || !age || !email || !phone) {
        alert("Please fill in Full Name, Email, and Password.");
        return;
    }

    if (!agree) {
        alert("You must agree to the policies.");
        return
    }

    const formData = {
        name,
        age,
        email,
        phone,
        patronus
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