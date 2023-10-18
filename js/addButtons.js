AFRAME.registerComponent("create-buttons",{
    init:function(){
        //Button1 - Order button
        var button1 = document.createElement("button")
        button1.innerHTML = "ORDER NOW"
        button1.setAttribute("id","order-button")
        button1.setAttribute("class","btn btn-warning")

        //Button2 - Rate button
        var button2 = document.createElement("button")
        button2.innerHTML = "RATE US"
        button2.setAttribute("id","rate-button")
        button2.setAttribute("class","btn btn-warning")

        //Append to button div
        var buttonDiv = document.getElementById("#button-div")
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
    }
})