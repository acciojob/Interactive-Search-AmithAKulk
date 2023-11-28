//your JS code here. If required.
const button = document.querySelector(".btn");
button.addEventListener("click", ()=>{
	const input = document.querySelector(".input");
	input.focus();
	const search = document.querySelector(".search");
	search.classList.add("active")
})