"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tokendata
 */

const TokenDatum = use("App/Models/TokenDatum");
const Database = use("Database");

class TokenDatumController {
  /**
   * Show a list of all tokendata.
   * GET tokendata
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    try {
      const tokendata = await TokenDatum.all();
      response.status(200).json({
        message: "get successfully",
        data: tokendata
      });
    } catch (e) {
      response.status(400).json({
        message: "Something went wrong..."
      });
    }
  }

  /**
   * Render a form to be used for creating a new tokendatum.
   * GET tokendata/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new tokendatum.
   * POST tokendata
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const { name, token } = request.post();
      const tokendata = new TokenDatum();
      tokendata.name = name;
      tokendata.token = token;
      await tokendata.save();
      response.status(201).json({
        messages: "create success!",
        data: tokendata
      });
    } catch (e) {
      response.status(400).json({
        messages: e
      });
    }
  }

  /**
   * Display a single tokendatum.
   * GET tokendata/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params: { token }, request, response, view }) {
    try {
      const tokendata = await TokenDatum.findBy("token", token);
      response.status(201).json({
        messages: "get single item successfully",
        data: tokendata
      });
    } catch (e) {
      response.status(400).json({
        messages: "Data not found or something is error :/"
      });
    }
  }

  /**
   * Render a form to update an existing tokendatum.
   * GET tokendata/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update tokendatum details.
   * PUT or PATCH tokendata/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a tokendatum with id.
   * DELETE tokendata/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = TokenDatumController;
