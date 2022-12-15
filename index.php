<?php
require "vendor/autoload.php";

$uri = $_SERVER['REQUEST_URI'];
$router = new AltoRouter();

$router->map('GET', '/', "pagePrincipale", "home");

$match = $router->match();

if (is_array($match)) {
    $params = $match['params'];
    require "View/{$match['target']}.php";
} else {
   // require "View/404.html";
}

?>