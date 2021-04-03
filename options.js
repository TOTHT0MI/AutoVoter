chrome.storage.sync.get(['av-ign'], function (data) {
    if (data !== null || data !== undefined) {
        document.getElementById("ign").value = data['av-ign'];
    }
});

document.getElementById("save").addEventListener("click", save);

function save() {
    chrome.storage.sync.set({'av-ign': document.getElementById("ign").value}, function () {
        document.getElementById("saved").classList.remove("hidden");
    });
}