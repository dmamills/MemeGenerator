function ctrl($scope) {
		$scope.toptext = '';
		$scope.bottomtext = '';
		$scope.selectedMeme ='10 Guy';
		$scope.alterMeme = function(){
			console.meme($scope.toptext,$scope.bottomtext,$scope.selectedMeme);		
		}
}


function create() {
	var uri = document.getElementById('myCanvas').toDataURL();
	downloadImage(uri,generateName());
}

function generateName() {
	var n = [];
	for(var i =0; i < 10;i++) {
		n.push((Math.floor(Math.random() *16)).toString(16));
	}
	return n.join('');
}

function downloadImage(uri,name) {
	var link = document.createElement('a');
	link.download = name;
	link.href =uri;
	link.click();
}


$(function() {
	var memeListEl = document.getElementById('meme-list');

	for(var meme in console.list) {
		var optionEl = document.createElement('option');
		optionEl.value = optionEl.innerText = meme;
		memeListEl.appendChild(optionEl);
	}
		memeListEl.selectedIndex = 1;
		console.meme('','','10 Guy');
	
	document.getElementById('createBtn').addEventListener('click',create);
});