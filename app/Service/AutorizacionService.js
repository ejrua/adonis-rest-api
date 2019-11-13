const AccesoProhibidoException = use('App/Exceptions/AccesoProhibidoException');
const RecurosNoEncontradoException =use('App/Exceptions/RecurosNoEncontradoException');



class AutorizacionService{
    verificarPermiso(recurso, user){
        if(!recurso){
            throw new RecurosNoEncontradoException();
        }
        if(recurso.user_id !== user.id){
            throw new AccesoProhibidoException();
        }
    }
}


module.exports = new AutorizacionService();