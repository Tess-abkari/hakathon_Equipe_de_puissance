class pion {
    constructor(case_pion, charge) {
      this.case_pion = case_pion;
      this.charge = charge;
    }
  }
var tableau_entre_tunnel=[0,0,0,0]
var tableau_sortie_tunnel=[0,0,0,0]
var tableau_montee=[0,0,0,0]
var tableau_descente=[0,0,0,0]

var de_avance=0;
var de_recharge=0;
var joueur1=new pion(0,6);
document.getElementById("case").innerHTML=joueur1.case_pion;      
document.getElementById("charge").innerHTML=joueur1.charge; 
var plateau = [[17,18,19,20,21,22,23,24,25,26,27,28,29],
[16,47,48,49,50,51,52,53,54,55,56,57,30],
[15,46,99,99,99,99,99,99,99,99,99,58,31],
[14,45,99,99,66,65,64,63,62,61,60,59,32],
[13,44,43,42,41,40,39,38,37,36,35,34,33],
[12,11,10,9,8,7,6,5,4,3,2,1,0]];
var horloge_plateau=0;

function lance_de_de_recharge ()
{   

    let nb= Math.floor(Math.random() * 6)+1;
    recharge_du_pion(nb);
    document.getElementById("de").innerHTML=nb;      
    document.getElementById("charge").innerHTML=joueur1.charge; 

}
function lance_de_de_avance ()
{   
    let nb= Math.floor(Math.random() * 5+1);
    deplacement_du_pion(nb);
    document.getElementById("de").innerHTML=nb;
}
function deplacement_du_pion(numero_du_de)
{
    let case_futur=joueur1.case_pion+ numero_du_de
    for(i=0;i<4;i++)
    {   if (tableau_descente[i]==case_futur)
        {
            joueur1.charge-=1;
            joueur1.case_pion=joueur1.case_pion+ numero_du_de;    
        }
        if (tableau_montee[i]==case_futur)
        {
            joueur1.charge-=4;
            joueur1.case_pion=joueur1.case_pion+ numero_du_de;
         }
         if (tableau_entre_tunnel[i]==case_futur)
         {
            joueur1.charge-=2;
             joueur1.case_pion=tableau_sortie_tunnel[i];
          }
          if (tableau_sortie_tunnel[i]==case_futur)
          {
            joueur1.charge-=2;
              joueur1.case_pion=tableau_entre_tunnel[i];
           }

    }
    if (case_=="montée"&& joueur1.charge>=4){ 
        joueur1.charge-=4;
        joueur1.case_pion=joueur1.case_pion+ numero_du_de;
    }

    document.getElementById("case").innerHTML=joueur1.case_pion;      
    document.getElementById("charge").innerHTML=joueur1.charge; 

}
function recharge_du_pion(numero_du_de)
{   console.log("deplacemetn");
    nb=joueur1.charge+ numero_du_de
    if (nb>=6){
    joueur1.charge=6
    }   
    else{
        joueur1.charge=joueur1.charge+numero_du_de
    }
    console.log(joueur1.charge);

}
function creation_des_case_spe()
{//TODO verification que ca soit aps les meme numero 
    for(i=0;i<4;i++)
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
creation_des_case_spe()

//TODO
//signal vert 