import {pitLib} from "../helpers/pitLib";

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (!pitLib.auth.get()) {
        return navigateTo('/auth')
    } else {
        navigateTo(to)
    }
})
