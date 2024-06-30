<?php
// Database connection
$conn = new mysqli('localhost', 'username', 'password', 'database');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $content = $_POST['content'];
    $thumbnail = 'uploads/' . basename($_FILES['thumbnail']['name']);
    
    if (move_uploaded_file($_FILES['thumbnail']['tmp_name'], $thumbnail)) {
        $query = "INSERT INTO posts (title, description, content, thumbnail) VALUES ('$title', '$description', '$content', '$thumbnail')";
        if (mysqli_query($conn, $query)) {
            echo "Post uploaded successfully!";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    } else {
        echo "Failed to upload thumbnail.";
    }
}

mysqli_close($conn);
?>
