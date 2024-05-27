<script lang="ts" setup>
import {endpoints} from "~/helpers/endpoints";
import {pitLib} from "~/helpers/pitLib";
import type {ApiResponse, User} from "~";
import Swal from "sweetalert2";
const route=useRoute()
const userUpdateResp=ref()
const loadingUpdateUser=ref<Boolean>()
const rms=ref<Array>([])
const dietitian=ref<Array>([])

definePageMeta({
  layout:"panel",
  middleware:"ensure-login"
})

const formData=reactive({
  _id:route.params?._id,name:'',phone:'',email:'',role:'',rm:'',dietitian:''
})
const {data:roles,pending:loadingRoles}=useFetch(endpoints.role.list)
const {data:rmsApiResponse,pending:loadingRms}=useFetch(endpoints.user.list,{
  method:"post",
  headers:{
    Authorization:'Bearer '+pitLib.auth.get()?.token
  },
  body:{
    role:"rm"
  },
  params:{
    pagination:500
  }
})
const {data:dietitianApiResponse,pending:loadingDietitian}=useFetch(endpoints.user.list,{
  method:"post",
  headers:{
    Authorization:'Bearer '+pitLib.auth.get()?.token
  },
  body:{
    role:"dietitian"
  },
  params:{
    pagination:500
  }
})

const user=ref<User>()

const {data:userResp,pending:loadingUsers} =useFetch<ApiResponse>(endpoints.user.list,{
  method:"post",
  headers:{
    Authorization:'Bearer '+pitLib.auth.get()?.token
  },
  body:{
    _id:route.params?._id
  }
})
function submit() {
  let curFormData=formData
  curFormData.rm=curFormData.rm.value
  curFormData.dietitian=curFormData.dietitian.value
  $fetch<ApiResponse>(endpoints.user.update,{
    method:"post",
    headers:{
      Authorization:'Bearer '+pitLib.auth.get()?.token
    },
    immediate:false,
    immediate:false,
    body:curFormData
  }).then(d=>userUpdateResp.value=d)
}
watch(userUpdateResp,d=>{
  Swal.fire({
    position: "bottom-right",
    icon: d?.status ? 'success':'warning',
    title: d?.message,
    showConfirmButton: false,
    timer: 1500
  })
})

watch(userResp,d=>{
  user.value=d?.data.data[0]
  formData.name=user.value?.name??''
  formData.phone=user.value?.phone??''
  formData.email=user.value?.email??''
  formData.role=user.value?.role??''
  formData.rm=user.value.rm.length?{label:user.value.rm[0].name,value:user.value.rm[0]._id}:''
  formData.dietitian=user.value.dietitian.length?{label:user.value.dietitian[0].name,value:user.value.dietitian[0]._id}:''
})

watch(rmsApiResponse,d=>{
  rms.value=[]
  d.data?.data.map(o=>{
    rms.value.push({label:o.name,value:o._id})
  })
})
watch(dietitianApiResponse,d=>{
  dietitian.value=[]
  d.data?.data.map(o=>{
    dietitian.value.push({label:o.name,value:o._id})
  })
})

</script>

<template>
  <div class="row q-pa-lg">
    <div class="col">
      <form @submit.prevent="submit()">
        <q-card bordered>
          <q-card-section class="bg-grey-2">
            <div class="text-h6">User</div>
            <div class="text-subtitle2">View/Update</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="row q-gutter-md">
              <div class="col-3">
                <q-input disable dense outlined label="Name" v-model="formData.name"/>
              </div>
              <div class="col-3">
                <q-input disable dense outlined label="Email" v-model="formData.email"/>
              </div>
              <div class="col-3">
                <q-input disable dense outlined label="Phone" type="number" maxlength="12" v-model="formData.phone"/>
              </div>
              <div class="col-3">
                <q-select outlined v-model="formData.role" :loading="loadingRoles" :options="roles" label="Role" :disable="pitLib.auth.get().role!=='admin'"/>
              </div>
              <div class="col-3">
                <q-select outlined v-model="formData.rm" :loading="loadingRms" :options="rms" label="RM" :disable="pitLib.auth.get().role!=='admin'"/>
              </div>
              <div class="col-3">
                <q-select outlined v-model="formData.dietitian" :loading="loadingDietitian" :options="dietitian" label="Dietitian" :disable="pitLib.auth.get().role!=='rm'"/>
              </div>

            </div>
          </q-card-section>

          <q-card-section class="bg-grey-2">
            <div class="text-right">
              <q-btn type="submit" color="primary" label="Submit" icon-right="check" :loading="loadingUpdateUser" :disable="loadingUpdateUser" v-if="['admin','rm'].includes(pitLib.auth.get().role)"/>
            </div>
          </q-card-section>
        </q-card>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
