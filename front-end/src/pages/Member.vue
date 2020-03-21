<template>
  <q-page padding>
    <!-- <div class="row q-mt-md q-mb-xl q-px-md">
      <div class="col col-xs-12">
        <div class="text-h3 text-center">จัดการข้อมูลลูกมือ</div>
      </div>
    </div>
    <q-separator />-->
    <div class="row q-mt-md">
      <div class="col-12 col-xs-12 q-px-md q-pb-md">
        <div class="text-h4 text-center">เพิ่มลูกมือ</div>
      </div>
      <div class="col-md-12 q-px-md">
        <div class="text-h6">ชื่อลูกมือ</div>
      </div>
      <div class="col-md-12 col-xs-12 q-px-md">
        <q-input
          v-model="name"
          type="text"
          outlined
          label="ชื่อลูกมือ"
          @keyup.enter="nextForm(`sCommission`)"
        />
      </div>
    </div>
    <div class="row q-my-md">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12 q-px-md">
            <div class="text-h6">S</div>
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="sCommission"
              v-model="sCommission"
              outlined
              type="number"
              label="ค่าคอม S"
              @keyup.enter="nextForm(`sReward`)"
            />
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="sReward"
              @keyup.enter="nextForm(`a1Commission`)"
              v-model="sReward"
              outlined
              type="number"
              label="S รางวัลบาทละ"
            />
          </div>
        </div>
      </div>

      <!-- ----------------------------------------------------------- -->

      <div class="col-md-6 q-pb-md">
        <div class="row">
          <div class="col-md-12 q-px-md">
            <div class="text-h6">A1</div>
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="a1Commission"
              v-model="a1Commission"
              outlined
              type="number"
              label="ค่าคอม A1"
              @keyup.enter="nextForm(`a1Reward`)"
            />
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="a1Reward"
              @keyup.enter="nextForm(`b1Commission`)"
              v-model="a1Reward"
              outlined
              type="number"
              label="A1 รางวัลบาทละ"
            />
          </div>
        </div>
      </div>

      <!-- ----------------------------------------------------------- -->

      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12 q-px-md">
            <div class="text-h6">B1</div>
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="b1Commission"
              v-model="b1Commission"
              outlined
              type="number"
              label="ค่าคอม B1"
              @keyup.enter="nextForm(`b1Reward`)"
            />
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="b1Reward"
              @keyup.enter="nextForm(`c1Commission`)"
              v-model="b1Reward"
              outlined
              type="number"
              label="B1 รางวัลบาทละ"
            />
          </div>
        </div>
      </div>

      <!-- ----------------------------------------------------------- -->

      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12 q-px-md">
            <div class="text-h6">C1</div>
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="c1Commission"
              v-model="c1Commission"
              outlined
              type="number"
              label="ค่าคอม C1"
              @keyup.enter="nextForm(`c1Reward`)"
            />
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="c1Reward"
              @keyup.enter="nextForm(`aCommission`)"
              v-model="c1Reward"
              outlined
              type="number"
              label="C1 รางวัลบาทละ"
            />
          </div>
        </div>
      </div>

      <!-- ----------------------------------------------------------- -->

      <div class="col-md-6 q-pb-md">
        <div class="row">
          <div class="col-md-12 q-px-md">
            <div class="text-h6">A</div>
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="aCommission"
              v-model="aCommission"
              outlined
              type="number"
              label="ค่าคอม A"
              @keyup.enter="nextForm(`aReward`)"
            />
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="aReward"
              @keyup.enter="nextForm(`bCommission`)"
              v-model="aReward"
              outlined
              type="number"
              label="A รางวัลบาทละ"
            />
          </div>
        </div>
      </div>

      <!-- ----------------------------------------------------------- -->

      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12 q-px-md">
            <div class="text-h6">B</div>
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="bCommission"
              v-model="bCommission"
              outlined
              type="number"
              label="ค่าคอม B"
              @keyup.enter="nextForm(`bReward`)"
            />
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="bReward"
              @keyup.enter="nextForm(`cCommission`)"
              v-model="bReward"
              outlined
              type="number"
              label="B รางวัลบาทละ"
            />
          </div>
        </div>
      </div>

      <!-- ----------------------------------------------------------- -->

      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12 q-px-md">
            <div class="text-h6">C</div>
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="cCommission"
              v-model="cCommission"
              outlined
              type="number"
              label="ค่าคอม C"
              @keyup.enter="nextForm(`cReward`)"
            />
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="cReward"
              @keyup.enter="nextForm(`bigCommission`)"
              v-model="cReward"
              outlined
              type="number"
              label="C รางวัลบาทละ"
            />
          </div>
        </div>
      </div>

      <!-- ----------------------------------------------------------- -->

      <div class="col-md-6 q-pb-md">
        <div class="row">
          <div class="col-md-12 q-px-md">
            <div class="text-h6">Big</div>
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="bigCommission"
              v-model="bigCommission"
              outlined
              type="number"
              label="ค่าคอม Big"
              @keyup.enter="nextForm(`bigReward`)"
            />
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="bigReward"
              @keyup.enter="nextForm(`nCommission`)"
              v-model="bigReward"
              outlined
              type="number"
              label="Big รางวัลบาทละ"
            />
          </div>
        </div>
      </div>

      <!-- ----------------------------------------------------------- -->

      <div class="col-md-6 col-pb-md">
        <div class="row">
          <div class="col-md-12 q-px-md">
            <div class="text-h6">N</div>
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="nCommission"
              v-model="nCommission"
              outlined
              type="number"
              label="ค่าคอม N"
              @keyup.enter="nextForm(`nReward`)"
            />
          </div>
          <div class="col-md-6 q-px-md">
            <q-input
              ref="nReward"
              @keyup.enter="nextForm(`createMemberBtn`)"
              v-model="nReward"
              outlined
              type="number"
              label="N รางวัลบาทละ"
            />
          </div>
        </div>
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
import { memberListTableColumns } from "../commons/member-list-table-columns";
export default {
  data() {
    return {
      name: null,
      sReward: null,
      sCommission: null,
      a1Reward: null,
      a1Commission: null,
      b1Reward: null,
      b1Commission: null,
      c1Reward: null,
      c1Commission: null,
      aReward: null,
      aCommission: null,
      bReward: null,
      bCommission: null,
      cReward: null,
      cCommission: null,
      bigReward: null,
      bigCommission: null,
      nReward: null,
      nCommission: null,
      columns: memberListTableColumns
    };
  },
  methods: {
    async createMember() {
      if (
        !this.name ||
        !this.sReward ||
        !this.sCommission ||
        !this.a1Reward ||
        !this.a1Commission ||
        !this.b1Reward ||
        !this.b1Commission ||
        !this.c1Reward ||
        !this.c1Commission ||
        !this.aReward ||
        !this.aCommission ||
        !this.bReward ||
        !this.bCommission ||
        !this.cReward ||
        !this.cCommission ||
        !this.bigReward ||
        !this.bigCommission ||
        !this.nReward ||
        !this.nCommission
      ) {
        return;
      }
      const member = {
        name: this.name,
        sReward: this.sReward,
        sCommission: this.sCommission,
        a1Reward: this.a1Reward,
        a1Commission: this.a1Commission,
        b1Reward: this.b1Reward,
        b1Commission: this.b1Commission,
        c1Reward: this.c1Reward,
        c1Commission: this.c1Commission,
        aReward: this.aReward,
        aCommission: this.aCommission,
        bReward: this.bReward,
        bCommission: this.bCommission,
        cReward: this.cReward,
        cCommission: this.cCommission,
        bigReward: this.bigReward,
        bigCommission: this.bigCommission,
        nReward: this.nReward,
        nCommission: this.nCommission
      };
      await this.$store.dispatch(
        `member/${MEMBER_ACTION.CREATE_MEMBER}`,
        member
      );
      this.clearField();
    },
    clearField() {
      this.name = null;
      this.sReward = null;
      this.sCommission = null;
      this.a1Reward = null;
      this.a1Commission = null;
      this.b1Reward = null;
      this.b1Commission = null;
      this.c1Reward = null;
      this.c1Commission = null;
      this.aReward = null;
      this.aCommission = null;
      this.bReward = null;
      this.bCommission = null;
      this.cReward = null;
      this.cCommission = null;
      this.bigReward = null;
      this.bigCommission = null;
      this.nReward = null;
      this.nCommission = null;
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