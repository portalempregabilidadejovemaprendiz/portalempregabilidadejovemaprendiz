var links = [
    "https://wa.me/19971207582",
    "https://wa.me/19983031454",
    "https://wa.me/19997128243",
    "https://wa.me/19998942458"];

    function openWpp() {
        var ranIdx = Math.random()*links.length;
        ranIdx = parseInt(ranIdx, 10);
        var link = links[ranIdx];

        window.open(link);
    }