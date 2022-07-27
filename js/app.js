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
            
            //console.log( this.selectedMaq.productos);

            this.productos.forEach( prod => {
                if(prod.cantidad < 0 || prod.cantidad === "")        return; 

                prodASumar = this.selectedMaq.productos.find(e => e.id == prod.id);
                prodASumar.cantidad += prod.cantidad; 
                console.log(prodASumar.cantidad) ;              
            });
        },
        
        
    }
})