// adapted from
// https://dev.to/wlarch/custom-youtube-thumbnail-and-play-button-for-embedded-iframe-video-25pb

/**
* Get videos on load
*/
(function () {
    getVideo();
})();


/**
* For each video player, create custom thumbnail or
* use Youtube max resolution default thumbnail and create
* iframe video.
*/
function getVideo() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        var thumbnail = v[n].getAttribute("thumbnail")
        p.innerHTML = createCustomThumbail(thumbnail);
        v[n].appendChild(p);

        p.addEventListener("click", function () {
            var parent = this.parentNode;
            var iframe = document.createElement("iframe");
            console.log(this);
            console.log(this.parentNode)
            console.log("first child: " )
            console.log(parent.firstChild)
            iframe.setAttribute("src", parent.getAttribute("src"));
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("class", "youtube-iframe");
            iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
            iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen");
            iframe.setAttribute("allowfullscreen", "true")
            this.replaceWith(iframe);
        });
    }
}

/**
* Create custom thumbnail from data-attribute provided url
* @param {string} url
* @return {string} The HTML containing the <img> tag
*/
function createCustomThumbail(url) {
    return (
        '<img class="youtube-thumbnail" src="' +
        url +
        '" alt="Youtube Preview" />'
    );
}
