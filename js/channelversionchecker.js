// HOME/PAUSE MENU
window.addEventListener("load", () => {
    document.body.insertAdjacentHTML("beforeend", `
        <div class="returndialog2">
            <div class="msgbox">
                <div class="text">
                    Your Channel Data is outdated<br>
                    (Please Reload)
                </div>
                <div class="actions">
                    <a onclick="rm2();" onmouseover="playSFX('button-hover.mp3', userConfig.sfxVol)">Yes</a>
                    <a class="closedialog" onmouseover="playSFX('button-hover.mp3', userConfig.sfxVol)" onclick="playSFX('button-cancel.mp3', userConfig.sfxVol)">No</a>
                </div>
            </div>
        </div>
    `);

    var lastBgMusicState;

    document.addEventListener("keydown", function(event) {
        
      if (event.shiftKey && event.ctrlKey && event.code == "KeyI") {
        event.preventDefault();
        checkforupdate();
      }
    });

    function checkforupdate(){
    const currentver = localStorage.getItem("cver")
    const latestver = localStorage.getItem("lcver")
    console.log("your currect cver " +currentver)
    console.log("Latest Cver "+latestver)
    if (currentver !== latestver) {
        showupdate();
    }
    }
    function showupdate()
    {
        $(".returndialog2").css("display", "flex");
        playSFX('button-select-big.mp3', userConfig.sfxVol);
    }

    $(".backtomenu").click(event => {
        $(".returndialog2").css("display", "flex");
        playSFX('button-select-big.mp3', userConfig.sfxVol);
    });

    $(".closedialog").click(event => {
        $(".returndialog2").css("display", "none");
    });
});