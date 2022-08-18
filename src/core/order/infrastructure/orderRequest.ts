import axiosInstance from "../../auth/infrastructure/axiosInstance";
import isEmpty from "lodash/isEmpty";
import { TCartItem } from "../type/cart";

export function orderRequestFactory(Notification) {

  const $http = axiosInstance;
  let cart: any[] = [];

  return {
    cartUpdated: function (item) {
      cart.push(item);
      // $rootScope.$broadcast('cart-updated');
    },

    cartLoaded: function (loadedCart) {
      cart = loadedCart;
      // $rootScope.$broadcast('cart-updated');
    },

    searchCmp: function (srchstr, catrcmp, page, callback) {
      $http
        .get("/api/orders/ndl/" + srchstr + "/" + catrcmp + "/" + page)
        .then(function (d) {
          if (isEmpty(d)) {
            Notification.notifier({
              // message: Lang.eng.order.search.notfound,
              type: "error",
            });
          }
          callback(d);
        })
        .catch(function () {
          Notification.notifier({
            // message: Lang.eng.order.search.error,
            type: "error",
          });
        });
    },

    getAllSuppliers: function (callback) {
      $http.get("/api/orders/suppliers/").then(function (data) {
        callback(data);
      });
    },
    getSupplierName: function (query, callback) {
      // $http.get('/api/orders/supplier/typeahead/'+query).then(function(data){
      //   callback(data);
      // });
      $http.get("/api/orders/supplier/typeahead/" + query).then(function (s) {
        const results = [];
        // $.each(s, function () {
        //   results.push(this.supplierName);
        // });
        callback(results);
      });
    },
    orders: function (callback) {
      const res = [];
      $http.get("/api/orders").then(function (data) {
        const r = data;
        // angular.copy(r, res);
        return callback(res);
      });
    },
    /**
     * Fetch the items that you have added to your order cart.
     * @returns 
     */
    getCartContent: async function getCartContent() {
      const {data} =  await $http.get("/api/cart");
      return data
    },
    // Progresses / Moves an order from the cart to pending.
    postCart: async function (selectedCart) {
      const {data} = await $http
        .post("/api/orders/cart", selectedCart)
      return data
    },
    /**
     * Saves an order to the cart
     * @param form 
     * @returns 
     */
    save: function (cartItem: TCartItem) {
      return $http.post("/api/orders", cartItem).then(
        function () {
          Notification.notifier({
            // message: Lang.eng.order.cart.success,
            type: "success",
          });
        },
        function () {
          Notification.notifier({
            // message: Lang.eng.order.cart.error,
            type: "error",
          });
        }
      );
    },
    updateOrder: function (o, callback) {
      $http
        .put("/api/orders/" + o._id, o)
        .then(function (data) {
          Notification.notifier({
            // message: Lang.eng.order.update.success,
            type: "success",
          });
          callback(data);
        })
        .catch(function () {
          Notification.notifier({
            // message: Lang.eng.order.update.error,
            type: "error",
          });
        });
    },
    count: function (callback) {
      $http.get("api/orders/count").then(function (d) {
        callback(d);
      });
    },
    remove: function (order_id, callback) {
      $http.delete("/api/orders/" + order_id).then(callback);
    },
    moreInfo: function (id, callback) {
      $http
        .get("/api/orders/ndl/" + id + "/summary")
        .then(function (d) {
          callback(d);
        })
        .catch(function () {
          Notification.notifier({
            // message: Lang[Lang.set].order.summary.error,
            type: "error",
          });
        });
    },

    notifySupplier: function (id, type, orders, cb) {
      $http
        .post("/api/suppliers/" + id + "/notify?type=" + type, orders)
        .then(function (d) {
          cb(d);
        })
        .catch(function () {
          //Fit in error here
        });
    },
  };
}
