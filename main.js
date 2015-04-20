var gmail,
    filterapi,
    keyword = "fingiel",
    labelname = "fingiel";

function refresh(f) {
    if( (/in/.test(document.readyState)) || (undefined === Gmail) ) {
        setTimeout('refresh(' + f + ')', 10);
    } else {
        f();
    }
}


var main = function(){
    gmail = new Gmail();
    console.log('Hello,', gmail.get.user_email())
    filterapi = new Gmail_Filter_Api();
    filterapi.set_gmail_params();
    console.log("Filters set!");
    gmail.observe.on('new_email', function(obj) {
        var data = gmail.get.email_data(email_id=obj),
            content = data['threads'][obj]['content_plain'];
        if(content.indexOf(keyword) > -1){
            filterapi.createGmailFilter({"has":keyword,
                                         "markread":true,
                                         "skipinbox":true,
                                         "labelas":labelname});
            console.log("Creating filter with id: " + filterapi.filterid);
        }
    });
}

refresh(main);
