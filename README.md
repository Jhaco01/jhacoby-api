#JHACOBY API

Al realizar una petición HTTP, el servicio retornara el mensaje: ***welcome to jhacoby-api***

##GET lista de productos

GET /products retornara todos los productos registrados en la base de datos.

**EJEMPLO**

GET `/products`

**RESPUESTA**

`[`
`   {`
`    "id": 5,`
`   "name": "ENERGETICA MR BIG",`
`    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",`
`    "price": 1490,`
`    "discount": 20,`
`    "category": 1`
`  },`
`  {`
`    "id": 6,`
`    "name": "ENERGETICA RED BULL",`
`    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",`
`    "price": 1490,`
`    "discount": 0,`
`    "category": 1`
`  },`

 >RESTO DE LOS PRODUCTOS DISPONIBLES EN LA BASE DE DATOS.

 `]`

 ##GET lista de productos por categoría

 Cada producto en la bd contiene en su información, un parametro 'category' que identifica la categoría a la que pertenece; es este el parametro que se debe enviar en el request.
 
 GET /products/:id retornará una lista con los productos que se encuentren dentro de la categoría de productos identificada con el id enviado en el request.

 **EJEMPLO** 

 GET `/products/6`

 **RESPUESTA**

`[`
`  {`
`    "id": 98,`
`    "name": "Cerveza Escudo Normal LATA 350CC",`
`    "url_image": "",`
`    "price": 600,`
`    "discount": 0,`
`    "category": 6`
`  },`
`  {`
`    "id": 99,`
`    "name": "Cerveza Escudo Sin Filtrar LATA 350CC",`
`    "url_image": "",`
`    "price": 800,`
`    "discount": 0,`
`    "category": 6`
`  }`
`]`

 ##GET lista de categorías

 GET /category retorna una lista con las categorias de productos disponibles en la bd, cada una identificada con un id que le permite ser relacionada con los productos disponibles en la bd.

 **EJEMPLO**

 GET `/categoty`

 **RESPUESTA**

`[`
`  {`
`    "id": 1,`
`    "name": "bebida energetica"`
`  },`
`  {`
`    "id": 2,`
`    "name": "pisco"`
`  },`
`  {`
`    "id": 3,`
`    "name": "ron"`
`  },`
`  {`
`    "id": 4,`
`    "name": "bebida"`
`  },`
`  {`
`    "id": 5,`
`    "name": "snack"`
`  },`
`  {`
`    "id": 6,`
`    "name": "cerveza"`
`  },`
`  {`
`    "id": 7,`
`    "name": "vodka"`
`  }`
`]`

##GET lista de productos relacionados a la busqueda

GET /products/product/:search retorna una lista con todos los productos en la bd que contengan en su nombre la palabra, palabras o letras indicadas en la request enviada.

**EJEMPLO**

GET `/products/product/sal`

**RESPUESTA**

`[`
`  {`
`    "id": 47,`
`    "name": "Maní salado",`
`    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisaladomp4415.jpg",`
`    "price": 600,`
`    "discount": 0,`
`    "category": 5`
`  },`
`  {`
`    "id": 53,`
`    "name": "Mani Sin Sal",`
`    "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg",`
`    "price": 500,`
`    "discount": 0,`
`    "category": 5`
`  }`
`]`