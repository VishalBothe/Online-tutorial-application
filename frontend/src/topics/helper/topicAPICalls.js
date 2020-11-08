import { API } from "../../Backend";
import { getSubject } from "../../subjects/helper/subjectAPICalls";
import { isAuthenticated } from "../../auth/helper";

export const getTopics = () => {
    if(
        isAuthenticated() &&
        getSubject()
    ){
        const subjectId = getSubject().id;
        const userId = isAuthenticated().user.id;
        const token = isAuthenticated().token;

        return fetch(
            `${API}/topic/topic-list/${subjectId}/${userId}/${token}`, {
                method: "GET"
            }
        )
        .then(response => response.json())
        .catch(err => console.log(err));

    }else{
        // TODO: Handle it latter
    }
}