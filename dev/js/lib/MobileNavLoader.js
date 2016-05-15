import $ from 'jquery';

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

class MobileNavLoader {
    constructor(){
        this.initialized = false;
    }

    init(){
        if(this.initialized) {
            return;
        }
        this.initialized = true;

        $.ajax({
            /////// prod link
            url:'http://storage.googleapis.com/cmsstatic.mcomnyapps.net/379/data120_idcb.json',//production
            jsonpCallback:'cmsCallback_120',
            dataType:'jsonp',
            success:function(data){
                try {
                    var js = $.grep(data.categories.scripts.entries, function(n){
                        return n.label.indexOf('MobileNav.class')>-1;
                    });
                    if(js.length>0){
                        $.getScript(js[0].file,function(){window.MobileNav.init(data);});
                    }
                } catch(err) {
                    console.error('MobileNavLoader',err);
                }
            },
            error:function(err){
                console.error('MobileNavLoader', err);
            },
            complete:function(){
                $(window).trigger( "MobileNavLoadedComplete");
            }
        })
    }
}

//events available to hook site load into
$(window).on( "MobileNavLoadedBegin", function(event) {
    console.log('Mobile Nav Begin');
});
$(window).on( "MobileNavLoadedComplete", function(event) {
    console.log('Mobile Nav Complete');
});
$(window).on( "MobileNavInjected", function(event) {
    console.log('Mobile Nav Injected');
});
$(window).on( "MobileNavLoadError", function(event) {
    console.log('Mobile Nav Load Error');
});

export default MobileNavLoader;