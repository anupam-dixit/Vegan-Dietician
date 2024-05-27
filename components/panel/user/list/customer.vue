<script lang="ts" setup>
import {endpoints} from "../../../../helpers/endpoints";
import {pitLib} from "../../../../helpers/pitLib";

const userFetchCondition=ref()
switch (pitLib.auth.get().role) {
  case 'admin':
    userFetchCondition.value={
      role:'user'
    }
    break;
  case 'rm' :
    userFetchCondition.value={
      rm:pitLib.auth.get()._id
    }
    break
  case 'dietitian' :
    userFetchCondition.value={
      dietitian:pitLib.auth.get()._id
    }
    break
}

const {data:userResp,pending:loadingUsers} =useFetch(endpoints.user.list,{
  method:"post",
  body:userFetchCondition.value,
  headers:{
    Authorization:'Bearer '+pitLib.auth.get()?.token
  },
})
</script>

<template>
  <q-markup-table>
    <thead>
    <tr>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Phone
      </th>
      <th class="text-left">
        Email
      </th>
      <th class="text-left">
        Role
      </th>
      <th class="text-left">
        RM
      </th>
      <th class="text-left">
        Dietitian
      </th>
      <th class="text-left">
        Action
      </th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="n in 5" :key="n" v-if="loadingUsers">
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
    <tr v-if="userResp?.status" v-for="u in userResp.data.data" >
      <td>{{u.name}}</td>
      <td>{{u.phone}}</td>
      <td>{{u.email}}</td>
      <td class="text-blue-9"><strong>{{u.role.toLocaleUpperCase()}}</strong></td>
      <td>{{u.rm.length?u.rm[0].name:'--'}}</td>
      <td>{{u.dietitian.length?u.dietitian[0].name:'--'}}</td>
      <td>
        <q-btn round color="blue" icon="fa fa-eye" :to="`/panel/user/`+u._id"/>
      </td>
    </tr>
    </tbody>
  </q-markup-table>
</template>

<style scoped></style>
