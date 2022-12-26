import axios from 'axios';

export default async function getResolutions(user){
    let url = "https://salmansaeed.us/focus/app/thoughts/resolutions.php?username=" + user; 
    return await axios.get(url).then(res=>res.data).catch(e=>console.log(e));
}