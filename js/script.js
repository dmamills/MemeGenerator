
    		var imgEl;

    		function ctrl($scope) {

	    			$scope.toptext = '';
	    			$scope.bottomtext = '';
	    			$scope.selectedMeme ='10 Guy';
	    			$scope.download = '#';
	    			

	    			$scope.alterMeme = function(){
	    				console.meme($scope.toptext,$scope.bottomtext,$scope.selectedMeme);		
	    			}

	    			$scope.createImage = function(){

	    				var canvas = document.getElementById('myCanvas');
	    				$scope.download = canvas.toDataURL();

	    				$('#outputModal').modal({

	    				});
						if(imgEl.attr('src') == '#')
							imgEl.show();
	    			}
	    	}

			$(document).ready(function(){

				var memeList = document.getElementById('meme-list');

				for(var meme in console.list){
					$('#meme-list').append('<option>'+meme+'</option>');
				}
					memeList.selectedIndex = 1;
					console.meme('','','10 Guy');	
				 	
				 	imgEl = $('#imgtest');
					if(imgEl.attr('src') == '#')
						imgEl.hide();

			});