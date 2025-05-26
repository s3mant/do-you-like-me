document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn"),
        noBtn = document.getElementById("noBtn");
    const container = noBtn.parentElement.parentElement;

    function moveNoButton(e) {
        e.preventDefault();
        noBtn.blur();
        noBtn.style.left = `${Math.ceil(Math.random() * 50)}vw`;
        noBtn.style.top = `${Math.ceil(Math.random() * 50)}vh`;
    }

    yesBtn.addEventListener("click", () => {
        document.getElementById("audio").play();
        container.innerHTML = `<h1>I knew you did, text me hii on insta!
                  <a href='https://semant.localplayer.dev/insta' class="❤">❤</a>
                </h1>
                <img src='./assets/rosecat.png' alt="Rose Cat"/>`;
        container.style.top = "-10%";
        let heartLink = document.createElement("span");
        heartLink.className = "heart";
        heartLink.textContent = "❤️";
        container.appendChild(heartLink);
        setTimeout(() => {
            let heartStyle = heartLink.style;
            heartStyle.top = "10%";
            heartStyle.left = "95.669%";
            heartStyle.fontSize = "8rem";
            heartStyle.animationIterationCount = "infinite";

            document.addEventListener("click", (event) => {
                const heart = document.createElement("span");
                heart.className = "heart";
                heart.style.top = event.clientY + "px";
                heart.style.left = event.clientX + "px";
                heart.style.opacity = 0;
                heart.style.fontSize = "5rem";

                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 2000);
            });
        }, 2005);
    });

    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);

    let idleTimer;

    function resetIdleTimer() {
        document.body.style.cursor = "auto";
        clearTimeout(idleTimer);
        idleTimer = setTimeout(
            () => (document.body.style.cursor = "none"),
            1000
        );
    }

    document.addEventListener("mousemove", resetIdleTimer);
});