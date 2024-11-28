 <script>
            pesel = (prompt('podaj pesel'))
            function checkPesel() {
                if (pesel.length !== 11 || !/^\d+$/.test(pesel)) {
                    alert("error");
                    return;
                }
                const monthNames = [
                "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
                "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
                ];
                  
                const yearDate = pesel.substring(0, 2);
                const monthDate = pesel.substring(2, 4);
                const dayDate = pesel.substring(4, 6);
                const genderIdentificator = parseInt(pesel.charAt(9));
 
                let year = parseInt(yearDate);
                let month = parseInt(monthDate);
                let day = parseInt(dayDate);
 
                if ((month == 0 || day == 0)||(month > 12 || day > 30)) {
                    alert("eror invalid dzien/miesiac")
                }
 
                let gender = ""
                if(genderIdentificator % 2 == 0){
                    gender = "K"
                } else {
                    gender = "M"
                }
 
                if (month > 12) {
                    month -= 20;
                    year += 2000;
                } else {
                    year += 1900;
                }
                
                const monthName = monthNames[month - 1];
                
                document.write('rok=', year, "<br>",
                'miesiac=', month, "<br>",
                'dzien=', day, "<br>",
                'plec=', gender)
            };
        </script>
