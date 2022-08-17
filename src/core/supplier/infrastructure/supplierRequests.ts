
import axiosInstance from '../../auth/infrastructure/axiosInstance'

export function supplierRequestsFactory (Notification) {

  const $http = axiosInstance


  return {
    all: async function({page, limit}: {page?: number, limit?: number} = {page : 0, limit: 20}){
      const {data} = await $http.get('/api/suppliers/page/'+page+'/limit/'+limit)
      return data
    },
  
    add: async function(supplierData){
      const {data} = await $http.post("/api/suppliers", supplierData)
      return data
    },
  
    search: function(query, callback){
      console.log(query);
      $http.get("/api/suppliers/search/query?"+$.param(query))
      .then(function(data){
        callback(data);
      })
      .catch(function(){
        callback(false);
      });
    },
    one: function(supplierId, callback){
      console.log(supplierId);
      $http.get("/api/suppliers/"+supplierId)
      .then(function(data){
        callback(data);
      })
      .catch(function(){
        callback(false);
      });
    },
  
    update: function(supplierData, callback){
      const supplierId = supplierData._id;
      $http.put("/api/suppliers/"+supplierId, supplierData )
      .then(function(data){
        Notification.notifier({
          // message: Lang.eng.supplier.update.success,
          type:'success'
        });
        callback(data);
      })
      .catch(function(){
        Notification.notifier({
          // message: Lang.eng.supplier.update.error,
          type: 'error'
        });
        callback(false);
      });
    },
  
    remove: function(id, callback){
      $http.delete("/api/suppliers/"+id)
      .then(function(){
        Notification.notifier({
          message: "Supplier Deleted",
          type: 'success'
        });
      })
      .catch(function(){
        Notification.notifier({
          message: "Error deleting this supplier",
          type: 'error'
        });
      });
    }
  
  }
}