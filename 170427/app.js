/* global console */
function init() {
    "use strict";
    var exo1;

    exo1 = function exo1(e) {
        console.log(e);
        var i = 0, tab = [11, null, true, NaN , {}];
        console.log(tab);
        while (i < tab.length) {
            console.log(tab[i]);
            i += 1;
    }
        console.log("fin de boucle");
    );
        console.log("document");
        
        document.getElementById("exo1").onclick = exo1;
    
}