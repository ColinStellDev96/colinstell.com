$(document).ready(function (){
            var trueDanger = [];
            $('#asteroidDateForm').on('submit', function (event){
                event.preventDefault();
                $('#asteroidData>tr>td').empty();
                var dateChosen = $('#asteroidDate').val();
                console.log(dateChosen);
            $.get('/nasa_data', {date: dateChosen}).then(function(data){
                console.log(data);
                var nearEarth = data.near_earth_objects;
                for (date in nearEarth){
                    for (let i=0; i < nearEarth[date].length; i++) {
                        if (nearEarth[date][i].is_potentially_hazardous_asteroid === true)
                        trueDanger.push(nearEarth[date][i]);
                    }}

                // console.log(trueDanger);
                for (let i=0; i < trueDanger.length; i++) {
                $('#asteroidData').append(`
                        <tr>
                            <td>${trueDanger[i].name}</td>
                            <td>${trueDanger[i].estimated_diameter.feet.estimated_diameter_max}</td>
                            <td>${trueDanger[i].close_approach_data[0].miss_distance.miles}</td>
                            <td>${trueDanger[i].close_approach_data[0].relative_velocity.miles_per_hour}</td>
                        </tr>
                `);
              }
            });
        });
    });
