

<!DOCTYPE html>
<html>
   <head>
      <script src="../Scripts/vehicule.js" defer></script>
      <script src="../Scripts/script.js" defer></script>
      <script src="../Scripts/parametre.js" defer></script>
      <script src="../Scripts/plateau.js" defer></script>
      <script src="../Scripts/test.js" defer></script>
           
      <link rel="stylesheet" href="../style/style.css">
   </head>
   <body>
      <input  type="button"  id="jouer" value="jouer" width="100px" onclick="jouer();" />
      <input  type="button" id="dé" value="dé pour avancer" onclick="lance_de_de_avance();" disabled/>
      <input  type="button" id="dée" value="dé pour recharger"  onclick="lance_de_de_recharge();"disabled />
      <form action="parametre.php">
         <button type="submit" id="para" >parametre</button>
      </form>
      <form action="choix.php">
         <button type="submit" id="choix" >choix vehicule</button>
      </form>

     <table>
      <tr>
         <td> case du joueur1:</td>
         <td><span id="case1"> </span></td>
      </tr>
      <tr>
         <td> charge 1 :</td>
         <td><span id="charge1"> </span></td>
      </tr>
      <tr>
         <td> case du joueur2:</td>
         <td> <span id="case2"> </span></td>
      </tr>
      <tr>
         <td> charge 2:</td>
         <td><span id="charge2"> </span></td>
      </tr>
      <tr>
         <td> de:</td>
         <td> <span id="de"> </span></td>
      </tr>      
      <tr>
         <td> time:</td>
         <td> <span id="time" name ="time"> </span></td>
      </tr>
      <span id="gagne"> </span>
   

<?php

$vari = "<script>document.write(sessionStorage.getItem('mode'))</script>";
echo $vari
?>
   </body>
</html> 