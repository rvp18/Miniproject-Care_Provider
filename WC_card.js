var jsonUrl = 'https://jsonplaceholder.typicode.com/photos'
    $.getJSON(jsonUrl, function(data){

        

        // var myArray = [
        //     { name: "Purvesh", rate: "20-30", exp:"10" },
        //     { name: "Ambadas", rate: "50-80", exp:"20" },
        //     { name: "Rahul", rate: "2-5", exp:"1" }
        //     ]

            // cards(myArray);


            // function cards(data) {
                // var wc_info = document.getElementById('person_card');
                    
                // var pin = 5;
                
        // var pin; 
        var pinc = document.getElementById("pincode").value;
        var pink = 6;
        var get = document.getElementById("btn");
        get.onclick = function(){
            document.getElementById('show').innerHTML = pinc;
        }
           
                
                // var i = data.filter(data => {
                //     return data.id === pin;
                // });
                

                var pin = 5;
                var output =  data.filter(data => data.id == pin);
                for (i = 0; i < output.length; i++) {
                    
                    var wc_info = document.getElementById('card_container');
                    var info = `
                            <div class="person_card" id="person_card">
                                <div class="person_intro">
                                    <img class="person_img"
                                        src="${output[i].url}"
                                        alt="img">

                                    <!--- <div class="social">
                                        <a href="#"><i class="fa-solid fa-bolt"></i>
                                            Active 3 hours ago
                                        </a> 
                                    </div>c --->
                                </div>

                                <div class="person_info">
                                    <div class="pi_content">


                                        <div class="pi_content1" id="pi_content1">
                                            <p class="pi_title">${output[i].title}</p>
                                            <div class="badges">
                                                <ul>
                                                    <li><i class="fa-solid fa-shield-halved"></i></li>
                                                    <li><i class="fa-solid fa-circle-check"></i></li>
                                                    <li><i class="fa-regular fa-heart"></i></li>
                                                    <li><i class="fa-solid fa-font-awesome"></i></li>
                                                </ul>

                                            </div>
                                        </div>


                                        <div class="pi_content2">
                                            <ul>
                                                <li><span>${output[i].id}</span><br>years exp.</li>
                                                <li><span>$${output[i].id}</span><br>Hourly rate</li>
                                                <li><span>${output[i].id}</span><br>Age</li>
                                            </ul>
                                        </div>

                                        <div class="pi_content3">
                                            <ul>
                                                <li><i class="fa-solid fa-ban-smoking"></i></i>Non-smoker</li>
                                                <li><i class="fa-solid fa-syringe"></i>Covid-19 vaccinated</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div class="pi_others">
                                    <div class="pio_content1">
                                        <ul>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i></li>
                                            <li><i class="fa-solid fa-star"></i><sub>(5)</sub></li>
                                        </ul>
                                        <p>Responds within 4 hours | Hired by 13 families</p>

                                    </div>
                                    <div class="pio_content2">
                                        <a href="#">Book ${output[i].title}</a>
                                        <a href="#">Message ${output[i].title}</a>
                                    </div>

                                </div>
                            </div>`
                            
                            wc_info.innerHTML += info;

                }
            
            // }
    });