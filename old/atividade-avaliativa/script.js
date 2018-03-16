 $(document).ready(function(){

    $("td[id|='out']").css("border","0.5px dashed red" );

    $("li[id|='out'").mouseenter(function() {
        $("td#"+this.id).css({"color":"blue","border":"1.5px dashed blue"});
        $("#"+this.id+" + ol").css("color","blue");
    });

    

});
