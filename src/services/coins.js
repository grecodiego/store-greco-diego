import { BASE_URL, headers } from "./constants"
export const getPoints = async(quanty)=>{

    var body = {
        'amount': parseInt(quanty)
      };
    try {
        const response = await fetch(BASE_URL+"user/points",{ method:"POST", body:JSON.stringify(body), headers})
            const data = await response.json()
            return data
    } catch (
        error){console.log(error)
        }    
}


