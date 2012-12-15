// jQuery LiveSearch
// Author: John Resig
// http://ejohn.org/blog/jquery-livesearch/

jQuery.fn.liveUpdate = function(list){
	list = jQuery(list);

	if ( list.length ) {
		var rows = list.children('span'),
			cache = rows.map(function(){
				return this.innerHTML.toLowerCase();
			});

		this
			.keyup(filter).keyup()
			.parents('form').submit(function(){
				return false;
			});
	}

	return this;

	function filter() {
		var input = $('#search').val();
		if (input.length >= 1) {
			$('#container h2, nav, .top, hr').hide();
		}
		else {
			$('#container h2, nav, .top, hr').show();
		};

		var entries = rows.parent();
		var term = jQuery.trim( jQuery(this).val().toLowerCase() ), scores = [];

		if ( !term ) {
			entries.show();
		} else {
			entries.hide();

			cache.each(function(i){
				var score = this.score(term);
				if (score > 0) { scores.push([score, i]); }
			});

			jQuery.each(scores.sort(function(a, b){return b[0] - a[0];}), function(){
				jQuery(entries[ this[1] ]).show();
			});
		}
	}

	function hide() {
		$('.top, #container h2').hide();
	}
	function show() {
		$('.top, #container h2').show();
	}
};