<script lang="ts" setup>

import type {ApiResponse} from "~";
import {endpoints} from "~/helpers/endpoints";
import {pitLib} from "~/helpers/pitLib";

definePageMeta({
  layout:"panel",
  middleware:"ensure-login"
})

const {data:planResp,pending:loadingPlanPurchases} =useFetch<ApiResponse>(endpoints.plan.purchaseList,{
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
          Plan Name
        </th>
        <th class="text-left">
          Paid Amount
        </th>
        <th class="text-left">
          Purchased By
        </th>
        <th class="text-left">
          Status
        </th>
        <th class="text-left">
          Action
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="n in 5" :key="n" v-if="loadingPlanPurchases">
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
      <tr v-if="planResp?.status" v-for="p in planResp.data.data">
        <td>{{p.plan_id[0].title}}</td>
        <td>{{p.currency}} {{p.amount_paid/100}}</td>
        <td>{{p.created_by[0].name}}</td>
        <td>
          <q-badge outline color="red" label="No Schedules" v-if="p.membership.some((obj:any)=>obj.calendar_schedule.length === 0)"/>
          <q-badge outline color="primary" label="Scheduled" v-else/>
        </td>
        <td></td>
      </tr>
      </tbody>
    </q-markup-table>
  </div>

</template>

<style scoped></style>
