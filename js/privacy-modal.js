document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("privacy-modal");
    const acceptButton = document.getElementById("accept-button");
    const declineButton = document.getElementById("decline-button");
    const closeModalButton = document.getElementById("close-modal");

    function showModal() {
        modal.classList.add("active");
    }

    function hideModal() {
        modal.classList.remove("active");
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        const userAccepted = getCookie("userAccepted");
        if (userAccepted !== "true") {
            showModal();
        }
    }

    acceptButton.addEventListener("click", function () {
        setCookie("userAccepted", "true", 365);
        hideModal();
    });

    declineButton.addEventListener("click", function () {
        hideModal();
    });

    closeModalButton.addEventListener("click", function () {
        hideModal();
    });

    checkCookie();
});
