!function(u){function A(e){if(E[e])return E[e].exports;var n=E[e]={i:e,l:!1,exports:{}};return u[e].call(n.exports,n,n.exports,A),n.l=!0,n.exports}var E={};A.m=u,A.c=E,A.i=function(u){return u},A.d=function(u,E,e){A.o(u,E)||Object.defineProperty(u,E,{configurable:!1,enumerable:!0,get:e})},A.n=function(u){var E=u&&u.__esModule?function(){return u.default}:function(){return u};return A.d(E,"a",E),E},A.o=function(u,A){return Object.prototype.hasOwnProperty.call(u,A)},A.p="",A(A.s=501)}({288:function(u,A){u.exports={destiny:["Dravewin","INFESTINY","FIDGETLOL","Hhhehhehe","GameOfThrows","WORTH","FeedNathan","Abathur","LUL","Heimerdonger","SoSad","DURRSTINY","SURPRISE","NoTears","OverRustle","DuckerZ","Kappa","Klappa","DappaKappa","BibleThump","AngelThump","FrankerZ","BasedGod","OhKrappa","SoDoge","WhoahDude","MotherFuckinGame","DaFeels","UWOTM8","CallCatz","CallChad","DatGeoff","Disgustiny","FerretLOL","Sippy","DestiSenpaii","Nappa","DAFUK","AYYYLMAO","DANKMEMES","MLADY","SOTRIGGERED","MASTERB8","NOTMYTEMPO","LIES","LeRuse","YEE","SWEATSTINY","PEPE","CheekerZ","SpookerZ","SLEEPSTINY","PICNIC","Memegasm","WEEWOO","KappaRoss","ASLAN","DJAslan","TRUMPED","BASEDWATM8","BERN","HmmStiny","PepoThink","FeelsAmazingMan","FeelsBadMan","FeelsGoodMan","OhMyDog","Wowee","haHAA","POTATO","NOBULLY","ChibiDesti","gachiGASM"],twitch:["nathanD","nathanDank","nathanF","nathanNotears","nathanPepe","nathanRustle","nathanTowel","nathanWat","nathanThinking","nathanRuse","nathanYee","nathanWeeb"]}},289:function(u,A,E){"use strict";function e(u){if(Array.isArray(u)){for(var A=0,E=Array(u.length);A<u.length;A++)E[A]=u[A];return E}return Array.from(u)}function n(u,A){if(!(u instanceof A))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(A,"__esModule",{value:!0}),A.UrlFormatter=A.MentionedUserFormatter=A.HtmlTextFormatter=A.GreenTextFormatter=A.EmoteFormatter=void 0;var t=function(){function u(u,A){for(var E=0;E<A.length;E++){var e=A[E];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(u,e.key,e)}}return function(A,E,e){return E&&u(A.prototype,E),e&&u(A,e),A}}(),C=E(70),S=function(u){return u&&u.__esModule?u:{default:u}}(C),O=E(474),I="(?:"+O.join("|")+")",T=document.createElement("div"),R=void 0,a=void 0,r=function(){function u(){n(this,u)}return t(u,[{key:"format",value:function(u,A){arguments.length>2&&void 0!==arguments[2]&&arguments[2];return T.textContent=A,T.innerHTML}}]),u}(),F=function(){function u(){n(this,u)}return t(u,[{key:"format",value:function(u,A){var E=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!R||!a){var n=[].concat(e(u.emoticons)).join("|"),t=[].concat(e(u.twitchemotes)).join("|");R=new RegExp("(^|\\s)("+n+")(?=$|\\s)","gm"),a=new RegExp("(^|\\s)("+n+"|"+t+")(?=$|\\s)","gm")}var C=E&&E.user&&E.user.hasFeature(S.default.SUBSCRIBERT0)||!E||!E.user?a:R;return A.replace(C,'$1<div title="$2" class="chat-emote chat-emote-$2">$2 </div>')}}]),u}(),B=function(){function u(){n(this,u)}return t(u,[{key:"format",value:function(u,A){var E=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return E.user&&0===A.indexOf("&gt;")&&E.user.hasAnyFeatures(S.default.SUBSCRIBER,S.default.SUBSCRIBERT0,S.default.SUBSCRIBERT1,S.default.SUBSCRIBERT2,S.default.SUBSCRIBERT3,S.default.SUBSCRIBERT4,S.default.NOTABLE,S.default.TRUSTED,S.default.CONTRIBUTOR,S.default.COMPCHALLENGE,S.default.ADMIN,S.default.MODERATOR)&&(A='<span class="greentext">'+A+"</span>"),A}}]),u}(),N=function(){function u(){n(this,u)}return t(u,[{key:"format",value:function(u,A){var E=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return E&&E.mentioned&&E.mentioned.length>0?A.replace(new RegExp("((?:^|\\s)@?)("+E.mentioned.join("|")+")(?=$|\\s|[.?!,])","igm"),'$1<span class="chat-user">$2</span>'):A}}]),u}(),i=function(){function u(){n(this,u);var A={"p{L}":"\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0\\u08A2-\\u08AC\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097F\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2183\\u2184\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005\\u3006\\u3031-\\u3035\\u303B\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA697\\uA6A0-\\uA6E5\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA793\\uA7A0-\\uA7AA\\uA7F8-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA80-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC","p{N}":"\\u0030-\\u0039\\u00B2\\u00B3\\u00B9\\u00BC-\\u00BE\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u09F4-\\u09F9\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0B72-\\u0B77\\u0BE6-\\u0BF2\\u0C66-\\u0C6F\\u0C78-\\u0C7E\\u0CE6-\\u0CEF\\u0D66-\\u0D75\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F33\\u1040-\\u1049\\u1090-\\u1099\\u1369-\\u137C\\u16EE-\\u16F0\\u17E0-\\u17E9\\u17F0-\\u17F9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19DA\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\u2070\\u2074-\\u2079\\u2080-\\u2089\\u2150-\\u2182\\u2185-\\u2189\\u2460-\\u249B\\u24EA-\\u24FF\\u2776-\\u2793\\u2CFD\\u3007\\u3021-\\u3029\\u3038-\\u303A\\u3192-\\u3195\\u3220-\\u3229\\u3248-\\u324F\\u3251-\\u325F\\u3280-\\u3289\\u32B1-\\u32BF\\uA620-\\uA629\\uA6E6-\\uA6EF\\uA830-\\uA835\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19","p{Sc}":"\\u0024\\u00A2-\\u00A5\\u058F\\u060B\\u09F2\\u09F3\\u09FB\\u0AF1\\u0BF9\\u0E3F\\u17DB\\u20A0-\\u20B9\\uA838\\uFDFC\\uFE69\\uFF04\\uFFE0\\uFFE1\\uFFE5\\uFFE6","p{Sk}":"\\u005E\\u0060\\u00A8\\u00AF\\u00B4\\u00B8\\u02C2-\\u02C5\\u02D2-\\u02DF\\u02E5-\\u02EB\\u02ED\\u02EF-\\u02FF\\u0375\\u0384\\u0385\\u1FBD\\u1FBF-\\u1FC1\\u1FCD-\\u1FCF\\u1FDD-\\u1FDF\\u1FED-\\u1FEF\\u1FFD\\u1FFE\\u309B\\u309C\\uA700-\\uA716\\uA720\\uA721\\uA789\\uA78A\\uFBB2-\\uFBC1\\uFF3E\\uFF40\\uFFE3","p{So}":"\\u00A6\\u00A9\\u00AE\\u00B0\\u0482\\u060E\\u060F\\u06DE\\u06E9\\u06FD\\u06FE\\u07F6\\u09FA\\u0B70\\u0BF3-\\u0BF8\\u0BFA\\u0C7F\\u0D79\\u0F01-\\u0F03\\u0F13\\u0F15-\\u0F17\\u0F1A-\\u0F1F\\u0F34\\u0F36\\u0F38\\u0FBE-\\u0FC5\\u0FC7-\\u0FCC\\u0FCE\\u0FCF\\u0FD5-\\u0FD8\\u109E\\u109F\\u1390-\\u1399\\u1940\\u19DE-\\u19FF\\u1B61-\\u1B6A\\u1B74-\\u1B7C\\u2100\\u2101\\u2103-\\u2106\\u2108\\u2109\\u2114\\u2116\\u2117\\u211E-\\u2123\\u2125\\u2127\\u2129\\u212E\\u213A\\u213B\\u214A\\u214C\\u214D\\u214F\\u2195-\\u2199\\u219C-\\u219F\\u21A1\\u21A2\\u21A4\\u21A5\\u21A7-\\u21AD\\u21AF-\\u21CD\\u21D0\\u21D1\\u21D3\\u21D5-\\u21F3\\u2300-\\u2307\\u230C-\\u231F\\u2322-\\u2328\\u232B-\\u237B\\u237D-\\u239A\\u23B4-\\u23DB\\u23E2-\\u23F3\\u2400-\\u2426\\u2440-\\u244A\\u249C-\\u24E9\\u2500-\\u25B6\\u25B8-\\u25C0\\u25C2-\\u25F7\\u2600-\\u266E\\u2670-\\u26FF\\u2701-\\u2767\\u2794-\\u27BF\\u2800-\\u28FF\\u2B00-\\u2B2F\\u2B45\\u2B46\\u2B50-\\u2B59\\u2CE5-\\u2CEA\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u2FF0-\\u2FFB\\u3004\\u3012\\u3013\\u3020\\u3036\\u3037\\u303E\\u303F\\u3190\\u3191\\u3196-\\u319F\\u31C0-\\u31E3\\u3200-\\u321E\\u322A-\\u3247\\u3250\\u3260-\\u327F\\u328A-\\u32B0\\u32C0-\\u32FE\\u3300-\\u33FF\\u4DC0-\\u4DFF\\uA490-\\uA4C6\\uA828-\\uA82B\\uA836\\uA837\\uA839\\uAA77-\\uAA79\\uFDFD\\uFFE4\\uFFE8\\uFFED\\uFFEE\\uFFFC\\uFFFD"},E=A["p{L}"],e=A["p{N}"],t=E+e,C=t+"/\\-+=_&~*%@|#.,:;'?!"+A["p{Sc}"]+A["p{Sk}"]+A["p{So}"],S=t+"/\\-+=_&~*%;"+A["p{Sc}"],O="["+t+"](?:["+t+"\\-]*["+t+"])?",T="(?:"+O+"\\.)+",R="(?:"+T+I+"|(?:\\b(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\\.(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\\.(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\\.(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\\b))",a="\\[["+C+"]*(?:\\[["+C+"]*\\]["+C+"]*)*\\]",r="\\(["+C+"]*(?:\\(["+C+"]*\\)["+C+"]*)*\\)",F=r+"|"+a,B="(?:["+C+"]*(?:"+F+"|["+S+"])+)+",N="(?:"+B+"|/|\\b|$)",i="(?:"+R+"(?::[0-9]+)?/"+N+")|(?:"+R+"(?::[0-9]+)?(?:\\b|$))",o="\\b(https?|ftp|wss?)://"+B,D=o+"|"+i;this.linkregex=new RegExp(D,"gi"),this._elem=$("<div></div>")}return t(u,[{key:"encodeUrl",value:function(u){return u.replace(/&/g,"&amp;").replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,function(u){return"&#"+(1024*(u.charCodeAt(0)-55296)+(u.charCodeAt(1)-56320)+65536)+";"}).replace(/([^\#-~| |!])/g,function(u){return"&#"+u.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}},{key:"format",value:function(u,A){arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(A){var E=this,e="";return/\b(?:NSFL)\b/i.test(A)?e="nsfl-link":/\b(?:NSFW|SPOILER)\b/i.test(A)&&(e="nsfw-link"),A.replace(E.linkregex,function(u,A){A=A?"":"http://";var n=E._elem.html(u).text(),t=n.match(E.linkregex);if(t){u=E.encodeUrl(t[0]);var C=E.encodeUrl(n.substring(t[0].length));return'<a target="_blank" class="externallink '+e+'" href="'+(A+u)+'" rel="nofollow">'+u+"</a>"+C}return u})}}}]),u}();A.EmoteFormatter=F,A.GreenTextFormatter=B,A.HtmlTextFormatter=r,A.MentionedUserFormatter=N,A.UrlFormatter=i},474:function(u,A){u.exports=["NORTHWESTERNMUTUAL","TRAVELERSINSURANCE","AMERICANEXPRESS","KERRYPROPERTIES","SANDVIKCOROMANT","AFAMILYCOMPANY","AMERICANFAMILY","BANANAREPUBLIC","CANCERRESEARCH","COOKINGCHANNEL","KERRYLOGISTICS","WEATHERCHANNEL","INTERNATIONAL","LIFEINSURANCE","SPREADBETTING","TRAVELCHANNEL","WOLTERSKLUWER","CONSTRUCTION","LPLFINANCIAL","PAMPEREDCHEF","SCHOLARSHIPS","VERSICHERUNG","ACCOUNTANTS","BARCLAYCARD","BLACKFRIDAY","BLOCKBUSTER","BRIDGESTONE","CALVINKLEIN","CONTRACTORS","CREDITUNION","ENGINEERING","ENTERPRISES","FOODNETWORK","INVESTMENTS","KERRYHOTELS","LAMBORGHINI","MOTORCYCLES","OLAYANGROUP","PHOTOGRAPHY","PLAYSTATION","PRODUCTIONS","PROGRESSIVE","REDUMBRELLA","RIGHTATHOME","WILLIAMHILL","ACCOUNTANT","APARTMENTS","ASSOCIATES","BASKETBALL","BNPPARIBAS","BOEHRINGER","CAPITALONE","CONSULTING","CREDITCARD","CUISINELLA","EUROVISION","EXTRASPACE","FOUNDATION","HEALTHCARE","IMMOBILIEN","INDUSTRIES","MANAGEMENT","MITSUBISHI","NATIONWIDE","NEWHOLLAND","NEXTDIRECT","ONYOURSIDE","PROPERTIES","PROTECTION","PRUDENTIAL","REALESTATE","REPUBLICAN","RESTAURANT","SCHAEFFLER","SWIFTCOVER","TATAMOTORS","TECHNOLOGY","TELEFONICA","UNIVERSITY","VISTAPRINT","VLAANDEREN","VOLKSWAGEN","ACCENTURE","ALFAROMEO","ALLFINANZ","AMSTERDAM","ANALYTICS","AQUARELLE","BARCELONA","BLOOMBERG","CHRISTMAS","COMMUNITY","DIRECTORY","EDUCATION","EQUIPMENT","FAIRWINDS","FINANCIAL","FIRESTONE","FRESENIUS","FRONTDOOR","FUJIXEROX","FURNITURE","GOLDPOINT","GOODHANDS","HISAMITSU","HOMEDEPOT","HOMEGOODS","HOMESENSE","HONEYWELL","INSTITUTE","INSURANCE","KUOKGROUP","LADBROKES","LANCASTER","LANDROVER","LIFESTYLE","MARKETING","MARSHALLS","MCDONALDS","MELBOURNE","MICROSOFT","MONTBLANC","PANASONIC","PASSAGENS","PRAMERICA","RICHARDLI","SCJOHNSON","SHANGRILA","SOLUTIONS","STATEBANK","STATEFARM","STOCKHOLM","TRAVELERS","VACATIONS","YODOBASHI","ABUDHABI","AIRFORCE","ALLSTATE","ATTORNEY","BARCLAYS","BAREFOOT","BARGAINS","BASEBALL","BOUTIQUE","BRADESCO","BROADWAY","BRUSSELS","BUDAPEST","BUILDERS","BUSINESS","CAPETOWN","CATERING","CATHOLIC","CHRYSLER","CIPRIANI","CITYEATS","CLEANING","CLINIQUE","CLOTHING","COMMBANK","COMPUTER","DELIVERY","DELOITTE","DEMOCRAT","DIAMONDS","DISCOUNT","DISCOVER","DOWNLOAD","ENGINEER","ERICSSON","ESURANCE","ETISALAT","EVERBANK","EXCHANGE","FEEDBACK","FIDELITY","FIRMDALE","FOOTBALL","FRONTIER","GOODYEAR","GRAINGER","GRAPHICS","GUARDIAN","HDFCBANK","HELSINKI","HOLDINGS","HOSPITAL","INFINITI","IPIRANGA","ISTANBUL","JPMORGAN","LIGHTING","LUNDBECK","MARRIOTT","MASERATI","MCKINSEY","MEMORIAL","MORTGAGE","MOVISTAR","OBSERVER","PARTNERS","PHARMACY","PICTURES","PLUMBING","PROPERTY","REDSTONE","RELIANCE","SAARLAND","SAMSCLUB","SECURITY","SERVICES","SHOPPING","SHOWTIME","SOFTBANK","SOFTWARE","STCGROUP","SUPPLIES","SYMANTEC","TELECITY","TRAINING","UCONNECT","VANGUARD","VENTURES","VERISIGN","WOODSIDE","YOKOHAMA","ABOGADO","ACADEMY","AGAKHAN","ALIBABA","ANDROID","ATHLETA","AUCTION","AUDIBLE","AUSPOST","AVIANCA","BANAMEX","BAUHAUS","BENTLEY","BESTBUY","BOOKING","BROTHER","BUGATTI","CAPITAL","CARAVAN","CAREERS","CARTIER","CHANNEL","CHINTAI","CITADEL","CLUBMED","COLLEGE","COLOGNE","COMCAST","COMPANY","COMPARE","CONTACT","COOKING","CORSICA","COUNTRY","COUPONS","COURSES","CRICKET","CRUISES","DENTIST","DIGITAL","DOMAINS","EXPOSED","EXPRESS","FARMERS","FASHION","FERRARI","FERRERO","FINANCE","FISHING","FITNESS","FLIGHTS","FLORIST","FLOWERS","FORSALE","FROGANS","FUJITSU","GALLERY","GENTING","GODADDY","GROCERY","GUITARS","HAMBURG","HANGOUT","HITACHI","HOLIDAY","HOSTING","HOTELES","HOTMAIL","HYUNDAI","ISELECT","ISMAILI","JEWELRY","JUNIPER","KITCHEN","KOMATSU","LACAIXA","LANCOME","LANXESS","LASALLE","LATROBE","LECLERC","LIAISON","LIMITED","LINCOLN","MARKETS","METLIFE","MONSTER","NETBANK","NETFLIX","NETWORK","NEUSTAR","OKINAWA","OLDNAVY","ORGANIC","ORIGINS","PANERAI","PHILIPS","PIONEER","POLITIE","REALTOR","RECIPES","RENTALS","REVIEWS","REXROTH","SAMSUNG","SANDVIK","SCHMIDT","SCHWARZ","SCIENCE","SHIKSHA","SHRIRAM","SINGLES","SPIEGEL","STAPLES","STARHUB","STATOIL","STORAGE","SUPPORT","SURGERY","SYSTEMS","TEMASEK","THEATER","THEATRE","TICKETS","TIFFANY","TOSHIBA","TRADING","WALMART","WANGGOU","WATCHES","WEATHER","WEBSITE","WEDDING","WHOSWHO","WINDOWS","WINNERS","XFINITY","YAMAXUN","YOUTUBE","ZUERICH","ABARTH","ABBOTT","ABBVIE","ACTIVE","AFRICA","AGENCY","AIRBUS","AIRTEL","ALIPAY","ALSACE","ALSTOM","ANQUAN","ARAMCO","AUTHOR","BAYERN","BEAUTY","BERLIN","BHARTI","BLANCO","BOSTIK","BOSTON","BROKER","CAMERA","CAREER","CASEIH","CASINO","CENTER","CHANEL","CHROME","CHURCH","CIRCLE","CLAIMS","CLINIC","COFFEE","COMSEC","CONDOS","COUPON","CREDIT","CRUISE","DATING","DATSUN","DEALER","DEGREE","DENTAL","DESIGN","DIRECT","DOCTOR","DUNLOP","DUPONT","DURBAN","EMERCK","ENERGY","ESTATE","EVENTS","EXPERT","FAMILY","FLICKR","FUTBOL","GALLUP","GARDEN","GEORGE","GIVING","GLOBAL","GOOGLE","GRATIS","HEALTH","HERMES","HIPHOP","HOCKEY","HOTELS","HUGHES","IMAMAT","INSURE","INTUIT","JAGUAR","JOBURG","JUEGOS","KAUFEN","KINDER","KINDLE","KOSHER","LANCIA","LATINO","LAWYER","LEFRAK","LIVING","LOCKER","LONDON","LUXURY","MADRID","MAISON","MAKEUP","MARKET","MATTEL","MOBILE","MOBILY","MONASH","MORMON","MOSCOW","MUSEUM","MUTUAL","NAGOYA","NATURA","NISSAN","NISSAY","NORTON","NOWRUZ","OFFICE","OLAYAN","ONLINE","ORACLE","ORANGE","OTSUKA","PFIZER","PHOTOS","PHYSIO","PIAGET","PICTET","QUEBEC","RACING","REALTY","REISEN","REPAIR","REPORT","REVIEW","ROCHER","ROGERS","RYUKYU","SAFETY","SAKURA","SANOFI","SCHOOL","SCHULE","SEARCH","SECURE","SELECT","SHOUJI","SOCCER","SOCIAL","STREAM","STUDIO","SUPPLY","SUZUKI","SWATCH","SYDNEY","TAIPEI","TAOBAO","TARGET","TATTOO","TENNIS","TIENDA","TJMAXX","TKMAXX","TOYOTA","TRAVEL","UNICOM","VIAJES","VIKING","VILLAS","VIRGIN","VISION","VOTING","VOYAGE","VUELOS","WALTER","WARMAN","WEBCAM","XIHUAN","XPERIA","YACHTS","YANDEX","ZAPPOS","ACTOR","ADULT","AETNA","AMFAM","AMICA","APPLE","ARCHI","AUDIO","AUTOS","AZURE","BAIDU","BEATS","BIBLE","BINGO","BLACK","BOATS","BOOTS","BOSCH","BUILD","CANON","CARDS","CHASE","CHEAP","CHLOE","CISCO","CITIC","CLICK","CLOUD","COACH","CODES","CROWN","CYMRU","DABUR","DANCE","DEALS","DELTA","DODGE","DRIVE","DUBAI","EARTH","EDEKA","EMAIL","EPOST","EPSON","FAITH","FEDEX","FINAL","FOREX","FORUM","GALLO","GAMES","GIFTS","GIVES","GLADE","GLASS","GLOBO","GMAIL","GREEN","GRIPE","GROUP","GUCCI","GUIDE","HOMES","HONDA","HORSE","HOUSE","HYATT","IKANO","INTEL","IRISH","IVECO","JETZT","KOELN","KYOTO","LAMER","LEASE","LEGAL","LEXUS","LILLY","LINDE","LIPSY","LIXIL","LOANS","LOCUS","LOTTE","LOTTO","LUPIN","MACYS","MANGO","MEDIA","MIAMI","MONEY","MOPAR","MOVIE","NADEX","NEXUS","NIKON","NINJA","NOKIA","NOWTV","OMEGA","OSAKA","PARIS","PARTS","PARTY","PHONE","PHOTO","PIZZA","PLACE","POKER","PRAXI","PRESS","PRIME","PROMO","QUEST","RADIO","REHAB","REISE","RICOH","ROCKS","RODEO","RUGBY","SALON","SENER","SEVEN","SHARP","SHELL","SHOES","SKYPE","SLING","SMART","SMILE","SOLAR","SPACE","STADA","STORE","STUDY","STYLE","SUCKS","SWISS","TATAR","TIRES","TIROL","TMALL","TODAY","TOKYO","TOOLS","TORAY","TOTAL","TOURS","TRADE","TRUST","TUNES","TUSHU","UBANK","VEGAS","VIDEO","VISTA","VODKA","VOLVO","WALES","WATCH","WEBER","WEIBO","WORKS","WORLD","XEROX","YAHOO","ZIPPO","local","onion","AARP","ABLE","ADAC","AERO","AIGO","AKDN","ALLY","AMEX","ARAB","ARMY","ARPA","ARTE","ASDA","ASIA","AUDI","AUTO","BABY","BAND","BANK","BBVA","BEER","BEST","BIKE","BING","BLOG","BLUE","BOFA","BOND","BOOK","BUZZ","CAFE","CALL","CAMP","CARE","CARS","CASA","CASE","CASH","CBRE","CERN","CHAT","CITI","CITY","CLUB","COOL","COOP","CYOU","DATA","DATE","DCLK","DEAL","DELL","DESI","DIET","DISH","DOCS","DOHA","DUCK","DUNS","DVAG","ERNI","FAGE","FAIL","FANS","FARM","FAST","FIAT","FIDO","FILM","FIRE","FISH","FLIR","FOOD","FORD","FREE","FUND","GAME","GBIZ","GENT","GGEE","GIFT","GMBH","GOLD","GOLF","GOOG","GUGE","GURU","HAIR","HAUS","HDFC","HELP","HERE","HGTV","HOST","HSBC","ICBC","IEEE","IMDB","IMMO","INFO","ITAU","JAVA","JEEP","JOBS","JPRS","KDDI","KIWI","KPMG","KRED","LAND","LEGO","LGBT","LIDL","LIFE","LIKE","LIMO","LINK","LIVE","LOAN","LOFT","LOVE","LTDA","LUXE","MAIF","MEET","MEME","MENU","MINI","MINT","MOBI","MODA","MOTO","NAME","NAVY","NEWS","NEXT","NICO","NIKE","OLLO","OPEN","PAGE","PARS","PCCW","PICS","PING","PINK","PLAY","PLUS","POHL","PORN","POST","PROD","PROF","QPON","RAID","READ","REIT","RENT","REST","RICH","RMIT","ROOM","RSVP","RUHR","SAFE","SALE","SAPO","SARL","SAVE","SAXO","SCOR","SCOT","SEAT","SEEK","SEXY","SHAW","SHIA","SHOP","SHOW","SILK","SINA","SITE","SKIN","SNCF","SOHU","SONG","SONY","SPOT","STAR","SURF","TALK","TAXI","TEAM","TECH","TEVA","TIAA","TIPS","TOWN","TOYS","TUBE","VANA","VISA","VIVA","VIVO","VOTE","VOTO","WANG","WEIR","WIEN","WIKI","WINE","WORK","XBOX","YOGA","ZARA","ZERO","ZONE","exit","zkey","AAA","ABB","ABC","ACO","ADS","AEG","AFL","AIG","ANZ","AOL","APP","ART","AWS","AXA","BAR","BBC","BBT","BCG","BCN","BET","BID","BIO","BIZ","BMS","BMW","BNL","BOM","BOO","BOT","BOX","BUY","BZH","CAB","CAL","CAM","CAR","CAT","CBA","CBN","CBS","CEB","CEO","CFA","CFD","COM","CRS","CSC","DAD","DAY","DDS","DEV","DHL","DIY","DNP","DOG","DOT","DTV","DVR","EAT","ECO","EDU","ESQ","EUS","FAN","FIT","FLY","FOO","FOX","FRL","FTR","FUN","FYI","GAL","GAP","GDN","GEA","GLE","GMO","GMX","GOO","GOP","GOT","GOV","HBO","HIV","HKT","HOT","HOW","HTC","IBM","ICE","ICU","IFM","ING","INK","INT","IST","ITV","IWC","JCB","JCP","JIO","JLC","JLL","JMP","JNJ","JOT","JOY","KFH","KIA","KIM","KPN","KRD","LAT","LAW","LDS","LOL","LPL","LTD","MAN","MAP","MBA","MCD","MED","MEN","MEO","MIL","MIT","MLB","MLS","MMA","MOE","MOI","MOM","MOV","MSD","MTN","MTR","NAB","NBA","NEC","NET","NEW","NFL","NGO","NHK","NOW","NRA","NRW","NTT","NYC","OBI","OFF","ONE","ONG","ONL","OOO","ORG","OTT","OVH","PAY","PET","PHD","PID","PIN","PNC","PRO","PRU","PUB","PWC","QVC","RED","REN","RIL","RIO","RIP","RUN","RWE","SAP","SAS","SBI","SBS","SCA","SCB","SES","SEW","SEX","SFR","SKI","SKY","SOY","SRL","SRT","STC","TAB","TAX","TCI","TDK","TEL","THD","TJX","TOP","TRV","TUI","TVS","UBS","UNO","UOL","UPS","VET","VIG","VIN","VIP","WED","WIN","WME","WOW","WTC","WTF","XIN","XXX","XYZ","YOU","YUN","ZIP","bit","gnu","i2p","AC","AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BM","BN","BO","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ER","ES","ET","EU","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","ST","SU","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UK","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"]},491:function(u,A,E){"use strict";var e=E(289),n=E(288),t={emoticons:n.destiny,twitchemotes:n.twitch},C=[new e.HtmlTextFormatter,new e.UrlFormatter,new e.EmoteFormatter];$(function(){$("#compose.message-composition").each(function(){var u=$("#compose"),A=u.find(".modal-message"),E=u.find("#compose-form"),e=$("#alerts-container"),n=E.find("textarea#compose-message"),t=E.find("input#compose-recipients"),C=E.find(".modal-recipients .recipient-container"),S=E.find("button#modal-send-btn"),O=E.find("button#modal-close-btn"),I=E.find(".modal-user-groups"),T=!1,R=function(){E.find("button,input,textarea").attr("disabled","disabled")},a=function(){E.find("button,input,textarea").removeAttr("disabled")},r=function(){n.val(""),t.val(""),C.empty(),A.hide(),a()},F=function(){var E=n.val(),t=i();return 0===t.length?void A.show().html('<span class="text-danger">Recipients required</span>'):""===E.trim()?void A.show().html('<span class="text-danger">Message required</span>'):E.trim().length>500?void A.show().html('<span class="text-danger">Your message cannot be longer than 500 characters</span>'):(R(),A.show().html('<i class="fa fa-cog fa-spin"></i> Sending message ...'),T=!0,void $.ajax({type:"post",url:"/profile/messages/send",data:{recipients:t,message:E}}).always(function(){return T=!1}).fail(function(u){return A.show().html('<span class="text-danger">'+u.status+": "+u.statusText+"</span>")}).done(function(E){!0===E.success?(e.show().html('<div class="alert alert-info"><strong>Sent!</strong> Your message has been sent.</div>'),window.setTimeout(function(){return e.hide()},3e3),u.modal("hide")):(A.show().html('<span class="text-danger">'+E.message+"</span>"),a())}))},B=function(u){return u.split(" ").filter(function(u){return 0===u.search(/^[A-Z0-9_]{3,20}$/i)})},N=function(u,A){var E=u.toLowerCase();A=["recipient",A],C.find('.recipient[data-recipient="'+E+'"]').get(0)||C.append('<span class="'+A.join(" ")+'" data-recipient="'+E+'"><span class="recipient-name">'+u+'</span><i class="glyphicon glyphicon-remove remove-recipient" title="Remove"></i></span>')},i=function(){return C.find(".recipient").get().map(function(u){return $(u).data("recipient")})};u.on("keydown",function(){return A.hide()}),u.on("shown.bs.modal",function(u){return $(u.currentTarget).find("input#compose-recipients").focus()}),u.on("hidden.bs.modal",function(){T||r()}),u.on("click",".remove-recipient",function(u){return $(u.currentTarget).closest(".recipient").remove()}),u.on("change","input#compose-recipients",function(){B($(this).val()).forEach(N),t.val("")}),u.on("keypress","input#compose-recipients",function(u){var A=/[;:,']/i,E=u.which;(32===E||13===E||A.test(String.fromCharCode(E)))&&(B($(this).val()).forEach(N),t.val(""),u.preventDefault(),u.stopPropagation()),t.focus()}),O.on("click",function(){return u.modal("hide")}),S.on("click",F),n.on("keydown",function(u){u.ctrlKey&&13===u.keyCode&&(F(),u.preventDefault(),u.stopPropagation())}),I.on("click",".groups a",function(u){return N($(u.currentTarget).text(),"group")}),$("#message-reply").on("click",function(A){u.unbind("shown.bs.modal").on("shown.bs.modal",function(u){return $(u.currentTarget).find("textarea").focus()}),u.find("#composeLabel").text("Reply ..."),u.find(".modal-recipients,.modal-settings,.modal-user-groups").hide(),t.val(""),C.empty(),N($(A.currentTarget).data("replyto"))})})}),$(function(){var u=$("table#inbox");if(u.length>0){var A=function(A){R+=25,F.fadeOut();var E=u.find("tbody"),e=(A.length?A:[]).map(function(u){var A=u.message.trim();return C.forEach(function(u){return A=u.format(t,A)}),'<tr data-id="'+u.userid+'" data-username="'+u.user+'" class="'+(u.unread<=0?"read":"unread")+'"><td class="from"><a href="/profile/messages/'+u.userid+'">'+u.user+'</a> <span class="count">('+(u.unread>0?u.unread:parseInt(u.read)+parseInt(u.unread))+')</span></td><td class="message"><span>'+A+'</span></td><td class="timestamp">'+u.timestamp+"</td></tr>"});E.append(e.join("")+(e.length?"<hr />":"")),a.toggle(e.length>20),u.toggle(e.length>0),r.toggle(0===e.length)},E=function(){return F.fadeIn(),$.ajax({url:"/api/messages/inbox",data:{s:R}}).done(A).fail(console.error)},e=function(){$(this).find("i").attr("class","fa fa-dot-circle-o"),$(this).addClass("active")},n=function(){$(this).find("i").attr("class","fa fa-circle-o"),$(this).removeClass("active")},S=function(u){var A=$(this);u.preventDefault(),u.stopPropagation(),A.hasClass("active")?n.apply(A):e.apply(A)},O=function(u){var A=$(this),E=A.data("id");void 0!==E&&(u.preventDefault(),u.stopPropagation(),window.location.href="/profile/messages/"+encodeURIComponent(E))},I=function(){$(this).addClass("pressed")},T=function(){$(this).removeClass("pressed")};u.each(function(u,A){$(A).on("click","tbody tr",O).on("click","tbody td.selector",S).on("mousedown","tbody tr",I).on("mouseup","tbody tr",T)}),$("#mark-all").on("click",function(){return $.ajax({url:"/api/messages/open"}).always(function(){return window.location.reload()}),!1});var R=0,a=$("#inbox-show-more"),r=$("#inbox-empty"),F=$("#inbox-loading");a.on("click",E),E()}}),$(function(){var u=$("#message-list"),A=u.data("userid"),E=u.data("username"),e=(u.find(".message"),u.find("#message-container")),n=u.find("#message-list-loading"),S=u.find("#message-list-more");if(u.length>0){var O=function(u){T+=10,n.fadeOut(),S.show(),S.attr("disabled",u&&0!==u.length?null:"disabled");var E=(u.length?u:[]).reverse().map(function(u){var E=u.message.trim();C.forEach(function(u){return E=u.format(t,E)});var e=parseInt(A)!==parseInt(u.userid),n=[];return n.push("message-active"),n.push("message-"+(e?"me":"notme")),n.push(1===u.isread?"message-read":"message-unread"),'<div id="'+u.id+'" class="message '+n.join(" ")+' content"><div class="message-from"><div class="message-date pull-right"><i class="fa message-list-item-status pull-right '+(e?"read":"unread")+'"></i>  '+u.timestamp+'</div><span title="'+u.from+'">'+u.from+'</span></div><div class="message-content"><div class="message-txt">'+E+"</div></div></div>"});e.prepend(E.join("")+(E.length?"<hr />":""))},I=function(){return n.fadeIn(),$.ajax({url:"/api/messages/usr/"+encodeURIComponent(E.toLowerCase())+"/inbox",data:{s:T}}).always(O)},T=0;S.on("click",function(){return I().done(function(){return window.scrollTo(0,0)})}),I().done(function(){return window.scrollTo(0,document.body.scrollHeight)})}})},501:function(u,A,E){"use strict";E(491)},70:function(u,A,E){"use strict";function e(u,A){if(!(u instanceof A))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(A,"__esModule",{value:!0});var n=function(){function u(u,A){for(var E=0;E<A.length;E++){var e=A[E];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(u,e.key,e)}}return function(A,E,e){return E&&u(A.prototype,E),e&&u(A,e),A}}(),t=function(){function u(A,E,n){e(this,u),this.id=A,this.name=E,this.label=n}return n(u,[{key:"toString",value:function(){return this.id}},{key:"equals",value:function(u){return 0===this.id.localeCompare(u)}}]),u}(),C={PROTECTED:new t("protected","PROTECTED","Protected"),SUBSCRIBER:new t("subscriber","SUBSCRIBER","Subscriber"),SUBSCRIBERT0:new t("flair9","SUBSCRIBERT0","Twitch subscriber"),SUBSCRIBERT1:new t("flair13","SUBSCRIBERT1","Subscriber (T1)"),SUBSCRIBERT2:new t("flair1","SUBSCRIBERT2","Subscriber (T2)"),SUBSCRIBERT3:new t("flair3","SUBSCRIBERT3","Subscriber (T3)"),SUBSCRIBERT4:new t("flair8","SUBSCRIBERT4","Subscriber (T4)"),VIP:new t("vip","VIP","VIP"),MODERATOR:new t("moderator","MODERATOR","Moderator"),ADMIN:new t("admin","ADMIN","Admin"),BROADCASTER:new t("flair12","BROADCASTER","Broadcaster"),BOT:new t("bot","BOT","Bot"),BOT2:new t("flair11","BOT2","Bot2"),NOTABLE:new t("flair2","NOTABLE","Notable"),TRUSTED:new t("flair4","TRUSTED","Trusted"),CONTRIBUTOR:new t("flair5","CONTRIBUTOR","Contributor"),COMPCHALLENGE:new t("flair6","COMPCHALLENGE","Composition winner"),EVE:new t("flair7","EVE","EVE"),SC2:new t("flair10","SC2","Starcraft 2")},S=new Map([["protected",C.PROTECTED],["subscriber",C.SUBSCRIBER],["flair9",C.SUBSCRIBERT0],["flair1",C.SUBSCRIBERT2],["flair13",C.SUBSCRIBERT1],["flair3",C.SUBSCRIBERT3],["flair8",C.SUBSCRIBERT4],["vip",C.VIP],["moderator",C.MODERATOR],["admin",C.ADMIN],["flair12",C.BROADCASTER],["bot",C.BOT],["flair11",C.BOT2],["flair2",C.NOTABLE],["flair4",C.TRUSTED],["flair5",C.CONTRIBUTOR],["flair6",C.COMPCHALLENGE],["flair7",C.EVE],["flair10",C.SC2]]);C.valueOf=function(u){return S.get(u.toLowerCase())||null},A.default=C}});