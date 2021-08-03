import { APIcall } from "../../server/APIcall";
// const { APIcall } = require("../../server/APIcall") ;


function handleSubmit(event) {
    event.preventDefault()

    const formdata = new FormData();
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...
    formdata.append("tt", "c"); // concepts

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    formdata.append("url", formText);

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(res=>{
        formdata.append("key", res.API_KEY)
        return APIcall({
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        })
    })
    .then(function(res) {
    document.getElementById('results').innerHTML = `here is one of this article concepts "${res.concept_list[0].form}"`
    }).catch(error=> console.log(error))
}

export { handleSubmit }