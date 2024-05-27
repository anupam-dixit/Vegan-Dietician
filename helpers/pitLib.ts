import nuxtStorage from "nuxt-storage/nuxt-storage";

export const pitLib={
    auth:{
        get:function () {
            return nuxtStorage.localStorage.getData('ls_u_data')
        },
        set:function (data:any) {
            return nuxtStorage.localStorage.setData('ls_u_data',data,160)
        },
        clear:function () {
            return nuxtStorage.localStorage.removeItem('ls_u_data')
        },
        is:function () {
            return !!nuxtStorage.localStorage.getData('ls_u_data')
        },
    },
    response:{
        send:function (status:boolean|null=null,message:string|null=null,data:any=null) {
            if (!status){
                status =false;
                if (!message){
                    message ='Unable to perform this action'
                }
            } else {
                status =true;
                if (!message){
                    message ='Action performed successfully'
                }
            }
            return {status:status,message:message,data:data}
        },
    }
}