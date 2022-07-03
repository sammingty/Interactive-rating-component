var submitRate = "0";
    
function updateRating(element) {
    submitRate = element.value;
    console.log(submitRate);
}

function showResponse() {
    document.getElementById("ratingText").innerHTML = `You selected ${submitRate} out of 5`;
    document.getElementById("ratingCard").style.display = "none";
    document.getElementById("responseCard").style.display = "block";
}