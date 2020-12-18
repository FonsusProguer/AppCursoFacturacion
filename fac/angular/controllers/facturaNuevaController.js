let facturaNuevaController = angular.module('facturacionApp.facturaNuevaController', []);

facturaNuevaController.controller('facturaNuevaController', 
[
    '$scope', 
    'clientesService', 
    'facturasService', 
    '$location', 
    '$routeParams', 
    function(
        $scope, 
        clientesService, 
        facturasService, 
        $location, 
        $routeParams
        )
    {
        $scope.facturaId = $routeParams.facturaId;
        $scope.cliente = {};
        $scope.buscar;
        $scope.accionEditar = false;
        $scope.agregar = {
            producto_id: "",
            cantidad:1
        };

        $scope.factura = facturasService;
        
        $scope.hoy = new Date();



        $scope.obtenerFactura = (facturaId)=>
        {
            facturasService.cargarFactura(facturaId)
            .then((response)=>
            {
                $scope.cliente = response.cliente;   
                facturasService.detalle = response.detalle;
                facturasService.recalcular();                             
            });
        };
        
        if ($scope.facturaId != 0) 
        {
            $scope.accionEditar = true;
        }
        $scope.obtenerFactura($scope.facturaId);



        $scope.buscarCliente = (buscar)=>
        {
            $scope.clientes = {};

            clientesService.buscar(buscar)
            .then(()=>
            {
                if( isNaN( buscar ) ){
                    $("#modal_buscar_cliente").modal();
                    $scope.clientes = clientesService.clientes;
                }else{
                    $scope.cliente = clientesService.clientes[0];
                }
            });
        }


        $scope.clienteSeleccionado = (cliente) =>
        {
            
            $("#modal_buscar_cliente").modal('hide');
            $scope.cliente = cliente;
            
        }
        
        $scope.actualizar = ()=>
        {
            facturasService.recalcular();
        }

        $scope.buscarProducto = producto =>
        {

            if( producto.producto_id == "" ){
                return;
            }

            facturasService.buscarProducto( producto.producto_id )
            .then( response => 
            {
                if (response.err) {
                    swal("Aviso", response.mensaje, "info");
                    return;
                }
                let producto = response.producto;
                producto.cantidad = 1

                facturasService.agregarDetalle( producto );

                $scope.agregar.producto_id = "";
                $scope.agregar.cantidad = 1;

            });
            
        }

        $scope.guardarFactura = ()=>
        {
            if (facturasService.detalle.length == 0) 
            {
                swal("Aviso", "Debe agregar al menos un producto", "info");
                return;
            }
            facturasService.clienteId = $scope.cliente.id;
            facturasService.guardarFactura()
            .then((response)=>
            {
                if (!response.err) {
                    $scope.cliente = {};
                    facturasService.limpiarDatosFactura();
                    $location.path(response.url);
                }else{
                    swal("Aviso", 'Ocurrió un error al cargar los datos', "info")
                }
            });
        }

        $scope.borrarDetalle = item => 
        {

            facturasService.borrarDetalle( item );

        }

        $scope.cancelarOrden = ()=>
        {

            swal
            (
                {   
                    title: "Estas seguro?",   
                    text: "Seguro que desea cancelar la orden?",   
                    type: "warning",   
                    showCancelButton: true,   
                    confirmButtonColor: "#DD6B55",   
                    confirmButtonText: "Si",   
                    cancelButtonText: "No, cancelar!!!",   
                    closeOnConfirm: true,
                    closeOnCancel: true 
                }, isConfirm =>
                {   

                    if (isConfirm) 
                    {     
                        $scope.cliente = {};
                        facturasService.nuevaFactura();
                        $scope.$apply();
                    }

                }
            );

        }


}]);