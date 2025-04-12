document.getElementById("forms").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const patronus = document.getElementById("patronus").value;

    if (!name) {
        alert("Please provide your name.");
        return;
    }

    if (!age) {
        alert("Please provide your age.");
        return;
    }

    if (!email) {
        alert("Please provide your email.");
        return;
    }

    if (!phone) {
        alert("Please provide your phone number.");
        return;
    }

    const data = {
        name: name,
        age: age,
        email: email,
        phone: phone,
        patronus: patronus
    }

    const xhr = new XMLHttpRequest();
    xhr.open("get", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("forms").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);

});