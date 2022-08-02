// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc,Timestamp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkwx2iZZ298hTR5bXRbdQdox36SYsiMxc",
    authDomain: "db-flash24.firebaseapp.com",
    projectId: "db-flash24",
    storageBucket: "db-flash24.appspot.com",
    messagingSenderId: "771139222626",
    appId: "1:771139222626:web:95fb8efd955b073eb1253b",
    measurementId: "G-HPPPL8YDV2"
};

// Initialize Firebase
const appFB = initializeApp(firebaseConfig);
const db = getFirestore(appFB);
const maquinas = collection(db, 'maquinas');
const maqSnapshot = await getDocs(maquinas);
const productos = collection(db, 'productos');
const prodSnapshot = await getDocs(productos);
const cargaProductos = collection(db, 'cargaProductos');
const prodCargar = await getDocs(cargaProductos);


const vueApp = new Vue({
    el: '#app',
    data: { 
        titulo: 'Flash 24 Vending Group',
        activeTab: 1,
        display: 'redbox',
        maquinas: [],
        productos: [],        
        selectedMaq: null
    },
    mounted() {
        this.maquinas = maqSnapshot.docs.map(doc => doc.data());
        this.productos = prodSnapshot.docs.map(doc => doc.data());
    },
    methods: {   
        maqClick: function (index) {
            var maq = this.maquinas[index];
            this.selectedMaq = maq;
            $('#addProductModal').modal();
        },
        
        saveProductsAdded: function () {
            
            this.productos.forEach( prod => {
                if(prod.sumar < 0 || prod.sumar === "" || typeof prod.sumar === 'undefined') return;    
                console.log(prod.sumar);
                const docRef = addDoc(collection(db, "cargaProductos"), {
                    idProducto: prod.id.toString(),
                    idMaquina: this.selectedMaq.id.toString(),
                    cantidad: prod.sumar,
                    fecha: Timestamp.fromDate(new Date())
                });
                //oculto el modal
                $('#addProductModal').modal('hide');              
            });
        },
        
        
    }
})