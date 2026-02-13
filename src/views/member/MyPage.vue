<template>
  <MemberDetail :isMyPage="true" />
  <OrderList :isMyPage="true" />
</template>

<script>
import axios from "axios";
import OrderList from "../order/OrderList.vue";
import MemberDetail from "./MemberDetail.vue";

export default {
  props: ["isMyPage"],
  components: {
    MemberDetail,
    OrderList,
  },
  methods: {},
  async create() {
    try {
      const result = await axios.post(
        `${process.env.VUE_APP_API_BASE_URL}/member/myinfo`,
        this.member,
      );
      console.log(result.data);
    } catch (e) {
      console.log(e.response);
      alert(e.response.data.error_message);
    }
  },
};
</script>
