import {expect,Page} from "@playwright/test";
import data from "../testdata/createAccount.json";

class CreateAccount {

    page: Page;
    openNewAccountLink: any;
    accountType: any;
    fromAccount: any;
    openAccountBtn: any;
    successMsg: any;
    accountNumber: any;

    constructor(page:Page) {
        this.page = page;
        this.openNewAccountLink = page.getByRole('link', { name: 'Open New Account'});
        this.accountType =page.locator('#type');
        this.fromAccount = page.locator('#fromAccountId');
        this.openAccountBtn =page.getByRole('button', {name: 'Open New Account'});
        this.successMsg =page.locator('#openAccountResult');
        this.accountNumber =page.locator('#newAccountId');
    }
    
  async createAccount(accountType:any)  {
    await this.openNewAccountLink.click();
    await this.accountType.selectOption(accountType);
    await this.fromAccount.selectOption({index:0});
    await this.openAccountBtn.click();
}

    async verifyAccountCreated() {
       await expect(this.successMsg).toContainText('Congratulations');
        await expect(this.accountNumber).toBeVisible();
    }

    async getAccountNumber() {
        const accNo =await this.accountNumber.innerText();
        console.log("Generated Account Number : ",accNo);
        return accNo;
    }

    async screenshot() {
          await this.page.screenshot({path: 'screenshots/TS01_AccountCreation.png',fullPage: true});
    }

}

export default CreateAccount;