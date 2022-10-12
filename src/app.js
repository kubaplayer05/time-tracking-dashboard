const dailyOption = document.querySelector('#daily')
const weeklyOption = document.querySelector('#weekly')
const monthlyOption = document.querySelector('#monthly')
const optionsArray = [dailyOption,weeklyOption,monthlyOption]

const currentTime = document.querySelectorAll('.card-current-time')
const previousTime = document.querySelectorAll('.card-last-time')

const previousTimeText = {
    daily: 'Yesterday - ',
    weekly: 'Last Week -',
    monthly: 'Last Month -'
}

dailyOption.addEventListener('click',() => {
    switchActiveOption(dailyOption)
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        currentTime.forEach((element,index) => {
            getCurrentTime(element,index,data,'daily')
        })

        previousTime.forEach((element,index) => {
            getPreviousTime(element,index,data,'daily')
        })

    })
    .catch(err => console.log(err))
})

weeklyOption.addEventListener('click',() => {
    switchActiveOption(weeklyOption)

    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        currentTime.forEach((element,index) => {
            getCurrentTime(element,index,data,'weekly')
        })

        previousTime.forEach((element,index) => {
            getPreviousTime(element,index,data,'weekly')
        })

    })
    .catch(err => console.log(err))
})

monthlyOption.addEventListener('click',() => {
    switchActiveOption(monthlyOption)

    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        currentTime.forEach((element,index) => {
            getCurrentTime(element,index,data,'monthly')
        })

        previousTime.forEach((element,index) => {
            getPreviousTime(element,index,data,'monthly')
        })

    })
    .catch(err => console.log(err))
})

const switchActiveOption = (option) => {
    optionsArray.forEach((el) => {
        if(el === option) {
            el.classList.add('active-time')
        } else {
            el.classList.remove('active-time')
        }
    })
}

const getCurrentTime = (element,index,data,option) => {
    const content = data[index].timeframes[option].current
    element.textContent = `${content}hrs`
}

const getPreviousTime = (element,index,data,option) => {
    const content = data[index].timeframes[option].previous
    element.textContent = `${previousTimeText[option]} ${content}hrs`
}