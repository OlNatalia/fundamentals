(() => {
    // input fields
    const nums = document.querySelectorAll("input");

    // output
    const sum = document.querySelector("#sum");
    const substr = document.querySelector("#substr");
    const mult = document.querySelector("#mult");
    const divis = document.querySelector("#divis");
    const modul = document.querySelector("#modulo");

    // calculation
    const calculate = (event) => {
        event.preventDefault();
        // console.log("event.target.value:", event.target.value);

        // sum
        const sum1 = document.querySelector("#sum1").value || 0;
        const sum2 = document.querySelector("#sum2").value || 0;
        sum.value = parseFloat(sum1) + parseFloat(sum2) || 0;

        // subtraction
        const substr1 = document.querySelector("#substr1").value || 0;
        const substr2 = document.querySelector("#substr2").value || 0;
        substr.value = parseFloat(substr1) - parseFloat(substr2) || 0;

        // multiplication
        const mult1 = document.querySelector("#mult1").value || 0;
        const mult2 = document.querySelector("#mult2").value || 0;
        mult.value = parseFloat(mult1) * parseFloat(mult2) || 0;

        // division
        const divis1 = document.querySelector("#divis1").value || 0;
        const divis2 = document.querySelector("#divis2").value || 0;
        divis.value = parseFloat(divis1) / parseFloat(divis2) || 0;

        // modulo
        const modul1 = document.querySelector("#modul1").value || 0;
        const modul2 = document.querySelector("#modul2").value || 0;
        modul.value = parseFloat(modul1) % parseFloat(modul2) || 0;

    }

    nums.forEach(elem => {
        // console.log("elem:", elem);
        elem.addEventListener("input", calculate);
    });
})();