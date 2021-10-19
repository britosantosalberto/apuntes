/*
Todos los documentos con todos sus campos
*/
db.coleccion01.find()
/*
Todos los documentos de la coleccion
*/
db.inventory.find( {} )
/*
Los que tiene status con "D"
*/
db.inventory.find( { status: "D" } )

db.inventory.find( { status: {$eq:"D"} } )

/**
 * Valor de qty es 20
 */
db.inventory.find( {qty: {$eq:20} })

/*
Los que tengan "123" en el campo code de item
*/
db.inventory.find({"item.code": {$eq:"123"}})