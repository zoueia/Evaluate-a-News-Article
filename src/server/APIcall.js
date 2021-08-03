async function APIcall(requestOptions) {
        const response = await fetch("https://api.meaningcloud.com/topics-2.0", requestOptions).catch(arror => console.log(error))
        let status= await response.status
        let body= await response.json()
        console.log(status, body)
        return body
}

// module.exports = APIcall
export { APIcall }