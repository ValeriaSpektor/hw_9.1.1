// Подключение необходимых модулей
const fs = require('fs');
const JiraClient = require('jira-client');
const xml2js = require('xml2js');

// Загрузка учетных данных для подключения к Jira
const credentials = require('./jira_credentials');

// Загрузка данных о результатах тестов (путь к файлу передается в аргументах командной строки)
const xmlFilePath = process.argv[3];
const xmlData = fs.readFileSync(xmlFilePath, 'utf8');

// Преобразование XML в объект JavaScript
xml2js.parseString(xmlData, (err, result) => {
    if (err) {
        console.error('Ошибка при парсинге XML:', err);
        return;
    }
    const testResults = result; // Здесь вам может понадобиться выбрать конкретную часть объекта с результатами тестов

    // Создание экземпляра клиента Jira
    const jira = new JiraClient(credentials);

    // Отправка результатов тестов в Jira
    jira.addTestResults(testResults)
        .then(() => {
            console.log('Результаты тестов успешно импортированы в Jira.');
        })
        .catch((err) => {
            console.error('Ошибка при импорте результатов тестов в Jira:', err);
        });
});
