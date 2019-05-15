const FollowToggle = require("./follow_toggle.js");

$(()=>{
    let $buttons = $(".follow-toggle");
    $buttons.each((index, $el) => {
        let followToggle = new FollowToggle($($el));
        $($el).click(followToggle.handlerClick);
    });

});

