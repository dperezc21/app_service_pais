const pais = require('../models').pais;

const arrayFronteras = (fronteras)=>{
    return fronteras.reduce((a,b)=>a+=","+b );
}

function tratarDatos(pais){
    if (pais.length>1){
        pais.forEach((element, index) => {
            pais[index].fronteras = element.fronteras.split(',')
        }); 
    }else{
        pais.fronteras = pais.fronteras.split(',');
    }
    return pais;
}

module.exports = {
 create(req, res) {
    const fronteras = req.body.fronteras;
    
    return pais
        .create ({
             nombre: req.body.nombre,
             favorito: req.body.favorito,
             fronteras: arrayFronteras(fronteras)
        })
        .then(pais => res.status(200).send(pais))
        .catch(error => res.status(400).send(error))
 },
 list(_, res) {
     return pais.findAll({})
        .then(pais => res.json(tratarDatos(pais)))
        .catch(error => res.status(400).send(error))
 },

 findById (req, res) {
     return pais.findOne({
         where: {
             id: req.body.id,
         }
        
     })
     .then(pais => res.json(tratarDatos(pais)))
     .catch(error => res.status(400).send(error))
     
  },

  delete (req, res) {
    return pais.destroy({
        where: {
            id: req.body.id,
        }
    })
    .then(pais => res.json({menssaje:pais}))
    .catch(error => res.status(400).send(error))
 },

 update (req, res) {
    const fronteras = req.body.fronteras;
    return pais.update({
        nombre:req.body.nombre,
        favorito:req.body.favorito,
        fronteras: arrayFronteras(fronteras)
    },
    {
        where: {
            id: req.body.id,
        }
    }
    )
    .then(pais => res.status(200).send(pais))
    .catch(error => res.status(400).send(error))
 },

};
