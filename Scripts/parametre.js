
function mode_de_jeu(mode_)
{   
    sessionStorage.setItem('mode',mode_)
}
function choix_j1(type)
{   
    sessionStorage.setItem('joueur1',type)
}
function choix_j2(type)
{   
    sessionStorage.setItem('ordinateur',type)
}