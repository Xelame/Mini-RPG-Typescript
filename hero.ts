export class Contact {
    firstName : string = "";
    lastName : string = "";
    phoneNumber : string = "";

    constructor(){
        this.prompt();
    }

    toString() : string{
        return `${this.firstName} ${this.lastName} : ${this.phoneNumber}`;
    }

    prompt(){
        this.firstName = this.promptValue("Prénom :");
        this.lastName = this.promptValue("Nom de famille :");
        this.phoneNumber = this.promptValue("Numéro de téléphone :");
    }

    promptValue(question : string) : string {
        let value : string | null = null;
        while(value == null || value == ""){
            value = prompt(question);
            if(value == "" || value == null){
                console.error("Valeur incorrecte, veuillez réessayer.")
            }
        }
        return value;
    }
}