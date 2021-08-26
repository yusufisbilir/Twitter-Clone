//Dom elements
const mainPage = document.querySelector('.main-page');

const loginPage = document.querySelector('.login-page');

const middleContent = document.querySelector('.middle-content');

const btnTop = document.querySelector('.btn-top');

const feedsPage = document.querySelector('.feeds-page');

const loginModal = document.querySelector('.login-modal');

const modalX = document.querySelector('.login-modal i');

const loginFormBtn = document.querySelector('.login-form-btn');

const postBtn = document.querySelector('.post-btn');

const modal = document.querySelector('.modal');

const modalWrapper = document.querySelector('.modal-wrapper');

const postModalX = document.querySelector('.modal-header i');

const modalPostBtn = document.querySelector('.modal-header button');

const modalFooterPlus = document.querySelector('.modal-footer span');

const modalInput = document.querySelector('.modal-input');

const user = document.querySelector('.user');

const sidebar = document.querySelector('.sidebar'); 

const sidebarWrapper = document.querySelector('.sidebar-wrapper');

const xBtn = document.querySelector('.sidebar-header i');

//Main page
const goToLoginPage = _ =>{
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', e=>{
    if(e.target.classList[1] === 'main-btn');
    goToLoginPage();
});

btnTop.addEventListener('click', e=>{
    const inputUserInfo = document.querySelector('.user-info');

    const inputPassword = document.querySelector('.password');

    if (inputUserInfo.value !=="" && inputPassword.value !== "") {
        mainPage.style.display = "none ";
        feedsPage.style.display = "block"
    }else{
        goToLoginPage();
        loginModal.style.display = "block"
    }
});


//login page
modalX.addEventListener("click", e=>{
    loginModal.style.display = "none"
});

loginFormBtn.addEventListener("click", e=>{
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if (loginUserInfo.value !== "" && loginPassword.value !=="") {
        loginPage.style.display = "none";
        feedsPage.style.display = "block";
    }else{
        loginModal.style.display = "block";
    }
});

//News feed page
    //Post modal
postBtn.addEventListener('click', ()=>{
    modalWrapper.style.opacity = "1";
    modalWrapper.style.visibility = "visible";
    modal.style.display = 'block';
});

const changeOpacity =  (x)=>{
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
};

postModalX.addEventListener('click',e=>{
    modal.style.display = 'none';
    modalWrapper.style.opacity = "0";
    modalWrapper.style.visibility = "hidden";

    if (modalInput.value !== "") {
        modalInput.value = "";
        changeOpacity(0.5)
    };
});

modalInput.addEventListener('keypress',(e)=>{
    if (e.target.value !=="") {
        changeOpacity(1);
    }
});

modalInput.addEventListener('blur', (e)=>{
    if (e.target.value ==="") {
        changeOpacity(0.5)
    }
});

//Sidebar
user.addEventListener('click',e=>{
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
});

xBtn.addEventListener('click', e=>{
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})