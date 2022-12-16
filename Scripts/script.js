//casse 
var tableau_entre_tunnel = [0, 0, 0, 0];
var tableau_sortie_tunnel = [0, 0, 0, 0];
var tableau_montee = [0, 0, 0, 0];
var tableau_descente = [0, 0, 0, 0];
var tab=4;
// modeles deux type de de
var de_avance = 0;
var de_recharge = 0;

//pion general
var joueur;
var joueur1;
var ordinateur;
//pour savoir qui joue 
var flag = 0;
var flag_type=0;
//plateau 
var plateau = [
    [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [16, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 30],
    [15, 46, 99, 99, 99, 99, 99, 99, 99, 99, 99, 58, 31],
    [14, 45, 99, 99, 66, 65, 64, 63, 62, 61, 60, 59, 32],
    [13, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33],
    [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];
// pour le meilleur temps pour charger
    var horloge_plateau = 0;
var consiel = 1;


// variable pour les stat
var tab_nombre_de_coup=[];
var tab_nombre_de_charge=[];
//--------------fonction ---------------

function lance_de_de_recharge() {
    // apres clique sur le bouton charge 
    // fonction permettant de charger la voiture
    horloge_plateau+=1;
    if (consiel == 1) {
        nb = Math.floor(Math.random() * 6) + 1;
    } else {
        nb = Math.floor(Math.random() * 3) + 1;
    }
    joueur.nombre_coup_charge+=1;
    joueur.nombre_coup_jouer+=1;
    recharge_du_pion(nb);
    document.getElementById("time").innerHTML = horloge_plateau;

    document.getElementById("de").innerHTML = nb;

    document.getElementById("case1").innerHTML = joueur1.case_pion;
    document.getElementById("case2").innerHTML = ordinateur.case_pion;
    document.getElementById("charge1").innerHTML = joueur1.charge;
    document.getElementById("charge2").innerHTML = ordinateur.charge;

    document.getElementById("jouer").disabled = false;
    document.getElementById("dé").disabled = true;
    document.getElementById("dée").disabled = true;

}

function lance_de_de_avance() { // apres clique sur le bouton d'avancer
    // fonction permettant d'avancer la voiture
    horloge_plateau+=1;
    let nb = Math.floor(Math.random() * 5 + 1);
    deplacement_du_pion(nb);
    document.getElementById("de").innerHTML = nb;
    document.getElementById("time").innerHTML = horloge_plateau;
    
    document.getElementById("case1").innerHTML = joueur1.case_pion;
    document.getElementById("case2").innerHTML = ordinateur.case_pion;
    document.getElementById("charge1").innerHTML = joueur1.charge;
    document.getElementById("charge2").innerHTML = ordinateur.charge;
    // pour mettre le image lors du deplacement du click 
    var e = document.getElementById(joueur.case_pion);
   joueur.nombre_coup_jouer+=1;
    if (sessionStorage.getItem('joueur1')=="moto"  && joueur.name=="j1"|| sessionStorage.getItem('ordinateur')=="moto" && joueur.name=="ordi"){
        e.src = "../img_vehicule/moto.jpg";
    }
    if (sessionStorage.getItem('joueur1')=="bus" && joueur.name=="j1"||  sessionStorage.getItem('ordinateur')=="bus"&& joueur.name=="ordi"){
        e.src = "../img_vehicule/bus.jpg";
    }
    if (sessionStorage.getItem('joueur1')=="voiture" && joueur.name=="j1"||  sessionStorage.getItem('ordinateur')=="voiture"&& joueur.name=="ordi" ){
        e.src = "../img_vehicule/voiture.jpg";
    }

}

function gestion_boutton() { // active desactive des bouttons 
    document.getElementById("jouer").disabled = false;
    document.getElementById("dé").disabled = true;
    document.getElementById("dée").disabled = true;

}
function mettre_en_forme()
{
    var e = document.getElementById(joueur.case_pion);
    console.log(e)  
    e.style.backgroundColor="pink"
    e.style.height="30px";
    e.style.width="30px";
}
function remettre_en_forme()
{
    var e = document.getElementById(joueur.case_pion);

    
    e.style.height="0px";
    e.style.width="0px";
 
}
function reinitialise()
{   tab_nombre_de_coup+=[joueur.nombre_coup_jouer]
    console.log(joueur.nombre_coup_jouer)
    sessionStorage.setItem('nb',tab_nombre_de_coup)
    tab_nombre_de_charge+=[joueur.nombre_coup_charge]
    sessionStorage.setItem('nb_charge',tab_nombre_de_charge)

}
function deplacement_du_pion(numero_du_de) { //fonction de deplacement de pion 
    

    let case_futur = joueur.case_pion + numero_du_de
    if (case_futur >= 66) {
        dif = case_futur - 66;
        case_futur = 66 - dif;
    }
    if (case_futur == 66){
        if (flag==0){
            document.getElementById("gagne").innerHTML = "le joueur1  gagne";
    
        }
        else{
            document.getElementById("gagne").innerHTML = "le joueur2  gagne ";
    
        }
        reinitialise();
        
    }
    let point_charge=0
    for (i = 0; i < 4; i++) {
        if (tableau_descente[i] == joueur.case_pion && joueur.charge >= 2) {
            remettre_en_forme()
            point_charge=1;
            joueur.case_pion = joueur.case_pion + numero_du_de;
            console.log("1")
            gestion_boutton()
            mettre_en_forme()
            return
        }
        else if (tableau_montee[i] == joueur.case_pion && joueur.charge >= 4) {
            
            remettre_en_forme()
            point_charge= 4;
            joueur.case_pion = joueur.case_pion + numero_du_de;
            console.log("2  ")
            
            gestion_boutton()
            mettre_en_forme()
            return
        }
        if (tableau_entre_tunnel[i] == case_futur) {
            remettre_en_forme()
            joueur.case_pion = tableau_sortie_tunnel[i];
            console.log("3")
            gestion_boutton()
            mettre_en_forme()
            return
        }
        if (tableau_sortie_tunnel[i] == case_futur) {
            remettre_en_forme()
            joueur.case_pion = tableau_entre_tunnel[i];
            console.log("4")
            gestion_boutton()
            mettre_en_forme()
            return
        }

    }
    
   if (joueur.charge >= 2 && point_charge==0) {
        remettre_en_forme()
        point_charge=2
        joueur.charge -= point_charge;
        joueur.case_pion = case_futur;
        gestion_boutton()
        mettre_en_forme()

    } else {
        alert("vous devez recharger");
    }

    return

}

function recharge_du_pion(numero_du_de) { // fonction de rechargement de pion 
    nbr = joueur.charge + numero_du_de
    if (nbr >=  joueur.max_charge) {
        joueur.charge = joueur.max_charge
    } else {
        joueur.charge = joueur.charge + numero_du_de
    }


}

function creation_des_case_spe() {
    // verifier que 
    for (i = 0; i < 4; i++) {
        let entree = Math.floor(Math.random() * 66) + 1;
        let sortie = Math.floor(Math.random() * 66) + 1;
        let montee = Math.floor(Math.random() * 66) + 1;
        let descente = Math.floor(Math.random() * 66) + 1;
        tableau_entre_tunnel[i] = entree;


        tableau_sortie_tunnel[i] = sortie;
        tableau_descente[i] = descente;
        tableau_montee[i] = montee

    }

}

function creation_type_joueur1()
{
    if(sessionStorage.getItem('joueur1')=="moto"){return new moto("j1");}
    if(sessionStorage.getItem('joueur1')=="voiture"){return new voiture("j1");}
    if(sessionStorage.getItem('joueur1')=="bus"){return new bus("j1");}
}
function creation_type_joueur2()
{
    if(sessionStorage.getItem('ordinateur')=="moto"){return new moto("ordi");}
    if(sessionStorage.getItem('ordinateur')=="voiture"){return new voiture("ordi");}
    if(sessionStorage.getItem('ordinateur')=="bus"){return new bus("ordi");}
}
function jouer()
{   
    
   if (flag_type==0){
    generateTable();
    if (sessionStorage.getItem('mode') == null) {
        sessionStorage.setItem("mode", "solo")
    }
    if (sessionStorage.getItem('joueur1') == null) {
        joueur1 = new voiture("j1");
    }
    else{
        joueur1=creation_type_joueur1();
    }
    if (sessionStorage.getItem('ordinateur') == null) {
        ordinateur = new voiture("j2");
    
    }else{
         ordinateur=creation_type_joueur2();
    }
    flag_type=1;
}
    if (sessionStorage.getItem('mode') == "solo") {
        document.getElementById("jouer").disabled = true;
        document.getElementById("dé").disabled = false;
        document.getElementById("dée").disabled = false;
        document.getElementById("para").disabled = true;
        joueur = joueur1;
        
    } else if (sessionStorage.getItem('mode') == "multi") {
        if (flag == 0) {
            joueur = joueur1;

            flag = 1;
            document.getElementById("jouer").disabled = true;
            document.getElementById("dé").disabled = false;
            document.getElementById("dée").disabled = false;
            document.getElementById("para").disabled = true;

        } else {

            joueur = ordinateur;

            flag = 0;
            document.getElementById("jouer").disabled = true;
            document.getElementById("dé").disabled = false;
            document.getElementById("dée").disabled = false;
            document.getElementById("para").disabled = true;

        }
    } else if (sessionStorage.getItem('mode') == "ordi") {
        if (flag == 0) {
            joueur = joueur1;

            flag = 1;
            document.getElementById("jouer").disabled = true;
            document.getElementById("dé").disabled = false;
            document.getElementById("dée").disabled = false;
            document.getElementById("para").disabled = true;
        } else {
            joueur = ordinateur;
            let nb = Math.floor(Math.random() * 2);

            if (nb == 0) {
                lance_de_de_avance()
            } else {
                lance_de_de_recharge()
            }
            flag = 0;
        }
    }
    var e = document.getElementById(joueur.case_pion);
    e.style.height="30px";
    e.style.width="30px";
    console.log(sessionStorage.getItem('joueur1'))

   
    document.getElementById("choix").disabled = true;
    console.log(sessionStorage.getItem('joueur1'),joueur.name)
    // pour mettre le image lors du deplacement du click 
    if (sessionStorage.getItem('joueur1')=="moto"&& joueur.name=="j1" || sessionStorage.getItem('ordinateur')=="moto" && joueur.name=="ordi"){
        console.log("motooo")
        e.src = "../img_vehicule/moto.jpg";
    }
    else if (sessionStorage.getItem('joueur1')=="bus" && joueur.name=="j1"||  sessionStorage.getItem('ordinateur')=="bus" && joueur.name=="ordi"){
        console.log("vuuuuu")
        e.src = "../img_vehicule/bus.jpg";
    }
    else if (sessionStorage.getItem('joueur1')=="voiture" && joueur.name=="j1"||  sessionStorage.getItem('ordinateur')=="voiture" && joueur.name=="ordi" ){
        console.log("vooiture")
        e.src = "../img_vehicule/voiture.jpg";
    }
    else{console.log("toto")
        console.log(sessionStorage.getItem('ordinateur'))}
}

creation_des_case_spe()


//TODO

//faire du tree.js
// verification nombre tunnel ect..