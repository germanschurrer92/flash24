// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc,Timestamp, doc, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

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
const maqDocs = await getDocs(maquinas);
const productos = collection(db, 'productos');
const prodDocs = await getDocs(productos);
const cargaProductos = collection(db, 'cargaProductos');

const vueApp = new Vue({
    el: '#app',
    data: { 
        titulo: 'Flash 24 Vending Group',
        activeTab: 1,
        display: 'redbox',
        maquinas: [],
        productos: [],        
        selectedMaq: {
            nombre:'',
            lugar:''            
        },
        lugarMaq: '',
        nombreMaq: '',
        nombreProd: '',
        proveedorProd: '',
        loading: true
    },
    async mounted() {

        this.maquinas = maqDocs.docs.map(doc => doc.data());
        //this.productos = prodDocs.docs.map(doc => doc.data()); 
        
        prodDocs.forEach((doc) => {
            this.productos.push(
                {
                    id: doc.id,
                    nombre: doc.data().nombre,
                    proveedor: doc.data().proveedor
                });            
        });

        this.loading = false;

    },
    methods: {  
        //para cambiar de pestaña 
        setTab: function (index) {
            this.activeTab = index;
        },

        //método para cuando se hace click sobre una máquina para cargarle productos
        maqClick: function (index) {
            
            this.selectedMaq = this.maquinas[index];

            maqDocs.forEach((doc) => {
                if(doc.data().nombre === this.maquinas[index].nombre) {
                    this.selectedMaqId = doc.id;                    
                }
            });

            $('#addProductModal').modal();
        },

        //método para cuando se quiere agregar una máquina al set de maquinas
        addMaqClick: function () {
            // var maq = this.maquinas[index];
            // this.selectedMaq = maq;
            $('#addMaquinaModal').modal();
        },
        
        //método para cuando se quiere agregar un nuevo producto al set de productos
        addNewProdClick: function () {
            // var maq = this.maquinas[index];
            // this.selectedMaq = maq;
            $('#addProductoModal').modal();
        },
        
        //metodo para agregar  a una máquina
        saveProductsAdded: async function () {
            
            this.productos.forEach( async prod => {
                if(prod.sumar < 0 || prod.sumar === "" || typeof prod.sumar === 'undefined') return;    
                console.log(prod.sumar);
                const docRef = await addDoc(collection(db, "cargaProductos"), {
                    idProducto: prod.id.toString(), // tengo que poner el ID que le asigna FB
                    idMaquina: this.selectedMaqId, 
                    cantidad: prod.sumar,
                    fecha: Timestamp.fromDate(new Date())
                });
                prod.sumar = null; // pongo en NULL para que no aparezca en siguiente carga y aprovecho el ciclo for
                //oculto el modal
                $('#addProductModal').modal('hide');
                this.$mount(); // llamo al método mounted()  
            });
        },

        // método para agregar una máquina al set de máquinas
        addMaq: async function(){
            //ver como consultar el máximo ID de maquina.
            await addDoc(collection(db, "maquinas"), {
                activo: true, 
                lugar: this.lugarMaq,
                nombre: this.nombreMaq
            });
            
            //oculto el modal
            $('#addMaquinaModal').modal('hide');
            window.location.reload();            
        },

        //método para agergar productos al set de productos
        addNewProd: async function(){
            //ver como consultar el máximo ID de maquina.
            await addDoc(collection(db, "productos"), {
                nombre: this.nombreProd,
                proveedor: this.proveedorProd
            });
            
            //oculto el modal
            $('#addProductoModal').modal('hide');
            window.location.reload();            
        }      
    }
})