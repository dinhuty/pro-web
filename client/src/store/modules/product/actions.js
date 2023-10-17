import { ProductAction } from "./types.actions";
import { ProductsAxiosService } from "@/services/remote/product";

export default {
    async [ProductAction.remote.FETCH_ALL](context) {
        return ProductsAxiosService.fetchAll({ page: 1, page_size: 12 })
            .then(response => {
                context.commit(ProductAction.local.SET_PRODUCTS, response.data);
            })
            .catch(error => {
                console.log(error)
            });
    },
    async [ProductAction.remote.FETCH_MOBILE](context, { category, query }) {
        return ProductsAxiosService.getProductByCategory(category, query)
            .then(response => {
                context.commit(ProductAction.local.SET_PRODUCTS, response.data);
            })
            .catch(error => {
                console.log(error)
            });
    },
    async [ProductAction.remote.FETCH_LAPTOP](context, { category, query }) {
        return ProductsAxiosService.getProductByCategory(category, query)
            .then(response => {
                context.commit(ProductAction.local.SET_PRODUCTS, response.data);
            })
            .catch(error => {
                console.log(error)
            });
    },
};


// export default {
//     [ProductAction.remote.FETCH_ALL](context) {
//         return new Promise((resolve, reject) => {
//             ProductsAxiosService.fetchAll({ page: 1, page_size: 12 })
//                 .then(response => {
//                     context.commit(ProductAction.local.SET_PRODUCTS, response.data);
//                     resolve(response.data);
//                 })
//                 .catch(error => {
//                     console.log(error)
//                 });
//         })
//     }
// };