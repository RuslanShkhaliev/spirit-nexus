# Spirit Nexus

Тестовый проект на Next.js с архитектурой Feature-Sliced Design.  
Демонстрирует работу с сущностями, server components, client state, React Query и real-time обновлениями.

---

## Запуск локально

```bash
yarn install
yarn dev
```

## Запуск Docker
```bash 
yarn docker:up
```

## Стек

- Next.js 16 (App Router, RSC)
- TypeScript
- React 19
- TanStack React Query
- Zod
- SCSS Modules
- Docker / Docker Compose
- Faker (моки)

---

## Архитектура

Используется **Feature-Sliced Design (FSD)**.

### Слои

- **shared**
    - `api` – http-клиенты, queryClient
    - `ui` – переиспользуемые UI-компоненты (Button, Badge и т.д.)
    - `config` – константы, настройки моков
- **entities**
    - `spirit` – схема, типы, api, queries, ui (SpiritCard)
- **features**
    - `capture-spirit` – бизнес-операция по поимке духа (mutation + UI)
- **widgets**
    - `spirit-list` – список духов с пагинацией и экшенами
- **routes**
    - страницы приложения (monitoring)
---

## Функциональность

- Получение списка духов
- Получение духа по id
- Захват духа (mutation с optimistic update)
- Real-time обновление уровня угрозы через SSE
- UI автоматически реагирует на server events без перезагрузки
- Все данные валидируются схемами

---

## API (моки)

- `GET /api/spirits` – список духов
- `GET /api/spirits/:id` – один дух
- `POST /api/spirits/:id/capture` – захват духа
- `GET /api/spirits/stream` – SSE поток обновлений

---


