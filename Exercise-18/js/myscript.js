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
    let left_container = $('.left-container');
    let video = $('<video>').attr('src', videoContents.videoUrl).attr('controls', true).attr('poster', 'https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg');
    left_container.append(video);
    let heading = $('<h3>').text(videoContents.title);
    left_container.append(heading);
    let description = $('<p>').text(videoContents.description);
    left_container.append(description);
    let h_ruler = $('<div>').addClass('h-ruler');
    left_container.append(h_ruler);
    let commentsHeading = $('<h4>').text('Comments');
    left_container.append(commentsHeading);

    for (let comment of videoContents.comments) {
        let comment_section = $('<div>').addClass('comments');
        left_container.append(comment_section);
        let comment_image = $('<img>').attr('src', comment.image);
        comment_section.append(comment_image);
        let comment_information = $('<div>').addClass('comments-info');
        comment_section.append(comment_information);
        let comment_name = $('<div>').addClass('name').text(comment.name);
        comment_information.append(comment_name);
        let comment_description = $('<div>').addClass('description').text(comment.comment);
        comment_information.append(comment_description);
    }
});
