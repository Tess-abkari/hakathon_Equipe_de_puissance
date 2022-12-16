<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../styles/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <?php
    $vari = "<script>document.write(sessionStorage.getItem('mode'))</script>";
    $nb_coup = "<script>document.write(sessionStorage.getItem('nb'))</script>";
    ?>

    <br />
    <div class="container-fluid" align="center">
        <div class="container">
            <h4> <?php
                    echo "mode de jeu :";
                    echo $vari;
                    echo "<br>";
                    echo "nombre de coup :";
                    echo $nb_coup;
                    ?>
            </h4>
        </div>

        <div class="container" align="center">
            <form action="pagePrincipale.php">
                <button type="submit" class="btn btn-outline-dark">page_principal </button>
            </form>
        </div>
    </div>
</body>

</html>