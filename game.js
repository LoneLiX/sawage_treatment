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


})