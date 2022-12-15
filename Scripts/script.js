class pion {
    constructor(case_pion, charge,name) {
      this.case_pion = case_pion;
      this.charge = charge;
      this.name=name;
    }
  }
//casse 
var tableau_entre_tunnel=[0,0,0,0]
var tableau_sortie_tunnel=[0,0,0,0]
var tableau_montee=[0,0,0,0]
var tableau_descente=[0,0,0,0]
// modeles deux type de de
var de_avance=0;
var de_recharge=0;
//les pion
var joueur1=new pion(0,6,"j1");
var ordinateur=new pion(0,6,"j2");
//pion general
var joueur;

//pour savoir qui joue 
var flag=0;
//plateau 
var plateau = [[17,18,19,20,21,22,23,24,25,26,27,28,29],
[16,47,48,49,50,51,52,53,54,55,56,57,30],
[15,46,99,99,99,99,99,99,99,99,99,58,31],
[14,45,99,99,66,65,64,63,62,61,60,59,32],
[13,44,43,42,41,40,39,38,37,36,35,34,33],
[12,11,10,9,8,7,6,5,4,3,2,1,0]];
// pour le meilleur temps pour charger
var horloge_plateau=0;
var consiel=1;

//--------------fonction ---------------
function lance_de_de_recharge ()
{   
    // apres clique sur le bouton charge 
    // fonction permettant de charger la voiture
    if (consiel==1)
    { nb= Math.floor(Math.random() * 6)+1;}
    else{
        nb= Math.floor(Math.random() * 3)+1;
    }
    recharge_du_pion(nb);

    document.getElementById("de").innerHTML=nb; 
    
    document.getElementById("case1").innerHTML=joueur1.case_pion; 
    document.getElementById("case2").innerHTML=ordinateur.case_pion; 
    document.getElementById("charge1").innerHTML=joueur1.charge; 
    document.getElementById("charge2").innerHTML=ordinateur.charge; 

    document.getElementById("jouer").disabled=false;
    document.getElementById("dé").disabled=true;
    document.getElementById("dée").disabled=true;

}
function lance_de_de_avance ()
{     // apres clique sur le bouton d'avancer
    // fonction permettant d'avancer la voiture
    let nb= Math.floor(Math.random() * 5+1);
    deplacement_du_pion(nb);
    document.getElementById("de").innerHTML=nb; 
    

}
function gestion_boutton()
{// active desactive des bouttons 
    document.getElementById("jouer").disabled=false;
    document.getElementById("dé").disabled=true;
    document.getElementById("dée").disabled=true;

}
function deplacement_du_pion(numero_du_de)
{//fonction de deplacement de pion 
    let case_futur=joueur.case_pion+ numero_du_de
    if (case_futur>=66)
    {
        dif=case_futur-66;
        case_futur=66-dif;
    }
    for(i=0;i<4;i++)
    {   if (tableau_descente[i]==joueur.case_pion&& joueur.charge>=2)
        {  joueur.charge-=1;
            joueur.case_pion=joueur.case_pion+ numero_du_de;    
            gestion_boutton()
            return 
        }
        if (tableau_montee[i]==joueur.case_pion && joueur.charge>=4)
        {   joueur.charge-=4;
            joueur.case_pion=joueur.case_pion+ numero_du_de;
            gestion_boutton()
            return  
        }
         if (tableau_entre_tunnel[i]==case_futur )
         {    
             joueur.case_pion=tableau_sortie_tunnel[i];
             gestion_boutton()
             return 
            }
          if (tableau_sortie_tunnel[i]==case_futur)
          {   
              joueur.case_pion=tableau_entre_tunnel[i];
              gestion_boutton()
              return 
            }

    }
    if (joueur.charge>=2){
    joueur.charge-=2;
    joueur.case_pion=case_futur;
    gestion_boutton()}
    else {
        alert("vous devez recharger");
    }

      document.getElementById("case1").innerHTML=joueur1.case_pion; 
      document.getElementById("case2").innerHTML=ordinateur.case_pion; 
      document.getElementById("charge1").innerHTML=joueur1.charge; 
      document.getElementById("charge2").innerHTML=ordinateur.charge; 

return

}
function recharge_du_pion(numero_du_de)
{   // fonction de rechargement de pion 
    nb=joueur.charge+ numero_du_de
    if (nb>=6){
    joueur.charge=6
    }   
    else{
        joueur.charge=joueur.charge+numero_du_de
    }
    console.log(joueur.charge);

}
function creation_des_case_spe()
{  for(i=0;i<4;i++)
    {
        let entree= Math.floor(Math.random() * 66)+1;
        let sortie= Math.floor(Math.random() * 66)+1;
        let montee= Math.floor(Math.random() * 66)+1;
        let descente= Math.floor(Math.random() * 66)+1;
        tableau_entre_tunnel[i]=entree;
        tableau_sortie_tunnel[i]=sortie;
        tableau_descente[i]=descente;
        tableau_montee[i]=montee
  
    }

}


function jouer()

{   console.log("toto")
    console.log(sessionStorage.getItem('mode'))
    if (sessionStorage.getItem('mode')==null){
        sessionStorage.setItem("mode","solo")
    }
    if (sessionStorage.getItem('mode')=="solo")
    {console.log("solo");
    document.getElementById("jouer").disabled=true;
    document.getElementById("dé").disabled=false;
    document.getElementById("dée").disabled=false;
    document.getElementById("para").disabled=true;
    joueur=joueur1;
 }
    else if (sessionStorage.getItem('mode')=="multi")
    {
        if (flag==0)
        {
            joueur=joueur1;
            console.log(joueur.name)
            flag=1;
            document.getElementById("jouer").disabled=true;
            document.getElementById("dé").disabled=false;
            document.getElementById("dée").disabled=false;
            document.getElementById("para").disabled=true;
       
        }
        else{
           
            joueur=ordinateur;
            console.log(joueur.name)
            flag=0;
            document.getElementById("jouer").disabled=true;
            document.getElementById("dé").disabled=false;
            document.getElementById("dée").disabled=false;
            document.getElementById("para").disabled=true;
       
        }
    }
    else if  (sessionStorage.getItem('mode')=="ordi")
    {
        if (flag==0)
        {
            joueur=joueur1;
            console.log(joueur.name)
            flag=1;
            document.getElementById("jouer").disabled=true;
            document.getElementById("dé").disabled=false;
            document.getElementById("dée").disabled=false;
            document.getElementById("para").disabled=true;
        }
        else{
            joueur=ordinateur;
            let nb= Math.floor(Math.random() * 2);
            console.log(joueur.name,nb)
            if (nb==0){lance_de_de_avance ()}
            else{lance_de_de_recharge ()}
            flag=0;
 }
    }
    
}
creation_des_case_spe()
//commentaire 

//TODO
//signal vert 
// verifier si erreur continuer avec le meme joueur 
//