# MakeLoveNotWar — Front-End Cheat Sheet

Персональний довідник з веб-розробки: HTML, CSS, JavaScript та Git у вигляді інтерактивного Angular-застосунку.

---

## Зміст

- [Про проєкт](#про-проєкт)
- [Розділи](#розділи)
- [Технології](#технології)
- [Архітектура](#архітектура)
- [Запуск локально](#запуск-локально)
- [Білд та деплой](#білд-та-деплой)
- [Гілки](#гілки)

---

## Про проєкт

Шпаргалка для фронтенд-розробника. Охоплює ключові теми HTML, CSS, JavaScript і Git у зручному форматі з прикладами коду, поясненнями та навігацією по розділах.

**Автор:** Roman Semak

---

## Розділи

### HTML
| Тема | Опис |
|------|------|
| Tags | Основні теги, блочні та рядкові елементи |
| DOM | Структура документа, дерево вузлів |
| Tables | Таблиці, `thead`, `tbody`, `colspan`, `rowspan` |
| Form Tags | Форми, типи `input`, `select`, `textarea` |
| Symbols | Спецсимволи HTML (`&amp;`, `&lt;`, `&nbsp;` тощо) |
| Comments | Коментарі в HTML |
| Inspector | DevTools, робота з інспектором браузера |
| Validation | Валідація розмітки |
| Redactor | Редактори коду |

### CSS
| Тема | Опис |
|------|------|
| Properties | Базові властивості CSS |
| Box Model | Блокова модель: `margin`, `border`, `padding`, `content` |
| Link | Стилізація посилань, псевдокласи `:hover`, `:visited` |
| Pseudo | Псевдокласи та псевдоелементи (`::before`, `::after`) |
| Inherit | Спадкування властивостей |
| Units | Одиниці виміру: `px`, `em`, `rem`, `%`, `vw`, `vh` |
| Colors | Формати кольорів: `hex`, `rgb`, `hsl`, `rgba` |
| Fonts | Шрифти, `@font-face`, Google Fonts |
| Position | `static`, `relative`, `absolute`, `fixed`, `sticky` |
| Flexbox | Гнучкий контейнер, `flex-direction`, `justify-content`, `align-items` |
| HTML5 & CSS3 | Нові теги HTML5 та властивості CSS3 |
| Animations | `@keyframes`, `transition`, `animation` |
| Reset | CSS Reset та нормалізація стилів |
| Vendor | Вендорні префікси `-webkit-`, `-moz-`, `-ms-` |
| CSS Pro | Просунуті техніки: змінні, `calc()`, `clip-path` |
| Adaptation | Медіазапити `@media`, адаптивна верстка |
| Optimization | Оптимізація CSS, критичний шлях |

### JavaScript
| Тема | Опис |
|------|------|
| jQuery | Основи jQuery, селектори, події, AJAX |

### Git
Основні команди Git: ініціалізація репозиторію, комміти, гілки, злиття, робота з remote.

---

## Технології

| Технологія | Версія |
|-----------|--------|
| Angular | 7.1.0 |
| Angular Material | 7.x |
| Angular CDK | 7.x |
| TypeScript | 3.1.6 |
| RxJS | 6.3 |
| SCSS | — |
| Node.js (для білду) | 12.x |

---

## Архітектура

```
src/app/
├── app.module.ts           # Кореневий модуль, маршрутизація
├── app.component.*         # Кореневий компонент
├── pages/
│   ├── home/               # Головна сторінка
│   ├── template/           # Шаблон сторінки
│   ├── courses/            # Список курсів
│   ├── css/                # Розділ CSS (17 тем)
│   │   └── components/
│   ├── html/               # Розділ HTML (9 тем)
│   │   └── components/
│   ├── js/                 # Розділ JS
│   │   └── components/
│   └── git/                # Розділ Git
└── shared/
    ├── shared.module.ts
    ├── custom-material/    # Angular Material модуль
    └── components/
        ├── header/
        ├── footer/
        └── tag/            # Компонент для відображення HTML тегів
```

**Маршрутизація:**
```
/                → HomeComponent
/style           → TemplateComponent
/courses         → PagesModule (lazy-loaded)
/courses/css     → CssModule (lazy-loaded)
/courses/html    → HtmlModule (lazy-loaded)
/courses/js      → JsModule (lazy-loaded)
/courses/git     → GitComponent
```

---

## Запуск локально

**Вимоги:** Node.js 12.x, npm

```bash
# Клонувати репозиторій
git clone git@github.com:babysgotatemper/Project.git
cd Project

# Встановити залежності
npm install

# Запустити dev-сервер на порту 5000
npm start
```

Відкрити в браузері: **http://localhost:5000**

---

## Білд та деплой

```bash
# Продакшн білд
npm run build
# Результат: ./dist/
```

### Vercel

Проєкт налаштований для деплою на [Vercel](https://vercel.com) через `vercel.json`.

> Для деплою на Vercel використовуйте гілку `ng19` — вона містить міграцію на Angular 19 з підтримкою Node.js 24.

```bash
# Деплой через CLI
npm i -g vercel
vercel --prod
```

Або через GitHub: [vercel.com/new](https://vercel.com/new) → імпортувати репозиторій → гілка `ng19`.

---

## Гілки

| Гілка | Опис |
|-------|------|
| `master` | Angular 7, стабільна версія (Node.js 12) |
| `ng19` | Міграція на Angular 19, деплой на Vercel (Node.js 24) |
