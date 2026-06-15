import {APIRequestContext} from "@playwright/test";

export async function getCustomerId(request:APIRequestContext, username:string, password:string) {

const response =await request.get(`https://parabank.parasoft.com/parabank/services/bank/login/${username}/${password}`,{
    headers:{
        'Accept':'application/json'
    }
}
 );

    const body =await response.json();
    const customerId = body.id;
    console.log("Login API Response :" );
    console.log(body);
    // const customerId = body.match(/<id>(\d+)<\/id>/)?.[1];
    // console.log( "Extracted Customer ID :",customerId);
    return customerId;
}