import axios from 'axios';

const state = {
    productItem: []
};
const mutations = {
    UPDATE_PRODUCT_ITEMS (state, payload) {
        state.productItem = payload;
    }
};
const actions = {
    getProductItems({commit}) {
        axios.get('/api/products').then((response) => {
            commit('UPDATE_PRODUCT_ITEMS',response.data)
        });
    }
};
const getters = {
    productItems: state => state.productItems
};

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;