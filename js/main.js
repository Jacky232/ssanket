$(document).ready(function(){
	$(".customer-logos").slick({
		slidesToShow: 5,
  		slidesToScroll: 1,
  		autoplay: true,
  		arrows: false,
  		autoplaySpeed: 1500,
  		dots: false,
  		pauseOnHover: false,
  		responsive:[
  			{
  				breakpoint: 768,
  				settings:{
  					slidesToShow: 4
  				}
  			},
  			{
  				breakpoint: 520,
  				settings:{
  					slidesToShow: 3
  				}
  			}
  		]
	});
})



//Photos gallary section code start
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
//Photos gallary section code end