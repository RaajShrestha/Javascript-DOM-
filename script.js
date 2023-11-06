const password = document.querySelector("#password");
const eyeicon = document.querySelector("#eyeicon");

        eyeicon.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("fa-eye");
        });