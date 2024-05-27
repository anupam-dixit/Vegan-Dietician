import {Env} from "~/helpers/env";

export default defineEventHandler((event) => {
    const nuxtConfig = useRuntimeConfig()
    return `https://accounts.google.com/o/oauth2/v2/auth?scope=email phone https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${Env.FACEPOINT}auth&client_id=${nuxtConfig.GOOGLE_CLIENT_ID}`
})
