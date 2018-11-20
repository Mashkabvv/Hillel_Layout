// function getTime() {
//     const hours = document.querySelector(`#hours`);
//     const minutes = document.querySelector(`#minutes`);
//     const seconds = document.querySelector(`#seconds`);

//     var date = new Date(); 
//     var gethours = date.getHours();
//     var getminutes = date.getMinutes();
//     var getseconds = date.getSeconds();

//     function setNul(seconds) {
//         return (seconds < 10)
//         ? '0' + seconds
//         : seconds;
//     }

//     hours.innerHTML = setNul(gethours);
//     minutes.innerHTML = setNul(getminutes);
//     seconds.innerHTML = setNul(getseconds);
    
//     setTimeout(getTime, 1000);
// };
// getTime();

function getTime() {
    const hours = document.querySelector(`#hours`);
    const minutes = document.querySelector(`#minutes`);
    const seconds = document.querySelector(`#seconds`);

    var date = new Date(); 
    var gethours = date.getHours();
    var getminutes = date.getMinutes();
    var getseconds = date.getSeconds();

    function setNul(seconds) {
        return (seconds < 10)
        ? '0' + seconds
        : seconds;
    }

    hours.innerHTML = setNul(gethours);
    minutes.innerHTML = setNul(getminutes);
    seconds.innerHTML = setNul(getseconds);
    
    setTimeout(getTime, 1000);
};
getTime();