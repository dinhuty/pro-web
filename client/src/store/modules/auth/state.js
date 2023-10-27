import { jwtService } from "@/services/local/jwt"
export default {
    isLoggedIn: !!jwtService.getToken(),
    isRegistering: false,
    isLoggingIn: false,
    user: jwtService.getUser() || {},
    errors: {}
}