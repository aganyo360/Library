<?php
// Database connection
$conn = new mysqli('localhost', 'username', 'password', 'database');

$query = "SELECT id, title, description, thumbnail FROM posts";
$result = mysqli_query($conn, $query);

$posts = [];
while ($row = mysqli_fetch_assoc($result)) {
    $posts[] = $row;
}

echo json_encode($posts);

mysqli_close($conn);
?>
