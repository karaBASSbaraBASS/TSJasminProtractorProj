import { browser, by, element, protractor } from "protractor";

//Можно загрузить страничку
describe("Regression", () => {
  // Создаем объект для работы с ожиданиями
  let EC = protractor.ExpectedConditions;
  let input_first = element(by.css("input[ng-model='first']"));
  let input_second = element(by.css("input[ng-model='second']"));
  let gobutton = element(by.id("gobutton"));
  let result = element(by.className("ng-binding"));

  // beforeEach(function () {
  //   browser.get("http://juliemr.github.io/protractor-demo/");
  // });

  it("should be available", async () => {
    // включаем проверку на AngularJS
    await browser.waitForAngularEnabled(true);

    // Перейти на страничку с тестовым приложением
    await browser.get("http://juliemr.github.io/protractor-demo/");

    // Проверяем запущено ли приложение, путем сравнения тайтла
    await browser.wait(EC.titleContains("Super Calculator"), 5000);
  });

  //В поля можна ввести значения
  //Нажатие на кнопку ГО вызывает появление результата

  it("should add one and three", async () => {
    // Перейти на страничку с тестовым приложением
    await browser.get("http://juliemr.github.io/protractor-demo/");

    // Вводим тестовые числа
    await input_first.sendKeys("1");
    await input_second.sendKeys("3");

    // Проверяем работает ли кнопка go
    await gobutton.click();
    // Проверяем результат сумирования
    await browser.wait(EC.textToBePresentInElement(result, "4"), 5000);
  });
  it("it should divide 9 on 3", async () => {});
  it("it should substract 3 from 6", async () => {});
  it("it should multiply 5 on 5", async () => {});
  it("it should take a percentage", async () => {});

  it("it should work with fractions", async () => {});

  it("should work with minus numbers", async () => {});
});

//операция с двойным минусом
//16 символов поле запятой не больше
