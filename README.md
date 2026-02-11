### Hexlet tests and linter status:
[![hexlet-check](https://github.com/Sarsela/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg?v=2)](https://github.com/Sarsela/frontend-project-46/actions/workflows/hexlet-check.yml)
[![CI](https://github.com/Sarsela/frontend-project-46/actions/workflows/ci.yml/badge.svg?v=2)](https://github.com/Sarsela/frontend-project-46/actions/workflows/ci.yml)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=Sarsela_frontend-project-46&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Sarsela_frontend-project-46)
[![Code Quality](https://sonarcloud.io/api/project_badges/measure?project=Sarsela_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Sarsela_frontend-project-46)
## Установка

```bash
# Клонируйте репозиторий
git clone ссылка на репозиторий
cd frontend-project-46

# Установите зависимости
npm install

# Установите пакет локально (для  тестирования)
npm link
```
## Использование

После установки команда `gendiff` будет доступна в терминале:

```bash
# Вывести справку
gendiff -h

# Показать версию
gendiff -V

# Сравнить два JSON файла
make test-json

# Сравнить с форматом plain
make test-json-plain

# Сравнить с форматом json
make test-json-json

# Сравнить YAML файлы
make test-yaml

# Сравнить YAML с форматом plain
make test-yaml-plain

# Сравнить файлы разных форматов
gendiff __fixtures__/file1.json __fixtures__/file2.yaml
```

# Демонстрация
## Справка
![gendiff help](./assets/help.gif)
## Версия
![gendiff version](./assets/version.gif)
## Сравнение два JSON файла
![gendiff version](./assets/test-json.gif)
## Сравнение с форматом plain
![gendiff version](./assets/test-json-plain.gif)
## Сравнение с форматом json
![gendiff version](./assets/test-json-json.gif)
## Сравнение YAML файлы
![gendiff version](./assets/test-yaml.gif)
## Сравнение YAML с форматом plain
![gendiff version](./assets/test-yaml-plain.gif)
## Сравнение файлы разных форматов
![gendiff version](./assets/different.gif)
