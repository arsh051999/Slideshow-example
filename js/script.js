var imgO= document.querySelector("#slideShow");


var images=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpeg","img/5.jpg"];


var i=1;
function changePic()
{

    imgO.src=images[i];

    i++;



    if(i>=images.length)
    {
        i=0;
    }
}


setInterval(changePic, 3000);
setTimeout(changePic, 2000);
