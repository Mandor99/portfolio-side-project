$(function(){const t=$(".portfolio__btn");t.on("click",function(t){t.stopPropagation();t=$(t.target).attr("data-filter");$(".grid").isotope({itemSelector:".grid-item",filter:t})}),$(".portfolio__btn#btn1").trigger("click"),$(".grid .portfolio__popupLink").magnificPopup({type:"image",gallery:{enabled:!0}})});
//# sourceMappingURL=index.js.map
