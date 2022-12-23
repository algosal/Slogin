import axios from 'axios';

export default async function authenticate(username, password){

    let formData = {
        name : username,
        passwordFromUser: password
    }

    return await axios.post("https://salmansaeed.us/focus/app/thoughts/authenticate.php",
    JSON.stringify(formData)).then(res=>{
        return res.data;
    }).catch(e=>{
        console.log(e); 
    });
}