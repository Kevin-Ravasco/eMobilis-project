let button1 = document.getElementById("btn-1");
button1.addEventListener("click", function () {
	buttonClasses = button1.classList.value;
	if (buttonClasses === "btn") {
		button1.classList.add("red-btn");
		button1.innerHTML = "You've clicked me :-(";
	} else {
		button1.classList.remove("red-btn");
		button1.innerHTML = "Click me to change ;-O";
	}
});

subscribeForm = document.getElementById("sub-form");

subscribeForm.addEventListener("submit", function (e) {
	e.preventDefault();
	successMsg = `<h4 class="thanks-msg">Thank you for subscribing</h3>`;
	document.querySelector(".success-msg").innerHTML = successMsg;
	subscribeForm.reset();
});
