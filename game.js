$( document ).tooltip({
    position: {
        my: "center top-10",
        at: "center top",
        using: function( position, feedback ) {
            $( this ).css( position );
            $( "<div>" )
                .addClass( "arrow" )
                .addClass( feedback.vertical )
                .addClass( feedback.horizontal )
                .appendTo( this );
        }
    }
});
$(function () {
        $(".element").draggable({ revert: "invalid",
            cursor: "pointer",
            scroll:false
        });

        $(".drop").droppable({
            drop: function(event,ui) {
                var sourceElement = $(ui.helper.context);
                var elements = sourceElement.attr("id");

                if (elements === "step1_e栅格") {
                    $("#流出污水").animate({opacity: 0}, true)
                    $("#step1_栅格").animate({opacity: 1}, true)
                    $("#初始污水容器").animate({opacity: 0}, true)
                    $("#step1_污水流入").animate({opacity: 1}, true)
                    $("#step1_过滤石头1").animate({opacity: 1}, true)
                    $("#step1_过滤石头2").animate({opacity: 1}, true)
                    $("#step1_过滤石头3").animate({opacity: 1}, true)
                    $("#step1_e栅格").remove()
                    }
                else if (elements === "step1_e沉砂池") {
                    $("#step2_沉沙处理").animate({opacity: 1}, true)
                    $("#step1_e沉砂池").remove()
                    }
                else if(elements==="step2_e沉淀池")
                {
                    $("#step3_沉淀池").animate({opacity:1},true)
                    $("#step3_沉淀物").animate({opacity:1},true)
                    $("#step2_e沉淀池").remove()
                }
                }
        });
        $("#dragstep1_button").click(function () {
            var step1_nxt=$("#step2_沉沙处理").css("opacity")+$("#step1_栅格").css("opacity");
            if(step1_nxt=="11")
            {
                $("#step1_interpret").fadeIn(4000);
                $("#dragstep1_button").hide();
            }
        })
    $("#step1_解释确定").click(function () {
        $("#step1_interpret").fadeOut(500);
        $("#step1").fadeOut(500);
        $("#step2").fadeIn(2000);
    })
    $("#dragstep2_button").click(function () {
        var step1_nxt=$("#step3_沉淀池").css("opacity")+$("#step3_沉淀物").css("opacity");
        if(step1_nxt=="11")
        {
            $("#step2_interpret").fadeIn(4000);
            $("#dragstep2_button").hide();
        }
    })
    $("#step2_排放确定").click(function () {
        $("#step2_interpret").fadeOut(500);
        $("#step2").fadeOut(500);
        $("#排放").fadeIn(2000);
        $("#排放1").fadeIn(2000);
    })


})