//Inicio de sesion en linkdin con una cuneta creada
//llamamos a la dependendia
const {Builder, By, Key, until} = require("selenium-webdriver");

//
(async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    //accedemos a la pagina principal de linkedin
    await driver.get("https://www.linkedin.com");
    // buscando y accediendo a inicio de sesion
    await driver.findElement(By.xpath("/html/body/nav/div/a[2]")).click();
    await driver.sleep(2000);
    
    // llenando el formulario
    //usuario
    var loginId = driver.findElement({xpath:'//*[@id="username"]'});
    loginId.sendKeys("everth.navarro@ing.uab.edu.bo");
    //contraseña
    var passwd = driver.findElement(By.xpath('//*[@id="password"]'));
	  passwd.sendKeys("##$Everth1999");
    // hacemos click en el boton de inciar sesion
    const btn = await driver.findElement(By.xpath("/html/body/div/main/div[2]/div[1]/form/div[3]/button"));
        //scroll del raton 
        driver.executeScript('arguments[0].scrollIntoView(0,300);', btn);
        await driver.sleep(3000);
        btn.click();
        await driver.sleep(1000);
    //finalizamos la tarea
  }finally {
    await driver.quit();
  }
})();
