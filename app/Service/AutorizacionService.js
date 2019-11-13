class AutorizacionService{
    verificarPermiso(recurso, user){
        if(recurso.user_id == user.id){
            throw new Error();
        }
    }
}

module.exports = Proyec