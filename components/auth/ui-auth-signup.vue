<script lang="ts" setup>

import {endpoints} from "../../helpers/endpoints";
import {pitLib} from "../../helpers/pitLib";

const $q = useQuasar()
const router = useRouter()
const props = defineProps({
  prefill:{
    name:'',
    phone:'',
    email:'',
  }
})
const formData = reactive({
  name:props.prefill.name,
  phone:props.prefill.phone,
  email:props.prefill.email,
  country:props.prefill.country,
  verified:[(props.prefill.email)?'email':null,(props.prefill.phone)?'phone':null]
})

const {data,refresh,status,pending}= await useFetch(endpoints.user.create,{
  method: 'post',
  body: formData,
  immediate:false
})
watch(data,(d)=>{
  $q.notify({
    message: d?.message,
    color: d?.status?'green':'red',
    position:'bottom'
  })
  if (d?.status){
    pitLib.auth.set(d?.data)
    router.push('/')
  }
})
</script>
<template>
  <form @submit.prevent="refresh">
    <div class="row gx-3">
      <div class="col-xs-12 col-sm-12 col-6">
        <!-- Form Group (first name)-->
        <div class="mb-3">
          <label class="small mb-1" for="inputFirstName">Name</label>
          <input v-model="formData.name" class="form-control" id="inputFirstName" type="text" placeholder="Enter name">
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-6">
        <!-- Form Group (last name)-->
        <div class="mb-3">
          <label class="small mb-1" for="inputLastName">Phone</label>
          <input v-model="formData.phone" class="form-control" id="inputLastName" type="number" placeholder="Enter phone number">
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-6">
        <!-- Form Group (last name)-->
        <div class="mb-3">
          <label class="small mb-1" for="inputLastName">Country</label>
          <select class="form-control" v-model="formData.country">
            <option value="661bbed852f0bc15cfd20b97">India</option>
            <option selected>Others</option>
          </select>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-6">
        <!-- Form Group (last name)-->
        <div class="mb-3">
          <label class="small mb-1" for="inputEmailAddress">Email</label>
          <input :disabled="props.prefill.email" v-model="formData.email" class="form-control" :class="{'is-valid':props.prefill.email}" id="inputEmailAddress" type="email" aria-describedby="emailHelp" placeholder="Enter email address">
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col text-end">
        <button type="submit" class="btn btn-success rounded shadow">
          <span v-if="status!=='pending'">Save <i class="fa-solid fa-check ms-2"></i></span>
          <ui-loader01 v-if="status==='pending'"></ui-loader01>
        </button>
      </div>
    </div>
  </form>
</template>
