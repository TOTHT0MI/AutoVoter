# AutoVoter

Currently I don't plan on updating the project myself.
If you want it to continue you ay do a PR or fork it.

AutoVoter is a very simple browser extension, that fills in usernames automatically when voting for a Minecraft server on many voting sites.
At the moment it's still in development, but after that I'll probably make it available as a proper extension.

## Supported voting sites
|Site|Status|
|----|------|
|minecraft-mp.com|:white_check_mark: Supported|
|minecraft-server-list.com|:white_check_mark: Supported|
|minecraftservers.biz|:white_check_mark: Supported|
|minecraft-server.net|:white_check_mark: Supported|
|minecraftservers.org|:hammer: Coming next update|
|topminecraftservers.org|:hammer: Coming next update|


## Installation
_Disclaimer: Currently (as I need to pay a registration fee) I do not plan to release it on marketplace._

1. Clone the git repository & build the project
```bash
git clone https://github.com/TOTHT0MI/AutoVoter/ AutoVoter
cd ./AutoVoter/
npm install
npm run build
```
2. Go to extensions panel (it's mostly: \<your-browser\>://extensions) & turn on developer mode
3. Click: Add unpacked extension (or similar)
4. Navigate to the /public/ folder and click select
5. You have successfully installed the addon!

### Supported browsers

|Browsers| Status|
|-------------------|------------------------|
|Chrome|:white_check_mark: Supported|
|Brave|:white_check_mark: Supported|
|Firefox|:white_check_mark: Supported|
|Opera|:construction: Potentionally supported (untested)|
|Edge|:construction: Potentionally supported (untested)|

## Planned features

- Availability on marketplace
- Better settings page
- Popup
- auto captcha (clicks captcha, user needs to complete the captcha)
- auto submit
