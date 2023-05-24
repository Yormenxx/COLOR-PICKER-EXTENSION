const hasSupport = () => ('EyeDropper' in window),
 $btnPicker = document.getElementById("btn-activate"),
 $showColor = document.querySelector(".showColor")
 
const  activateEyeDropper = () => {

    if(hasSupport) { 
        const eyeDropper = new window.EyeDropper();
     
        eyeDropper
          .open()
          .then((result) => {
             const color = result.sRGBHex;
             if(color){
                $showColor.innerHTML += `${color}</br>`
             }else{
                $showColor.innerHTML += `Not found </br>` 
             }
             
            })

           .catch( e => {
              console.error(e);
         });
      } else {
          console.warn('No Support: This browser does not support the EyeDropper API yet!');
      }

}

$btnPicker.addEventListener("click",activateEyeDropper)
