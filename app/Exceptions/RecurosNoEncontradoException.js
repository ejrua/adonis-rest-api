'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class RecurosNoEncontradoException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.status(404).json({
      error: "El Recuros No existe"
    })
  }
}

module.exports = RecurosNoEncontradoException
