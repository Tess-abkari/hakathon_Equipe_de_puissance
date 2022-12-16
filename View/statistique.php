<?php
$vari = "<script>document.write(sessionStorage.getItem('mode'))</script>";
$nb_coup = "<script>document.write(sessionStorage.getItem('nb'))</script>";


echo "mode de jeu :";
echo $vari;
echo "<br>";    
echo "nombre de coup  :";
echo $nb_coup;

?>
