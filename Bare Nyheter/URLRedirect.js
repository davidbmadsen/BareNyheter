var urls = [
    "https://www.vg.no/",
    "https://www.dagbladet.no/",
    "https://www.aftenposten.no/",
    "https://www.bt.no/",
    "https://www.adressa.no/",
    "https://www.nettavisen.no/",
    "https://www.abcnyheter.no/",
    "https://www.dn.no/",
    "https://www.aftenbladet.no/"
];


chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
    // console.log(details.url);
    if (urls.includes(details.url)){
        // return console.log(details.url + 'Ok')
        return {redirectUrl: details.url + 'nyheter'}
        }
    }, 
    {
        urls: ['<all_urls>'],
        types: ['main_frame', 'sub_frame'],
    }, ['blocking']
);
