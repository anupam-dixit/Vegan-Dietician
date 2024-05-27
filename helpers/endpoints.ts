import {Env} from "./env";

export const endpoints={
    user:{
        create:Env.ENDPOINT+'user/create',
        update:Env.ENDPOINT+'user/update',
        list:Env.ENDPOINT+'user/list',
        login:Env.ENDPOINT+'user/login',
        google:{
            url:'/api/google/auth/url',
            fetch:Env.ENDPOINT+'google/auth/fetch',
        },
    },
    plan:{
        list:Env.ENDPOINT+'plan/list',
        purchase:Env.ENDPOINT+'plan/purchase',
        purchaseList:Env.ENDPOINT+'plan/purchase/list',
    },
    country:{
        list:Env.ENDPOINT+'country/list'
    },
    role:{
        list:Env.FACEPOINT+'api/role',
    }
}
