'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.table('projects', (table) => {
      table.date('dueDate')
    })
  }

  down () {
    this.table('projects', (table) => {
      table.dropColumn('dueDate')
    })
  }
}

module.exports = ProjectSchema
