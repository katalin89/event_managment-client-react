function api(path, method, body) {
    // const e declarata o data, pe cat let se redeclara la folosirea functiei
    const url = "http://localhost:8080/api/v1/event" + path;
  
    const options = {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
  
    if (body !== null) {
      options.body = JSON.stringify(body);
  
      //stringify transforma din javascript in json
      //parse transforma din json in javascript
    }
    return fetch(url, options);
  }
  


 async function getAllEvents(){

    let data=await api('/all','GET');

    data= await data.json();

    return data;
}

export{getAllEvents};