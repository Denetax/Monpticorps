var sqlServeur = require('../../back/config.js');

module.exports = function(Ingredientsaison) {
  Ingredientsaison.insertIngredientSaison = function(data,callback){
    for(var i=0;i<data.saison.length;i++){
      sqlServeur.querySql("INSERT INTO ingredientsaison (ingredient, saison )VALUES ("+data.ingredient+", "+data.saison[i]+")", function (resultQuery) {

      });
    }
    return callback(null,"OK");
  };

  Ingredientsaison.remoteMethod(
    "insertIngredientSaison",
    {
      description : "lier un ingrédient a une ou plusieurs saison",
      accepts: [
        {arg:'data',type:'object',required:true}
      ],
      returns:{
        arg:'status', type:'json', root:true,description:'Return value'
      },
      http: {verb:'post',path:'/insertIngredientSaison'}
    }
  );
};
