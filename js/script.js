
/*!
* string_score.js: String Scoring Algorithm 0.1.20
*
* http://joshaven.com/string_score
* https://github.com/joshaven/string_score
*
* Copyright (C) 2009-2011 Joshaven Potter <yourtech@gmail.com>
* Special thanks to all of the contributors listed here https://github.com/joshaven/string_score
* MIT license: http://www.opensource.org/licenses/mit-license.php
*
* Date: Tue Mar 1 2011
* Updated: Tue Jun 11 2013
*/
String.prototype.score=function(e,f){if(this==e)return 1;if(""==e)return 0;var c=0,a,g=this,n=this.length,h=e,k=e.length,b;a=0;var l=1,m;f&&(m=1-f);if(f)for(var d=0;d<k;++d)b=g.indexOf(h[d],a),-1===b?l+=m:(a===b?a=0.7:(a=0.1," "===this[b-1]&&(a+=0.8)),this[b]===e[d]&&(a+=0.1),c+=a,a=b+1);else for(d=0;d<k;++d){b=g.indexOf(h[d],a);if(-1===b)return 0;a===b?a=0.7:(a=0.1," "===this[b-1]&&(a+=0.8));this[b]===e[d]&&(a+=0.1);c+=a;a=b+1}c=0.5*(c/n+c/k)/l;h[0]===g[0]&&0.85>c&&(c+= 0.15);return c};


// Document Ready
$(function(){

  // fuzzy search
  var search      = $('input'),
      result      = $('#result'),
      entry       = $('.snippets').children('li'),
      entryLength = entry.length,
      trigger     = $('.trigger').map(function(){ return this.innerHTML; }),
      property    = $('.property').map(function(){ return this.innerHTML; }),
      emmet       = $('.emmet').map(function(){ return this.innerHTML; }),
      cache       = trigger;

  $('label').on('click', function() {
    if ($(this).attr('for') == 'radio-trigger') {
      search.val('').attr('placeholder', 'Type to search triggers...');
      result[0].innerHTML = '';
      cache = trigger;
    } else {
      search.val('').attr('placeholder', 'Type to search properties...');
      result[0].innerHTML = '';
      cache = property;
    }
  });

  search.on('keyup', function(){
    var keyword = this.value,
        output  = '';

    if (keyword) {
      for (var i = 0; i < entryLength; i++) {
        var score = cache[i].score(keyword);
        if (score > 0) {
          output += entry[i].outerHTML;
        }
      };
      result[0].innerHTML = output;
    } else {
      result[0].innerHTML = '';
    }
  });


  // bind esc and enter key
  $(document).on('keyup', function(e){
    if (e.keyCode == 27) {
      search.val('');
      result[0].innerHTML = '';
    } else if (e.keyCode == 13) {
      search.focus();
    }
  });


  // add tags
  for (var i = 0; i < entryLength; i++) {
    if (!trigger[i]) {
      $(entry[i]).addClass('removed');
    } else if (!emmet[i]) {
      $(entry[i]).addClass('new');
    } else if (trigger[i] != emmet[i]) {
      $(entry[i]).addClass('diff');
    }
  };


  // smooth scrolling
  $('.nav').on('click', 'a', function(){
    var target = $(this.hash);
    $('html, body').animate({scrollTop: target.offset().top - 122}, 600);
    return false;
  });
});