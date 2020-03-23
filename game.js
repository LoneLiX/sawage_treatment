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
                    $("#流出污水").animate({opacity: 0}, true);
                    $("#step1_栅格").animate({opacity: 1}, true);
                    $("#初始污水容器").animate({opacity: 0}, true);
                    $("#step1_污水流入").animate({opacity: 1}, true);
                    $("#step1_过滤石头1").animate({opacity: 1}, true);
                    $("#step1_过滤石头2").animate({opacity: 1}, true);
                    $("#step1_过滤石头3").animate({opacity: 1}, true);
                    $("#step1_e栅格").remove()
                    }
                else if (elements === "step1_e沉砂池") {
                    $("#step2_沉沙处理").animate({opacity: 1}, true);
                    $("#step1_e沉砂池").remove()
                    }
                else if(elements==="step2_e沉淀池") {
                    $("#step3_沉淀池").animate({opacity:1},true);
                    $("#step3_沉淀物").animate({opacity:1},true);
                    $("#step2_e沉淀池").remove()
                }
                else if(elements==="step3-1_e曝气池") {
                   $("#step4_1_曝气池").animate({opacity:1});
                   $("#step3-1_e曝气池").remove();
                }
                else if(elements==="step3-1_e鼓风装置") {
                    $("#step4_1_鼓风装置").animate({opacity:1});
                    $("#step4_1_气泡").animate({opacity:1},1000);
                    $("#step3-1_e鼓风装置").remove();
                }
                else if(elements==="step3-1_e微生物"){
                    $("#step4_1_微生物").animate({opacity:1});
                    $("#step3-1_e微生物").remove();
                }
                else if(elements==="step3-2_e生物膜反应池") {
                    $("#step4_2_生物膜反应池").animate({opacity:1});
                    $("#step3-2_e生物膜反应池").remove();
                }
                else if(elements==="step3-2_e生物膜") {
                    $("#step4_2_生物膜反应器").animate({opacity:1});
                    $("#step3-2_e生物膜").remove();
                }
                else if(elements==="step3-2_e微生物") {
                    $("#step4_2_微生物").animate({opacity:1});
                    $("#step4_2_气泡").animate({opacity:1},1000);
                    $("#step3-2_e微生物").remove();
                }
                }
        });
        $("#dragstep1_button").click(function () {
            var step1_nxt=$("#step2_沉沙处理").css("opacity")+$("#step1_栅格").css("opacity");
            if(step1_nxt=="11")
            {
                $("#step1_interpret").fadeIn(2000);
                $("#dragstep1_button").hide();
            }
        });
    $("#step1_解释确定").click(function () {
        $("#step1_interpret").fadeOut(500);
        $("#step1").fadeOut(500);
        $("#step2").fadeIn(2000);
    });
    $("#dragstep2_button").click(function () {
        var step2_nxt=$("#step3_沉淀池").css("opacity")+$("#step3_沉淀物").css("opacity");
        if(step2_nxt=="11")
        {
            $("#step2_interpret").fadeIn(2000);
            $("#dragstep2_button").hide();
        }
    });
    $("#step2_排放确定").click(function () {
        $("#step2_interpret").fadeOut(500);
        $("#step2").fadeOut(500);
        $("#排放").fadeIn(2000);
        $("#排放1").fadeIn(2000);
    });
    $("#step2_二级处理确定").click(function () {
        $("#step2_interpret").fadeOut(500);
        $("#step2").fadeOut(500);
        $("#step3_二选一").fadeIn(2000);
        $("#二级处理选择").fadeIn(2000);
    });
    $("#排放1_二级处理确定").click(function () {
        $("#排放1").fadeOut(500);
        $("#排放").fadeOut(500);
        $("#step3_二选一").fadeIn(2000);
        $("#二级处理选择").fadeIn(2000);
    });
    $("#选择step3_1活性污泥处理法").click(function () {
        $("#step3_二选一").fadeOut(500);
        $("#二级处理选择").fadeOut(500);
        $("#step3_1").fadeIn(2000);
    });
    $("#选择step3_2生物膜法").click(function () {
        $("#step3_二选一").fadeOut(500);
        $("#二级处理选择").fadeOut(500);
        $("#step3_2").fadeIn(2000);
    });
    $("#dragstep3-1_button").click(function () {
        var step3_1_nxt=$("#step4_1_曝气池").css("opacity")+$("#step4_1_鼓风装置").css("opacity")+$("#step4_1_气泡").css("opacity")+$("#step4_1_微生物").css("opacity");
        if(step3_1_nxt=="1111")
        {
            $("#step3-1_活性污泥处理法").fadeIn(2000);
            $("#dragstep3-1_button").hide();
        }
    })
    $("#dragstep3-2_button").click(function () {
        var step3_2_nxt=$("#step4_2_微生物").css("opacity")+$("#step4_2_气泡").css("opacity")+$("#step4_2_生物膜反应器").css("opacity")+$("#step4_2_生物膜反应池").css("opacity");
        if(step3_2_nxt=="1111")
        {
            $("#step3-2_生物膜法").fadeIn(2000);
            $("#dragstep3-2_button").hide();
        }
    })
    $("#3-1_排放").click(function () {
        $("#step3-1_活性污泥处理法").fadeOut(500);
        $("#step3_1").fadeOut(500);
        $("#排放").fadeIn(2000);
        $("#排放2").fadeIn(2000);
    });
    $("#3-2_排放").click(function () {
        $("#step3-2_生物膜法").fadeOut(500);
        $("#step3_1").fadeOut(500);
        $("#排放").fadeIn(2000);
        $("#排放2").fadeIn(2000);
    });


})