'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{
    Route.post('user/register','UserController.store');
    Route.post('user/login','UserController.login');
    Route.get('proyecto','ProyectoController.index').middleware('auth'); //Esta protegidos
    Route.post('proyecto','ProyectoController.create').middleware('auth'); //Esta protegidos
    Route.delete('proyecto/:id','ProyectoController.destroy').middleware('auth'); //Esta protegidos
}).prefix('api/v1');
