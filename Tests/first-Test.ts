import { browser, by, element, protractor } from "protractor";

//Можно загрузить страничку
describe("calculator on main page", () => {
  // Создаем объект для работы с ожиданиями
  let EC = protractor.ExpectedConditions;
  let input_first = element(by.css("input[ng-model='first']"));
  let input_second = element(by.css("input[ng-model='second']"));
  let gobutton = element(by.id("gobutton"));
  let result = element(by.css("h2[class=ng-binding]"));
  let AllOption = element(
    by.css("select[ng-options='value for (key, value) in operators']")
  );
  let ADDITION = element(by.css("option[value='ADDITION']"));
  let DIVISION = element(by.css("option[value='DIVISION']"));
  let MODULO = element(by.css(".option[value='MODULO']"));
  let MULTIPLICATION = element(by.css("option[value='MULTIPLICATION']"));
  let SUBTRACTION = element(by.css("option[value='SUBTRACTION']"));

  beforeEach(async function () {
    // Перейти на страничку с тестовым приложением перед каждым тестом
    await browser.get("http://juliemr.github.io/protractor-demo/");
  });

  it("should be available", async () => {
    // включаем проверку на AngularJS
    await browser.waitForAngularEnabled(true);

    // Проверяем запущено ли приложение, путем сравнения тайтла
    await browser.wait(EC.titleContains("Super Calculator"), 5000);
  });

  it("should be able to add 1 and 3", async () => {
    // Вводим тестовые числа
    await input_first.sendKeys("1");
    await input_second.sendKeys("3");

    // Проверяем работает ли кнопка go
    await gobutton.click();
    // Проверяем результат сумирования
    await browser.wait(EC.textToBePresentInElement(result, "4"), 5000);
  });
  it("should be able to divide 9 on 3", async () => {
    // Вводим тестовые числа
    await input_first.sendKeys("9");
    await input_second.sendKeys("3");
    // выбрать деление
    await AllOption.click();
    await DIVISION.click();
    // Проверяем работает ли кнопка go
    await gobutton.click();
    // Проверяем результат сумирования
    await browser.wait(EC.textToBePresentInElement(result, "3"), 5000);
  });
  it("should be able to substract 3 from 6", async () => {
    // Вводим тестовые числа
    await input_first.sendKeys("6");
    await input_second.sendKeys("3");
    // выбрать деление
    await AllOption.click();
    await SUBTRACTION.click();
    // Проверяем работает ли кнопка go
    await gobutton.click();
    // Проверяем результат сумирования
    await browser.wait(EC.textToBePresentInElement(result, "3"), 5000);
  });
  it("should be able to multiply 5 on 5", async () => {
    // Вводим тестовые числа
    await input_first.sendKeys("5");
    await input_second.sendKeys("5");
    // выбрать деление
    await AllOption.click();
    await MULTIPLICATION.click();
    // Проверяем работает ли кнопка go
    await gobutton.click();
    // Проверяем результат сумирования
    await browser.wait(EC.textToBePresentInElement(result, "25"), 5000);
  });
  it("should be able to take a percentage", async () => {
    // Вводим тестовые числа
    await input_first.sendKeys("25");
    await input_second.sendKeys("100");
    // выбрать деление
    await AllOption.click();
    await MODULO.click();
    // Проверяем работает ли кнопка go
    await gobutton.click();
    // Проверяем результат сумирования
    await browser.wait(EC.textToBePresentInElement(result, "4"), 5000);
  });

  it("should work with fractions", async () => {
    // Вводим тестовые числа
    await input_first.sendKeys("1");
    await input_second.sendKeys("3");
    // выбрать деление
    await AllOption.click();
    await DIVISION.click();
    // Проверяем работает ли кнопка go
    await gobutton.click();
    // Проверяем результат сумирования
    await browser.wait(
      EC.textToBePresentInElement(result, "0.3333333333"),
      5000
    );
  });

  it("should work with minus numbers", async () => {
    // Вводим тестовые числа
    await input_first.sendKeys("-1");
    await input_second.sendKeys("3");
    // выбрать деление
    await AllOption.click();
    await ADDITION.click();
    // Проверяем работает ли кнопка go
    await gobutton.click();
    // Проверяем результат сумирования
    await browser.wait(EC.textToBePresentInElement(result, "2"), 5000);
  });
});

//операция с двойным минусом
//16 символов поле запятой не больше
