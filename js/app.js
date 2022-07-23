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
        
        productosMaquina:[],
        selectedMaq: null
    },
    methods: {
        
        maqClick: function (index) {
            var maq = this.maquinas[index];
            
            this.productosMaquina = maq.productos;
            this.selectedMaq = maq;
            $('#addProductModal').modal();
        },
        
        saveProductsAdded: function () {
            
            var _this = this;
            
            //console.log('Entramos a guardar los productos');
            
            //console.log(this.productosMaquina);
            
            console.log('sumar a :' + selectedMaq.productos[0] + 'la cantidad de ' + this.productosMaquina[0]); 
            /*var user = this.users[this.pointsToIndex];
            var points = parseInt(this.pointsToAdd);
            
            user.points += points;
            
            var pointsTxt = (points>0) ? '+'+points : '-' + points;
            
            if (points > 0) {
                var msg = 'Muy bien *' + user.nickname + '*! Has recibido un +' + points;
            } else {
                var msg = 'Uhh *' + user.nickname + '*! Te aplicaorn un -' + points;
            }
            
            
            this.loading = true;
            
            
            firebase.database().ref().child('users')
            .child(user.uid)
            .update({
                points: user.points
            }).then(function () {
                _this.loading = false;
                _this.$toasted.show("Bien ahi Lince!!", {
                    theme: "bubble",
                    position: "bottom-center",
                    duration : 5000
                });
                
                _this.pointsAdded = encodeURIComponent(msg + ': ' + _this.form.reason + '. http://masturpoints-app.firebaseapp.com');
            }).catch(function () {
                _this.loading = false;
                $('#addPointsModal').modal('hide');
            });
            
            this.saveLog(user, points, this.form.reason);*/
            
        },
        
        
    }
})