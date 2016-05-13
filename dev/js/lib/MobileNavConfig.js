/*DOCUMENTATION

	headerContainer:null,
	footerContainer:null,
	footer:true,// injects mobile footer.
	menu:[
		{
			label:"", //String that is content of div or a tag in li OR-->
			html:"",// String of html. Either insert html with inline styles OR class names and style within global css
			url:"", // String that is url of link ex: #videos
			className:"", // string that applies a class to the li element
			idName:"",//string that applies an id to the li element
			onclick:"", // javascript to fire when li is clicked, either a function or string that will be inserted into onclick attr
			track:"",// string added as a track attribute to a tag IF paired with url OR to div IF paried with label OR to custom html element IF paired with html
			target:"",//set target attr of link
			style:{},//custom css for elements
			menu:[ // array of objects that lists sub menu items. Will recurviely be looped through to N levels.
				{
					label:"",
					url:"",
					menu:[]
				}
				// etc...
			]
		}
	]
*/
var assetsDirectory = '';

var MobileNavConfig = {
	footerContainer:"#ImpSdkFooterContainer",
	footer:true
}