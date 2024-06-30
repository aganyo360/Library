<?php
$post_id = $_GET['id'];
// Fetch post details from database using $post_id
// Assume connection to database is already established
$query = "SELECT * FROM posts WHERE id = $post_id";
$result = mysqli_query($conn, $query);
$post = mysqli_fetch_assoc($result);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $post['title']; ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1><?php echo $post['title']; ?></h1>
    </header>
    <main>
        <img src="<?php echo $post['thumbnail']; ?>" alt="Thumbnail">
        <p><?php echo $post['content']; ?></p>
    </main>
</body>
</html>
