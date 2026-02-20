import { defineStore } from "pinia";

export const cartStore = defineStore("cart", {
  state: () => ({
    // 전역상태관리의 변수값은 화면새로고침시 전체 리셋 -> 로컬스토리지(모든값이 문자열로 저장)에 저장
    totalQuantity: parseInt(localStorage.getItem("totalQuantity")) || 0,
    productsInCart: JSON.parse(localStorage.getItem("productsInCart")) || [],
  }),

  actions: {
    addCart(product) {
      this.totalQuantity += product.productCount;
      localStorage.setItem("totalQuantity", this.totalQuantity);
      const existProudct = this.productsInCart.find(
        (p) => p.productId === product.productId,
      );
      if (existProudct) {
        existProudct.productCount += product.productCount;
      } else {
        this.productsInCart.push(product);
      }
      localStorage.setItem(
        "productsInCart",
        JSON.stringify(this.productsInCart),
      );
    },
    clearCart() {
      localStorage.removeItem("productsInCart");
      localStorage.removeItem("totalQuantity");
      this.totalQuantity = 0;
      this.productsInCart = [];
    },
  },
  getters: {
    getTotalQuantity: (state) => state.totalQuantity,
    getProductsInCart: (state) => state.productsInCart,
  },
});
