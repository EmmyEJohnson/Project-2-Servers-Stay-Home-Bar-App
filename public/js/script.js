 // Getting video element using jQuery
 let video1 = $("#video1");
  
 // Check if video is ready to play
 $(video1).on('canplay', function () {
     $(video1).mouseenter(function () {
         $(this).get(0).play();
     }).mouseleave(function () {
         $(this).get(0).pause();
     })
 });

 // Getting video element using jQuery
 let video2 = $("#video2");

 // Check if video is ready to play
 $(video2).on('canplay', function () {
     $(video2).mouseenter(function () {
         $(this).get(0).play();
     }).mouseleave(function () {
         $(this).get(0).pause();
     })
 });


// background

//Sort forum table 
function sortForum() {
    let forum = document.getElementById("forum");
    forum.sort(function(x, y){
        return x.timestamp - y.timestamp;
    })
}




