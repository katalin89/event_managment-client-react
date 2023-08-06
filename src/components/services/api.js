function api(path,method,body=null){
    const url = 'http://localhost:8080/api/v1/event' + path;
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    };

    if(body!==null){
        options.body = JSON.stringify(body);
    } 
    return fetch(url,options);

}

export async function getAllEvents(){

    let data=await api('/all','GET');

    data= await data.json();

    return data;
}