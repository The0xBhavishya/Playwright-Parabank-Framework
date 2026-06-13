import {expect,Page} from "@playwright/test";
import data from "../testdata/transferFunds.json";

class TransferFunds {

    page: Page;
    transferFundsLink: any;
    amount: any;
    fromAccount: any;
    toAccount: any;
    transferBtn: any;
    successMsg: any;

    constructor(page: Page) {
        this.page = page;
        this.transferFundsLink =page.locator('text=Transfer Funds');
        this.amount =page.locator('#amount');
        this.fromAccount =page.locator('#fromAccountId');
        this.toAccount =page.locator('#toAccountId');
        this.transferBtn =page.locator('input[value="Transfer"]');
        this.successMsg =page.locator('#showResult');
    }

    async transferMoney() {
         await this.transferFundsLink.click();
         await this.amount.fill(data.amount);
         
        await this.fromAccount.selectOption({index: 0});
        await this.toAccount.selectOption({index:1});

        await this.transferBtn.click();
    }

    async verifyTransfer() {
         await expect(this.page).toHaveURL(/transfer/);
          await expect(this.successMsg).toContainText('Transfer Complete');
    }

    async screenshot() {
        await this.page.screenshot({path: 'screenshots/TS06TFunds.png' });
    }
}

export default TransferFunds;