const projectData = {
    robotics: {
        title: "Роботизация",
        tasks: ["Импортозамещение", "Дефицит кадров", "Оптимизация затрат", "Субсидии до 50%"],
        effects: ["Рост выработки на 40%", "Окупаемость от 14 мес", "Работа 24/7", "Снижение травматизма"],
        partners: ["НПП Радиосвязь", "УВЗ", "ОмскТрансМаш"],
        images: ["https://i.ibb.co/1GtNrqPj/image.png", "https://i.ibb.co/B2MPgVWY/image.png", "https://i.ibb.co/CpxHGsYY/image.png", "https://i.ibb.co/sJNFG9sK/image.png", "https://i.ibb.co/WNLtW5Bw/image.png", "https://i.ibb.co/k6HPbKs8/image.png"],
        caps: ["Сварка", "Сборка", "Упаковка", "Логистика", "Окраска", "Конвейер"]
    },
    quality: {
        title: "Контроль качества",
        tasks: ["Алгоритмы ИИ", "Оцифровка ОТК", "Исключение брака"],
        effects: ["Брак -35%", "Скорость x2", "Точность 99.8%", "Автоматический учет"],
        partners: ["ГАЗ ГРУППА", "ШЕРЕМЕТЬЕВО", "УВЗ"],
        images: ["https://i.ibb.co/6dL0hc9/image.png", "https://i.ibb.co/TB3Mc4Vq/image.png", "https://i.ibb.co/3mDt1wkS/image.png", "https://i.ibb.co/N6QXGXmP/image.png", "https://i.ibb.co/0yrPsvGH/image.png", "https://i.ibb.co/ynQKsVBk/image.png"],
        caps: ["Дефекты", "Конвейер", "Геометрия", "Тепловизор", "Сканирование", "Аналитика"]
    },
    security: {
        title: "Средства охраны",
        tasks: ["Требования ФЗ-256", "Антитеррор", "Снижение затрат на ЧОП"],
        effects: ["Реакция < 5 сек", "Затраты -30%", "100% покрытие", "Биометрия"],
        partners: ["РОСНЕФТЬ", "МВД РОССИИ", "ФОРВАРД ЭНЕРГО"],
        images: ["https://i.ibb.co/XZ65YFQb/image.png", "https://i.ibb.co/C5fhRSjq/image.png", "https://i.ibb.co/Cpq6jKVX/image.png", "https://i.ibb.co/Xkkk5wb2/image.png", "https://i.ibb.co/7NTrr57q/image.png", "https://i.ibb.co/7tyWcmvg/image.png"],
        caps: ["Периметр", "Антидрон", "Доступ", "Мониторинг", "Видео", "Досмотр"]
    },
    eco: {
        title: "Экомониторинг",
        tasks: ["Безопасный труд", "Контроль АСКВ", "ESG-повестка"],
        effects: ["Аварии -50%", "Штрафы 0 руб", "Сбор 24/7", "Прозрачность"],
        partners: ["НОРНИКЕЛЬ", "СУЭК", "ЕВРАЗ"],
        images: ["https://i.ibb.co/KpVNHXKx/image.png", "https://i.ibb.co/JwSJ3vfK/image.png", "https://i.ibb.co/pv40LC1H/image.png", "https://i.ibb.co/fdZGCyYj/image.png", "https://i.ibb.co/fY50zwwW/image.png", "https://i.ibb.co/yFmPpXhx/image.png"],
        caps: ["Трубы", "Воздух", "Стоки", "Аналитика", "Датчики", "Контроль"]
    },
    equipment: {
        title: "Оборудование",
        tasks: ["Импортозамещение", "Модернизация ГТС", "Сервис 24/7"],
        effects: ["КПД +25%", "Срок службы +15 лет", "Нет простоев", "Гарантия"],
        partners: ["ЯЗДА", "ЯМЗ", "ХИАГДА"],
        images: ["https://i.ibb.co/hR5NBkZq/image.png", "https://i.ibb.co/4RwQwpqb/image.png", "https://i.ibb.co/vCsDZh6Q/image.png", "https://i.ibb.co/1fCPdsNB/image.png", "https://i.ibb.co/fVX0HMtx/image.png", "https://i.ibb.co/tp125yc0/image.png", "https://i.ibb.co/3YLP8644/image.png", "https://i.ibb.co/Z6V4LW6X/image.png"],
        caps: ["Насосы", "Котельные", "Вентиляция", "Обменники", "Учет", "Турбины", "Очистка", "Щиты"]
    }
};

function openSlide(id) {
    const d = projectData[id];
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <div class="content-flex animate__animated animate__fadeIn">
            <div class="side-info">
                <h2 style="font-size: 3.5rem; text-transform: uppercase; color: #ff4f12; margin: 0 0 40px;">${d.title}</h2>
                
                <div style="margin-bottom: 40px;">
                    <p style="color: #666; font-size: 0.7rem; font-weight: bold; letter-spacing: 2px; margin-bottom: 15px;">ЗАДАЧИ</p>
                    <ul style="list-style: none; padding: 0;">
                        ${d.tasks.map(t => `<li style="padding: 12px 0; border-bottom: 1px solid #222; font-size: 0.95rem; opacity: 0.8;">${t}</li>`).join('')}
                    </ul>
                </div>

                <div style="margin-bottom: 40px;">
                    <p style="color: #666; font-size: 0.7rem; font-weight: bold; letter-spacing: 2px; margin-bottom: 15px;">ЭФФЕКТЫ</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        ${d.effects.map(e => `<div style="background: #111; padding: 15px; border-radius: 12px; font-size: 0.85rem; border: 1px solid #222;">${e}</div>`).join('')}
                    </div>
                </div>

                <div class="partner-chips">
                    ${d.partners.map(p => `<span class="chip">${p}</span>`).join('')}
                </div>
            </div>
            
            <div class="side-visual">
                <div class="photo-mosaic">
                    ${d.images.map((img, i) => `
                        <div class="p-item">
                            <div class="p-img"><img src="${img}"></div>
                            <div class="p-cap">${d.caps[i] || ""}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('modal').classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeSlide() {
    document.getElementById('modal').classList.remove('visible');
    document.body.style.overflow = 'auto';
}
