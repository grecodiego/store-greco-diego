import { BASE_URL, headers } from "./constants"
export const redeem = async(productId)=>{
    var body = {
        'productId': productId
      };
    try {
        const response = await fetch(BASE_URL+"redeem",{ method:"POST", body:JSON.stringify(body), headers})
            const data = await response.json()
            return data
    } catch (
        error){console.log(error)
        }
        
       
}