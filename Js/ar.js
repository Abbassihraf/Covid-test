const testBtn = document.querySelector('.start-btn')
const questionnaire = document.querySelector('.questionnaire')
const Préambule = document.querySelector('.Préambule')
const stepper = document.querySelectorAll('.stepper h1')
const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')
const currentquestion = document.querySelector('.question')
const answerInputs = document.querySelector('.answer-inputs')
const progressBar = document.querySelector('.bar')
const questionNumber = document.querySelector('.question-number')
const animateBox = document.querySelector('.animation')




testBtn.addEventListener('click', startTest)

animateBox.addEventListener('change', (e) => {

    const input = e.target

    if (input.type === 'number') {

        const number = parseFloat(input.value)

        if (number >= input.min && number <= input.max) {

            nextBtn.disabled = false



        } else {

            nextBtn.disabled = true

        }


    } else {
        nextBtn.disabled = false
    }





})



let currentQuestionIndex = 0


function hideprevious() {
    if (currentQuestionIndex === 0) {
        previousBtn.classList.add('hide')
    } else {
        previousBtn.classList.remove('hide')
    }
}




function startTest() {
    stepper[0].classList.remove('select')
    stepper[1].classList.add('select')
    testBtn.style.display = 'none'
    Préambule.style.display = 'none'
    questionnaire.style.display = 'block'
    hideprevious()
    nextBtn.disabled = true


}


nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < 21) {
        currentQuestionIndex++
        showQuestion(questions[currentQuestionIndex])
        folowProgress(currentQuestionIndex)
        hideprevious()
        transition('next')
        nextBtn.disabled = true
        if (currentQuestionIndex === 21) {
            nextBtn.innerText = 'ننهي الإختبار'

        } else {
            nextBtn.innerText = 'السؤال التالي'
        }
    }



})

previousBtn.addEventListener('click', () => {
    currentQuestionIndex--
    showQuestion(questions[currentQuestionIndex])
    folowProgress(currentQuestionIndex)
    hideprevious()
    transition('previous')
    nextBtn.disabled = true
    if (currentQuestionIndex === 21) {
        nextBtn.innerText = 'ننهي الإختبار'

    } else {
        nextBtn.innerText = 'السؤال التالي'
    }
})


function showQuestion(question) {

    currentquestion.innerText = question.question
    answerInputs.innerHTML = ''
    const inputAnswer = question.input.answer
    const input = question.input


    if (question.input.type === 'radio') {

        inputAnswer.forEach(answer => {

            answerInputs.innerHTML += `
                    <div>
                        <input type="radio" name="choice" id="${answer.text}">
                        <label for="${answer.text}">
                        <i class="fas ${answer.icon}"></i>
                        <span>${answer.text}</span> </label>
                    </div>`
        })



    } else {

        answerInputs.innerHTML += `<input type="number"  id="${input.name}" min="${input.min}" max="${input.max}" placeholder="${input.min} - ${input.max}">
                                    <span class="input-span">${input.name}</span>`
    }


}



function folowProgress(number) {

    const currentNmber = number + 1

    questionNumber.innerText = currentNmber
    progressBar.style.width = `calc(${currentNmber} * calc(100% / 22))`

}

function transition(frame) {

    animateBox.style.animation = ` ${frame} .5s ease`
    animateBox.addEventListener('animationend', () => {
        animateBox.style.animation = ``
    })
}











































































const questions = [{
        question: 'واش كانت فيك السخانة في 10 أيام لي فاتت (التوريشة,العرق؟',
            input: {
            type: 'radio',
            qNumber: 'Q1',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'شحال درجة الحرارة ديالك ؟',

        input: {
            type: 'number',
            qNumber: 'Q2',
            name: 'درجة',
            min: 34,
            max: 42
        }
    }, {
        question: 'في الايام لي فاتو واش كانت فيك الكحبة اولا تزادت الكحبة لي كانت كتجيك عادية؟',

        input: {
            type: 'radio',
            qNumber: 'Q3',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش كتعاني من آلام عضلية غير معتادة في الأيام القليلة لي فاتت؟',

        input: {
            type: 'radio',
            qNumber: 'Q4',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش كتحس بآلام فحلقك هاد الايام ؟',

        input: {
            type: 'radio',
            qNumber: 'Q5',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'فهاد 24 ساعة لي فاتو واش كان فيك الإسهال ؟ على الاقل 3 مرات',

        input: {
            type: 'radio',
            qNumber: 'Q6',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'فهاد الايام لي فاتو، واش عيتي بطريقة ماشي عادية لدرجة بقيتي مريح اكثر من نص يوم ؟',

        input: {
            type: 'radio',
            qNumber: 'Q7',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش لقيتي صعوبة كبيرة فالماكلة و الشراب لاكثر من 24 ساعة ؟',

        input: {
            type: 'radio',
            qNumber: 'Q8',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش كتحس بضيق فالتنفس ملي كتكلم ولا كدير جهد كثر من العادة ؟',

        input: {
            type: 'radio',
            qNumber: 'Q9',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'فهاد الوقت كيف كتحس بالجسم ديالك ؟',

        input: {
            type: 'radio',
            qNumber: 'Q10',
            answer: [{
                text: 'مزيان',
                icon: ' far fa-laugh'
            }, {
                text: 'شويا',
                icon: ' far fa-smile'
            }, {
                text: 'عيان',
                icon: ' far fa-frown'
            }, {
                text: 'مهلوك',
                icon: 'far fa-dizzy'
            }]
        }
    }, {
        question: 'شحال عندك فعمرك ؟ هادشي باش نقدو نعرفو الخطورة ديال المرض إلا كان.',

        input: {
            type: 'number',
            qNumber: 'Q11',
            name: 'سنة',
            min: 15,
            max: 110
        }
    }, {
        question: 'شحال عندك فالوزن ؟ باش نعرفو مؤشر الوزن ديال الجسم ديالك حيث يقدر يتزاد عليك الحال فحالة كان فيك الڤيروس',

        input: {
            type: 'number',
            qNumber: 'Q12',
            name: 'كلغ',
            min: 20,
            max: 250
        }
    }, {
        question: 'شحال فيك فالطول ؟ باش نعرفو مؤشر الوزن ديال الجسم ديالك حيث يقدر يتزاد عليك الحال فحالة كان فيك الڤيروس',

        input: {
            type: 'number',
            qNumber: 'Q13',
            name: 'سنتيمتر',
            min: 80,
            max: 250
        }
    }, {
        question: 'واش عندك ارتفاع ضغط الدم ؟ ولا فيك مرض القلب او الأوعية الدموية ؟ او كتاخد دوا ديال القلب ؟',

        input: {
            type: 'radio',
            qNumber: 'Q14',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'فيك مرض السكر ؟',

        input: {
            type: 'radio',
            qNumber: 'Q15',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش فيك السرطان ولا كان فيك السرطان؟',

        input: {
            type: 'radio',
            qNumber: 'Q16',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش عندك الضيقة ؟ او متبع مع شي طبيب ديال الرية',

        input: {
            type: 'radio',
            qNumber: 'Q17',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش كدير دياليز؟',

        input: {
            type: 'radio',
            qNumber: 'Q18',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش عندك إلتهاب فالكبد ؟',

        input: {
            type: 'radio',
            qNumber: 'Q19',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش حاملة ؟',

        input: {
            type: 'radio',
            qNumber: 'Q20',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }, {
                text: 'راجل',
                icon: 'fa-male'

            }]
        }
    }, {
        question: 'واش عندك شي مرض تينقص لك المناعة ديالك ؟',

        input: {
            type: 'radio',
            qNumber: 'Q21',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش تتاخد شي دواء تينقص لك المناعة ديالك ؟ بحال: الكورتيكوستيرويدات ، الميثوتريكسات ، السيكلوسبورين ، تاكروليموس ، الآزوثيوبرين ، سيكلوفوسفاميد (كاين ادوية اخرى من غير هادو).',

        input: {
            type: 'radio',
            qNumber: 'Q22',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }

]