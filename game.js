$(function () {
        $(".element").draggable({ revert: "invalid",
            cursor: "pointer",
            scroll:false
        });

        $(".drop").droppable({
            drop: function(event,ui) {
                var sourceElement = $(ui.helper.context);
                var elements = sourceElement.attr("id");

                if(elements==="step1_e栅格")
                {
                    $("#流出污水").animate({opacity:0},true)
                    $("#step1_栅格").animate({opacity:1},true)
                    $("#step1_污水流入").animate({opacity:1},true)
                    $("#step1_过滤石头1").animate({opacity:1},true)
                    $("#step1_过滤石头2").animate({opacity:1},true)
                    $("#step1_过滤石头3").animate({opacity:1},true)
                    $("#step1_e栅格").remove();




                }
            }


        });

}
)