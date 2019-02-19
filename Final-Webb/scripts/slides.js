/* DO NOT REMOVE ANY OF THE COMMENT LINES */

function StartSlides()
{
    /* Complete the code so the RotateSlides function executes every 5 seconds and the
       RotateBanners function executes every three seconds */

    intTimer = self.setInterval("RotateSlides();", 1000);
    intTimer2 = self.setInterval("RotateBanners();", 1500);
}

function RotateSlides() 
{
    var intNumber = 4;
    var intRandom;
    intRandom = Math.floor(Math.random() * intNumber + 1);
    document.getElementById("ImageSlides").src="../Images/slides/slide" + intRandom + ".jpg";
    /* add the code to display the slides from the Images/slides/slide folder. */

}

function RotateBanners() 
{
    var intNumber = 7;
    var intRandom;
    intRandom = Math.floor(Math.random() * intNumber + 1);
    document.getElementById("ImageBanners").src="../Images/banners/banner" + intRandom + ".png";
    /* add the code to display the banners from the Images/banners/banner folder. */

}


