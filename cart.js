function cardspace(){
   var carddigit = document.getElementById('cardno').value;
   if(carddigit.length == 4 || carddigit.length== 9 || carddigit.length ==14){
	  document.getElementById('cardno').value = carddigit+" ";
	  document.getElementById('cardno') .max = 1;
     }

}
///////////////////////////////////////////////////////////////
function addslashes(){

var expiredate = document.getElementById('validtill').value; 
  if(expiredate.length == 2){
     document.getElementById('validtill').value = expiredate+"/";
      document.getElementById('validtill').max = 1;
    }
}
//////////////////////////////////////////////////////////////////////
var updatePriceLink = document.getElementById("update-price-link");
var hasUpdatedPrice = false;
updatePriceLink.onclick = function() {
    if (!hasUpdatedPrice) {
     updatePrice();
     hasUpdatedPrice = true;
    }
};
function updatePrice() {
  var priceElement = document.getElementById("total-price");
  var price = parseFloat(priceElement.innerHTML);
    price = price - (price * 0.1); 
    priceElement.innerHTML = price.toString();
  
}

//////////////////kitchen///////////////////////////
function CartSoldOut() {
  alert("Sold Out,not available at the moment");
}
