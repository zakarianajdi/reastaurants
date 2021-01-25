export class AuthService {

    isAuth = false;

    signIn(login: String, password: String) {
        return new Promise(
            (resolve, reject) => {
                if (login == "admin" && password == "admin") {
                    this.isAuth = true;
                    localStorage.setItem("isAuth", JSON.stringify(this.isAuth));
                    resolve(true);
                }
            }
        );
    }

    signOut() {
        this.isAuth = false;
    }

    checkAuth(){
        if(JSON.parse(<string>localStorage.getItem("authStatus")) !== ""){
            this.isAuth = JSON.parse(<string>localStorage.getItem("authStatus"));
        }
    }
}