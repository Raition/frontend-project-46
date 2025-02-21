### Hexlet tests and linter status:
[![Actions Status](https://github.com/Raition/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Raition/frontend-project-46/actions)
[![Node CI](https://github.com/Raition/frontend-project-46/actions/workflows/test-check.yml/badge.svg)](https://github.com/Raition/frontend-project-46/actions/workflows/test-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/66bb22d9b46099f6ce93/maintainability)](https://codeclimate.com/github/Raition/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/66bb22d9b46099f6ce93/test_coverage)](https://codeclimate.com/github/Raition/frontend-project-46/test_coverage)

**Gendiff** – это утилита для сравнения двух файлов. Она отображает различия между файлами в человекочитаемом виде.

## Особенности:

- Поддержка JSON и YAML файлов
- Простота использования из командной строки
- Удобный вывод различий в форматах json, stylish, plain

## Системные требования:

- Node.js версии 14.0 или выше
- npm (обычно устанавливается вместе с Node.js)

> Поддерживаемые операционные системы: Windows, macOS и Linux.

## Установка:

1. Склонируйте репозиторий с помощью команды: _"git clone https://github.com/Raition/frontend-project-46.git"_
2. Перейдите в директорию проекта _cd frontend-project-46_
3. Установите необходимые зависимости с помощью команды: _make install_

## Общий синтаксис и доступные команды:

- _gendiff -h_ : Вывод справочной информации по утилите

- _gendiff <файл1> <файл2>_ : Сравнение файлов с выводом в формате stylish (по умолчанию)

- _gendiff -f plain <файл1> <файл2>_ : Сравнение с выводом в формате plain

- _gendiff -f json <файл1> <файл2>_ : Сравнение с выводом в формате json

- _make test_ : Для запуска тестов

- _make lint_ : Для проверки стиля кода

## Пример использования:

[![asciicast](https://asciinema.org/a/703199.svg)](https://asciinema.org/a/703199)