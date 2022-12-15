
<!DOCTYPE html>
<html>
    <head>
    <script src="script.js" defer></script>
    <script src="parametre.js" defer></script>
    </head>
    <body>
    <select id="sel" onchange="mode_de_jeu(this.value)">
    <option value="solo">solo</option>
    <option value="multi">multijoueur</option>
    <option value="ordi">ordinateur </option>
    </select>
    <form action="pagePrincipale.php">
      <button type="submit" >page_principal </button>
    </form>
    </body>
</html>
