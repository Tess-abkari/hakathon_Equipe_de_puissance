

<!DOCTYPE html>
<html>
   <head>
      <script src="../Scripts/vehicule.js" defer></script>
      <script src="../Scripts/script.js" defer></script>
      <script src="../Scripts/parametre.js" defer></script>
      <script src="../Scripts/plateauu.js" defer></script>
      <script src="../Scripts/test.js" defer></script>
           
      <link rel="stylesheet" href="../style/styles.css">
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
         <td> charge 1 :</td>
         <td> case du joueur2:</td>
         <td> charge 2:</td>
         <td> de:</td>
         <td> time:</td>
      </tr>
      <tr>
      <td><span id="case1"style="font-size:18px"> </span></td>
         <td><span id="charge1" style="font-size:18px"> </span></td>
         <td> <span id="case2"style="font-size:18px"> </span></td>
         <td> <span id="charge2"style="font-size:18px"> </span></td>
         <td> <span id="de"style="font-size:18px"> </span></td>
         <td><span id="time" name ="time" style="font-size:18px"> </span></td>
      
      
      </tr>

      <span id="gagne"> </span>
   

<?php

$vari = "<script>document.write(sessionStorage.getItem('mode'))</script>";
echo $vari
?>
   </body>
</html> 