### Hexlet tests and linter status:
[![Actions Status](https://github.com/Sarsela/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Sarsela/frontend-project-46/actions)
[![CI](https://github.com/Sarsela/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/Sarsela/frontend-project-46/actions/workflows/ci.yml)
## Установка

```bash
# Клонируйте репозиторий
git clone ссылка на репозиторий
cd frontend-project-46

# Установите зависимости
npm install

# Установите пакет локально (для тестирования)
npm link
```
## Использование

После установки команда `gendiff` будет доступна в терминале:

```bash
# Вывести справку
gendiff -h

# Показать версию
gendiff -V

# Сравнить два JSON файла (формат по умолчанию - stylish)
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
## Справка
![Help](images/help.png)
