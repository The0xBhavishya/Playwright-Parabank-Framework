import {expect,Page} from "@playwright/test";

class RequestLoan {
    page: Page;
    requestLoanLink: any;
    loanAmount: any;
    downPayment: any;
    fromAccount: any;
    applyNowBtn: any;
    loanStatus: any;
    loanAccountNumber: any;
    constructor(page: Page) {
        this.page = page;
        this.requestLoanLink = page.getByRole('link', { name: 'Request Loan' });
        this.loanAmount = page.locator('#amount');
        this.downPayment = page.locator('#downPayment');
        this.fromAccount = page.locator('#fromAccountId');
        this.applyNowBtn = page.locator('input[value="Apply Now"]');
        this.loanStatus = page.locator('#loanStatus');
        this.loanAccountNumber = page.locator('#newAccountId');
    }

    async requestLoan(amount: string, downPayment: string) {
        await this.requestLoanLink.click();
        await this.loanAmount.fill(amount);
        await this.downPayment.fill(downPayment);
        await this.fromAccount.selectOption({ index: 0 });
        await this.applyNowBtn.click();
    }

    async verifyLoanRequestProcessed() {
        const status = await this.loanStatus.textContent();
        console.log("Loan Status :", status);
    }

    async getLoanAccountNumber() {
        const loanAccNo = await this.loanAccountNumber.textContent();
        console.log("Loan Account Number :", loanAccNo);
        return loanAccNo;
    }

    async screenshot() {
        await this.page.screenshot({path: 'screenshots/TS8_RequestLoan.png',fullPage: true});
    }
}

export default RequestLoan;