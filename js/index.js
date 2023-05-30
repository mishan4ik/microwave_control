let btn_reheating = document.querySelector(".reheating_food");
let time_reheating = document.querySelector(".time_reheating");
let btn_defrosting = document.querySelector(".defrosting_food");
let btn_grill = document.querySelector(".grill_food");
let reheating = document.querySelector(".block_time_reheating");
let defrosting = document.querySelector(".block_time_defrosting");
let grill = document.querySelector(".block_time_grill");
let start = document.querySelector(".btn_start_app");
let answer = document.querySelector(".answer_text_start");

btn_reheating.onclick = function func(){

    if(reheating.style.display == ""){

        reheating.style.display = "block"

    }
    else{

        reheating.style.display = ""

    }

}

btn_defrosting.onclick = function func(){

    if(defrosting.style.display == ""){

        defrosting.style.display = "block"

    }
    else{

        defrosting.style.display = ""

    }

}

btn_grill.onclick = function func(){

    if(grill.style.display == ""){

        grill.style.display = "block"

    }
    else{

        grill.style.display = ""

    }

}


function time () {

    if(time_reheating.value == 0){

        answer.innerHTML = "Страва нагрілася."

    }
    else{

        time_reheating.value--;
        answer.innerHTML = "Зачекайте"

    }

}


start.onclick = function func() {


    setInterval(time,1000)
    



}

