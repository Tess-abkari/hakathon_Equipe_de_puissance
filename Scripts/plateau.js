function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    tbl.id="map";
    const tblBody = document.createElement("tbody");

    const plateau = [[17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [16, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 30],
    [15, 46, 99, 99, 99, 99, 99, 99, 99, 99, 99, 58, 31],
    [14, 45, 99, 99, 66, 65, 64, 63, 62, 61, 60, 59, 32],
    [13, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33],
    [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]];
    

    //Creation d'une table en fonction conforme a la taille du plateau
    plateau.forEach(function (array) {
        const row = document.createElement("tr");
        array.forEach(function (items) {
            if (items !== 99) {
                const cell = document.createElement("td");
                    

                var img = document.createElement("img");
                img.src = "../img_vehicule/voiture.jpg";
                img.id=items.toString();
                img.height="400px";
                
                const cellText = document.createTextNode(items.toString());
                cell.appendChild(cellText);
                cell.appendChild(img);
                // case vertical 
                var tab_v=[13,14,15,16,46,45,58,30,31,32]
                console.log("tot")
                if (items==12 || items==44)
                {// angle en bas gauche 
                    cell.style.backgroundImage='url("../styles/chemin_droit1.jpg")';
                    
                }
                else if (items==47 || items==17)
                {// angle en bas gauche 
                    cell.style.backgroundImage='url("../styles/chemin_gh.jpg")';
                    
                }
                else if (items==29 || items==57)
                {// angle en haut droit
                    cell.style.backgroundImage='url("../styles/chemin_dh.jpg")';
                    
                }
                else if (items==59 || items==33)
                {// angle en bas droit 
                    cell.style.backgroundImage='url("../styles/chemin_db.jpg")';
                    
                }
                else if (tab_v.includes(items) )
                {   
                    cell.style.backgroundImage='url("../styles/chemin_vertical.jpg")';
                    
                }
                else{
                    cell.style.backgroundImage='url("../styles/chemin_droit.jpg")';
                    
                }
                 if (tableau_descente.includes(items))
                {  cell.style.backgroundImage=null;
                    
                    cell.style.backgroundColor="rgb(0, 0, 250)";

                }
                else if (tableau_montee.includes(items))
                {cell.style.backgroundImage=null;
                    cell.style.backgroundColor="rgb(200, 0, 0)";
                }
                else if (tableau_entre_tunnel.includes(items))
                {cell.style.backgroundImage=null;
                    cell.style.backgroundColor="rgb(0, 255, 0)";
                }
                else if (tableau_sortie_tunnel.includes(items))
                {cell.style.backgroundImage=null;
                    cell.style.backgroundColor="rgb(50, 200, 50)";
                }
                row.appendChild(cell);
                
            } else {
                const cell = document.createElement("td");
                const cellText = document.createTextNode("");
                 cell.appendChild(cellText);
            
                row.appendChild(cell);

                cell.setAttribute('id', items);
                

            }
        });
        tblBody.appendChild(row);
    });

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

 
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    //tbl.setAttribute("border", "10");
    
}