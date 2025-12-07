
// ----------------- Compatibility calculation -----------------
function calculateCompatibility(name1, name2) {
  const combined = (name1 + name2).toLowerCase().split('').sort().join('');
  let percenFull = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    percenFull += (char * (i + 1));
  }
  return percenFull % 101;
}

function handleLoveTest() {
  const n1 = document.getElementById("name1").value.trim();
  const n2 = document.getElementById("name2").value.trim();
  if (!n1 || !n2) { alert("Írd be mindkét nevet!"); return; }

  const percentage = calculateCompatibility(n1, n2);
  document.getElementById("result-percentage").textContent = percentage + '%';
  document.getElementById("heart-fill").style.height = percentage + '%';

  let msg = "";
  if (percentage < 30) msg = "Csak barátok... egyelőre.";
  else if (percentage < 60) msg = "Van remény!";
  else if (percentage < 85) msg = "Szép páros lennétek!";
  else msg = "Ez szerelem első látásra! 🔥";

  document.getElementById("result-message").textContent = msg;

  const li = document.createElement('li');
  li.innerHTML = `<strong>${n1} + ${n2}</strong>: ${percentage}%`;
  document.getElementById("history-list").prepend(li);
}

function showForm() {
  
  const form = document.getElementById("subscription-modal");
  form.style.display = "block"
}
// Űrlap

const planButtons = document.querySelectorAll(".plan-btn");
  planButtons.forEach(button => {
    button.addEventListener('click', showForm);
  });


// ----------------- Init listeners -----------------

const lovetestgomb = document.getElementById("run-love-test");
if (lovetestgomb) {
  lovetestgomb.addEventListener('click', handleLoveTest);
}

//Form Validáló
    const form = document.getElementById('subscription-form');
    
    if (form) {
    const nameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const termsInput = document.getElementById('terms');

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorPass = document.getElementById('error-pass');
    const errorAge = document.getElementById('error-age');
    const errorTerms = document.getElementById('error-terms');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        const errors = document.querySelectorAll('.error-msg');
        errors.forEach(el => el.textContent = '');
        const inputs = document.querySelectorAll('input','select');
        inputs.forEach(el => el.classList.remove('input-error'));

        if (nameInput.value.trim() === "") {
            errorName.textContent = "A név megadása kötelező!";
            nameInput.classList.add('input-error');
            isValid = false;
        }

        if (!emailInput.value.includes("@")) {
            errorEmail.textContent = "Az e-mail megadása kötelező.";
            emailInput.classList.add('input-error');
            isValid = false;
        }

        if (passInput.value.length < 8) {
            errorPass.textContent = "A jelszó túl rövid (min. 8 karakter).";
            passInput.classList.add('input-error');
            isValid = false;
        }

        if (Number(ageInput.value) < 18) {
            errorAge.textContent = "Csak 18 éven felüliek regisztrálhatnak.";
            ageInput.classList.add('input-error');
            isValid = false;
        }

        if (!termsInput.checked) {
            errorTerms.textContent = "A regisztrációhoz el kell fogadnod a feltételeket.";
            isValid = false;
        }
        
        if (!isValid) {
            event.preventDefault(); // Megállítjuk a küldést, ha hiba van
            console.log("Hiba az űrlapon!");
        } else {
            console.log("Minden adat rendben, küldés...");
        }
    });
    }


