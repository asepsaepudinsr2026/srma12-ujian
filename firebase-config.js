// js/firebase-config.js
// GANTI dengan config Anda dari Firebase Console

const firebaseConfig = {
    apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "srma12-ujian.firebaseapp.com",
    databaseURL: "https://srma12-ujian-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "srma12-ujian",
    storageBucket: "srma12-ujian.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

// Helper functions
const DB = {
    // Siswa
    getSiswa: (nis) => db.ref('siswa/' + nis).once('value'),
    setSiswa: (nis, data) => db.ref('siswa/' + nis).set(data),
    
    // Ujian
    getUjian: () => db.ref('ujian').once('value'),
    setUjian: (id, data) => db.ref('ujian/' + id).set(data),
    
    // Monitoring
    updateMonitoring: (nis, data) => db.ref('monitoring/' + nis).update(data),
    
    // Camera
    updateCamera: (nis, data) => db.ref('camera/' + nis).set(data),
    
    // Logs
    addLog: (data) => db.ref('logs').push(data),
    
    // Listen real-time
    onMonitoringChange: (callback) => db.ref('monitoring').on('value', callback),
    onCameraChange: (callback) => db.ref('camera').on('value', callback)
};