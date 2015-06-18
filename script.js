var aboutMe = {
	name: "Cory",
	job: "dude",
	age: 100,
	favoriteGames: ["KOTOR", "Payday", "Destiny"]
}


var dino = new Friend("Konstantinos ", "Kokkosis", "Earthbound");

var mike = new Friend("Mike ", "Piazza", "Monster Hunter")

Friend.prototype.intro = function(){
	return "Hello my name is " + this.firstName + this.lastName + " and my favorite game is " + this.favGame;
}

$(document).ready(function(){

	$(".name").html(aboutMe.name);

	$(".age").html(aboutMe.age);

	$(".favoriteGame").html(aboutMe.favoriteGames[2]);

	//Dino

	$(".firstName1").html(dino.firstName);
	$(".lastName1").html(dino.lastName);
	$(".favGame1").html(dino.favGame);
	$(".intro1").html(dino.intro());

	//Mike

	$(".firstName2").html(mike.firstName);
	$(".lastName2").html(mike.lastName);
	$(".favGame2").html(mike.favGame);
	$(".intro2").html(mike.intro())

});

