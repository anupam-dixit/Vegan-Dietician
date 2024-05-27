<div class="q-pa-md">
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
    <td><q-badge rounded color="blue" :label="u.role" /></td>
    <td>
      <q-btn round color="blue" icon="fa fa-eye" :to="`/panel/user/`+u._id"/>
    </td>
  </tr>
  </tbody>
</q-markup-table>
</div>