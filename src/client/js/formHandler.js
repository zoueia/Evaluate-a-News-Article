import { APIcall } from "../../server/APIcall";
// const { APIcall } = require("../../server/APIcall") ;


function handleSubmit(event) {
    event.preventDefault()

    const formdata = new FormData();
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...
    formdata.append("tt", "a"); // concepts

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
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`
        document.getElementById('polarity').innerHTML = 'Polarity: '+ Client.polarityChecker(res.score_tag)
        document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`
    }).catch(error=> {console.log(error)
        document.getElementById("irony").innerHTML = `Irony: `
        document.getElementById("confidence").innerHTML = `Confidence: `
        document.getElementById('polarity').innerHTML = 'Polarity: '
        document.getElementById("agreement").innerHTML = `Agreement: `
        document.getElementById("subjectivity").innerHTML = `Subjectivity: `
    })
}

export { handleSubmit }


