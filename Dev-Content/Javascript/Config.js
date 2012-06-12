(function () {
	var paths = [
		'applescript              @shBrushAppleScript.js',
		'actionscript3 as3        @shBrushAS3.js',
		'bash shell               @shBrushBash.js',
		'coldfusion cf            @shBrushColdFusion.js',
		'cpp c                    @shBrushCpp.js',
		'c# c-sharp csharp        @shBrushCSharp.js',
		'css                      @shBrushCss.js',
		'delphi pascal            @shBrushDelphi.js',
		'diff patch pas           @shBrushDiff.js',
		'erl erlang               @shBrushErlang.js',
		'groovy                   @shBrushGroovy.js',
		'java                     @shBrushJava.js',
		'jfx javafx               @shBrushJavaFX.js',
		'js jscript javascript    @shBrushJScript.js',
		'perl pl                  @shBrushPerl.js',
		'php                      @shBrushPhp.js',
		'text plain               @shBrushPlain.js',
		'py python                @shBrushPython.js',
		'powershell ps posh       @shBrushPowerShell.js',
		'ruby rails ror rb        @shBrushRuby.js',
		'sass scss                @shBrushSass.js',
		'scala                    @shBrushScala.js',
		'sql                      @shBrushSql.js',
		'vb vbnet                 @shBrushVb.js',
		'xml xhtml xslt html      @shBrushXml.js'
	];
	for (var i = 0; i < paths.length; i++)
		paths[i] = paths[i].replace('@', 'http://alexgorbatchev.com/pub/sh/current/scripts/');
	SyntaxHighlighter.autoloader.apply(null, paths);

	SyntaxHighlighter.config.bloggerMode = false;	//Blogger Mode interprets escaped <br />s literally
	SyntaxHighlighter.defaults.toolbar = false;
	SyntaxHighlighter.all();
})();

window.setTimeout(function () {
	document.body.className = document.body.className.replace("loading", "");
}, 10);


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3656687-3']);
_gaq.push(['_trackPageview']);

(function () {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
var addthis_config = { "data_track_clickback": true };
