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
            nextBtn.innerText = 'Terminer le test'

        } else {
            nextBtn.innerText = 'Suivant'
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
        nextBtn.innerText = 'Terminer le test'

    } else {
        nextBtn.innerText = 'Suivant'
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
        question: 'واش كانت فيك السخانة في 10 ايام لي فاتت ( التبوريشة ، العرق ) ؟
        '

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Quelle est votre température corporelle ?',

        input: {
            type: 'number',
            name: 'degrés',
            min: 34,
            max: 42
        }
    }, {
        question: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Ces derniers jours, avez-vous un mal de gorge ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Actuellement, comment vous vous sentez ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Bien',
                icon: ' far fa-laugh'
            }, {
                text: 'Assez bien',
                icon: ' far fa-smile'
            }, {
                text: 'Fatigué(e)',
                icon: ' far fa-frown'
            }, {
                text: 'Très fatigué',
                icon: 'far fa-dizzy'
            }]
        }
    }, {
        question: 'Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.',

        input: {
            type: 'number',
            name: 'ans',
            min: 15,
            max: 110
        }
    }, {
        question: 'Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

        input: {
            type: 'number',
            name: 'kg',
            min: 20,
            max: 250
        }
    }, {
        question: 'Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.',

        input: {
            type: 'number',
            name: 'cm',
            min: 80,
            max: 250
        }
    }, {
        question: 'Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Êtes-vous diabétique ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Avez-vous ou avez-vous eu un cancer ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Avez-vous une insuffisance rénale chronique dialysée ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Avez-vous une maladie chronique du foie ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Êtes-vous enceinte ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }, {
                text: 'Homme',
                icon: 'fa-male'

            }]
        }
    }, {
        question: 'Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).',

        input: {
            type: 'radio',
            answer: [{
                text: 'Oui',
                icon: 'fa-check'
            }, {
                text: 'Non',
                icon: 'fa-times'
            }]
        }
    }

]