var links = [
    "https://w.app/ohMKbu",
    "https://w.app/0NH18r",
    "https://w.app/f1aVEP",
    "https://w.app/iCpEHO"];

    function openWpp() {
        var ranIdx = Math.random()*links.length;
        ranIdx = parseInt(ranIdx, 10);
        var link = links[ranIdx];

        window.open(link);
    }