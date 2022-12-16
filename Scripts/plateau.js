function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
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
                console.log(tableau_descente)

                var img = document.createElement("img");
                img.src = "../pp1.png";
                img.id=items.toString();
                img.height="10px";
                const cellText = document.createTextNode(items.toString());
                cell.appendChild(cellText);
                cell.appendChild(img);
                if (tableau_descente.includes(items))
                {
                    cell.style.backgroundColor="rgb(0, 0, 200)";
                }
                else if (tableau_montee.includes(items))
                {
                    cell.style.backgroundColor="rgb(200, 0, 0)";
                }
                else if (tableau_entre_tunnel.includes(items))
                {
                    cell.style.backgroundColor="rgb(0, 255, 0)";
                }
                else if (tableau_sortie_tunnel.includes(items))
                {
                    cell.style.backgroundColor="rgb(50, 200, 50)";
                }
                else{
                    cell.style.backgroundColor="rgb(229, 151, 63)";
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