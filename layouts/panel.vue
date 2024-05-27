<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title @click="navigateTo('/')">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          {{Env.APP.NAME}} Dashboard
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
              expand-separator
              icon="account_circle"
              label="Account"
              :caption="pitLib.auth.get()?.name"
          >
            <center><q-badge outline color="primary" :label="pitLib.auth.get().role.toUpperCase()" /></center>
            <q-card>
              <q-card-section>
                <q-btn @click="logout">Logout</q-btn>
              </q-card-section>
            </q-card>
          </q-expansion-item>


          <q-expansion-item
              expand-separator
              icon="person"
              label="Users"
              header-class="text-blue"
          >
            <q-card>
              <q-item clickable v-ripple to="/panel/user">
                <q-item-section><span><i class="fa-solid fa-angles-right q-mr-md"></i>List</span></q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/panel/user/create">
                <q-item-section><span><i class="fa-solid fa-plus q-mr-md"></i>Create</span></q-item-section>
              </q-item>
            </q-card>
          </q-expansion-item>
          <q-expansion-item
              expand-separator
              icon="workspace_premium"
              label="Plans"
              header-class="text-blue"
          >
            <q-card>
              <q-item clickable v-ripple to="/panel/plan">
                <q-item-section><span><i class="fa-solid fa-angles-right q-mr-md"></i>List</span></q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/panel/plan/purchases">
                <q-item-section><span><i class="fa-solid fa-cart-shopping q-mr-md"></i>Purchases</span></q-item-section>
              </q-item>
            </q-card>
          </q-expansion-item>

        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <slot></slot>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {pitLib} from "~/helpers/pitLib.js";
import {Env} from "~/helpers/env";
const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
function logout() {
  pitLib.auth.clear()

  setTimeout(function () {
    location.replace("/auth")
  },200)
}
let d =pitLib.auth.get()
</script>