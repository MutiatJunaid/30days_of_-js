// exercise level1
//   1   
   let challenge = '30 Days Of JavaScript'
    // 2
        console.log('challenge')
        // 3
        console.log(challenge.length)
        // 4
        console.log(challenge.toUpperCase())
        // 5
        console.log(challenge.toLowerCase())
        // 6
        console.log(challenge.substr(0,2))
        // 7
        console.log(challenge.substr(3,20))
        // 8
        console.log(challenge.includes('Script'))
        // 9
        console.log(challenge.split(""))
            // 10
        let company = "Facebook, Google, Microsoft,  Apple, IBM, oracle, Amazon"
        // 11
        console.log(company.split(","))
        // 12
        console.log(challenge.replace('JavaScript', 'python'))
    //    13 
    console.log(challenge.charAt(15))
    // 14
        console.log(challenge.charCodeAt('j'))
        // 15
        console.log(challenge.indexOf('a'))
        // 16
        console.log(challenge.lastIndexOf('a'))
        // 17
        let junction = "You cannot end a sentence with because because because is a conjunction"
        console.log(junction.indexOf('because'))
      
    //   18 
       console.log(junction.lastIndexOf('because'))
    //   20  
       console.log(junction.trim(''))
       
    //    21
    //    console.log(challenge.startsWith('30'))
       
    //    22
       console.log(challenge.endsWith('script'))
    //    23
        console.log(challenge.match('a'))
        let stringb = '30'
        // 24
        console.log(stringb.concat("Days", "of", "JavaScript"))
        // 25
        console.log(challenge.repeat('2'))

// EXCERCISE LEVEL2
    //  1
console.log("There is no exercise better for the heart reaching than reaching down and lifting people up.\'by John Holmes teaches us to help one another.'")
        // 2
        console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

    //   3
        let num = '10'
        let numInt = parseInt(num)
        console.log(numInt)
        console.log('')
        // 4

        let dec ='9.8'
        console.log(typeof dec)
        let decInt = parseInt(dec) 
        console.log(decInt)
        
        // 5
        let word = 'python'
        let words = 'jargon'
        console.log(word.includes('on'))
        console.log(words.includes('on'))

        // 6
        let sentence ='I hope this course is not full of jargon. Check if jargon is in the sentence.'
        console.log(sentence.includes('jargon'))
      
    //   7
        let randomNum = Math.random()
        console.log(randomNum)
        let r = Math.random()*100
        console.log(r)

        // 11
        console.log('1\t 1\t 1\t 1\t 1\t\n2\t 1\t 2\t 4\t 8\t\n3\t 1\t 3\t  9\t 27\t\n4\t 1\t 4\t 16\t 64\t\n5\t 1\t 5\t 25\t 125\t')
       
    //    12
        let sent = 'You cannot end a sentence with because because because is a conjunction'
        console.log(sent.length)
        console.log(sent.substr(31,23))

        // EXCERCISES:LEVEL3
        let stateMent = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
       
            // 1
        console.log((stateMent.match(/love/g)).length)

            // 2
        console.log((sent.match(/because/g)).length)
            // 3
        const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.'
        console.log(sentences.replace('% $ @ & # ! ?', ' '))

        let question4 = "Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'"
       
        console.log(question4.match(/(\d+)/)) 

