document.getElementById('myForm').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Form Submitted");

            const fullname = document.getElementById('fullname').value;
            console.log(fullname);

            // const lastName = document.getElementById('lastName').value;
            // console.log(lastName);

            const email = document.getElementById('email').value;
            console.log(email);

            const pass = document.getElementById('pass').value;

            const age = document.getElementById('age').value;
            console.log(age);

            if (!fullname) {
                alert("You need to enter your name.");
                return;
            }

            if (!age || age<18) {
                alert("You need to be 18.");
                return;
            }

            const formData = {
                fullname: fullname,
                // lastName: lastName,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                remember: document.getElementById('remember').checked,
                
            };

            console.log(formData);
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert('Form submitted successfully.');
                }else if (xhr.readyState === 4) {
                    alert('Error submitting form.');
                }
            };
            xhr.send(JSON.stringify(formData));
            alert('Success: ${fullname}');
        });