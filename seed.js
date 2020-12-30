var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
   {
		name        : "Camp Exotica, Kullu",
		img         : "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Massa massa ultricies mi quis hendrerit dolor magna eget. Sed blandit libero volutpat sed. Vel fringilla est ullamcorper eget nulla. Magna ac placerat vestibulum lectus mauris ultrices eros in. Ornare arcu odio ut sem. Nunc faucibus a pellentesque sit amet porttitor eget. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Odio tempor orci dapibus ultrices in iaculis. Tortor consequat id porta nibh venenatis cras sed felis eget. Aenean pharetra magna ac placerat vestibulum lectus. Pharetra magna ac placerat vestibulum. Donec enim diam vulputate ut pharetra sit amet aliquam. Quam viverra orci sagittis eu volutpat odio facilisis mauris."
	},
	{
		name        : "West Ladakh Camp, Ladakh",
		img         : "https://images.unsplash.com/photo-1490452322586-70484206da38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Massa massa ultricies mi quis hendrerit dolor magna eget. Sed blandit libero volutpat sed. Vel fringilla est ullamcorper eget nulla. Magna ac placerat vestibulum lectus mauris ultrices eros in. Ornare arcu odio ut sem. Nunc faucibus a pellentesque sit amet porttitor eget. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Odio tempor orci dapibus ultrices in iaculis. Tortor consequat id porta nibh venenatis cras sed felis eget. Aenean pharetra magna ac placerat vestibulum lectus. Pharetra magna ac placerat vestibulum. Donec enim diam vulputate ut pharetra sit amet aliquam. Quam viverra orci sagittis eu volutpat odio facilisis mauris."
	},
	{
		name        : "Rishikesh Valley camp, Rishikesh",
		img         : "https://images.unsplash.com/photo-1542338106-1b4bfe84d5df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Massa massa ultricies mi quis hendrerit dolor magna eget. Sed blandit libero volutpat sed. Vel fringilla est ullamcorper eget nulla. Magna ac placerat vestibulum lectus mauris ultrices eros in. Ornare arcu odio ut sem. Nunc faucibus a pellentesque sit amet porttitor eget. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Odio tempor orci dapibus ultrices in iaculis. Tortor consequat id porta nibh venenatis cras sed felis eget. Aenean pharetra magna ac placerat vestibulum lectus. Pharetra magna ac placerat vestibulum. Donec enim diam vulputate ut pharetra sit amet aliquam. Quam viverra orci sagittis eu volutpat odio facilisis mauris."
	},
	{
		name        : "Chardham Camp, Kedarnath",
		img         : "https://images.unsplash.com/photo-1586950313337-a6ffb447b55e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
		description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Massa massa ultricies mi quis hendrerit dolor magna eget. Sed blandit libero volutpat sed. Vel fringilla est ullamcorper eget nulla. Magna ac placerat vestibulum lectus mauris ultrices eros in. Ornare arcu odio ut sem. Nunc faucibus a pellentesque sit amet porttitor eget. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Odio tempor orci dapibus ultrices in iaculis. Tortor consequat id porta nibh venenatis cras sed felis eget. Aenean pharetra magna ac placerat vestibulum lectus. Pharetra magna ac placerat vestibulum. Donec enim diam vulputate ut pharetra sit amet aliquam. Quam viverra orci sagittis eu volutpat odio facilisis mauris."
	}
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;