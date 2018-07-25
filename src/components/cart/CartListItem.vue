<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{ cartItem.title }}</p>
      <div>
        <span class="cart-item--price has-text-primary has-text-weight-bold">
          ${{ cartItem.price }} x {{ cartItem.quantity }}
        </span>
        <span>
          <i @click="addCartItem(cartItem)"
            class="fa fa-arrow-circle-up cart-item__modify"></i>
          <i @click="removeCartItem(cartItem)"
            class="fa fa-arrow-circle-down cart-item__modify"></i>
        </span>
      </div>
    </div>
   <div class="cart-item__image image">
      <img :src="require(`../../assets/${cartItem.image_tag}`)" />
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'CartListItem',
  props: ['cartItem'],
  methods: {
    ...mapActions([
      'addCartItem',
      'removeCartItem'
    ])
  }
};
</script>

<style scoped>
.cart-item--modify {
  cursor: pointer;
}
.image {
  
      width: 85px;
    height: 85px;
      left: 67%;
    bottom: 40%;
}
</style>
