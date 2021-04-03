const sites = {
    "minecraft-mp.com": {
        "id": "nickname"
    },
    "minecraft-server-list.com": {
        "id": "ignn"
    },
    "minecraftservers.biz": {
        "id": "vote_username"
    },
    "minecraft-server.net": {
        "id": "mc_user"
    }
}

$(document).ready(function() {

    chrome.storage.sync.get(['av-ign'], function (data) {
        if (data !== null || data !== undefined) {
            var host = window.location.hostname;

            document.getElementById(sites[host].id).value = data['av-ign'];
            handleExtras(host);

        }
    });
});

function handleExtras(host) {
    if (host === "minecraft-server.net") {
        document.getElementById("rate-10").setAttribute("checked", "");
    }
}