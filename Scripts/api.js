async function getDate(heureDuJeu) {

    heureDuJeu = (heureDuJeu + ":00+00:00").toString();

    var api = await fetch("https://opendata-corse.edf.fr/api/records/1.0/search/?dataset=signal-reseau-corse-recharge-vehicule-electrique&q=&rows=50&sort=date&facet=date%22")
        .then(reponse => reponse.json())

        resolvedAPI = Promise.resolve(api);
        resolvedAPI.then(value => {
        const records = value["records"];

        records.forEach(element => {
            const fullDate = element["fields"]["date"];
            const etatSystem = element["fields"]["etat_du_systeme_electrique_pour_la_recharge"];

            const hour = fullDate.split('T');

            for (var i = 0; i < hour.length; i++) {
                if (hour[i] == heureDuJeu) {
                    document.getElementById('api').innerHTML = etatSystem;
                    console.log("LHEURE DE LHORLOGE : " + hour[i]);
                    console.log(etatSystem);
                    
                } else {
                    console.log("NON !");
                }
            } 

        });

    });
}

getDate("22:00");