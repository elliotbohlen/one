
function refreshPage(){
		window.location.reload();
}
//apis https://api.adviceslip.com/#top
$("document").ready(function(){
	 function getData(advice){
		 $.ajax({
			 url: "https://api.adviceslip.com/advice/search/e",
			 success: function(data) {
				 handleData(data)
			 }
		 });
	 }
	 var advice = "advice"
	 getData(advice)

	function handleData(data){
//		console.log(data);
		var result = $.parseJSON( data );
    var resultObj = result.slips;
    console.log(resultObj)


      let myArray = resultObj;
      for(let i = 0; i < myArray.length; i++){
         console.log(myArray[i].advice);
         document.getElementById('textAreaInput').insertAdjacentHTML("beforeend",myArray[i].advice + " ");
    }








	}
})





/*
var fetchAdvice = function(adviceString){
  var advice = `https://api.adviceslip.com/advice/search/that`;
  var query =`https://cors-anywhere.herokuapp.com/`;
  fetch(query)
}
*/
