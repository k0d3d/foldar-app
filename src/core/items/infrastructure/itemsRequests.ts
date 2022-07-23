

export const ItemsService = function ($http, Language, Notification) {
  return {

    items: function (callback) {
      $http.get('/api/items/listAll')
        .success(function (data) {
          Notification.notifier({
            message: Language.eng.items.list.fetch.success,
            type: 'success'
          });
          callback(data);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.list.fetch.error,
            type: 'error'
          });
        });
    },


    request_search: function request_search(query, scope, options) {
      return $http.get('/api/items/search?s=' + query + '&scope=' + scope + '&' + options);
    },

    //Typeahead Query
    getItemName: function (query, callback) {
      // $.getJSON('/api/items/typeahead/?q=' + encodeURI(query), function (s) {
        // const results: any[] = [];
        // _.forEach(s, function (i) {
        //   results.push(itemName);
        // });

        // callback(results, s);
      // });
    },

    //Query Supplier Typeahead
    getSupplierName: function (query, callback) {
      const supplierName = ""
      $http.get('/api/supplier/typeahead/term/supplierName/query/' + encodeURI(query))
        .success(function (s) {
          const results: string[] = [];
          // $.each(s, function () {
          //   results.push(supplierName);
          // });
          callback(results, s);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.supplier.typeahead.error,
            type: 'error'
          });
        });
    },


    summary: function (id, locationId, callback) {
      $http.get('/api/items/' + encodeURI(id) + '/options/quick/locations/' + encodeURI(locationId)).success(callback);
    },

    save: function (post, callback) {
      $http.post('/api/items', { item: post }).success(function (data, status) {
        Notification.modal({
          heading: 'Item Added',
          body: Language.eng.items.save.success,
          type: 'success',
        });
        callback(true, status);
      }).
        error(function (data, status) {
          Notification.modal({
            heading: 'Error Adding Item',
            body: Language.eng.items.save.error,
            type: 'error',
          });
          callback(false, status);
        });
    },

    saveLocation: function (post, callback) {
      $http.post('/api/items/location', post)
        .success(function (data) {
          Notification.notifier({
            message: Language.eng.stock.location.create.success,
            type: 'success'
          });
          callback(data);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.stock.location.create.error,
            type: 'error'
          });
        });
    },

    //Gets dispense records from the server
    fetchDispenseRecords: function (status, callback) {
      $http.get('/api/items/locations/records/status/' + status).
        success(function (data) {
          callback(data);
        });
    },

    //Post a dispense record
    dispense: function (list, callback) {
      $http.post('/api/items/dispense', list).
        success(function () {
          Notification.notifier({
            message: Language.eng.dispense.approve.success,
            type: 'success'
          });
          Notification.message.close();
          callback();
        }).
        error(function () {
          Notification.notifier({
            message: Language.eng.dispense.approve.error,
            type: 'error'
          });
        });
    },


    //Fetches fields data for an Item
    getItemFields: function (itemId, callback) {
      $http.get('/api/items/' + encodeURI(itemId) + '/edit').success(callback);
    },

    //Fetches fields data for an Item
    getDSProductFields: function (itemId, callback) {
      $http.get('/api/items/' + itemId + '/ds-product').success(callback);
    },


    //Post updated item fields
    update: function (form, callback) {
      $http.put('/api/items/' + form._id + '/edit', form)
        .success(function () {
          Notification.notifier({
            message: Language.eng.items.update.success,
            type: 'success'
          });
          callback(true);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.update.error,
            type: 'error'
          });
        });
    },

    //Delete Item
    delete: function (id, callback) {
      $http.delete('/api/items/' + id)
        .success(callback);
    },

    //Add an item category
    addCategory: function (name, callback) {
      $http.post('/api/items/category/', { name: name, parent: '' })
        .success(function (data) {
          Notification.notifier({
            message: Language.eng.items.category.add.success,
            type: 'success'
          });
          callback(data);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.category.add.error,
            type: 'error'
          });
        });
    },
    //remove an item category
    delCategory: function (name, callback) {
      $http.delete('/api/items/category/' + name)
        .success(function () {
          Notification.notifier({
            message: Language.eng.items.category.delete.success,
            type: 'success'
          });
          callback();
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.category.delete.error,
            type: 'error'
          });
        });
    },
    //Add an item form
    addForm: function (name, callback) {
      $http.post('/api/items/form/', { name: name })
        .success(function (data) {
          Notification.notifier({
            message: Language.eng.items.form.add.success,
            type: 'success'
          });
          callback(data);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.form.add.error,
            type: 'error'
          });
        });
    },
    //Add an item packaging
    addPackaging: function (name, callback) {
      $http.post('/api/items/packaging/', { name: name, parent: '' })
        .success(function (data) {
          Notification.notifier({
            message: Language.eng.items.packaging.add.success,
            type: 'success'
          });
          callback(data);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.packaging.add.error,
            type: 'error'
          });
        });
    },

    //List Categories
    listCategory: function (callback) {
      $http.get('/api/items/category')
        .success(function (data) {
          callback(data);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.category.list.error,
            type: 'error'
          });
        });
    },
    //List Forms
    listForm: function (callback) {
      $http.get('/api/items/form')
        .success(function (data) {
          callback(data);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.form.list.error,
            type: 'error'
          });
        });
    },
    //List packaging
    listPackaging: function (callback) {
      $http.get('/api/items/packaging')
        .success(function (data) {
          callback(data);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.items.packaging.list.error,
            type: 'error'
          });
        });
    },

    //Prescription Record
    prdt: function (id, cb) {
      $http.get('/api/items/prescribe/' + id)
        .success(function (d) {
          cb(d);
        })
        .error(function () {
          Notification.notifier({
            message: Language.eng.dispense.prescribe.error,
            type: 'error'
          });
        });
    },

    getByRegNo: function (query, cb) {
      console.log(query);
      $http.get('/api/nafdacdrugs/typeahead?q=' + encodeURI(query))
        .success(function (d) {
          cb(d);
        })
        .error(function () {
          alert('An Error Occurred, please check your request');
        });
    }

  }


}