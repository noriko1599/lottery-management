<template>
  <q-item clickable tag="a" target="_blank" @click="toPage(path)">
    <q-item-section v-if="icon" avatar>
      <q-icon style="color: black" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        <div style="color: black">{{ title }}</div>
      </q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "Menu",
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ""
    },
    path: {
      type: String,
      default: "#",
      required: true
    },
    icon: {
      type: String,
      default: ""
    }
  },
  methods: {
    toPage(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    }
  }
};
</script>
