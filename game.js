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
                    $("#step5_污泥处理池").show();
                    $("#step5_污泥1").show();
                    $("#step5_污泥2").show();
                    $("#step5_污泥3").show();
                    $("#step5_管道").show();
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
                    $("#step5_污泥处理池").show();
                    $("#step5_污泥1").show();
                    $("#step5_污泥2").show();
                    $("#step5_污泥3").show();
                    $("#step5_管道").show();
                    $("#step3-2_e微生物").remove();
                }
                else if(elements==="step4_e活性炭")
                {
                    $("#step4_e活性炭").fadeOut(500);
                }
                else if(elements==="step4_e絮凝剂")
                {
                    $("#step4_e絮凝剂").fadeOut(500);
                }
                else if(elements==="step4_e臭氧")
                {
                    $("#step4_e臭氧").fadeOut(500);
                    $("#step4_e氯气").hide();
                }
                else if(elements==="step4_e氯气")
                {
                    $("#step4_e氯气").fadeOut(500);
                    $("#step4_e臭氧").hide();
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
        $("#解释汇总_预处理").show();
        $("#解释汇总2_预处理").show();
    });
    $("#dragstep2_button").click(function () {
        var step2_nxt=$("#step3_沉淀池").css("opacity")+$("#step3_沉淀物").css("opacity");
        if(step2_nxt=="11")
        {
            $("#step2_interpret").fadeIn(2000);
            $("#dragstep2_button").hide();
        }
    });
    $("#dragstep3-1_button").click(function () {
        var step3_1_nxt=$("#step4_1_曝气池").css("opacity")+$("#step4_1_鼓风装置").css("opacity")+$("#step4_1_气泡").css("opacity")+$("#step4_1_微生物").css("opacity");
        if(step3_1_nxt=="1111")
        {
            $("#step3-1_活性污泥处理法").fadeIn(2000);
            $("#dragstep3-1_button").hide();
        }
    });
    $("#dragstep3-2_button").click(function () {
        var step3_2_nxt=$("#step4_2_微生物").css("opacity")+$("#step4_2_气泡").css("opacity")+$("#step4_2_生物膜反应器").css("opacity")+$("#step4_2_生物膜反应池").css("opacity");
        if(step3_2_nxt=="1111")
        {
            $("#step3-2_生物膜法").fadeIn(2000);
            $("#dragstep3-2_button").hide();
        }
    });
    $("#dragstep4_button").click(function () {
        var step4_nxt=$("#step4_e活性炭").css("opacity")+$("#step4_e絮凝剂").css("opacity")+$("#step4_e臭氧").css("opacity")+$("#step4_e氯气").css("opacity");
        if(step4_nxt=="1111")
        {
         $("#最终排水").animate({opacity:1});
         $("#step4_三级处理").fadeIn(2000);
         $("#dragstep4_button").hide();
         $("#解释汇总_三级处理").show();
         $("#解释汇总2_三级处理").show();
        }
    });
    $("#step2_排放确定").click(function () {
        $("#step2_interpret").fadeOut(500);
        $("#step2").fadeOut(500);
        $("#排放").fadeIn(2000);
        $("#排放1").fadeIn(2000);
        $("#解释汇总_一级处理").show();
        $("#解释汇总2_一级处理").show();
    });
    $("#step2_二级处理确定").click(function () {
        $("#step2_interpret").fadeOut(500);
        $("#step2").fadeOut(500);
        $("#step3_二选一").fadeIn(2000);
        $("#二级处理选择").fadeIn(2000);
        $("#解释汇总_一级处理").show();
        $("#解释汇总2_一级处理").show();
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
        $("#解释汇总_二级处理").show();
        $("#解释汇总_二级处理二选一").show();
        $("#解释汇总2_二级处理").show();
        $("#解释汇总2_二级处理二选一").show();
    });
    $("#选择step3_2生物膜法").click(function () {
        $("#step3_二选一").fadeOut(500);
        $("#二级处理选择").fadeOut(500);
        $("#step3_2").fadeIn(2000);
        $("#解释汇总_二级处理").show();
        $("#解释汇总_二级处理二选一").show();
        $("#解释汇总2_二级处理").show();
        $("#解释汇总2_二级处理二选一").show();
    });

    $("#3-1_排放").click(function () {
        $("#step3-1_活性污泥处理法").fadeOut(500);
        $("#step3_1").fadeOut(500);
        $("#排放").fadeIn(2000);
        $("#排放2").fadeIn(2000);
        $("#解释汇总_活性污泥处理法").show();
        $("#解释汇总2_活性污泥处理法").show();
    });
    $("#3-2_排放").click(function () {
        $("#step3-2_生物膜法").fadeOut(500);
        $("#step3_2").fadeOut(500);
        $("#排放").fadeIn(2000);
        $("#排放2").fadeIn(2000);
        $("#解释汇总_生物膜法").show();
        $("#解释汇总2_生物膜法").show();
    });
    $("#3-1_三级处理").click(function () {
        $("#step3-1_活性污泥处理法").fadeOut(500);
        $("#step3_1").fadeOut(500);
        $("#step5_三级反应处理池").animate({opacity:1});
        $("#step4").fadeIn(2000);
        $("#解释汇总_活性污泥处理法").show();
        $("#解释汇总2_活性污泥处理法").show();
    });
    $("#3-2_三级处理").click(function () {
        $("#step3-2_生物膜法").fadeOut(500);
        $("#step3_2").fadeOut(500);
        $("#step5_三级反应处理池").animate({opacity:1});
        $("#step4").fadeIn(2000);
        $("#解释汇总_生物膜法").show();
        $("#解释汇总2_生物膜法").show();
    });
    $("#排放2_确定").click(function () {
        $("#排放2").fadeOut(500);
        $("#排放").fadeOut(500)
        $("#step5_三级反应处理池").animate({opacity:1});
        $("#step4").fadeIn(2000);
    });
    $("#game1_下一步").click(function () {
        $("#step4").fadeOut(500);
        $("#step4_三级处理").fadeOut(500);
        $("#最后出现的段落").show();
        $("#解释汇总").fadeOut(500);
        $("#回顾game1").show();
        $("#解释汇总2").fadeIn(500);
        $("#game1_显示说明").remove();
        $("#game1_隐藏说明").remove();
    });
/*工具栏*/
$("#game1_显示说明").click(function () {
    $("#解释汇总").fadeIn(500);
});
    $("#game1_隐藏说明").click(function () {
        $("#解释汇总").fadeOut(500);
    });

})