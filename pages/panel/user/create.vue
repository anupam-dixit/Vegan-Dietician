<script lang="ts" setup>
import {endpoints} from "~/helpers/endpoints";
import {pitLib} from "~/helpers/pitLib";
import type {ApiResponse} from "~";
import Swal from "sweetalert2";

const userCreateResp=ref()
const loading=ref<Boolean>(false)

definePageMeta({
  layout:"panel",
  middleware:"ensure-login"
})
const formData=reactive({
  name:'',phone:'',email:'',role:'user'
})

const {data:roles,pending:loadingRoles}=useFetch(endpoints.role.list)

function submit (){
  loading.value=true
  $fetch<ApiResponse>(endpoints.user.create,{
    method:"post",
    headers:{
      Authorization:'Bearer '+pitLib.auth.get()?.token
    },
    body:formData,
    immediate:false
  }).then(d=> {
    userCreateResp.value = d;
    loading.value = false
  })
}

watch(userCreateResp,d=>{
  Swal.fire({
    position: "bottom-right",
    icon: d?.status ? 'success':'warning',
    title: d?.message,
    showConfirmButton: false,
    timer: 1500
  });
})
</script>

<template>
  <div class="row q-pa-lg">
    <div class="col">
      <form @submit.prevent="submit()">
        <q-card bordered>
          <q-card-section class="bg-grey-2">
            <div class="text-h6">User</div>
            <div class="text-subtitle2">Create</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="row q-gutter-md">
              <div class="col-3">
                <q-input dense outlined label="Name" v-model="formData.name"/>
              </div>
              <div class="col-3">
                <q-input dense outlined label="Email" v-model="formData.email"/>
              </div>
              <div class="col-3">
                <q-input dense outlined label="Phone" type="number" maxlength="12" v-model="formData.phone"/>
              </div>
              <div class="col-3">
                <q-select outlined v-model="formData.role" :loading="loadingRoles" :options="roles" label="Role" />
              </div>
            </div>
          </q-card-section>

          <q-card-section class="bg-grey-2">
            <div class="text-right">
              <q-btn :loading="loading" :disable="loading" type="submit" color="primary" label="Submit" icon-right="check"/>
            </div>
          </q-card-section>
        </q-card>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
