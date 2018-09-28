var elem = document.getElementById("texto");
var sizetext = document.getElementById("sizetexto");
var selec = document.getElementById("selection");
var sizeselection = document.getElementById("sizeselecao");
var listao = document.getElementById("lista");
document.getElementById('datahoje').innerHTML = Date();

sizetext.innerHTML = elem.innerHTML.length+ " caracteres";
sizeselection.innerHTML = selec.innerHTML.length+ " caracteres";

historico = []

function changeText(){
    sizetext.innerHTML = elem.value.length+ " caracteres";
}

function goPush(){
    listao.innerHTML ="";
    historico.push(selec.innerText);
    for(var i=historico.length-1;i>=0;i--){
        listao.innerHTML += "<li>"+historico[i]+" ["+historico[i].length+"]</li>";
    }
}

function clearHistorico(){
    listao.innerHTML ="";
    historico = [];
}

elem.addEventListener("focus", function () {
    elem.style.border = "2px solid #933f99";
});

elem.addEventListener("blur", function () {
    elem.style.border = "2px solid #c4f0c5";
});

elem.addEventListener("select", foo);

function foo() {
    var start = elem.selectionStart;
    // obtain the index of the last selected character
    var finish = elem.selectionEnd;
    // obtain the selected text
    var text = elem.value.substring(start, finish);
    sizeselection.innerHTML = text.length+ " caracteres";
    selec.innerHTML = "<q>"+text+"</q>";
}
