// Default config
var def_config = {
    musicVol: 0.5,
    sfxVol: 0.2,
}
const devmodeenabled = false
// Check if Local Storage is accessable
if (typeof(Storage) !== "undefined") {
    if (!localStorage.getItem('onliine-settings')) {
        // Stringify the config cuz that's how it is.
        localStorage.setItem("onliine-settings", JSON.stringify(def_config));
        // Reload the page so that everything works.
        location.reload();
    }
} else {
    alert('Local Storage is not support or disabled -- settings will not work!')
}

// User config
var userConfig = JSON.parse(localStorage.getItem('onliine-settings'));
console.log(`user config:`, userConfig);

// Default channels
var def_channels = [
    {
        id: 'disc',
        title: 'Disc Channel',
        assets: 'assets/channels/',
        channelart: 'channelart/',
        disc: true
    },
    {
        id: 'mii',
        title: 'Mii Channel',
        assets: 'assets/channels/',
        channelart: 'channelart/'
    },
    {
        id: 'photo',
        title: 'Photo Channel',
        assets: 'assets/channels/',
        channelart: 'channelart/'
    },
    {
        id: 'shop',
        title: 'Wii Shop Channel',
        assets: 'assets/channels/',
        channelart: 'channelart/',
        target: 'shop/index.html'
    },
    {
        id: 'news',
        title: 'News Channel',
        assets: 'assets/channels/',
        channelart: 'channelart/'
    },
    {
        id: 'retroarch',
        title: 'Wii Arch',
        assets: 'customchannels/banner/',
        channelart: 'customchannels/menuart/',
        target: 'customchannels/pages/retroarch/index.html'
    }
]
var Latestcver = 1.3
var ChannelVersion = 1.3
window.addEventListener("load", () => {
    if (!localStorage.getItem('lcver')) {
        localStorage.setItem("lcver", Latestcver);
    }
    else
    {
        localStorage.setItem("lcver", Latestcver);
    }
    if (localStorage.getItem('devmode') || devmodeenabled == true) {
        
    def_channels.push(
        {
            id: 'onliine',
            title: 'Reset Channel',
            assets: 'assets/channels/',
            channelart: 'channelart/',
            target: 'reset.html'
        },{
            id: 'testapp',
            title: 'Developer App',
            assets: 'customchannels/banner/',
            channelart: 'customchannels/menuart/',
            target: 'customchannels/pages/testapp/index.html'
        })
    }
    localStorage.setItem("onliine-channels", JSON.stringify(def_channels));
    userChannels = JSON.parse(localStorage.getItem('onliine-channels'));
})
// Set channels if they aren't set
if (!localStorage.getItem('onliine-channels')) {
    localStorage.setItem("onliine-channels", JSON.stringify(def_channels));
}
if (!localStorage.getItem('cver')) {
    localStorage.setItem("cver", ChannelVersion);
}
if (!localStorage.getItem('lcver')) {
    localStorage.setItem("lcver", Latestcver);
}
var userChannels = JSON.parse(localStorage.getItem('onliine-channels'));
console.log(`user channels: `, userChannels);

// Load default config
function resetConfig(confirm) {
    if (confirm == true) {
        // Confirmed! writing...
        localStorage.setItem("onliine-settings", JSON.stringify(def_config));
        userConfig = JSON.parse(localStorage.getItem('onliine-settings'));
        console.log(`user config reset!:`, userConfig);
    } else {
        console.error(`loadDefaultConfig: MAKE SURE YOU'D LIKE TO DO THIS BY USING "loadDefaultConfig(true)". THERE'S NO TURNING BACK!!`)
    }
}

// Load default channels
function resetChannels(confirm) {
    if (confirm == true) {
        // Confirmed! writing...
        localStorage.setItem("onliine-channels", JSON.stringify(def_channels));
        localStorage.setItem("cver", ChannelVersion);
        localStorage.setItem("lcver", Latestcver);
        userChannels = JSON.parse(localStorage.getItem('onliine-channels'));
        console.log(`user channels reset! (reload page to see):`, userChannels);
    } else {
        console.error(`loadDefaultChannels: MAKE SURE YOU'D LIKE TO DO THIS BY USING ADDING "true" IN THE FUNCTION. THERE'S NO TURNING BACK!!`)
    }
}