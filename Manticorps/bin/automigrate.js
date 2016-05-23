// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-database
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mongodb;
ds.automigrate('Saison', function(err) {
  if (err) throw err;

  var accounts = [
    {
      email: 'john.doe@ibm.com',
      createdAt: new Date(),
      lastModifiedAt: new Date(),
    },
    {
      email: 'jane.doe@ibm.com',
      createdAt: new Date(),
      lastModifiedAt: new Date(),
    },
  ];
  var count = accounts.length;
  accounts.forEach(function(account) {
    app.models.Saison.create(account, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});
