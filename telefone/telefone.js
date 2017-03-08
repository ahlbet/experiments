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