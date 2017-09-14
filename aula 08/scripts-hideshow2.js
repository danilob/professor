$(document).ready(function(){
    var showOrigin = true;

    $("#pOrigin").click(function(){
        if(showOrigin){
            $("#pOrigin").html("mostrar");
            $("#contOrigin").hide();
		
        }else{		
            $("#pOrigin").html("esconder");
            $("#contOrigin").show();
        }
        showOrigin = !showOrigin;
    });

    var showUse = true;

    $("#pUse").click(function(){
        if(showUse){
            $("#pUse").html("mostrar");
            $("#contUse").hide();
        
        }else{      
            $("#pUse").html("esconder");
            $("#contUse").show();
        }
        showUse = !showUse;
    });

    var showFunc = true;

    $("#pFunc").click(function(){
        if(showFunc){
            $("#pFunc").html("mostrar");
            $("#contFunc").hide();
        
        }else{      
            $("#pFunc").html("esconder");
            $("#contFunc").show();
        }
        showFunc = !showFunc;
    });
  
});  



// var showUse = true;

// function shUse(){
//     var use = document.querySelector("#pUse");
//     var cuse = document.querySelector("#contUse");
//     if(showUse){
//     	use.textContent = "mostrar";
// 		cuse.style.display = "none";
		
//     }else{
// 		use.textContent = "esconder";
// 		cuse.style.display = "inline";
		
//     }
//     showUse = !showUse;
    
// }

// var showFunc = true;

// function shFunc(){
//     var func = document.querySelector("#pFunc");
//     var cfunc = document.querySelector("#contFunc");
//     if(showFunc){
//     	func.textContent = "mostrar";
// 		cfunc.style.display = "none";
		
//     }else{
// 		func.textContent = "esconder";
// 		cfunc.style.display = "inline";
		
//     }
//     showFunc = !showFunc;
    
// }

