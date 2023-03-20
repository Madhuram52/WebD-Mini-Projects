var rn1 = Math.random();
rn1 = rn1 * 6;
rn1 = Math.floor(rn1) + 1;

var rn2 = Math.random();
rn2 = rn2 * 6;
rn2 = Math.floor(rn2) + 1;
// document.querySelector("img").attributes;
document.querySelector(".img1").setAttribute("src","Dicee Challenge - Starting Files\\images\\dice"+rn1+".png");
document.querySelector(".img2").setAttribute("src","Dicee Challenge - Starting Files\\images\\dice"+rn2+".png");

if(rn1>rn2)
{
    document.querySelector(".win").textContent="Player 1 Wins!!🎉";
}
else if(rn1<rn2)
{
    document.querySelector(".win").textContent="Player 2 Wins!!🎉";
}
else
{
    document.querySelector(".win").textContent="Its a Tie. Refresh Again 🔄";
}