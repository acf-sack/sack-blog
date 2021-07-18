var jekyll = document.getElementById("jekyll");
var filter = document.getElementById("jekyll-filter")
jekyll.onclick = function() {
	filter.innerHTML = "{% if post.categories contains 'jekyll'%}";
};

// using onclick event in html h1 to change headline
var onclickHeadline = document.getElementById("onclickHeadline");

function clickInline() {    
	onclickHeadline.innerHTML = "CLICKED!";
}
