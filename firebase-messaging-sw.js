importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBFbcz0pq-dhAFerrbowIPUWocpdXvX_K8",
    authDomain: "branches-app-85a56.firebaseapp.com",
    projectId: "branches-app-85a56",
    storageBucket: "branches-app-85a56.firebasestorage.app",
    messagingSenderId: "1070889733980",
    appId: "1:1070889733980:web:fb07eab028e5c484477b99"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// استقبال الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});