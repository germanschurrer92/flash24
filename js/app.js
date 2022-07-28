// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
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

const vueApp = new Vue({
    el: '#app',
    data: { 
        titulo: 'Flash 24 Vending Group',
        activeTab: 1,
        display: 'redbox',
        maquinas: [
            {
                id: 1,
                nombre:'Snack10',
                lugar: 'ELP',
                productos: [
                    {
                        id: 1,
                        nombre: "9 de Oro Salada",
                        proveedor: "Lucas",
                        cantidad: 0
                    },
                    {
                        id: 2,
                        nombre: "Sandwich Suprema",
                        proveedor: "Keila",
                        cantidad: 0
                    },
                    {
                        id: 3,
                        nombre: "Turron Mani",
                        proveedor: "Arcor",
                        cantidad: 0
                    }
                ]
            },
            {
                id:2,
                nombre:'Mixta',
                lugar: 'Lario',
                productos: [
                    {
                        id: 1,
                        nombre: "9 de Oro Salada",
                        proveedor: "Lucas",
                        cantidad: 0
                    },
                    {
                        id: 2,
                        nombre: "Sandwich Suprema",
                        proveedor: "Keila",
                        cantidad: 0
                    },
                    {
                        id: 3,
                        nombre: "Turron Mani",
                        proveedor: "Arcor",
                        cantidad: 0
                    }
                ]
            },
            {
                id:3,
                nombre:'Saeco',
                lugar: 'Lario',
                productos: [
                    {
                        id: 1,
                        nombre: "9 de Oro Salada",
                        proveedor: "Lucas",
                        cantidad: 0
                    },
                    {
                        id: 2,
                        nombre: "Sandwich Suprema",
                        proveedor: "Keila",
                        cantidad: 0
                    },
                    {
                        id: 3,
                        nombre: "Turron Mani",
                        proveedor: "Arcor",
                        cantidad: 0
                    }
                ]
            }
        ],
        productos: [
            {
                id: 1,
                nombre: "9 de Oro Salada",
                proveedor: "Lucas",
                cantidad: 0
            },
            {
                id: 2,
                nombre: "Sandwich Suprema",
                proveedor: "Keila",
                cantidad: 0
            },
            {
                id: 3,
                nombre: "Turron Mani",
                proveedor: "Arcor",
                cantidad: 0
            }
        ],
        
        selectedMaq: null
    },
    methods: {
        
        
        maqClick: function (index) {
            var maq = this.maquinas[index];
            this.selectedMaq = maq;
            $('#addProductModal').modal();
        },
        
        saveProductsAdded: function () {
            
            console.log(appFB);
            
            this.productos.forEach( prod => {
                if(prod.cantidad < 0 || prod.cantidad === "")        return; 
                
                var prodASumar = this.selectedMaq.productos.find(e => e.id == prod.id);
                prodASumar.cantidad += prod.cantidad;
                prod.cantidad = 0; 
                console.log(prodASumar.cantidad) ;
                
                //oculto el modal
                $('#addProductModal').modal('hide');              
            });
        },
        
        
    }
})