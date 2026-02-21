// 1.Select all buttons
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// event are written in function and perform activity
// As we have node list from querySelector thus we can use forEach()
// 2. Iterate over buttons
buttons.forEach(button => {
	// 3. Add click event
	button.addEventListener("click", (event) => {
		// 4. Change backgroundcolor
		// specially for black button
		document.getElementById("black").style.color = event.target.id;
		// for all other buttons
		body.style.backgroundColor = event.target.id;
		body.style.color = event.target.id;
	});
});
