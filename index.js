window.onload = function(){
	var blah = document.getElementsByClassName('box');
	for(var i=0; i<= blah.length -1 ; i++)
	{
			(function(i) {
            blah[i].addEventListener('click',function(){
            	popUpAnAlert(i)})
    })(i);
	}
}
function popUpAnAlert(i){
	alert(i+1)
}

