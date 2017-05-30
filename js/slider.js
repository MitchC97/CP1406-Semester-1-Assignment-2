
var slider_id = 1;
slider_show(slider_id);

function slider_next(slider_nextId){
    slider_show(slider_id += slider_nextId);
}

function slider_curr(slider_idCurr){
    slider_show(slider_id = slider_idCurr);
}

function slider_show(slider_idShow){
    var numIds;
    var slider_div = $(".slide");
    var slider_box = $(".slideBar");
    if (slider_idShow > slider_div.length) {slider_id = 1}
    if (slider_idShow < 1) {slider_id = slider_div.length}
    for (numIds = 0; numIds < slider_div.length; numIds++) {
        slider_div[numIds].style.display = "none";
    }
    for (numIds = 0; numIds < slider_box.length; numIds++) {
        slider_box[numIds].className = slider_box[numIds].className.replace(" slideBarOn", "");
    }
    slider_div[slider_id-1].style.display = "block";
    slider_box[slider_id-1].className += " slideBarOn";
}
