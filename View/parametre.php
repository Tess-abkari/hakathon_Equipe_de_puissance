<!DOCTYPE html>
<html>
<<<<<<< HEAD
    <head>
    <script src="vehicule.js" defer></script>
    <script src="script.js" defer></script>
    <script src="parametre.js" defer></script>
    </head>
    <body>
    <select id="sel" onchange="mode_de_jeu(this.value)">
=======

<head>
  <script src="script.js" defer></script>
  <script src="parametre.js" defer></script>
</head>

<body>
  <select id="sel" onchange="mode_de_jeu(this.value)">
>>>>>>> d9d3ec6c33aae6f44ad21c129208a927c083bb7c
    <option value="solo">solo</option>
    <option value="multi">multijoueur</option>
    <option value="ordi">ordinateur </option>
  </select>
  <form action="pagePrincipale.php">
    <button type="submit">page_principal </button>
  </form>
</body>

</html>