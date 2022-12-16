<!DOCTYPE html>
<html>

<head>
  <script src="../Scripts/vehicule.js" defer></script>
  <script src="../Scripts/script.js" defer></script>
  <script src="../Scripts/parametre.js" defer></script>
  <link rel="stylesheet" href="../styles/styles.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>

  <div class="container-fluid" align="center">

  <h2>Choix du type de véhicule pour les joueurs.</h2>

    <div class="container">
      <h4>Joueur 1</h4>
      <select id="j1" onchange="choix_j1(this.value)" class="form-select" aria-label="Default select example">
        <option value="voiture">voiture</option>
        <option value="moto">moto</option>
        <option value="bus">bus </option>
      </select>
    </div>

    <div class="container">
      <h4>Joueur 2</h4>
      <select id="j2" onchange="choix_j2(this.value)" class="form-select" aria-label="Default select example">
        <option value="voiture">voiture</option>
        <option value="moto">moto</option>
        <option value="bus">bus </option>
      </select>
    </div>

  </div>

  <br />


  <div class="container" align="center">
    <form action="pagePrincipale.php">
      <button type="submit" class="btn btn-outline-dark">page_principal </button>
    </form>
  </div>

</body>

</html>