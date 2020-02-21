function caesarCypher(){
    let cShift = parseInt(document.getElementById("cShift").value);
    let uText = document.getElementById("uText").value;
    let cypher = "";
    
    for (i = 0; i < uText.length; i++){
        console.log(String.fromCharCode(uText.charCodeAt(i) + cShift));
        cypher += String.fromCharCode(uText.charCodeAt(i) + cShift);
    }
    
    document.getElementById("result").innerHTML = cypher;
    return;
}