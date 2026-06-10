class HomePage {

constructor(page){
this.page=page;
}

async navigate(){

await this.page.goto('/');

}

async clickLogin(){

await this.page.locator(
"a[href='/login']"
).click();

}

}

module.exports=HomePage;