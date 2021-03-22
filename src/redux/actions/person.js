export  function  persons(data){
    return{
        type:'PERSONS',
        payload:data,

    }
}

export  function person(data){
    return{
        type:'PERSON',
        payload:data
    }
}
