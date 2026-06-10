const {test,expect}=require('@playwright/test');

const HomePage=require('../../pages/HomePage');

const LoginPage=require('../../pages/LoginPage');

test('Login @smoke',async({page})=>{

const home=new HomePage(page);

const login=new LoginPage(page);

await home.navigate();

await home.clickLogin();

await login.login(
'test@test.com',
'Password123'
);

});