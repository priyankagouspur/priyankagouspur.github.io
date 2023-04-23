function getBotResponse(input) {
    let greetings = ["hi", "hello", "hey", "hai"];
    let farewell_greetings = ["bye", "goodbye", "takecare", "see you"];
    let facts = ["give some facts","give facts", "interesting facts", "interesting things","unknown facts", "give interesting facts"];
    let some_facts = ["India is the second-most populous country in the world, with a population of over 1.3 billion people, making it a melting pot of languages, religions, and ethnicities."," India has a successful space program, with notable achievements such as sending missions to the Moon (Chandrayaan-1) and Mars (Mangalyaan), making India one of the few countries to have achieved this feat.", "India is known for its rich biodiversity and is home to several national parks, wildlife sanctuaries, and reserves, including the Sundarbans, Gir Forest, Kaziranga National Park, Periyar Tiger Reserve, and many more. These areas are home to a diverse range of flora and fauna, including endangered species like the Royal Bengal Tiger, Asian Elephant, Indian Rhino, and more.", " India is home to several iconic landmarks, including the Taj Mahal, a UNESCO World Heritage Site and one of the most famous monuments in the world. Other notable landmarks include the Red Fort, India Gate, Qutub Minar, Hampi ruins, Jaipur City Palace, and many more.","India has the world's fourth-largest railway network, with over 67,000 kilometers of track and more than 8,000 stations.","India has over 500 wildlife reserves, including national parks and sanctuaries, to protect and conserve its diverse wildlife species.","Mahatma Gandhi, also known as the Father of the Nation, is an iconic figure in India's history, known for his non-violent struggle for India's independence from British rule."]
    let stopwordslist = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now']


    function remove_stopwords(str) {
        res = []
        words = str.split(' ')
        for(i=0;i<words.length;i++) {
           word_clean = words[i].split(".").join("")
           if(!stopwordslist.includes(word_clean)) {
               res.push(word_clean)
           }
        }
        return(res.join(' '))
    }  

    function getRandomItem(arr) {

        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);
    
        // get random item
        const item = arr[randomIndex];
    
        return item;
    }
    const result = getRandomItem(some_facts);
    // Simple responses
    let response_text = remove_stopwords(input);
    console.log(response_text);
    if (greetings.includes(input) == true) {
        let botHtml = '<p class="botText"> <img src="static/test1.jpg" alt="Avatar" style="float: left;max-width: 60px; width: 100%;margin-right: 20px;border-radius: 50%;"><span>' + "Hello there!" + '</span></p>';
                            $("#chatbox").append(botHtml);
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);        
    } else if (farewell_greetings.includes(input) == true) {
        let botHtml = '<p class="botText"><img src="static/test1.jpg" alt="Avatar" style="float: left;max-width: 60px; width: 100%;margin-right: 20px;border-radius: 50%;"><span>' + "Talk to you later!" + '</span></p>';
                        $("#chatbox").append(botHtml);
                        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    } else if (facts.includes(response_text) == true){
        let botHtml = '<p class="botText"><img src="static/test1.jpg" alt="Avatar" style="float: left;max-width: 60px; width: 100%;margin-right: 20px;border-radius: 50%;"><span>' + result + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    } 
    else {
        var isClose = true;
        const stopwords = ["of","suggest","give", "watch", "to","the", "a", "an", "any", "is", "can", "are", "there", "any", "who", "what", "why", "whom", "spoken", "used", "in", "people", "speak", "food"];
        let editor = "sorts\n"+
        "#city = {amaravati, udaipur, jaisalmer,aurangabad, amritsar, ahmedabad, madurai, pushkar, ajmer, mysore, agra, itanagar, dispur, patna, raipur, panaji, gandhinagar, chandigarh, shimla, ranchi, bengaluru, thiruvananthapuram, bhopal, mumbai, imphal, shillong, aizawl, kohima, bhubaneswar, chandigarh, jaipur, gangtok, chennai, hyderabad, agartala, lucknow, dehradun, kolkata, portblair, chandigarh, daman, kavaratti, delhi, puducherry}.\n"+
        "#states = {andhrapradesh, andamanandnicobarislands, andamanandnicobarislands, madhya_pradesh, delhi, arunachalpradesh, assam, bihar, chhattisgarh, goa, gujarat, haryana, himachalpradesh, jharkhand, karnataka, kerala, madhyapradesh, maharashtra, manipur, meghalaya, mizoram, nagaland, odisha, punjab, rajasthan, sikkim, tamilnadu, telangana, tripura, uttarpradesh, uttarakhand, westbengal, andamanandnicobarislands, chandigarh, dadraandnagarhavelianddamananddiu, lakshadweep, delhi, puducherry}.\n"+
        "#dishes = {masortenga, muthia, apong, littichokha, vindaloo, dhokla, kadhipakora, dhaam, dhuska, bisibelebath, appamwithstew, poha, vadapav, eromba, jadoh, bai, axone, chhenapoda, butterchicken, dalbatichurma, gundruk, dosa, hyderabadibiryani, berma, tundekekabab, chainsoo, roshogolla, fishcurry, cholebhature, dhokli, tunacurry, cholebhature, masaladosa}.\n"+
        "#languages = {assamese, bengali, khasi, nepali, chhattisgarhi, manipuri, marathi, malayalam, gujarati, haryanvi, hindi, punjabi, rajasthani, bhojpuri, odia,kannada, punjabi, tamil, telugu, mizo, naga, odia, sikkimese, kokborok, urdu, garhwali, punjabi, odia, telugu, english}.\n"+
        "#famousplaces = {taj_mahal, red_fort, golden_temple, hawa_mahal, ajmer_sharif_dargah,pushkar_lake, mysore_palace, sabarmati_ashram, india_gate, qutub_minar, amer_fort, ajanta_caves, ellora_caves, khajuraho_temples, konark_sun_temple, meenakshi_temple, mysorepalace, charminar, victoria_memorial, jantar_mantar, fatehpur_sikri, hampi_ruins, jaipur_city_palace, jaisalmer_fort, udaipur_city_palace, sabarmati_ashram, ranthambore_national_park, kanha_national_park, bandipur_national_park, sundarbans_national_park, valley_of_flowers_national_park, gir_national_park}.\n"+
        "#politicians = { narendra_modi, rajnath_singh, amit_shah,nirmala_sitharaman, smriti_irani, subrahmanyam_jaishankar, piyush_goyal }.\n"+
        "#actors = {shah_rukh_khan, rajnikanth}.\n"+
        "#movies = {bahubali}.\n"+
    "predicates\n"+
                    "capital( #city,#states).\n"+
                    "famous_dish(#dishes, #states).\n"+
                    "language(#languages, #states).\n"+
                    "famousplace(#famousplaces,#city).\n"+
                    "famousplacein(#famousplaces,#states).\n"+
                    "prime_minister(#politicians).\n"+
                    "defence_minister(#politicians).\n"+
                    "home_minister(#politicians).\n"+
                    "famous_actor(#actors).\n"+
                    "movie(#movies).\n"+
                    
    "rules\n"+
                    "prime_minister(narendra_modi).\n"+
                    "defence_minister(rajnath_singh).\n"+
                    "home_minister(amit_shah).\n"+
                    "famous_actor(shah_rukh_khan).\n"+
                    "movie(bahubali).\n"+
                    "capital(dispur, assam).\n"+
                    "capital(raipur, chhattisgarh).\n"+
                    "capital(itanagar, arunachalpradesh).\n"+
                    "capital(patna, bihar).\n"+
                    "capital(panaji, goa).\n"+
                    "capital(gandhinagar, gujarat).\n"+
                    "capital(chandigarh, haryana).\n"+
                    "capital(shimla, himachalpradesh).\n"+
                    "capital(ranchi, jharkhand).\n"+
                    "capital(bengaluru, karnataka).\n"+
                    "capital(thiruvananthapuram, kerala).\n"+
                    "capital(bhopal, madhyapradesh).\n"+
                    "capital(mumbai, maharashtra).\n"+
                    "capital(imphal, manipur).\n"+
                    "capital(shillong, meghalaya).\n"+
                    "capital(aizawl, mizoram).\n"+
                    "capital(kohima, nagaland).\n"+
                    "capital(bhubaneswar, odisha).\n"+
                    "capital(chandigarh, punjab).\n"+
                    "capital(jaipur, rajasthan).\n"+
                    "capital(gangtok, sikkim).\n"+
                    "capital(chennai, tamilnadu).\n"+
                    "capital(hyderabad, telangana).\n"+
                    "capital(agartala, tripura).\n"+
                    "capital(lucknow, uttarpradesh).\n"+
                    "capital(dehradun, uttarakhand).\n"+
                    "capital(kolkata, westbengal).\n"+
                    "capital(portblair, andamanandnicobarislands).\n"+
                    "capital(chandigarh, chandigarh).\n"+
                    "capital(daman, dadraandnagarhavelianddamananddiu).\n"+
                    "capital(kavaratti, lakshadweep).\n"+
                    "capital(puducherry, puducherry).\n"+
    
                    "famous_dish(masortenga, assam).\n"+
                    "famous_dish(muthia, chhattisgarh).\n"+
                    "famous_dish(apong, arunachalpradesh).\n"+
                    "famous_dish(littichokha, bihar).\n"+
                    "famous_dish(vindaloo, goa).\n"+
                    "famous_dish(dhokla, gujarat).\n"+
                    "famous_dish(kadhipakora, haryana).\n"+
                    "famous_dish(dhaam, himachalpradesh).\n"+
                    "famous_dish(dhuska, jharkhand).\n"+
                    "famous_dish(bisibelebath, karnataka).\n"+
                    "famous_dish(appamwithstew, kerala).\n"+
                    "famous_dish(poha, madhyapradesh).\n"+
                    "famous_dish(vadapav, maharashtra).\n"+
                    "famous_dish(eromba, manipur).\n"+
                    "famous_dish(jadoh, meghalaya).\n"+
                    "famous_dish(bai, mizoram).\n"+
                    "famous_dish(axone, nagaland).\n"+
                    "famous_dish(chhenapoda, odisha).\n"+
                    "famous_dish(butterchicken, punjab).\n"+
                    "famous_dish(dalbatichurma, rajasthan).\n"+
                    "famous_dish(gundruk, sikkim).\n"+
                    "famous_dish(dosa, tamilnadu).\n"+
                    "famous_dish(hyderabadibiryani, telangana).\n"+
                    "famous_dish(berma, tripura).\n"+
                    "famous_dish(tundekekabab, uttarpradesh).\n"+
                    "famous_dish(chainsoo, uttarakhand).\n"+
                    "famous_dish(roshogolla, westbengal).\n"+
                    "famous_dish(fishcurry, andamanandnicobarislands).\n"+
                    "famous_dish(cholebhature, punjab).\n"+
                    "famous_dish(dhokli, dadraandnagarhavelianddamananddiu).\n"+
                    "famous_dish(tunacurry, lakshadweep).\n"+
                    "famous_dish(cholebhature, delhi).\n"+
                    "famous_dish(masaladosa, puducherry).\n"+
    
                    "language(telugu, andhrapradesh).\n"+
                    "language(assamese, assam).\n"+
                    "language(chhattisgarhi, chhattisgarh).\n"+
                    "language(english, delhi).\n"+
                    "language(english, goa).\n"+
                    "language(gujarati, gujarat).\n"+
                    "language(hindi, haryana).\n"+
                    "language(hindi, himachalpradesh).\n"+
                    "language(hindi, jharkhand).\n"+
                    "language(kannada, karnataka).\n"+
                    "language(malayalam, kerala).\n"+
                    "language(hindi, madhyapradesh).\n"+
                    "language(marathi, maharashtra).\n"+
                    "language(manipuri, manipur).\n"+
                    "language(khasi, meghalaya).\n"+
                    "language(mizo, mizoram).\n"+
                    "language(english, nagaland).\n"+
                    "language(odia, odisha).\n"+
                    "language(punjabi, punjab).\n"+
                    "language(rajasthani, rajasthan).\n"+
                    "language(nepali, sikkim).\n"+
                    "language(tamil, tamilnadu).\n"+
                    "language(telugu, telangana).\n"+
                    "language(bengali, tripura).\n"+
                    "language(hindi, uttarpradesh).\n"+
                    "language(hindi, uttarakhand).\n"+
                    "language(bengali, westbengal).\n"+
                    "language(hindi, andamanandnicobarislands).\n"+
                    "language(hindi, dadraandnagarhavelianddamananddiu).\n"+
                    "language(malayalam, lakshadweep).\n"+
                    "language(tamil, puducherry).\n"+
    
                    "famousplace(taj_mahal, agra).\n"+
                    "famousplace(amer_fort, jaipur).\n"+
                    "famousplace(hawa_mahal, jaipur).\n"+
                    "famousplace(jantar_mantar, jaipur).\n"+
                    "famousplace(udaipur_city_palace, udaipur).\n"+
                    "famousplace(jaisalmer_fort, jaisalmer).\n"+
                    "famousplace(ellora_caves, aurangabad).\n"+
                    "famousplace(ajanta_caves, aurangabad).\n"+
                    "famousplace(meenakshi_temple, madurai).\n"+
                    "famousplace(mysore_palace, mysore).\n"+
                    "famousplace(india_gate, delhi).\n"+
                    "famousplace(qutub_minar, delhi).\n"+
                    "famousplace(red_fort, delhi).\n"+
                    "famousplace(sabarmati_ashram, ahmedabad).\n"+
                    "famousplace(fatehpur_sikri, agra).\n"+
                    "famousplace(charminar, hyderabad).\n"+
                    "famousplace(ajmer_sharif_dargah, ajmer).\n"+
                    "famousplace(pushkar_lake, pushkar).\n"+
                    "famousplace(golden_temple, amritsar).\n"+
                    "famousplace(victoria_memorial, kolkata).\n"+
        
                    "famousplacein(valley_of_flowers_national_park, uttarakhand).\n"+
                    "famousplacein(ranthambore_national_park, rajasthan).\n"+
                    "famousplacein(kanha_national_park, madhya_pradesh).\n"+
                    "famousplacein(bandipur_national_park, karnataka).\n"+
                    "famousplacein(gir_national_park, gujarat).\n"+
                    "famousplacein(khajuraho_temples, madhya_pradesh).\n"+
                    "famousplacein(konark_sun_temple, odisha).\n"+
                    "famousplacein(sundarbans_national_park, westbengal).\n"+
                    "famousplacein(hampi_ruins, karnataka).";
                
        // sorts
        var contstring = editor.split("sorts\n")[1].split("predicates\n");
        console.log(contstring);
        var sortstring = contstring[0].split('.');
        sortstring.splice(-1, 1);
        var sorts = {};
        sortstring = sortstring.map(d => d.replace(/\n/g, '').trim()).forEach(d => {
            var par = d.split("=");
            sorts[par[0].replace(/#/, '').trim()] = par[1].replace(/{|}/g, '').split(',').map(w => w.trim())
        });
        // predicates
        var predicates = {};
        console.log(contstring);
        contstring = contstring[1].split("rules\n");
        sortstring = contstring[0].split('.');
        sortstring.splice(-1, 1);
        sortstring.forEach(d => {
            var part = d.replace(/\n/g, '').trim().split('(');
            var func = part[0];
            predicates[func] = {};
            var par = part[1].split(',').map(e => e.replace(/#|\)/g, '').trim());
            var par1 = sorts[par[0]].slice();
            par1.push("X");
            par.splice(0, 1);
            par1.forEach(e => {
                var strinh = (e == 'X' ? '' : (e + ' ')) + func;
                predicates[func][strinh] = func + "(" + e + ")";
                par.forEach(par2 => {
                    var temp = sorts[par2].slice();
                    temp.push("X");
                    temp.forEach(t => {
                        var strinh = (e == 'X' ? '' : (e + ' ')) + func + (t == 'X' ? '' : (' ' + t));
                        // if (strinh != fubnc)
                        predicates[func][strinh] = func + "(" + e + "," + t + ")";
                    })
                });
            });
        });


        var all_predicates = [];
        for (var key1 in predicates) {
            if (predicates.hasOwnProperty(key1)) {
                for (var key2 in predicates[key1]) {
                    if (predicates[key1].hasOwnProperty(key2))
                        all_predicates.push(key2);
                }
            }

        }
        all_predicates.push('speak spanish'); // extra terms
        a = FuzzySet(all_predicates);

        console.log(all_predicates)

        var question = input;
        if (question.trim() === '') {
            return 'Please ask a question.';
        }
        var trim_script = question.split(" ");
        trim_script = trim_script.filter(f => !stopwords.includes(f));
        var queryQues = a.get(trim_script.join(" "), null, 0.5);
        console.log(queryQues);
        if(queryQues != null)
        {
            getAnswer(queryQues);
        }
        else{
            const answer = 'Oops!! Sorry, I could not find an answer. Please try again by asking "Suggest some facts", "Who is the prime minsiter of India", "famous dish of Telangana", etc.';
            let botHtml = '<p class="botText"><img src="static/test1.jpg" alt="Avatar" style="float: left;max-width: 60px; width: 100%;margin-right: 20px;border-radius: 50%;"><span>' + answer + '</span></p>';
            $("#chatbox").append(botHtml);
            document.getElementById("chat-bar-bottom").scrollIntoView(true);
        }


        function getAnswer(question) {
            if (question != null) {
                var mainkey = question[0][1].replace('speak ', '');
                var answerarr = mainkey.split(' ');
                var key1 = '';
                answerarr.forEach(d => {
                    key1 = (predicates[d] != undefined) ? d : key1;
                });
                //var key1 = answerarr.length>2? answerarr[1]:answerarr[0];
                var key2 = mainkey;
                console.log(key1 + '-' + key2);
                console.log(predicates[key1][key2]);
        
                var data = {
                    'action': "getQuery",
                    'query': predicates[key1][key2],
                    'editor': editor
                };
                var res;
                if (key1 == "famousplace") {
                    res = "The famous place in " + key2.split(" ").pop() + " is ";
                }
                else if (key1 == "capital") {
                    res = "The capital city of " + key2.split(" ").pop() + " is ";
                }
                else if (key1 == "language") {
                    res = "The language spoken in the place that you have asked, " + key2.split(" ").pop() + " is ";
                }
                else if (key1 == "famous_dish"){
                    res = " The famous dish or food of "+ key2.split(" ").pop()+" is ";
                }
                else if (key1 == "prime_minister" || key1 == "home_minister" || key1 == "defence_minister"){
                    res = " Please note that political positions and leaders can change over time, and it's always recommended to check for the most up-to-date information from a reliable source. As of my knowledge cutoff date in September 2021, the "+ key1.replace("_"," ")+ " of India is  ";
                }
                else if (key1 == "famous_actor"){
                    res = " India has a vibrant film industry, often referred to as Bollywood, which produces a large number of movies and has many famous actors. One of the most well-known and popular actor in India, who have gained recognition both in India and internationally, is "
                }
                else if (key1 == "movie"){
                    res = "Certainly! India has a rich film industry with movies spanning various genres and languages. Here is one of the popular Indian movie that you might enjoy ";
                }
                else if(key1.includes("unknown")){
                    res = "Please try to ask famous places, dishes, languages of any state or city in India";
                    let botHtml = '<p class="botText"><img src="static/test1.jpg" alt="Avatar" style="float: left;max-width: 60px; width: 100%;margin-right: 20px;border-radius: 50%;"><span>' + res + '</span></p>';
                    $("#chatbox").append(botHtml);
                    document.getElementById("chat-bar-bottom").scrollIntoView(true);
                }
        
        
        
                $.ajax({
                    url: "https://cors-anywhere.herokuapp.com/http://wave.ttu.edu/ajax.php",
                    type: "POST",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    data: {
                        action: "getQuery",
                        query: predicates[key1][key2],
                        editor: editor
                    },
                    success: function (response) {
                        console.log(response);
                        if (response) {
                            const justAns = response.split("=").pop().split('<')[0].toUpperCase();
                            res = res + justAns.replaceAll("_"," ");
                            let botHtml = '<p class="botText"><img src="static/test1.jpg" alt="Avatar" style="float: left;max-width: 60px; width: 100%;margin-right: 20px;border-radius: 50%;"><span>' + res + '</span></p>';
                            $("#chatbox").append(botHtml);
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        } else {
                            const answer = 'Sorry, I could not find an answer.';
                            let botHtml = '<p class="botText"><img src="static/test1.jpg" alt="Avatar" style="float: left;max-width: 60px; width: 100%;margin-right: 20px;border-radius: 50%;"><span>' + answer + '</span></p>';
                            $("#chatbox").append(botHtml);
                            document.getElementById("chat-bar-bottom").scrollIntoView(true);
                        }
                    },
                    error: function (xhr, status, error) {
                        console.log("error: " + error);
                    }
                });
        
        
        
        
                //$.post("http://localhost/ajax.php", { url: "http://wave.ttu.edu/" , data:data}, function (response) {
                // Expected response : answer sets
                //$.post("http://localhost/ajax/ajax.js",  function (response) {
                //$.post("http://localhost/ajaxtest.php", function (response) {  
                // $.post("https://cors-anywhere.herokuapp.com/http://wave.ttu.edu/", data, function (response) {
        
                // console.log(response);
        
        
                // var html = document.createElement("html");
                // html.innerHTML = response;
                // contentRan
                // var answerstring = html.querySelector("p").textContent.replace(/X =/gm, "");
                //  var answerarr = answerstring.split("\n");
                //  answerarr.splice(-1,1);
                //   console.log(answerarr);
                //   var pre_string = "The answer to your question " + transcript + " is ";
                //   answerstring = contentRan.answer[answerarr[0].toLowerCase().trim()]==undefined?
                //       (pre_string + (answerarr.length==1?answerstring:(answerarr.splice(-1, 0, "and"),answerarr.join())))
                //       : generaspeak(contentRan.answer[answerarr[0].toLowerCase().trim()]);
                //    console.log(answerstring);
        
                //   const answer = answerstring || 'Sorry, I could not find an answer.';
                //   answerDiv.innerHTML = answer;
                //   answerBox.innerHTML = answer;
                //   console.log(answer);
        
                // });
            }
        }
    }
}

