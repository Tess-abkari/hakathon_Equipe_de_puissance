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
  <h4>Parametre du mode de jeu</h4>
</div>
<br />
  <div class="container-fluid" align="center">
    <select id="sel" onchange="mode_de_jeu(this.value)"class="form-select" aria-label="Default select example">
      <option value="solo">solo</option>
      <option value="multi">multijoueur</option>
      <option value="ordi">ordinateur </option>
    </select>
    <div class="container">
  <br/>
      <form action="pagePrincipale.php">
        <button type="submit" class="btn btn-outline-dark">page_principal </button>
      </form>

    </div>
  </div>

</body>

</html>