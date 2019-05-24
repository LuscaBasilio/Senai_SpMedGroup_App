export const api = (endpoint) =>{
  
  const urlAPI = "http://192.168.56.1:5000/api/"
  
  return{
      Listar(token){
        return fetch(urlAPI + endpoint, {
          method: 'GET',
          headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + token
          }
        })
      },
      Login(corpo){
        console.warn(corpo)
        console.warn(urlAPI + endpoint)
        return fetch(urlAPI + endpoint,{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:corpo
        })

        }
  }
}