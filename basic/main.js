var name = prompt("what is your name?");

var play = confirm("Hello " + name + " do you want to play a game?");

console.log(name);
console.log(play);

if (play === true){
	var dir = prompt("do you want to go right or left?");

	if(dir === "right"){
		dir = prompt("you made it into another room. Do you want to go right or left this time?");

		if(dir === "right"){
			alert("congratulations you made it out of the maze alive!");

		} else {
			alert("you fell in a hole and died!");
		}

	} else {
		alert("wrong way now you're dead!");
	}

} else {
	alert("come back when you're ready to play");
}