import AxiosService from "../axios";

export const ProductsAxiosService = {
    fetchAll(args) {
        return AxiosService.get('product/list', args);
    },
    getProductBySlug(slug) {
        return AxiosService.get(`product/detail/${slug}`);
    },
    getProductByCategory(name, query){
        return AxiosService.get(`category/product/${name}`, {
            params: query
        })
    }
};

