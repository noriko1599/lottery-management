<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>Lottery Management System</q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">เมนู</q-item-label>
        <Menu v-for="link in menu" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from "components/Menu";

export default {
  name: "MainLayout",

  components: {
    Menu
  },

  data() {
    return {
      leftDrawerOpen: false,
      menu: [
        {
          title: "จัดการข้อมูลลูกมือ",
          icon: "school",
          path: "/dashboard/member"
        },
        {
          title: "คีย์หวย",
          icon: "school",
          path: "/dashboard/purchase"
        }
      ]
    };
  },
  mounted() {
    this.$router.replace(`/dashboard/member`);
  }
};
</script>
