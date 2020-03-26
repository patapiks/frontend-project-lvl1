[![Maintainability](https://api.codeclimate.com/v1/badges/339d26480e356bade344/maintainability)](https://codeclimate.com/github/patapiks/frontend-project-lvl1/maintainability)
![Node CI](https://github.com/patapiks/frontend-project-lvl1/workflows/Node%20CI/badge.svg)

####Здесь представлен мой первый проект - это 5 консольных игр.  
- "Проверка на чётность"
- "Калькулятор"
- "НОД"
- "Арифметическая прогрессия"
- "Простое ли число?"
Для установки вам понадобится клонировать проект с моего репозитория на [Github](https://github.com/patapiks/frontend-project-lvl1)  
  
Теперь нужно установить пакет испозьзующийся в проекте,  
для этого необходимо выполнить команду **npm install** *(MakeFile: make install)* в корневой  
дирректории клонированного проекта. Затем локально опубликуем  
наш пакет **npm publish --dry-run** *(MakeFile: make publish)*.  
И наконец создадим локальную связь с пакетом **npm link**.  
  
Теперь можно запускать наши мини-приложения.  
>brain-even; brain-calc; brain-gcd; brain-prime; brain-progression;  