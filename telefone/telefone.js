$("#everyButton").click(function() {
  
	const list = $('#noname li');

	
	function randomListItem() {
		const randomListItem = Math.floor(Math.random() * list.length);
		return list.eq(randomListItem);
	}

	function randRecurse() {
		let gen = randomListItem();
		gen0 = gen[0];
		console.log(gen0.innerText);
		if(gen0.innerText !== `everything is everything`) {
			gen.replaceWith(`<li>everything is everything</li>`);
			return;
		} else {
			return randRecurse();
		}
	}

	randRecurse();
});

//const list = $('#noname li');
//var listArr = Array.from(list);
//var counter = 0;
//var listLength = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
//
//function shuffleArray(array) {
//    for (var i = array.length - 1; i > 0; i--) {
//      var j = Math.floor(Math.random() * (i + 1));
//      var temp = array[i];
//      array[i] = array[j];
//      array[j] = temp;
//    }
//      return array;
//  }
//
//var shuffledArray = shuffleArray(listLength);
//
////window.onload = function() {
////  
////}
//
//$("#everyButton").click(function() {
//  
//  console.log(shuffledArray);
//  console.log(listArr);
//});
