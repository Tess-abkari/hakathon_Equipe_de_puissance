
<!DOCTYPE html>
<html>
    <head>
    <script src="script.js" defer></script>
    <script src="parametre.js" defer></script>
    </head>
    <body>
    <input  type="button"  id="jouer" value="jouer" onclick="jouer();" />
    <input  type="button" id="dé" value="dé pour avancer" onclick="lance_de_de_avance();" disabled/>
    <input  type="button" id="dée" value="dé pour recharger" onclick="lance_de_de_recharge();"disabled />
    <form action="parametre.php">
      <button type="submit" id="para" >parametre</button>
    </form>
    <br>
    case du joueur1:
    <span id="case1"> </span>
    <br>
    charge 1 :
    <span id="charge1"> </span>
    <br>
    case du joueur2:
    <span id="case2"> </span>
    <br>
    charge 2:
    <span id="charge2"> </span>
    <br>
    de:
    <span id="de"> </span>
    <br>
    </body>
</html>
