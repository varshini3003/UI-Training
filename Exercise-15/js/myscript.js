import videos from "./json/video.json" assert{type: 'json'};
import posters from "./json/posters.json" assert{type: 'json'};

const comments=videos['comments'];
const left_container= document.querySelector(".left-container");

//Video Section
const video=document.createElement("video");
video.setAttribute('src',videos.videoUrl);
video.setAttribute('type','video/mp4');
video.setAttribute('controls','true');

const video_section=document.querySelector("#video-section");
video_section.append(video);

//Video contents
const title=document.createElement("h3");
const videoTitle=videos.title;
title.append(videoTitle);
video_section.append(title);

const video_description=document.createElement("p");
video_description.append(videos.description);
video_section.append(video_description);

const hr=document.createElement("hr");
hr.setAttribute('class', 'h-ruler');
video_section.append(hr);

//Comment section
const comment_container = document.createElement('div');
comment_container.setAttribute('class', 'comment-section');

const comment_head = document.createElement('h1');
comment_head.append('Comments');
comment_container.append(comment_head);

const comment_section=document.querySelector(".left-container");
for(const comment of comments) {
    const comments=document.createElement("div");
    comments.setAttribute('class','comments');

    const image=document.createElement("img");
    image.setAttribute('src',comment.image);
    comments.append(image);

    const comments_info=document.createElement("div");
    comments_info.setAttribute('class','comments-info');
    
    const name=document.createElement("div");
    name.setAttribute('class', 'name');
    name.append(comment.name);
    comments_info.append(name);

    const description=document.createElement("div");
    description.setAttribute('class', 'description');
    description.append(comment.comment);
    comments_info.append(description);
    comments.append(comments_info);
    comment_container.append(comments);
    comment_section.append(comment_container);
}

const hidden_ruler = document.createElement('hr')
hidden_ruler.setAttribute('class','hidden-ruler')
left_container.append(hidden_ruler);

//Poster section
const poster_section=document.querySelector(".right-container");
const poster_title=document.createElement("h4");
poster_title.append("Upcoming Projects");
poster_section.append(poster_title);

for(let i=0;i<posters.length;i++){
    const poster_image=document.createElement("div");
    poster_image.setAttribute('class', 'poster');
    const currPoster=document.createElement("img");
    currPoster.setAttribute('src',posters[i].imageUrl);
    currPoster.setAttribute('alt',posters[i].title);
    poster_image.append(currPoster);
    poster_section.append(poster_image);
}