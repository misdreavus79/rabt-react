var MobileNavLoader = (function(){
    var initialized = false;

    function init(){
        if(initialized) return;
        initialized = true;

        $.ajax({
            //////////  staging link
//            url:'http://cmsmacys.aws.af.cm/?service=feed_dev&noheader=1&project_id=120',//test

            /////// prod link
            url:'http://storage.googleapis.com/cmsstatic.mcomnyapps.net/379/data120_idcb.json',//production
            jsonpCallback:'cmsCallback_120',
            dataType:'jsonp',
            success:function(data){
                $(window).trigger( "MobileNavLoadedBegin");
                try {
                    var js = $.grep(data.categories.scripts.entries, function(n){
                        return n.label.indexOf('MobileNav.class')>-1;
                    });
                    if(js.length>0){
//                        window.MobileNav.init(data);
                        $.getScript(js[0].file,function(){window.MobileNav.init(data);});
                    }
                } catch(err) {
                    console.error('MobileNavLoader',err);
                }
            },
            error:function(err){
                console.error('MobileNavLoader', err);
                $(window).trigger( "MobileNavLoadError");
            },
            complete:function(){
                $(window).trigger( "MobileNavLoadedComplete");
            }
        })
    }
    return {
        init:init
    }
})();

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