class FollowToggle{
    constructor($el){
        this.$el = $el;
        this.userID = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        this.handlerClick = this.handleClick.bind(this);
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.empty();
            this.$el.append("Follow!");
        } else {
            this.$el.empty();
            this.$el.append("unfollow");
        }
    }

    handleClick(event){
        debugger
        event.preventDefault();
        const promise = $.ajax({
            method: (this.followState === 'followed') ? "DELETE" : "POST",
            url: `/users/${this.userID}/follow`
        });
        const successCb = ()=>{
            debugger
                if(this.followState === 'followed'){
                    this.followState = 'unfollowed';
                }else{
                    this.followState = 'followed';
                }
                debugger
                this.render();
                debugger
            };
        promise.then(successCb);
    }




    // handleClick(event){ 
    //     this.$el.click((event)=>{
    //         // debugger
    //         event.preventDefault();
    //         const promise = $.ajax({
    //             method: (this.followState === 'followed') ? "DELETE" : "POST",
    //             url: `/users/${this.userID}/follow`
    //         });
    //         const successCb = function(){
    //             if(this.followState === 'followed'){
    //                 debugger
    //                 this.followState = 'unfollowed';
    //             }else{
    //                 // debugger
    //                 this.followState = 'followed';
    //             }
    //             // debugger
    //             this.render();
    //             // debugger
    //         }.bind(this);
    //         promise.then(successCb);
    //     });
    // }

    // render(){
    //     if(this.followState === "unfollowed"){
    //         this.followState = "followed";
    //     }else{
    //         this.followState = "unfollowed";
    //     }
    // }

}

module.exports = FollowToggle;