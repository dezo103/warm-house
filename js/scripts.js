document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const burger = document.getElementById('burger');
    const navList = document.getElementById('nav-list');
    const social = document.getElementsByClassName('social-menu')[0];
    const tel = document.getElementsByClassName('tel')[0];

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    burger.addEventListener('click', function() {
        navList.classList.toggle('active');
        burger.classList.toggle('active');
        social.classList.toggle('active');
        tel.classList.toggle('inactive');
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Закрыть меню после клика на ссылку
        if (window.innerWidth < 1024) {
            navList.classList.remove('active');
            burger.classList.remove('active');
            social.classList.remove('active')
            tel.classList.remove('inactive');
        }
    }
});


// read more

if (window.innerWidth < 1024) {
    const items = document.querySelectorAll(".item-advantages");
// Изначально скрываем элементы, начиная с четвертого
    items.forEach((item, index) => {
        if (index >= 3) {
            item.classList.add("hidden"); // Используем класс 'hidden' для скрытия элементов
        }
    });

    const showMoreButton = document.getElementById("showMore");
    let isExpanded = false;

    showMoreButton.addEventListener("click", () => {
        if (!isExpanded) {
            items.forEach((item) => {
                item.classList.remove("hidden"); // Убираем класс 'hidden', чтобы показать элементы
                let fullHeight = item.offsetHeight;
                item.style.height = "0";
                item.style.overflow = "hidden";
                item.style.transition = "height 0.5s ease";
                requestAnimationFrame(() => {
                    item.style.height = `${fullHeight}px`;
                });
            });
            showMoreButton.textContent = "zawalić się >";
            isExpanded = true;
        } else {
            items.forEach((item, index) => {
                if (index >= 3) {
                    item.style.height = "0";
                    item.addEventListener('transitionend', function handler() {
                        item.classList.add("hidden"); // Возвращаем элементы в скрытое состояние после анимации
                        item.style.height = ""; // Сбрасываем инлайновый стиль высоты
                        item.removeEventListener('transitionend', handler);
                    });
                }
            });
            showMoreButton.textContent = "Pokaż więcej >";
            isExpanded = false;
        }
    });
}

