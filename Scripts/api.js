function getDate(heureDuJeu) {

    if (0 <= heureDuJeu) {
        if (heureDuJeu < 10) {
            heureDuJeu = ("0" + heureDuJeu).toString();
            heureDuJeu = (heureDuJeu + ":00:00+01:00");
        } else {    
            heureDuJeu = (heureDuJeu + ":00:00+01:00").toString();
        }
    }

var api = fetch("https://opendata-corse.edf.fr/api/records/1.0/search/?dataset=signal-reseau-corse-recharge-vehicule-electrique&q=&rows=150&sort=-date&facet=date&timezone=Europe%2FBerlin")
    .then(reponse => reponse.json())

resolvedAPI = Promise.resolve(api);

resolvedAPI.then(value => {
    const records = value["records"];

    records.forEach(element => {
        const fullDate = element["fields"]["date"];

        const hour = fullDate.split('T');

        for(var i = 0; i < records.length; i--) {
            console.log("heure : " +hour[1]);
            if (hour[1] == heureDuJeu) {
                const etatSystem = element["fields"]["etat_du_systeme_electrique_pour_la_recharge"];
                document.getElementById('api').innerHTML = etatSystem;
                document.getElementById('heure').innerHTML = "Heure du jeu : " +heureDuJeu;
                break;
                //alert(etatSystem);
                
            } else {

                const etatSystem = element["fields"]["etat_du_systeme_electrique_pour_la_recharge"];
                break;
                console.log("ETAT SYSTEME " +etatSystem);
            }
            break;
        }

    });

});
}