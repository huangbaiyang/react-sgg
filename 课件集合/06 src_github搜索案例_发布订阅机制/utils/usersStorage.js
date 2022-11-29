import store from "store"
const USERS_KEY = "users_key"

export default {
    saveUsers(users) {
       return store.set(USERS_KEY,users);
    },
    getUsers() {
       return store.get(USERS_KEY) || [];
    }
}