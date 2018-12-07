  
    function initMap() {
        var input = document.querySelector(`.header__autocomplete`);
        var divMap = document.querySelector(`.article__map`);
        var autocomplete = new google.maps.places.Autocomplete(input);
        var map;
        var marker;
        var initialPosition = {
            center: {lat:64.53, lng:34.75},
            zoom: 13
        };
        // Определяем иконку, которая будет отображать на карте выбранный город
        marker = new google.maps.Marker({
            map: map
        });

        // Отображаем на странице google-карту
        map = new google.maps.Map(divMap, initialPosition);
        google.maps.event.addListener(autocomplete, `place_changed`, changePlace);
        
        // Функция, которая сработает при выборе города из предложенного списка
        function changePlace() {
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            
        if(place.geometry.viewport) {
            // Метод fitBounds позволяет привязать к карте конкретное место
            map.fitBounds(place.geometry.viewport);
        }
            // Задаем иконку и ее размер (метод setIcon())
            marker.setIcon({
                url: place.icon,
                scaledSize: new google.maps.Size(35, 35)
            });
            // Задаем позицию маркера, чтобы отобразить на карте (метод setPosition())
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);
        }

    }
