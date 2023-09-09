function handleTabClick() {
  const tabBtn1 = document.querySelector("#tab-btn1");
  const tabBtn2 = document.querySelector("#tab-btn2");
  const widgetsContainer = document.querySelector("#widgets-container");
  const settingsContainer = document.querySelector("#settings-container");

  tabBtn1.addEventListener("click", () => {
    tabBtn1.classList.toggle("tab-btn-clicked");
    tabBtn2.classList.remove("tab-btn-clicked");

    widgetsContainer.classList.add("widgets-container");
    widgetsContainer.classList.remove("container-hidden");

    settingsContainer.classList.add("container-hidden");
    settingsContainer.classList.remove("settings-container");
  });
  tabBtn2.addEventListener("click", () => {
    tabBtn2.classList.add("tab-btn-clicked");
    tabBtn1.classList.remove("tab-btn-clicked");

    widgetsContainer.classList.add("container-hidden");
    widgetsContainer.classList.remove("widgets-container");

    settingsContainer.classList.remove("container-hidden");
    settingsContainer.classList.add("settings-container");
  });
}

function handlePlusClick(){
  const plusBtn = document.querySelector("#plus-btn")
  const columnContainer = document.querySelector('#column-container')
  plusBtn.addEventListener('click', ()=>{
    plusBtn.classList.remove('plusBtn')
    plusBtn.classList.add('plus-btn-hidden')
    columnContainer.classList.remove('column-container-hidden')
    columnContainer.classList.add('column-container')
  })
  columnContainer.addEventListener('click', ()=>{
    plusBtn.classList.add('plusBtn')
    plusBtn.classList.remove('plus-btn-hidden')
    columnContainer.classList.add('column-container-hidden')
    columnContainer.classList.remove('column-container')
  })

}

function handleEmailModal(){
  const emailBtn = document.querySelector("#email-btn")
  const modal = document.querySelector('#email-modal')
  emailBtn.addEventListener('click', ()=>{
    modal.classList.remove("email-hidden")
    modal.classList.add('email-modal')
  })
  const closeBtn = document.querySelector('#close-modal')
  closeBtn.addEventListener('click', ()=>{
    modal.classList.add("email-hidden")
    modal.classList.remove('email-modal')
  })
}

function main() {
  handleTabClick();
  handlePlusClick();
  handleEmailModal()
}
main();
