<!DOCTYPE html>
<html>

<head>
   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
   <script src="../Scripts/vehiculee.js" defer></script>
   <script src="../Scripts/script.js" defer></script>
   <script src="../Scripts/parametre.js" defer></script>
   <script src="../Scripts/plateau.js" defer></script>
   <script src="../Scripts/3D_jeuu.js" defer></script>
   <script src="../Three.js"></script>
   <link rel="stylesheet" href="../styles/styles.css">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
   <div class="container-fluid" align="center">
      <h6>Hackathon 2022 - Equipe de Puissance</h6>
   </div>
   <div class="container-fluid no-padding">
      <table class="table table-bordered">
         <thead>
            <tr>
               <th scope="col">Case du Joueur 1</th>
               <th scope="col">Charge 1</th>
               <th scope="col">Case du Joueur 2</th>
               <th scope="col">Charge 2</th>
               <th scope="col">Dé</th>
               <th scope="col">Heure</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td><span id="case1" style="font-size:18px"> </span></td>
               <td><span id="charge1" style="font-size:18px"> </span></td>
               <td> <span id="case2" style="font-size:18px"> </span></td>
               <td> <span id="charge2" style="font-size:18px"> </span></td>
               <td> <span id="de" style="font-size:18px"> </span></td>
               <td><span id="time" name="time" style="font-size:18px"> </span></td>
            </tr>
         </tbody>
      </table>
   </div>
   <div class="container-fluid"">
      <div class=" container" align="center">
      <input type="button" class="button-play" id="jouer" value="jouer" width="100px" onclick="jouer();" />
      <br />
   </div>

   <div class="container-row" align="center">
   <form action="parametre.php">
         <button type="submit" id="para" class="btn btn-outline-dark">parametre</button>
      </form>
      <form action="choix.php">
         <button type="submit" id="choix" class="btn btn-outline-dark">choix vehicule</button>
      </form>
      <form action="statistique.php">
         <button type="submit" id="choix" class="btn btn-outline-dark">statistique</button>
      </form>
      <input type="button" value="lancer la 3D" class="btn btn-outline-dark"onclick="d3();" />
   </div>

   <div class="container" align="center">
      <input type="button" id="dé" class="btn btn-outline-dark" value="dé pour avancer" onclick="lance_de_de_avance();" disabled />
      <input type="button" id="dée" class="btn btn-outline-dark" value="dé pour recharger" onclick="lance_de_de_recharge();" disabled />
   </div>
   <span id="gagne"> </span>

   <div>
      <h5 align="center">Etat du Systeme pour la recharge : </h5>
      <h5 id="api" align="center"/>
   </div>

</body>

</html>