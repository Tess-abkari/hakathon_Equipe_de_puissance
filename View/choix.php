
<!DOCTYPE html>
<html>
    <head>
    <script src="vehicule.js" defer></script>
    <script src="script.js" defer></script>
    <script src="parametre.js" defer></script>
    </head>
    <body>
    <h1>joueur1<h1>
    <select id="j1" onchange="choix_j1(this.value)">
    <option value="voiture">voiture</option>
    <option value="moto">moto</option>
    <option value="bus">bus </option>
    </select>
    <h1>joueur2<h1>
    <select id="j2" onchange="choix_j2(this.value)">
    <option value="voiture">voiture</option>
    <option value="moto">moto</option>
    <option value="bus">bus </option>
    </select>
    <form action="pagePrincipale.php">
      <button type="submit" >page_principal </button>
    </form>
    </body>
</html>