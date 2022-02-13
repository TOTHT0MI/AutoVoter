import type { Site } from "./inject";

const sites: Site[] = [
    {
        url: "minecraft-mp.com",
        ign_id: "nickname"
    },
    {
        url: "minecraft-server-list.com",
        ign_id: "ignn"
    },
    {
        url: "minecraftservers.biz",
        ign_id: "vote_username"
    },
    {
        url: "minecraft-server.net",
        ign_id: "mc_user",
        handleExtra: () => {
            document.getElementById("rate-10").setAttribute("checked", "");
        },
    }
];


export default sites;