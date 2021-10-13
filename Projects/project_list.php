<!DOCTYPE html>
<html lang="en">
<?php
$dir = "../Projects"; /*This directory variable may need to be changed depending on how your server is set up.*/
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  <title>Open website</title>
  
</head>
<body>
    
       <header>
         <div class="container">
        <nav class="navbar bg-primary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand">Roshan K.C</a>
  <a class="navbar-brand" href="index.html">Home</a>
  <a class="navbar-brand" href="about.html">About me</a>
  <a class="navbar-brand" href="contact.html">Contact</a>
  <a class="navbar-brand" href="blogs.html">Blogs</a>
  <a class="navbar-brand" href="project_list.php">Projects</a>
  </div>
</nav>
</div>
      </header>
      
        
    <main>
         <div class="container">
             <h1> This is open Website </h1>
             <p> This is a list of the files and projects currently included in the Projects folder along with links to those files and folders. It uses PHP so that it is automatically updated whenever a new project is added. This is a good addition to a portfolio site because it will always be updated with the newest changes.</p>
             <picture>
            <img src="https://img.caixin.com/2019-12-12/1576147635453631.jpg" alt="image" style="width: 100%; margin-top: 20px; margin-left:auto; margin-right:100px; margin-bottom:20px;
                   max-width: 300px; height: auto;">
          </picture>
<ul>
<?php if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
		if (($file == ".") || ($file == "..")) {continue;}
      echo "<li><a href='" . $file . "'>" . pathinfo($file, PATHINFO_FILENAME) . "</a></li>";
    }
    closedir($dh);
  }
}?>
</ul>
    </div>
      
    </main>
  <footer>
    
  </footer>
</body>
</html>
