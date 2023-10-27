<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>day2</title>
</head>
<body>
    <script>
        let challenge = '30 Days Of JavaScript'
        console.log('challenge')
        console.log(challenge.length)
        console.log(challenge.toUpperCase())
        console.log(challenge.toLowerCase())
        console.log(challenge.substr(0,2))
        console.log(challenge.substr(3,20))
        console.log(challenge.includes('Script'))
        console.log(challenge.split(""))

        let company = "Facebook, Google, Microsoft,  Apple, IBM, oracle, Amazon"
        console.log(company.split(","))
        console.log(challenge.replace('JavaScript', 'python'))
        console.log(challenge.charAt(15))
        console.log(challenge.charCodeAt('j'))
        console.log(challenge.indexOf('a'))
        console.log(challenge.lastIndexOf('a'))
        let junction = "You cannot end a sentence with because because because is a conjunction"
        console.log(junction.indexOf('because'))
        console.log(junction.lastIndexOf('because'))
        console.log(junction.trim(''))
        console.log(challenge.startsWith('30'))
        console.log(challenge.endsWith('script'))
        console.log(challenge.match('a'))
        let stringb = '30'
        console.log(stringb.concat("Days", "of", "JavaScript"))
        console.log(challenge.repeat('2'))


        console.log("There is no exercise better for the heart reaching than reaching down and lifting people up.\'by John Holmes teaches us to help one another.'")
        console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
        let num = '10'
        let numInt = parseInt(num)
        console.log(numInt)
        console.log('')

        let dec ='9.8'
        console.log(typeof dec)
        let decInt = parseInt(dec) 
        console.log(decInt)
        let word = 'python'
        let words = 'jargon'
        console.log(word.includes('on'))
        console.log(words.includes('on'))
        let sentence ='I hope this course is not full of jargon. Check if jargon is in the sentence.'
        console.log(sentence.includes('jargon'))
        let randomNum = Math.random()
        console.log(randomNum)
        let r = Math.random()*100
        console.log(r)
        console.log('1\t 1\t 1\t 1\t 1\t\n2\t 1\t 2\t 4\t 8\t\n3\t 1\t 3\t  9\t 27\t\n4\t 1\t 4\t 16\t 64\t\n5\t 1\t 5\t 25\t 125\t')
        let sent = 'You cannot end a sentence with because because because is a conjunction'
        console.log(sent.length)
        console.log(sent.substr(31,23))
        let stateMent = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
        console.log(stateMent.match('love'))
        console.log(sent.match('because'))

        const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.'
        console.log(sentences.replace('% $ @ & # ! ?', ' '))
        
       
        


    </script>
    
</body>
</html>