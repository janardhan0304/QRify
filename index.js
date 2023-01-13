let encodedText;
document.querySelector(".Generate-QR").addEventListener("click",function(){
    
    if(document.querySelector(".qrVisible")!=null)document.querySelector(".qrVisible").classList.add("qr");
    let text=document.querySelector(".textarea").value;
    
    if(text.length==0){
        console.log("Text should not be empty");
    }else {
        encodedText=encodeURI(text);
        let imgSrc="http://api.qrserver.com/v1/create-qr-code/?data="+encodedText+"&size=150x150";
        document.querySelector(".qrimage").setAttribute("src",imgSrc);
        document.querySelector(".qr").classList.add("qrVisible");
        document.querySelector(".qrVisible").classList.remove("qr");
    }
});



//saving the file to the harddisk using the filesaver library

document.getElementsByClassName("Save-QR")[0].addEventListener("click",function (){
    let imagesrc ="http://api.qrserver.com/v1/create-qr-code/?data="+encodedText+"&size=500x500";

    fetch(imagesrc)
    .then(function(res){
        return res.blob();
    })
    .then(function(blob){
        let ret=saveAs(blob);
    });
});



