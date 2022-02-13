import browser from "webextension-polyfill";
import sites from "./sites";

export type Site  = {
    url: string,
    ign_id: string,
    handleExtra?: CallableFunction
};

function onReady() {
    browser.storage.local.get(["av-ign", "av-enabled"]).then((data) => {
        if (data['av-enabled'] === true) {
            let host = window.location.hostname;
            let site = getSite(host);
    
            (<HTMLInputElement>document.getElementById(site.ign_id)).value = data['av-ign'];
    
            if (site.handleExtra) {
                site.handleExtra();
            }
        }
    });
}

function getSite(url: string): Site {
    return sites.filter(s => s.url === url)[0];
}

onReady();