const headerElement = document.querySelector("header");

const changeBackgroundHeaderColor = function() {
    headerElement.style.background = "#f5f5f5";
};

const restoreBackgroundHeaderColor = function() {
    headerElement.style.background = "#fff";
};

const showTitle = (title) => {
    alert(title);
};