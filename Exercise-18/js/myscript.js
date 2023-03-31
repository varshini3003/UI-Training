//This part of the code creates a poster section where poster images are retrieved and stored and appends it to the left container
$.get('https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346', function(posters) {
    const poster_section = $(".right-container");
    const poster_title = $("<h4>").append("Upcoming Projects");
    poster_section.append(poster_title);

    for(let i=0; i<posters.length; i++) {
        const poster_image = $("<div>").addClass('poster');
        const currPoster = $("<img>").attr({
            'src': posters[i].imageUrl,
            'alt': posters[i].title
        });
        poster_image.append(currPoster);
        poster_section.append(poster_image);
    }
});

//This part of the code creates a video section where video details are retrieved and stored and appends it to the left container
$.get('https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0', function(videos) {
    const comments = videos['comments'];
    const left_container = $(".left-container");

    const video = $("<video>").attr({
        'src': videos.videoUrl,
        'type': 'video/mp4',
        'controls': true,
        'poster': 'https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg'
    });
    const video_section = $("#video-section");
    video_section.append(video);

    const title = $("<h3>").append(videos.title);
    video_section.append(title);

    const video_description = $("<p>").append(videos.description);
    video_section.append(video_description);

    const hr = $("<hr>").attr('class', 'h-ruler');
    video_section.append(hr);

    //This part of the code creates a comment section where comment details are retreived and stored and appends it to the left container
    const comment_container = $("<div>").addClass('comment-section');
    const comment_head = $("<h1>").append('Comments');
    comment_container.append(comment_head);

    for(let comment of comments) {
        const comments = $("<div>").addClass('comments');
        const image = $("<img>").attr('src', comment.image);
        comments.append(image);
        const comments_info = $("<div>").addClass('comments-info');
        const name = $("<div>").addClass('name').append(comment.name);
        comments_info.append(name);
        const description = $("<div>").addClass('description').append(comment.comment);
        comments_info.append(description);
        comments.append(comments_info);
        comment_container.append(comments);
    }
    const hidden_ruler = $("<hr>").addClass('hidden-ruler');
    comment_container.append(hidden_ruler);
    comment_container.appendTo(left_container);
});