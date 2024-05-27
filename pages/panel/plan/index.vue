<script lang="ts" setup>


import type {ApiResponse} from "~";
import {endpoints} from "~/helpers/endpoints";
import {pitLib} from "~/helpers/pitLib";

definePageMeta({
  layout:"panel",
  middleware:"ensure-login"
})
const {data:planResp,pending:loadingPlans} =useFetch<ApiResponse>(endpoints.plan.list,{
  method:"post",
  headers:{
    Authorization:'Bearer '+pitLib.auth.get()?.token
  }
})

</script>

<template>
  <div class="q-pa-md">
    <q-markup-table>
      <thead>
      <tr class="bg-grey-5 text-white text-h5">
        <th class="text-left">
          Title
        </th>
        <th class="text-left">
          Validity
        </th>
        <th class="text-left">
          Session
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left">
          Action
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="n in 5" :key="n" v-if="loadingPlans">
        <td class="text-left">
          <q-skeleton animation="blink" type="text" />
        </td>
        <td class="text-right">
          <q-skeleton animation="blink" type="text" />
        </td>
        <td class="text-right">
          <q-skeleton animation="blink" type="text" />
        </td>
        <td class="text-right">
          <q-skeleton animation="blink" type="text" />
        </td>
        <td class="text-right">
          <q-skeleton animation="blink" type="text" />
        </td>
      </tr>
      <tr v-if="planResp?.status" v-for="p in planResp.data">
        <td>{{p.title}}</td>
        <td>{{p.validity}}</td>
        <td>{{p.session}}</td>
        <td>{{p.price}}</td>
        <td></td>
      </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<style scoped></style>
