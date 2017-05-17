  'use strict';

 exports.up = function(knex) {
   return knex.schema.createTable('classifieds', function(table) {
     table.increments();
     table.string('title').notNullable();
     table.string('description').notNullable();
     table.decimal('price').notNullable();
     table.string('item_image').notNullable();
     table.timestamps(true, true);
   });
 };

 exports.down = function(knex) {
   return knex.schema.dropTable('classifieds');
 };
