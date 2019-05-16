"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TokenDataSchema extends Schema {
  up() {
    this.create("token_data", table => {
      table.increments();
      table.string("name", 20);
      table.string("token", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("token_data");
  }
}

module.exports = TokenDataSchema;
