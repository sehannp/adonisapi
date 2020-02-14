'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with customers
 */

const Customer  = use('App/Models/Customer')

 class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({request,response}) {
    const customers = await Customer.all()
    
    response.status(200).json({
      message: 'Here are your customers from index',
      data: customers
    })
  }

  /**
   * Create/save a new customer.
   * POST customers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response}) {
    const {name,description} = request.post();

    const customer = new Customer()
    customer.name = name
    customer.description = description
    await customer.save()

    response.status(201).json({
      message:'Successfully created a new customer',
      data: customer
    })
  }

  /**
   * Display a single customer.
   * GET customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({request, response }) {
    const customer = request.post().customer

    response.status(200).json({
        message: 'customer found',
        data: customer
    })
  }

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ request,response }) {
    const {name,description,customer} = request.post()
    customer.name = name
    customer.description = description
    await customer.save()

    response.status(200).json({
        message: 'Successfully updated a new customer',
        data: customer
    })
  }

  /**
   * Delete a customer with id.
   * DELETE customers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ request, response }) {
    const customer = request.post().customer
    
    await customer.delete()
    response.status(200).json({
      message: 'Successfully deleted a new customer',
    })
  }
}

module.exports = CustomerController
