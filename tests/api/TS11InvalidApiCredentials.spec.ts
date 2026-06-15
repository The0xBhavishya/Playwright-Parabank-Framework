import {test,expect} from "@playwright/test";

test('S11 Invalid API Credentials', async({request}) =>{
    const response =await request.get('https://parabank.parasoft.com/parabank/services/bank/login/wronguser/wrongpass',{
         headers: {
          Accept: "application/json"
         }
    });
    const body =await response.text();
    console.log("Status Code :",response.status());
    console.log(body);
    expect(body).not.toContain('<customer>');
    
});