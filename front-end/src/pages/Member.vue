<template>
  <q-page padding>
    <div class="row q-mt-md q-mb-xl q-px-md">
      <div class="col col-xs-12">
        <div class="text-h3 text-center">จัดการข้อมูลลูกมือ</div>
      </div>
    </div>
    <q-separator />
    <div class="row q-my-xl">
      <div class="col-12 col-xs-12 q-px-md q-pb-md">
        <div class="text-h4 text-center">เพิ่มลูกมือ</div>
      </div>
      <div class="col-md-6 col-xs-12 q-pa-md">
        <q-input
          v-model="name"
          type="text"
          outlined
          label="ชื่อลูกมือ"
          @keyup.enter="nextForm(`number`)"
        />
      </div>
      <div class="col-md-6 col-xs-12 q-pa-md">
        <q-input
          ref="number"
          v-model="commission"
          outlined
          type="number"
          label="ค่าคอม"
          @keyup.enter="nextForm(`sReward`)"
        />
      </div>
      <div class="col-xs-12 col-md-6 col-6 q-pa-md">
        <q-input
          ref="sReward"
          @keyup.enter="nextForm(`a1Reward`)"
          v-model="sReward"
          outlined
          type="number"
          label="S รางวัลบาทละ"
        />
      </div>
      <div class="col-xs-12 col-md-6 col-6 q-pa-md">
        <q-input
          ref="a1Reward"
          @keyup.enter="nextForm(`b1Reward`)"
          v-model="a1Reward"
          outlined
          type="number"
          label="A1 รางวัลบาทละ"
        />
      </div>
      <div class="col-xs-12 col-md-6 col-6 q-pa-md">
        <q-input
          ref="b1Reward"
          @keyup.enter="nextForm(`c1Reward`)"
          v-model="b1Reward"
          outlined
          type="number"
          label="B1 รางวัลบาทละ"
        />
      </div>
      <div class="col-xs-12 col-md-6 col-6 q-pa-md">
        <q-input
          ref="c1Reward"
          @keyup.enter="nextForm(`aReward`)"
          v-model="c1Reward"
          outlined
          type="number"
          label="C1 รางวัลบาทละ"
        />
      </div>
      <div class="col-xs-12 col-md-6 col-6 q-pa-md">
        <q-input
          ref="aReward"
          @keyup.enter="nextForm(`bReward`)"
          v-model="aReward"
          outlined
          type="number"
          label="A รางวัลบาทละ"
        />
      </div>
      <div class="col-xs-12 col-md-6 col-6 q-pa-md">
        <q-input
          ref="bReward"
          @keyup.enter="nextForm(`cReward`)"
          v-model="bReward"
          outlined
          type="number"
          label="B รางวัลบาทละ"
        />
      </div>
      <div class="col-xs-12 col-md-6 col-6 q-pa-md">
        <q-input
          ref="cReward"
          @keyup.enter="nextForm(`bigReward`)"
          v-model="cReward"
          outlined
          type="number"
          label="C รางวัลบาทละ"
        />
      </div>
      <div class="col-xs-12 col-md-6 col-6 q-pa-md">
        <q-input
          ref="bigReward"
          @keyup.enter="nextForm(`nReward`)"
          v-model="bigReward"
          outlined
          type="number"
          label="BIG รางวัลบาทละ"
        />
      </div>
      <div class="col-xs-12 col-md-6 col-6 q-pa-md">
        <q-input
          ref="nReward"
          @keyup.enter.prevent="nextForm(`createMemberBtn`)"
          v-model="nReward"
          outlined
          type="number"
          label="N รางวัลบาทละ"
        />
      </div>
      <div class="col q-px-md col-xs-12 q-mt-md text-right">
        <q-btn
          ref="createMemberBtn"
          style="width: 100%"
          color="green"
          label="เพิ่มลูกมือ"
          size="lg"
          @click="createMember"
        />
      </div>
    </div>
    <q-separator />
    <div class="row q-mt-xl q-px-md">
      <div class="col-12 q-px-md q-pb-md">
        <div class="text-h4 text-center">ลูกมือ</div>
      </div>
      <div class="col-12 col-xs-12">
        <q-table :data="members" :columns="columns" row-key="id" />
      </div>
    </div>
  </q-page>
</template>

<script>
import {
  MEMBER_STATE,
  MEMBER_ACTION,
  MEMBER_MUTATION
} from "../store/member/types";
export default {
  data() {
    return {
      name: null,
      commission: null,
      sReward: null,
      a1Reward: null,
      b1Reward: null,
      c1Reward: null,
      aReward: null,
      bReward: null,
      cReward: null,
      bigReward: null,
      nReward: null,
      columns: [
        {
          name: "name",
          label: "ชื่อ",
          field: "name",
          sortable: true,
          align: `center`
        },
        {
          name: "commission",
          label: "ค่าคอม",
          field: "commission",
          align: `center`,
          format: (val, row) => `${val}%`
        },
        {
          name: "sReward",
          label: "s",
          field: "sReward",
          align: `center`,
          format: (val, row) => `บาทละ ${val}`
        },
        {
          name: "a1Reward",
          label: "a1",
          field: "a1Reward",
          align: `center`,
          format: (val, row) => `บาทละ ${val}`
        },
        {
          name: "b1Reward",
          label: "b1",
          field: "b1Reward",
          align: `center`,
          format: (val, row) => `บาทละ ${val}`
        },
        {
          name: "c1Reward",
          label: "c1",
          field: "c1Reward",
          align: `center`,
          format: (val, row) => `บาทละ ${val}`
        },
        {
          name: "aReward",
          label: "a",
          field: "aReward",
          align: `center`,
          format: (val, row) => `บาทละ ${val}`
        },
        {
          name: "bReward",
          label: "b",
          field: "bReward",
          align: `center`,
          format: (val, row) => `บาทละ ${val}`
        },
        {
          name: "cReward",
          label: "c",
          field: "cReward",
          align: `center`,
          format: (val, row) => `บาทละ ${val}`
        },
        {
          name: "bigReward",
          label: "big",
          field: "bigReward",
          align: `center`,
          format: (val, row) => `บาทละ ${val}`
        },
        {
          name: "nReward",
          label: "n",
          field: "nReward",
          align: `center`,
          format: (val, row) => `บาทละ ${val}`
        }
      ]
    };
  },
  methods: {
    async createMember() {
      if (
        !this.name ||
        !this.commission ||
        !this.sReward ||
        !this.a1Reward ||
        !this.b1Reward ||
        !this.c1Reward ||
        !this.aReward ||
        !this.bReward ||
        !this.cReward ||
        !this.bigReward ||
        !this.nReward
      ) {
        return;
      }
      const member = {
        name: this.name,
        commission: this.commission,
        sReward: this.sReward,
        a1Reward: this.a1Reward,
        b1Reward: this.b1Reward,
        c1Reward: this.c1Reward,
        aReward: this.aReward,
        bReward: this.bReward,
        cReward: this.cReward,
        bigReward: this.bigReward,
        nReward: this.nReward
      };
      await this.$store.dispatch(
        `member/${MEMBER_ACTION.CREATE_MEMBER}`,
        member
      );
      this.clearField();
    },
    clearField() {
      this.name = null;
      this.commission = null;
    },
    nextForm(target) {
      this.$refs[target].$el.focus();
    }
  },
  computed: {
    members: {
      get() {
        return this.$store.state.member[MEMBER_STATE.MEMBERS];
      }
    }
  },
  async beforeMount() {
    await this.$store.dispatch(`member/${MEMBER_ACTION.FETCH_MEMBER}`);
  }
};
</script>

<style>
</style>