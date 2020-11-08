import { API } from "../../Backend";
import { isAuthenticated } from "../../auth/helper";

// Get Subject list from backend
export const getSubjects = () => {
    if(isAuthenticated()){
        const userId = isAuthenticated().user.id;
        const semester = isAuthenticated().user.current_semester;

        return fetch(
            `${API}/subject/subject-list/${semester}/${userId}/`, {
                method: "GET",
            }
        )
        .then(response => response.json())
        .catch(err => console.log(err));
    }else{
        // TODO: HANDLE IT LATTER
    }
}

// Storing subject details in local storage
export const setSubject = (subject, next) => {
    if(typeof window != undefined){
        if(isAuthenticated()){
            localStorage.setItem("subject", JSON.stringify(subject));
            // Subject details fetched from here to get subject topic list
        }
        next();
    }
}

// Reatriving subhect from local storage
export const getSubject = () => {
    if(
        localStorage.getItem("subject") &&
        isAuthenticated()
    ){
        return JSON.parse(localStorage.getItem("subject"))
    }else{
        return false;
    }
}
