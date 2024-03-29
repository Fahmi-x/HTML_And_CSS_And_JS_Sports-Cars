// toggle menu button
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active')
} 

// change the background  video click on the gallery images

function changeVideo(name) {
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');

// java script higher order array function forEach
// this is easier do to data mapping

    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
        video.classList.add('active');
        }
    });

    // mapping madel name change 

    models.forEach(model => {
        model.classList.remove('active');
        if (model.classList.contains(name)) {
            model.classList.add('active');
        }
    });

     // mapping  trailers name change 
    
    trailers.forEach(video => {
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    });
}

// change the play and pause button on click event
function toggleplay() {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');
}

//video play and pause 

function pauseVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.pause();
    });

    toggleplay();
}
function playVideo() {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video => {
        video.play();
    });
    
    toggleplay();
}

