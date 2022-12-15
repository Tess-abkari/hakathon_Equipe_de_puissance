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
                const cellText = document.createTextNode(items.toString());
                cell.appendChild(cellText);
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