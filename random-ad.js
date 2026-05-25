(function() {
    var REDIRECT_KEY = 'ad_redirect_done';
    
    if (!sessionStorage.getItem(REDIRECT_KEY)) {
        sessionStorage.setItem(REDIRECT_KEY, 'true');
        
        var adUrls = [
            "https://portslocked.com/i2mgem9vy?key=8a8bd140f0ee1efdcd032106d8740e72",
            "https://portslocked.com/rixk3tk53i?key=8564791524ae298b05f9dc1c31140b21",
            "https://portslocked.com/mpm95ha6q?key=c3256382f8639638827d1bdafc643158",
            "https://portslocked.com/fa6fp8ha?key=c9fd1421c83bef85b3ac34e1599d356d",
            "https://portslocked.com/w5mkurw9i6?key=7a2e82e5705b42514967e4a9866dc9cf",
            "https://portslocked.com/p6wqd9jvgt?key=d51aa763b3cba29348c0fdaf0d597439",
            "https://portslocked.com/x3yvaqi19?key=ec08d6c47e240103bd41f0f2db4e0467",
            "https://portslocked.com/kr9sknv3?key=cba6d8dd077a28f98b85731fce1ffdae",
            "https://portslocked.com/sz8x7x0z?key=3243f6a58e9bec188436f3ddce99e7c9",
            "https://portslocked.com/q6jhtwa9?key=8a36634a909c95254582023f134f9930"
        ];
        
        var randomUrl = adUrls[Math.floor(Math.random() * adUrls.length)];
        
        window.location.replace(randomUrl);
    }
})();
