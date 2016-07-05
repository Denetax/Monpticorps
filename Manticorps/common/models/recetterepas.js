var sqlServeur = require('../../back/config.js');

module.exports = function(Recetterepas) {
  Recetterepas.insertRecetterepas = function(data,callback){
  function test(RetourSql){
    for(var i=0;i<data.recette.length;i++){
      sqlServeur.querySql("INSERT INTO recetterepas (recette, repas, ordre )VALUES ("+data.recette[i]+","+data.repas+","+data.ordre[i]+")", function (resultQuery) {
          RetourSql(resultQuery);
      });
    }
  }
    test(function (resultQuery){
      return callback(null,resultQuery);
    })

  };

  Recetterepas.remoteMethod(
    "insertRecetterepas",
    {
      description : "lier une ou plusieurs recette a un repas",
      accepts: [
        {arg:'data',type:'object',required:true}
      ],
      returns:{
        arg:'status', type:"{\"repas\":\"1\",\"recette\":[1,2],\"ordre\":[1,3]}", root:true,description:'Return value'
      },
      http: {verb:'post',path:'/insertRecetterepas'}
    }
  );
  ///////////////////////////////// GET BY REPAS //////////////////////////////////////////////////////////////////

  Recetterepas.getByRepas = function(data,callback){
    //sqlServeur.querySql("SELECT * FROM recetteRepas WHERE repas ="+data, function (resultQuery) {
    //  return callback(null,resultQuery);
    //});
    sqlServeur.querySql("SELECT author,recette.name, recette.create_at, recette.updated_at FROM recette, recetterepas, repas WHERE 1=1 AND recetterepas.recette = recette.id AND repas.id = recetterepas.repas AND repas.id = "+data, function (resultQuery) {
      return callback(null,resultQuery);
    });
  };

  Recetterepas.remoteMethod(
    "getByRepas",
    {
      description : "Récuperer toute les recetteRepas d'un repas",
      accepts: [
        {arg:'data',type:'number',required:true}
      ],
      returns:{
        arg:'status', type:"", root:true,description:'Return value'
      },
      http: {verb:'get',path:'/getByRepas'}
    }
  );
};
