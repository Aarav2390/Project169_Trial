AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",e=>{
            console.log("Marker found")
            this.handleMarkerFound();
        }) 
        this.el.addEventListener("markerLost",e=>{
            console.log("Marker lost")
            this.handleMarkerLost();
        })
    },

    handleMarkerFound:function(){
        var buttonDiv = document.getElementById("#button-div")
        buttonDiv.style.display = "flex"
        var orderBtn = document.getElementById("order-button")
        var rateBtn = document.getElementById("rate-button")
        orderBtn.addEventListener("click",e=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for ordering!",
                text:"Your order will arrive soon :)"
            })
        rateBtn.addEventListener("click",e=>{
            swal({
                icon:"https://static.thenounproject.com/png/901836-200.png",
                title:"Rate the toy!",
                text:"*Work in progress*"
            })
        })
        })
    },

    handleMarkerLost:function(){
        var buttonDiv = document.getElementById("#button-div")
        buttonDiv.style.display = "none"
    }
})