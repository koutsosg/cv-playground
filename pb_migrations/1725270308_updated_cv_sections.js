/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1lnxvkzt",
    "name": "data",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b10k82wbchjriy5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cz7vgq8ek76nj1q")

  // remove
  collection.schema.removeField("1lnxvkzt")

  return dao.saveCollection(collection)
})
