import { BASE_URL, headers } from "./constants"
export const getHistory = async(productId)=>{
    try {
        const response = await fetch(BASE_URL+"history",{ method:"POST", body:JSON.stringify(body), headers})
            const data = await response.json()
            return data
    } catch (
        error){console.log(error)
        }
        
       
}