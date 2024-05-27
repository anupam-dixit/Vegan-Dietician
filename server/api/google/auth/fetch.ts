import {pitLib} from "~/helpers/pitLib";

export default defineEventHandler((event) => {
    const gtoken = getCookie(event, 'c_g_token')
    let res=null
    if (gtoken){
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer ya29.a0Ad52N3-cPuab3pmVCdFdrU8FZUUTEQKYtJzmgsazrPYFckyPVZ7rozup3wr2B9obSUd_QooU8icWSHOy5rXzgvW4ngZhMdpQXJIyZrN1y8TPaprYyRnFpDSTC9NirqSHwpRcYguMGG11RpCD0o9793XarCG83cAvwQaCgYKAcASARESFQHGX2MinpyH5uzpdWVXVnBkn0IfXQ0169");

        res = fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        })
            .then((response) => response.text())
            .then((result) => {
                return pitLib.response.send(true,null,JSON.parse(result))
            })
            .catch((error) => {
                return pitLib.response.send(false,null,error.toString())
            });
    }
    return res
})
