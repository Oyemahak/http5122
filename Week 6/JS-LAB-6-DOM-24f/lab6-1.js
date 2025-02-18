/** LAB 6-1 IMAGE MOUSEOVER GALLERY*/
//CREATE AN ONLOAD LISTENER
window.onload = pageReady;

//CREATE AN ONLOAD FUNCTION TO HOLD OUR CODE THAT NEEDS THE document OBJECT.
function pageReady(){

	//CREATE A HANDLE FOR THE MAIN IMAGE
	var bigImage = document.getElementById("mainImg");

	//GET THE GALLERY IMAGES
	var image1 = document.getElementById("pic1");
	var image2 = document.getElementById("pic2");
	var image3 = document.getElementById("pic3");
	var image4 = document.getElementById("pic4");
	var image5 = document.getElementById("pic5");
	var image6 = document.getElementById("pic6");

	//SETUP LISTENERS FOR THE GALLERY IMAGES
	image1.onmouseover = switchPic1;
	image2.onmouseover = switchPic2;
	image3.onmouseover = switchPic3;
	image4.onmouseover = switchPic4;
	image5.onmouseover = switchPic5;
	image6.onmouseover = switchPic6;

	//CREATE FUNCTIONS TO CHANGE PICTURES
	function switchPic1(){
		bigImage.src = image1.src;
	}

	function switchPic2(){
		bigImage.src = image2.src;
	}

	function switchPic3(){
		bigImage.src = image3.src;
	}

	function switchPic4(){
		bigImage.src = image4.src;
	}

	function switchPic5(){
		bigImage.src = image5.src;
	}

	function switchPic6(){
		bigImage.src = image6.src;
	}

	//CREATE FUNCTION TO RESET IMAGE
	function resetPic(){
			bigImage.src = "images/title.png";
	}

	//RESET THE IMAGE WHEN MOUSE LEAVES
	//SETUP LISTENERS
	image1.onmouseout = resetPic;
	image2.onmouseout = resetPic;
	image3.onmouseout = resetPic;
	image4.onmouseout = resetPic;
	image5.onmouseout = resetPic;
	image6.onmouseout = resetPic;
}//END onload FUNCTION