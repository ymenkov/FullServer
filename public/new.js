function signIn(){
	var text = document.getElementById("username");
	var val = text.value;

	var xhr = new XMLHttpRequest();
	var body = 'username='+val;
	xhr.open("POST", 'http://localhost:3000/game');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
	xhr.send(body);
	xhr.onload = function() {
	alert(this.responseText);
	document.location.href = window.location.host + 'game/' + this.responseText;
	}
}