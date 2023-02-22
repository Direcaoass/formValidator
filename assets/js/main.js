class CheckForm {
    constructor() {
        this.fields = document.querySelectorAll('.input');
        this.pass = document.getElementById('Senha');
        this.form = document.querySelector('.form');
        this.valid = true;
        this.SendForm();
    }

    CheckEmpty() {
        this.fields.forEach(element => {

            if (!element.value) {
                for (const label of element.labels) {
                    const text = `Campo ${label.textContent} não pode estar vazio`
                    this.CreateAlert(element, text)
                    this.valid = false;
                }
            }
        });
    };

    CheckCPF() {
        const CPF = document.getElementById('CPF');
        const CPFchecker = new ValidaCPF(CPF.value);
           if (!CPFchecker.valida()) { 
            const text = 'CPF inválido';
            this.CreateAlert(CPF, text);
            this.valid = false;
        }
    }

    CheckUserName() {
        const user = document.getElementById('Usuário');
        if (user.value.length < 3 || user.value.length > 12) {
            const text = 'Usuário deve conter entre 3 e 12 caracteres';
            this.CreateAlert(user, text)
            this.valid = false;
        }
        if (!user.value.match(/^[a-zA-Z0-9]+$/g)) {
            const text = 'Usuário deve conter apenas letras e/ou números';
            this.CreateAlert(user, text)
            this.valid = false;
        }
    }
    CheckPassword() {
        if (this.pass.value.length < 6 || this.pass.value.length > 12) {
            const text = 'Senha deve conter entre 6 e 12 caracteres'
            this.CreateAlert(this.pass, text)
            this.valid = false;
        }
    }

    CheckPasswordRepeat() {
        const passrepeat = document.getElementById('RepetirSenha');
        if (passrepeat.value != this.pass.value) {
            const text = 'Repetir senha deve ser igual a Senha';
            this.CreateAlert(passrepeat, text);
            this.valid = false;
        }
    }

    CreateAlert(element, text) {

        const msg = document.createElement('div')
        msg.className = ('error');
        msg.innerText = text;
        element.insertAdjacentElement('afterend', msg)
    }

    FinalCheck() {
        let errorClass = document.querySelectorAll('.error');
        errorClass.forEach(e => { e.remove() });
        this.CheckEmpty();
        this.CheckUserName();
        this.CheckPassword();
        this.CheckPasswordRepeat();
        this.CheckCPF();  
    }

    SendForm() {
        document.addEventListener('submit', e => {
            e.preventDefault();
            this.FinalCheck();
            if (this.valid) {
                alert('Formulário enviado.');
                this.form.submit();
                
            }
        });
    }
}

const verify = new CheckForm();












