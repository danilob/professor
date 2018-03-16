
var showOrigin = true;

function shOrigin(){
    var origin = document.querySelector("#pOrigin");
    var corigin = document.querySelector("#contOrigin");
    if(showOrigin){
    	origin.textContent = "mostrar";
		corigin.style.display = "none";
		
    }else{
		origin.textContent = "esconder";
		corigin.style.display = "inline";
		
    }
    showOrigin = !showOrigin;
    
}


var showUse = true;

function shUse(){
    var use = document.querySelector("#pUse");
    var cuse = document.querySelector("#contUse");
    if(showUse){
    	use.textContent = "mostrar";
		cuse.style.display = "none";
		
    }else{
		use.textContent = "esconder";
		cuse.style.display = "inline";
		
    }
    showUse = !showUse;
    
}

var showFunc = true;

function shFunc(){
    var func = document.querySelector("#pFunc");
    var cfunc = document.querySelector("#contFunc");
    if(showFunc){
    	func.textContent = "mostrar";
		cfunc.style.display = "none";
		
    }else{
		func.textContent = "esconder";
		cfunc.style.display = "inline";
		
    }
    showFunc = !showFunc;
    
}