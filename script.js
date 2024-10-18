document.addEventListener("DOMContentLoaded", function() {
    liff.init({
        liffId: '2006463532-QGAMO5VJ', // Use own liffId
        withLoginOnExternalBrowser: true, // Enable automatic login process
    }).then(() => {
        // Start to use liff's api
    });

    liff.init(() => {
        const idToken = liff.getDecodedIDToken();
        console.log(idToken); // print decoded idToken object
    });
});
