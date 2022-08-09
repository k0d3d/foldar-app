import axiosInstance from '../../auth/infrastructure/axiosInstance'
import { AddItemPayload, ItemsPayload } from "../type/payload";


export const ItemsRequestFactory = function (Notification) {
  
  const $http = axiosInstance

  return {

    items: async function () {
      const {data} = await $http.get('/api/items/listAll')
      if (data) {
        return data as ItemsPayload[]
      }

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
      $http.get('/api/supplier/typeahead/term/supplierName/query/' + encodeURI(query))
        .then(function (s) {
          const results: string[] = [];
          // $.each(s, function () {
          //   results.push(supplierName);
          // });
          callback(results, s);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.items.supplier.typeahead.error,
            type: 'error'
          });
        });
    },


    summary: function (id, locationId, callback) {
      $http.get('/api/items/' + encodeURI(id) + '/options/quick/locations/' + encodeURI(locationId)).then(callback);
    },

    save: async function (post: AddItemPayload) {
      const success = await $http.post('/api/items', { item: post })
      
      return success
    },

    saveLocation: function (post, callback) {
      $http.post('/api/items/location', post)
        .then(function (data) {
          Notification.notifier({
            // message: Language.eng.stock.location.create.success,
            type: 'success'
          });
          callback(data);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.stock.location.create.error,
            type: 'error'
          });
        });
    },

    //Gets dispense records from the server
    fetchDispenseRecords: function (status, callback) {
      $http.get('/api/items/locations/records/status/' + status).
        then(function (data) {
          callback(data);
        });
    },

    //Post a dispense record
    dispense: function (list, callback) {
      $http.post('/api/items/dispense', list).
        then(function () {
          Notification.notifier({
            // message: Language.eng.dispense.approve.success,
            type: 'success'
          });
          Notification.message.close();
          callback();
        }).
        catch(function () {
          Notification.notifier({
            // message: Language.eng.dispense.approve.error,
            type: 'error'
          });
        });
    },


    //Fetches fields data for an Item
    getItemFields: function (itemId, callback) {
      $http.get('/api/items/' + encodeURI(itemId) + '/edit').then(callback);
    },

    //Fetches fields data for an Item
    getDSProductFields: function (itemId, callback) {
      $http.get('/api/items/' + itemId + '/ds-product').then(callback);
    },


    //Post updated item fields
    update: function (form, callback) {
      $http.put('/api/items/' + form._id + '/edit', form)
        .then(function () {
          Notification.notifier({
            // message: Language.eng.items.update.success,
            type: 'success'
          });
          callback(true);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.items.update.error,
            type: 'error'
          });
        });
    },

    //Delete Item
    delete: function (id, callback) {
      $http.delete('/api/items/' + id)
        .then(callback);
    },

    //Add an item category
    addCategory: function (name, callback) {
      $http.post('/api/items/category/', { name: name, parent: '' })
        .then(function (data) {
          Notification.notifier({
            // message: Language.eng.items.category.add.success,
            type: 'success'
          });
          callback(data);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.items.category.add.error,
            type: 'error'
          });
        });
    },
    //remove an item category
    delCategory: function (name, callback) {
      $http.delete('/api/items/category/' + name)
        .then(function () {
          Notification.notifier({
            // message: Language.eng.items.category.delete.success,
            type: 'success'
          });
          callback();
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.items.category.delete.error,
            type: 'error'
          });
        });
    },
    //Add an item form
    addForm: function (name, callback) {
      $http.post('/api/items/form/', { name: name })
        .then(function (data) {
          Notification.notifier({
            // message: Language.eng.items.form.add.success,
            type: 'success'
          });
          callback(data);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.items.form.add.error,
            type: 'error'
          });
        });
    },
    //Add an item packaging
    addPackaging: function (name, callback) {
      $http.post('/api/items/packaging/', { name: name, parent: '' })
        .then(function (data) {
          Notification.notifier({
            // message: Language.eng.items.packaging.add.success,
            type: 'success'
          });
          callback(data);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.items.packaging.add.error,
            type: 'error'
          });
        });
    },

    //List Categories
    listCategory: function (callback) {
      $http.get('/api/items/category')
        .then(function (data) {
          callback(data);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.items.category.list.error,
            type: 'error'
          });
        });
    },
    //List Forms
    listForm: function (callback) {
      $http.get('/api/items/form')
        .then(function (data) {
          callback(data);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.items.form.list.error,
            type: 'error'
          });
        });
    },
    //List packaging
    listPackaging: function (callback) {
      $http.get('/api/items/packaging')
        .then(function (data) {
          callback(data);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.items.packaging.list.error,
            type: 'error'
          });
        });
    },

    //Prescription Record
    prdt: function (id, cb) {
      $http.get('/api/items/prescribe/' + id)
        .then(function (d) {
          cb(d);
        })
        .catch(function () {
          Notification.notifier({
            // message: Language.eng.dispense.prescribe.error,
            type: 'error'
          });
        });
    },

    getByRegNo: function (query, cb) {
      console.log(query);
      $http.get('/api/nafdacdrugs/typeahead?q=' + encodeURI(query))
        .then(function (d) {
          cb(d);
        })
        .catch(function () {
          alert('An Error Occurred, please check your request');
        });
    }

  }


}