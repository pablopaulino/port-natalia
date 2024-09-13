const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

const toggleMenu = () => {
    menu.classList.toggle('abrir-menu');
};

btnMenu.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var players = [];


function onYouTubeIframeAPIReady() {
    players.push(new YT.Player('player1', {
        height: '583',
        width: '328',
        videoId: 'C8Uih_7FfOg',
        events: {
            'onStateChange': onPlayerStateChange
        }
    }));

    players.push(new YT.Player('player2', {
        height: '583',
        width: '328',
        videoId: 'evDPDx56g4c',
        events: {
            'onStateChange': onPlayerStateChange
        }
    }));

    players.push(new YT.Player('player3', {
        height: '583',
        width: '328',
        videoId: 'SOr-UlxioJc',
        events: {
            'onStateChange': onPlayerStateChange
        }
    }));
}


function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        players.forEach(function(player) {
            if (player != event.target) {
                player.pauseVideo();
            }
        });
    }
}

