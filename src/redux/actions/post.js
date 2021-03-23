export function posts(data){
    return{
        type:'POSTS',
        payload:data
    }
}

export function post(data){
    return {
        type:'POST',
        payload:data
    }
}