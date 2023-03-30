$.get('https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346', function(posters) { 
        let right_container = $('.right-container');
        for (let poster of posters) 
        {
            let currPoster = $('<img>').attr('src', poster.imageUrl);
            right_container.append(currPoster);
        }
    }
);
$.get('https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0', function(videoContents) {
    let video_section = $('#video-section');
    let video = $('<video>').attr('src', videoContents.videoUrl).attr('controls', true).attr('poster', 'https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg');
    video_section.append(video);
    let heading = $('<h3>').text(videoContents.title);
    video_section.append(heading);
    let description = $('<p>').text(videoContents.description);
    video_section.append(description);
    let h_ruler = $('<div>').addClass('h-ruler');
    video_section.append(h_ruler);

    let comment_container = $('div').addClass('comment-section');
    let commentsHeading = $('<h4>').text('Comments');
    comment_container.append(commentsHeading);

    let comment_section = $('.left-container');

    for (let comment of videoContents.comments) {
        let comments = $('<div>').addClass('comments');

        let comment_image = $('<img>').attr('src', comment.image);
        comments.append(comment_image);

        let comment_information = $('<div>').addClass('comments-info');

        let comment_name = $('<div>').addClass('name').text(comment.name);
        comment_information.append(comment_name);

        let comment_description = $('<div>').addClass('description').text(comment.comment);
        comment_information.append(comment_description);

        comments.append(comment_information);
        comment_container.append(comments);
        comment_section.append(comment_container);
    }
});
