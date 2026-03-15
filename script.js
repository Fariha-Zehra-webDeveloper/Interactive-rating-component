let ratingCard = document.querySelector(".rating-state-star");
let ratings  = document.querySelectorAll(".rating-points li");
let button = document.querySelector(".btn button");
let thankYouCard = document.querySelector(".thankYou-card");
let score = document.querySelector(".total-rating");

let selectRating = 0;
ratings.forEach(function(number){
  number.addEventListener("click",function(){
    selectRating = this.innerHTML;
    ratings.forEach(n => {
        n.classList.remove("active-orange");
        n.classList.remove("active-white");
    });
    let val = this.innerHTML;
    if(val == "1" || val == "3" || val == "5"){
        this.classList.add("active-orange");
    }else{
        this.classList.add("active-white");
    }   
    selectRating = val;
    
  });
});
button.addEventListener("click",function(){
    if(selectRating === 0){
        alert("please select a rating first!");
    }else{
    ratingCard.style.display="none";
    thankYouCard.style.display="flex";
    score.innerHTML = `You selected ${selectRating} out of 5`;
    }
   
});

