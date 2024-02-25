window.handleForm=function(form){
    const divr = document.getElementsByClassName("resultdivv")
    const data={
        orgname: form.orgname.value,
        fullname:form.fullname.value,
        workpost:form.workpost.value,
        phone:form.phone.value,
        email:form.email.value,
        address:form.address.value
    }
    const textAlign = document.querySelectorAll('input[name="font-aligment"]')
    const textAlignWorkpost = document.querySelectorAll('input[name="workpost-aligment"]')
    const font = document.querySelectorAll('input[name="font"]')
    const fontrank = document.querySelectorAll('input[name="font-rank"]')
    const opacity = document.querySelectorAll('input[name="opacity"]')
    const resultDiv=document.createElement('div')
    resultDiv.className='resultdivv'

    const firstdiv=document.createElement('div')
    firstdiv.append(data.orgname)
    firstdiv.classList.add('firstdiv')
    resultDiv.append(firstdiv)

    const seconddiv=document.createElement('div')
    seconddiv.append(data.fullname)
    seconddiv.classList.add('seconddiv')
    resultDiv.append(seconddiv)

    const thirddiv=document.createElement('div')
    thirddiv.append(data.workpost)
    thirddiv.classList.add('thirddiv')
    resultDiv.append(thirddiv)

    const fourthdiv=document.createElement('div')
    fourthdiv.append(data.phone)
    fourthdiv.classList.add('fourthdiv')
    resultDiv.append(fourthdiv)
    

    const fivthdiv=document.createElement('div')
    fivthdiv.append(data.email)
    fivthdiv.classList.add('fivthdiv')
    resultDiv.append(fivthdiv)

    const sixthdiv=document.createElement('div')
    sixthdiv.append(data.address)
    sixthdiv.classList.add('sixthdiv')
    resultDiv.append(sixthdiv)

    if (font[0].checked){
        seconddiv.style.font='normal normal bold 24px Roboto'
    }
    if (font[1].checked){
        seconddiv.style.font='normal normal bold 26px Roboto'
    }
    if (font[2].checked){
        seconddiv.style.font='normal normal bold 28px Roboto'
    }
    
    if (fontrank[0].checked){
        thirddiv.style.font='normal normal bold 14px Roboto'
    }
    if (fontrank[1].checked){
        thirddiv.style.font='normal normal bold 16px Roboto'
    }
    if (fontrank[2].checked){
        thirddiv.style.font='normal normal bold 18px Roboto'
    }

    if (textAlign[0].checked){
        seconddiv.style.alignSelf='flex-start'
    }
    if (textAlign[1].checked){
        seconddiv.style.alignSelf='center'
    }
    if (textAlign[2].checked){
        seconddiv.style.alignSelf='flex-end'
    }
    if (textAlignWorkpost[0].checked){
        thirddiv.style.alignSelf='flex-start'
    }
    if (textAlignWorkpost[1].checked){
        thirddiv.style.alignSelf='center'
    }
    if (textAlignWorkpost[2].checked){
        thirddiv.style.alignSelf='flex-end'
    }
    if (!opacity[0].checked){
        fivthdiv.style.display='none'
    }
    if (!opacity[1].checked){
        sixthdiv.style.display='none'
    }
   
    divr[0].replaceWith(resultDiv)
    
    return false
}
