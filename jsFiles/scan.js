let fileEvent;

document.querySelector(".file").addEventListener("change",function(event){
    let fileReader=new FileReader();
    fileEvent=event;
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.addEventListener("load",function () {
        console.log(fileReader.result);
        let fileContent= fileReader.result;
        document.querySelector(".previewInvisible").setAttribute("src",fileContent);
        document.querySelector(".previewInvisible").classList.add("preview");
        document.querySelector(".previewInvisible").classList.remove("previewInvisible");
    })            
});

document.querySelector(".Scan-QR").addEventListener("click",function () {
    console.log(document.querySelector(".file").value);
    if(document.querySelector(".file").value.length==0) {
        alert("Choose one QR code to scan");
        return ;
    }

    //creating a form sort of thing to make the post request as the image is available in local storage
    let fileVal=fileEvent.target.files[0];
    let formData=new FormData();
    formData.append("file",fileVal);
    let url="http://api.qrserver.com/v1/read-qr-code/";
    fetch(url,{
        method:"POST",body:formData
    })
    .then(
        function(response){
            return response.json();
        }
    ).then(function (res) {

        let genText=res[0].symbol[0].data;
        document.querySelector(".resultHidden").value=genText;
        document.querySelector(".resultHidden").classList.add("textarea");
        document.querySelector(".resultHidden").classList.remove("resultHidden");
        document.querySelector(".textarea").readOnly=true;
    })
    
})