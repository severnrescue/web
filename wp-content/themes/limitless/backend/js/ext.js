(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b:b(jQuery)})(function(b){function v(J){var l=J||window.event,f=[].slice.call(arguments,1),k=0,a=0,g=0,d=0,d=0;J=b.event.fix(l);J.type="mousewheel";l.wheelDelta&&(k=l.wheelDelta);l.detail&&(k=-1*l.detail);l.deltaY&&(k=g=-1*l.deltaY);l.deltaX&&(a=l.deltaX,k=-1*a);void 0!==l.wheelDeltaY&&(g=l.wheelDeltaY);void 0!==l.wheelDeltaX&&(a=-1*l.wheelDeltaX);d=Math.abs(k);if(!s||d<s)s=d;d=Math.max(Math.abs(g),
Math.abs(a));if(!c||d<c)c=d;l=0<k?"floor":"ceil";k=Math[l](k/s);a=Math[l](a/c);g=Math[l](g/c);f.unshift(J,k,a,g);return(b.event.dispatch||b.event.handle).apply(this,f)}var k=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],f="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],s,c;if(b.event.fixHooks)for(var Y=k.length;Y;)b.event.fixHooks[k[--Y]]=b.event.mouseHooks;b.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var b=
f.length;b;)this.addEventListener(f[--b],v,!1);else this.onmousewheel=v},teardown:function(){if(this.removeEventListener)for(var b=f.length;b;)this.removeEventListener(f[--b],v,!1);else this.onmousewheel=null}};b.fn.extend({mousewheel:function(b){return b?this.bind("mousewheel",b):this.trigger("mousewheel")},unmousewheel:function(b){return this.unbind("mousewheel",b)}})});

// jStepper 1.3.1
function AddOrSubtractTwoFloats(a,b,c){var d=a.toString();var e=b.toString();var f="";if(d.indexOf(".")>-1||e.indexOf(".")>-1){if(d.indexOf(".")==-1){d=d+".0"}if(e.indexOf(".")==-1){e=e+".0"}var g=d.substr(d.indexOf(".")+1);var h=e.substr(e.indexOf(".")+1);var i=d.substr(0,d.indexOf("."));var j=e.substr(0,e.indexOf("."));var k=true;while(k){if(g.length!=h.length){if(g.length<h.length){g+="0"}else{h+="0"}}else{k=false}}var l=g.length;for(var m=0;m<=g.length-1;m++){i=i+g.substr(m,1);j=j+h.substr(m,1)}var n=Number(i);var o=Number(j);var p;if(c){p=n+o}else{p=n-o}f=p.toString();for(var q=0;q<l-f.length+1;q++){f="0"+f}if(f.length>=l){f=f.substring(0,f.length-l)+"."+f.substring(f.length-l)}}else{if(c){f=Number(a)+Number(b)}else{f=Number(a)-Number(b)}}return Number(f)}(function(a){function b(b,c){var d=a(c);var e=d.val();if(b.disableNonNumeric){e=e.replace(/[^\d\.,\-]/gi,"")}if(b.maxValue!==null){if(e>=b.maxValue){e=b.maxValue}}if(b.minValue!==null){if(e<b.minValue&&e!=""){e=b.minValue}}d.val(e)}function c(c,d,e,f){var g=a(f);var h;if(e){if(e.ctrlKey){h=c.ctrlStep}else if(e.shiftKey){h=c.shiftStep}else{h=c.normalStep}}else{h=c.normalStep}var i=g.val();var j=i.length-f.selectionStart;var k=i.length-f.selectionEnd;i=i.replace(/,/g,".");i=i.replace(c.decimalSeparator,".");i=i+"";if(i.indexOf(".")!=-1){i=i.match(new RegExp("-{0,1}[0-9]+[\\.][0-9]*"))}i=i+"";if(i.indexOf("-")!=-1){i=i.match(new RegExp("-{0,1}[0-9]+[\\.]*[0-9]*"))}i=i+"";i=i.match(new RegExp("-{0,1}[0-9]+[\\.]*[0-9]*"));if(i===""||i=="-"||i===null){i=c.defaultValue}if(d==1){i=AddOrSubtractTwoFloats(i,h,true)}else{i=AddOrSubtractTwoFloats(i,h,false)}var l=false;if(c.maxValue!==null){if(i>=c.maxValue){i=c.maxValue;l=true}}if(c.minValue!==null){if(i<=c.minValue){i=c.minValue;l=true}}i=i+"";if(c.minLength!==null){var m=i.length;if(i.indexOf(".")!=-1){m=i.indexOf(".")}var n=false;if(i.indexOf("-")!=-1){n=true;i=i.replace(/-/,"")}if(m<c.minLength){for(var o=1;o<=c.minLength-m;o++){i="0"+i}}if(n){i="-"+i}}i=i+"";var p;if(c.minDecimals>0){var q;if(i.indexOf(".")!=-1){p=i.length-(i.indexOf(".")+1);if(p<c.minDecimals){q=c.minDecimals-p}}else{q=c.minDecimals;i=i+"."}for(var r=1;r<=q;r++){i=i+"0"}}if(c.maxDecimals>0){p=0;if(i.indexOf(".")!=-1){p=i.length-(i.indexOf(".")+1);if(c.maxDecimals<p){i=i.substring(0,i.indexOf("."))+"."+i.substring(i.indexOf(".")+1,i.indexOf(".")+1+c.maxDecimals)}}}if(!c.allowDecimals){i=i+"";i=i.replace(new RegExp("[\\.].+"),"")}i=i.replace(/\./,c.decimalSeparator);g.val(i);f.selectionStart=i.length-j;f.selectionEnd=i.length-k;b(c,f);if(c.onStep){c.onStep(g,d,l)}return false}a.fn.jStepper=function(d){var e=a.extend({},a.fn.jStepper.defaults,d);return this.each(function(){var d=a(this);var f=a.meta?a.extend({},e,d.data()):e;if(f.disableAutocomplete){d.attr("autocomplete","off")}if(a.isFunction(d.mousewheel)){d.mousewheel(function(a,b){if(b>0){c(f,1,a,this);return false}else if(b<0){c(f,0,a,this);return false}})}d.keydown(function(a){var b=a.keyCode;if(b==38){c(f,1,a,this)}if(b==40){c(f,0,a,this)}});d.keyup(function(a){b(f,this)})})};a.fn.jStepper.defaults={maxValue:null,minValue:null,normalStep:1,shiftStep:5,ctrlStep:10,minLength:null,disableAutocomplete:true,defaultValue:1,decimalSeparator:",",allowDecimals:true,minDecimals:0,maxDecimals:null,disableNonNumeric:true,onStep:null}})(jQuery);

(function(c,n){"function"===typeof define&&define.amd?define("sifter",n):"object"===typeof exports?module.exports=n():c.Sifter=n()})(this,function(){var c=function(c,h){this.items=c;this.settings=h||{diacritics:!0}};c.prototype.tokenize=function(c){c=(String(c||"").toLowerCase()+"").replace(/^\s+|\s+$|/g,"");if(!c||!c.length)return[];var h,f,g,m=[],p=c.split(/ +/);c=0;for(h=p.length;c<h;c++){f=(p[c]+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");if(this.settings.diacritics)for(g in s)s.hasOwnProperty(g)&&
(f=f.replace(RegExp(g,"g"),s[g]));m.push({string:p[c],regex:RegExp(f,"i")})}return m};c.prototype.iterator=function(c,h){(l(c)?Array.prototype.forEach||function(c){for(var g=0,q=this.length;g<q;g++)c(this[g],g,this)}:function(c){for(var g in this)this.hasOwnProperty(g)&&c(this[g],g,this)}).apply(c,[h])};c.prototype.getScoreFunction=function(c,h){var f,g,m;c=this.prepareSearch(c,h);g=c.tokens;f=c.options.fields;m=g.length;var p=function(c,g){var f,h;if(!c)return 0;c=String(c||"");h=c.search(g.regex);
if(-1===h)return 0;f=g.string.length/c.length;0===h&&(f+=0.5);return f},l=function(){var c=f.length;return c?1===c?function(c,g){return p(g[f[0]],c)}:function(g,h){for(var q=0,m=0;q<c;q++)m+=p(h[f[q]],g);return m/c}:function(){return 0}}();return m?1===m?function(c){return l(g[0],c)}:"and"===c.options.conjunction?function(c){for(var f,h=0,q=0;h<m;h++){f=l(g[h],c);if(0>=f)return 0;q+=f}return q/m}:function(c){for(var f=0,h=0;f<m;f++)h+=l(g[f],c);return h/m}:function(){return 0}};c.prototype.getSortFunction=
function(c,h){var f,g,m,p,l,s,A,y,w,u;m=this;c=m.prepareSearch(c,h);u=!c.query&&h.sort_empty||h.sort;w=function(c,g){return"$score"===c?g.score:m.items[g.id][c]};l=[];if(u)for(f=0,g=u.length;f<g;f++)(c.query||"$score"!==u[f].field)&&l.push(u[f]);if(c.query){u=!0;f=0;for(g=l.length;f<g;f++)if("$score"===l[f].field){u=!1;break}u&&l.unshift({field:"$score",direction:"desc"})}else for(f=0,g=l.length;f<g;f++)if("$score"===l[f].field){l.splice(f,1);break}y=[];f=0;for(g=l.length;f<g;f++)y.push("desc"===
l[f].direction?-1:1);return(s=l.length)?1===s?(p=l[0].field,A=y[0],function(c,g){return A*n(w(p,c),w(p,g))}):function(c,g){var f,h;for(f=0;f<s;f++)if(h=l[f].field,h=y[f]*n(w(h,c),w(h,g)))return h;return 0}:null};c.prototype.prepareSearch=function(c,h){if("object"===typeof c)return c;h=p({},h);var f=h.fields,g=h.sort,m=h.sort_empty;f&&!l(f)&&(h.fields=[f]);g&&!l(g)&&(h.sort=[g]);m&&!l(m)&&(h.sort_empty=[m]);return{options:h,query:String(c||"").toLowerCase(),tokens:this.tokenize(c),total:0,items:[]}};
c.prototype.search=function(c,h){var f,g,l,p;g=this.prepareSearch(c,h);h=g.options;c=g.query;p=h.score||this.getScoreFunction(g);c.length?this.iterator(this.items,function(c,l){f=p(c);(!1===h.filter||0<f)&&g.items.push({score:f,id:l})}):this.iterator(this.items,function(c,f){g.items.push({score:1,id:f})});(l=this.getSortFunction(g,h))&&g.items.sort(l);g.total=g.items.length;"number"===typeof h.limit&&(g.items=g.items.slice(0,h.limit));return g};var n=function(c,h){if("number"===typeof c&&"number"===
typeof h)return c>h?1:c<h?-1:0;c=String(c||"").toLowerCase();h=String(h||"").toLowerCase();return c>h?1:h>c?-1:0},p=function(c,h){var f,g,l,p;f=1;for(g=arguments.length;f<g;f++)if(p=arguments[f])for(l in p)p.hasOwnProperty(l)&&(c[l]=p[l]);return c},l=Array.isArray||$&&$.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)},s={a:"[a\u00c0\u00c1\u00c2\u00c3\u00c4\u00c5\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]",c:"[c\u00c7\u00e7\u0107\u0106\u010d\u010c]",d:"[d\u0111\u0110]",e:"[e\u00c8\u00c9\u00ca\u00cb\u00e8\u00e9\u00ea\u00eb]",
i:"[i\u00cc\u00cd\u00ce\u00cf\u00ec\u00ed\u00ee\u00ef]",n:"[n\u00d1\u00f1]",o:"[o\u00d2\u00d3\u00d4\u00d5\u00d5\u00d6\u00d8\u00f2\u00f3\u00f4\u00f5\u00f6\u00f8]",s:"[s\u0160\u0161]",u:"[u\u00d9\u00da\u00db\u00dc\u00f9\u00fa\u00fb\u00fc]",y:"[y\u0178\u00ff\u00fd]",z:"[z\u017d\u017e]"};return c});
(function(c,n){"function"===typeof define&&define.amd?define("microplugin",n):"object"===typeof exports?module.exports=n():c.MicroPlugin=n()})(this,function(){var c={isArray:Array.isArray||function(c){return"[object Array]"===Object.prototype.toString.call(c)}};return{mixin:function(n){n.plugins={};n.prototype.initializePlugins=function(p){var l,n,q=[];this.plugins={names:[],settings:{},requested:{},loaded:{}};if(c.isArray(p))for(l=0,n=p.length;l<n;l++)"string"===typeof p[l]?q.push(p[l]):(this.plugins.settings[p[l].name]=
p[l].options,q.push(p[l].name));else if(p)for(l in p)p.hasOwnProperty(l)&&(this.plugins.settings[l]=p[l],q.push(l));for(;q.length;)this.require(q.shift())};n.prototype.loadPlugin=function(c){var l=this.plugins,s=n.plugins[c];if(!n.plugins.hasOwnProperty(c))throw Error('Unable to find "'+c+'" plugin');l.requested[c]=!0;l.loaded[c]=s.fn.apply(this,[this.plugins.settings[c]||{}]);l.names.push(c)};n.prototype.require=function(c){var l=this.plugins;if(!this.plugins.loaded.hasOwnProperty(c)){if(l.requested[c])throw Error('Plugin has circular dependency ("'+
c+'")');this.loadPlugin(c)}return l.loaded[c]};n.define=function(c,l){n.plugins[c]={name:c,fn:l}}}}});

