export const api = (endpoint) =>{
  
  const urlAPI = "http://localhost:5000/api/"
  
  return{
      Listar(token){
        return fetch(urlAPI + endpoint, {
          method: 'GET',
          headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + token
          }
        })
      }
  }
}