({
    countDownAction : function(component, event, helper,closeDate) {
        var interval = window.setInterval(
            $A.getCallback(function() {
                var opptyCloseDate = new Date( closeDate+" 00:00:00 ");
                var now_date = new Date();
                var timeDiff = opptyCloseDate.getTime()- now_date.getTime(); // time difference between opportunity close date and todays date  
                component.set("v.isValid",true);
                var seconds=Math.floor(timeDiff/1000); // seconds
                var minutes=Math.floor(seconds/60); //minute
                var hours=Math.floor(minutes/60); //hours
                var days=Math.floor(hours/24); //days
                hours %=24; 
                minutes %=60;
                seconds %=60;
                component.set("v.day",days);
                component.set("v.hour",hours);
                component.set("v.minute",minutes);
                component.set("v.second",seconds);
            }), 1000);     
    }
})
