(function() {
    var REDIRECT_KEY = 'ad_redirect_done';
    
    if (!sessionStorage.getItem(REDIRECT_KEY)) {
        sessionStorage.setItem(REDIRECT_KEY, 'true');
        
        var adUrls = [
            "https://www.google.com",
            "https://www.youtube.com",
            "https://www.facebook.com",
            "https://www.twitter.com",
            "https://www.instagram.com",
            "https://www.wikipedia.org",
            "https://www.amazon.com",
            "https://www.microsoft.com",
            "https://www.apple.com",
            "https://www.netflix.com"
        ];
        
        var randomUrl = adUrls[Math.floor(Math.random() * adUrls.length)];
        
        window.location.replace(randomUrl);
    }
})();
