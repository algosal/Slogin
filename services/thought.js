import axios from 'axios';

export default async  function myThought(myName, myThought, myDescription, FocusId ){
    let formData={
    name:myName,
    Thought: myThought, 
    Description: myDescription, 
    User: myName, 
    FocusId: FocusId
    } 
    let url = "http://salmansaeed.us/focus/app/thoughts/thought.php";
    return await axios.post(url,JSON.stringify(formData)).then(res=>res.data).catch(e=>console.log(e));

}