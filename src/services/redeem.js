
import { BASE_URL, headers } from "./constants"


export const redeem = async(productId, modalSuccess, modalError)=>{

    var body = {
        'productId': productId
      };
    try {
        const response = await fetch(BASE_URL+"redeem",{ method:"POST", body:JSON.stringify(body), headers})
            const data = await response.json()
            modalSuccess()
            return data

    } catch (
        error){modalError()}
        
        
       
}