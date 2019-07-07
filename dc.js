$(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:50, //Отступ от элемента справа в 50px
                nav:false, //Отключение навигации
                autoplay:true, //Автозапуск слайдера
                smartSpeed:4000, //Время движения слайда
                autoplayTimeout:5000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4
                    }
                }
            });
        });
