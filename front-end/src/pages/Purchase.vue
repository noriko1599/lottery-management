<template>
  <q-page padding>
    <div class="row q-mt-md q-mb-xl q-px-md">
      <div class="col text-h3 text-center">คีย์หวย</div>
    </div>
    <q-separator />
    <div class="row q-my-xl">
      <div class="col-xs-12 col-md-6 q-pa-md">
        <q-select
          outlined
          v-model="memberId"
          :options="members"
          label="ลูกมือ"
          emit-value
          map-options
          @input="nextForm(`number`)"
        />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input
          ref="number"
          @keyup.enter="nextForm(`s`)"
          v-model="number"
          outlined
          type="number"
          label="เบอร์"
        />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input
          ref="s"
          @keyup.enter="nextForm(`a1`)"
          v-model="s"
          outlined
          type="number"
          label="S"
        />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input
          ref="a1"
          @keyup.enter="nextForm(`b1`)"
          v-model="a1"
          outlined
          type="number"
          label="A1"
        />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input
          ref="b1"
          @keyup.enter="nextForm(`c1`)"
          v-model="b1"
          outlined
          type="number"
          label="B1"
        />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input
          ref="c1"
          @keyup.enter="nextForm(`a`)"
          v-model="c1"
          outlined
          type="number"
          label="C1"
        />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input ref="a" @keyup.enter="nextForm(`b`)" v-model="a" outlined type="number" label="A" />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input ref="b" @keyup.enter="nextForm(`c`)" v-model="b" outlined type="number" label="B" />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input
          ref="c"
          @keyup.enter="nextForm(`big`)"
          v-model="c"
          outlined
          type="number"
          label="C"
        />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input
          ref="big"
          @keyup.enter="nextForm(`n`)"
          v-model="big"
          outlined
          type="number"
          label="BIG"
        />
      </div>
      <div class="col-xs12 col-6 q-pa-md">
        <q-input
          ref="n"
          @keyup.enter.prevent="nextForm(`purchaseBtn`)"
          v-model="n"
          outlined
          type="number"
          label="N"
        />
      </div>
      <div class="col-12 q-pa-md">
        <q-btn
          ref="purchaseBtn"
          style="width: 100%"
          size="lg"
          color="green"
          label="คีย์หวย"
          @click.prevent="purchase()"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { MEMBER_STATE } from "../store/member/types";
import { PURCHASE_ACTION } from "../store/purchase/types";
export default {
  data() {
    return {
      memberId: null,
      number: null,
      s: null,
      a1: null,
      b1: null,
      c1: null,
      a: null,
      b: null,
      c: null,
      big: null,
      n: null
    };
  },
  computed: {
    members: {
      get() {
        const members = [];
        this.$store.state.member[MEMBER_STATE.MEMBERS].map(m => {
          members.push({ label: m.name, value: m.id });
        });
        return members;
      }
    },
    threeDigit() {
      return parseInt(this.number.toString().substr(1));
    }
  },
  methods: {
    async purchase() {
      if (
        !this.memberId ||
        !this.number ||
        !this.s ||
        !this.a1 ||
        !this.b1 ||
        !this.c1 ||
        !this.a ||
        !this.b ||
        !this.c ||
        !this.big ||
        !this.n
      ) {
        return;
      }
      const purchase = {
        memberId: this.memberId,
        fourDigitNumber: this.number,
        threeDigitNumber: this.number.toString().substr(1),
        s: this.s,
        a1: this.a1,
        b1: this.b1,
        c1: this.c1,
        a: this.a,
        b: this.b,
        c: this.c,
        big: this.big,
        n: this.n
      };
      await this.$store.dispatch(
        `purchase/${PURCHASE_ACTION.CREATE_PURCHASE}`,
        purchase
      );
      this.clearField();
    },
    nextForm(target) {
      this.$refs[target].$el.focus();
    },
    clearField() {
      this.memberId = null;
      this.number = null;
      this.s = null;
      this.a1 = null;
      this.b1 = null;
      this.c1 = null;
      this.a = null;
      this.b = null;
      this.c = null;
      this.big = null;
      this.n = null;
    }
  },
  async beforeMount() {
    await this.$store.dispatch(`purchase/${PURCHASE_ACTION.FETCH_PURCHASE}`);
  }
};
</script>

<style>
</style>