import {APIRequestContext} from "@playwright/test";

export async function getCustomerId(request:APIRequestContext, username:string, password:string) {
const response =await request.get(`https://parabank.parasoft.com/parabank/services/bank/login/${username}/${password}`,{
    headers:{
        'Accept':'application/json'
    }
}
 );
    const r =await response.json();
    const customerId = r.id;
    console.log( "Customer ID :",r.id);
    return customerId;
}