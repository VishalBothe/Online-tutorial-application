import { API } from "../../Backend"

export const signup = user => {
    return fetch(
        `${API}/user/`, {
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        }
    )
    .then(response => response.json())
    .catch(err => console.log(err));
}

export const signin = user => {
    // TODO: REMOVE DEBUGGING CONSOLE LOGS LATTER
    var formData = new FormData();

    for(const name in user){
        formData.append(name, user[name])
    }

    return fetch(
        `${API}/user/login/`, {
            method: "POST",
            body: formData
        }
    )
    .then(response => response.json())
    .catch(err => console.log(err));
}

export const authenticate = (data, next) => {
    if(typeof window !== undefined){
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
}

export const isAuthenticated = () => {
    if(typeof window == undefined){
        return false;
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    }else{
        return false;
    }
}

export const signout = next => {
    const userId = isAuthenticated() ? isAuthenticated().user.id : 0;
    if(typeof window !== undefined){
        localStorage.clear();
        return fetch(
            `${API}/user/logout/${userId}`, {
                method:"GET"
            }
        )
        .then(response => {
            console.log("Logout success");
            next();
        })
        .catch(err => console.log(err));
    }
}