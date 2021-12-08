var attempt=10;
function check(){

    var num= document.getElementById("number").value;
    //let r_num =10;
    let r_num = Math.floor(Math.random() * 100) + 1;
    
    if(num<r_num && attempt!=0){
        document.getElementById("result").innerHTML="<br>GUESSED NUMBER <br>IS SMALL &#128533;"
        attempt=attempt-1;
        document.getElementById("circle").style.margin = "0 100px 0 0px";
        document.getElementById("attempts").innerHTML="REMAINING ATTEMPTS";
        document.getElementById("circle").innerHTML=attempt;   
    }
    else if(num==r_num && attempt!=0)
    {
        attempt=attempt-1;
        document.getElementById("circle").style.margin = "0 100px 0 0px";
        document.getElementById("attempts").innerHTML="REMAINING ATTEMPTS";
        document.getElementById("circle").innerHTML=attempt;   

        document.getElementById("hide").style.display = "none";
        document.getElementById("check").style.display = "none";
        document.getElementById("number").style.display = "none";
        document.getElementById("title").innerHTML="NUMBERATES";
        document.getElementById("title").style.paddingLeft = "180px";
        document.getElementById("label_1").style.display = "none";
        document.getElementById("success").innerHTML = 	"<img src='party.svg' width='100px' height='100px'/>"
        document.getElementById("success").style.marginBottom = "-50px";
        document.getElementById("congrats").innerHTML ="CONGRATS YOU HAVE WON <br>THE GAME"
        document.getElementById("congrats").style.paddingTop = "20px";
    }
    else if(num>r_num && attempt!=0)
    {
        document.getElementById("result").innerHTML="<br>GUESSED NUMBER <br>IS BIG &#128533;"
        attempt=attempt-1;
        document.getElementById("circle").style.margin = "0 100px 0 0px";
        document.getElementById("attempts").innerHTML="REMAINING ATTEMPTS";
        document.getElementById("circle").innerHTML=attempt;      
    }
    else if(attempt==0){
        document.getElementById("hide").style.display = "none";
        document.getElementById("check").style.display = "none";
        document.getElementById("number").style.display = "none";
        document.getElementById("label_1").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("success").innerHTML = 	"<span style='font-size:100px;'>&#128533;</span>"
        document.getElementById("success").style.marginLeft = "-190px";
        document.getElementById("success").style.marginBottom = "-40px";
        document.getElementById("congrats").innerHTML ="SORRY BETTER LUCK NEXT TIME"
        document.getElementById("congrats").style.paddingTop = "20px";

    }

}
