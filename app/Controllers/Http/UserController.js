'use strict'

const User = use('App/Models/User');

class UserController {
    async login({request,auth}){
        const { email,password} = request.all();
        const token = await auth.attempt(email,password);
        return token;
    }
    async store( {request} ){
     const { email,password} = request.all();
     console.log(email,password);
     const user = await User.create({
         email,
         password,
         username:email
     });
     // Retorna los datos del usuarios
     //return user;
     // sin no requiere validar el email sirve sino, Hay que tener en cuenta que hay que validar si el email existe.
     return this.login(...arguments);
    };
}

module.exports = UserController
