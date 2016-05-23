module.exports = function(Saison) {
  Saison.findOnSaison = function(yo,callback){
      return callback(null,"il faut l'impplémenter");
  }

  Saison.remoteMethod(
    "findOnSaison",
    {
      description : 'yoyoyoyo',
      accepts : [
        {arg:'yo',type:'string',required:true}
      ],
      returns:{
        arg:'status',type:'string',root:true,description:'Return value'
      },
      http:{verb:'post',path:'/findOnSaison'}
    }
  );
};
