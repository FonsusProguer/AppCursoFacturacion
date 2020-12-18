let facturasService = angular.module('facturacionApp.facturasService',[]);


facturasService.factory('facturasService', ['$http', '$q', function($http, $q){

	let self = {

		/*Paginacion y listado*/
		err     	: false, 
		conteo 		: false,
		pag_actual    : 1,
		pag_siguiente : 1,
		pag_anterior  : 1,
		total_paginas : 1,
		paginas	    : [],
		listado     : {},

		/*Campos para nueva factura*/
		numeroFactura: undefined,
		fechaSolicitado: new Date(),
		estado: 'E',
		monto: 0,
		montoNeto: 0,
		impuesto: 0,
		ISV: 0,
		clienteId: undefined,
		comentario: "",
		detalle: [],
		cargarFactura : (facturaId)=>
		{
			let q = $q.defer();

			$http.get('api/services/facturas/facturas.get.php?p='+facturaId)
			.then((response)=>
			{
				console.log(response);
				q.resolve(response.data);
			})
			.catch((error)=>
            {
                q.reject();
			});
			
			return q.promise;
		},
		cargarListado : (pagina)=>
        {
            let q = $q.defer();

            $http.get('api/services/facturas/facturas.listado.php?p='+pagina)
            .then((response)=>
            {   
                self.err = response.data.err 
                self.conteo = response.data.conteo 
                self.pag_actual = response.data.pag_actual 
                self.pag_siguiente = response.data.pag_siguiente 
                self.pag_anterior = response.data.pag_anterior 
                self.total_paginas = response.data.total_paginas 
                self.paginas = response.data.paginas 
                self.listado = response.data.facturas;
                q.resolve();
            })
            .catch((error)=>
            {
                q.reject();
            });

            return q.promise;
        },
		
        nuevaFactura: ()=>
        {

			self.numeroFactura = undefined;
			self.fechaSolicitado = new Date();
			self.estado = 'E';
			self.comentario = "";
			self.clienteId = undefined;
			self.detalle = [];

		},

        limpiarDatosFactura: ()=>
        {

			self.numeroFactura = undefined;
			self.fechaSolicitado = new Date();
			self.estado = 'E';
			self.comentario = "";
			self.clienteId = undefined;
			self.detalle = [];

		},
		
        recalcular: ()=>
        {
			// Calcular los montos
			self.monto = 0;

			for (item of self.detalle) {
			  	self.monto += item.precio_venta * item.cantidad;
			}

			self.impuesto   = self.monto * self.ISV;
			self.montoNeto = self.monto + self.impuesto;

		},

        agregarDetalle: (agregar) => 
        {
			self.detalle.push( agregar );
			self.recalcular();

		},

        buscarProducto: (id) => 
        {
			let q = $q.defer();
			$http.get('api/services/productos/productos.get.php?id=' + id)
            .then(  respuesta => 
            {
                q.resolve( respuesta.data );

            }).catch( error => 
            {
                q.reject(error);
            });

			return q.promise;
		},

        borrarDetalle: (item) => 
        {

			let index = self.detalle.indexOf(item);
  			self.detalle.splice(index, 1);  

  			self.recalcular();
		},

        guardarFactura: ()=>
        {

            let q = $q.defer();
			$http.post('api/services/facturas/facturas.guardar.php',self)
            .then(respuesta=>
            {
                q.resolve(respuesta.data);
            })
            .catch( error => 
            {
                q.reject(error);
            });


			return q.promise;;
		}
	};

	return self;

}]);