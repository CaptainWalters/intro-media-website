function changeImage(current) {
	var imagesNumber = 5;

	for (i=1; i<=imagesNumber; i++) {
		if (i == current) {
			document.getElementById("normal" + current).style.display = "block";
			document.getElementById("text" + current).style.display = "block";
		}
		else {
			document.getElementById("normal" + i).style.display = "none";
			document.getElementById("text" + i).style.display = "none";
		}
	}
}
