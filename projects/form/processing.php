<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Form</title>
        <meta charset="UTF-8">
    </head>
    
    <body>
        <main>
            <h1>Thank you for signing up.</h1>
            <p>Last Name: <?php print $_POST['lastname'] ?></p>
            <p>First Name: <?php print $_POST['firstname'] ?></p>
            <p>Middle Name: <?php print $_POST['middlename'] ?></p>
            <p>Email: <?php print $_POST['email'] ?></p>
            <p>Password: <?php print $_POST['password'] ?></p>
            <p>Birthdate: <?php print $_POST['birthdate'] ?></p>
            <p>Gender: <?php print $_POST['gender'] ?></p>
            <p>State: <?php print $_POST['state'] ?></p>
            <p>Year in School: <?php print $_POST['year'] ?></p>
        </main>
    </body>
</html>