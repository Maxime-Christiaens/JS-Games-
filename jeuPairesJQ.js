$(function () {//permet d'exécuter le code quand toute la page est 100% chargée.
    let ListeImgs = ["imgs/anehihan.jpg", "imgs/chatminou.jpg", "imgs/chientoutou.jpg", "imgs/lamacrachat.jpg", "imgs/lapinscrottes.jpg", "imgs/lionnegraou.jpg", "imgs/oursbaby.jpg", "imgs/anehihan.jpg", "imgs/chatminou.jpg", "imgs/chientoutou.jpg", "imgs/lamacrachat.jpg", "imgs/lapinscrottes.jpg", "imgs/lionnegraou.jpg", "imgs/oursbaby.jpg"];

    ListeImgs.sort(() => 0.5 - Math.random());
    //randomise la liste

    for (let i = 0; i < 14; i++) {
        $("#img" + i).attr("src", ListeImgs[i]);
    }

    $(".Jpaires").click(function (event) {
        $(".Jpaires").toggleClass("flip");
        $('.Jpaires')
            .delay(200)
            .queue(function (next) {
                $(".Jpaires").css("background-image", "url(imgs/anehihan.jpg)");
            });
});
})

//document.getElementById(clicked.id)
//test
