function init(){
	var html_btn = document.getElementById("btn");
	html_btn.onclick = covert_buttom;

	var h2_tag = document.getElementsByTagName("h2");
	for(let i = 0;i<h2_tag.length;i++){
		h2_tag[i].onclick = responeH2;
		// console.log(h2_tag[i]);
		// i.onclick = responeH2;
	}
}

function responeH2(){
	alert("You clicked h2");
}

function printMessage(usd,vnd){
	var message = document.getElementById("message");
	message.innerHTML = "You inputed <strong>" + usd +"</strong>, coverted to vnd :<strong>" + vnd + "</strong>";
}
function covert_buttom(){
	var usd = prompt("Enter usd");
	var vnd = usd * 23;
	printMessage(usd,vnd);
}
window.onload = init;