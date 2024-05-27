<script lang="ts" setup>
import {endpoints} from "~/helpers/endpoints";
import type {ApiResponse, User} from "~";
import {pitLib} from "../../../helpers/pitLib";

definePageMeta({
  layout:"panel",
  middleware:"ensure-login"
})

const tab=ref('customer')
</script>

<template>


  <div class="q-pa-md">
    <div class="q-gutter-y-md" >
      <q-card>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
        >
          <q-tab name="customer" icon="fa fa-user" label="Customer" />
          <q-tab name="employee" icon="fa fa-user-tie" label="Employee" v-if="pitLib.auth.get().role=='admin'"/>
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="customer">
            <lazy-panel-user-list-customer></lazy-panel-user-list-customer>
          </q-tab-panel>

          <q-tab-panel name="employee" v-if="pitLib.auth.get().role=='admin'">
            <lazy-panel-user-list-employee></lazy-panel-user-list-employee>
          </q-tab-panel>

        </q-tab-panels>
      </q-card>

    </div>
  </div>






</template>

<style scoped></style>
