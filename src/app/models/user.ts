export class User 
{
    public id: string;
    public name: string;
    public lastname: string;
    public password: string;
    public email: string;
    public role: Role;
    public image: string;
    public deleted: boolean;
    public state: string;

    constructor() 
    {
        this.name = "";
        this.lastname = "";
        this.password = "";
        this.email = "";
        this.role = Role.socio;
        this.image = 'assets/img/default-profile.png';
    }

    public static CreateUserWithParams(name: string, lastname: string,  email: string, password: string, role: Role): User
    {
        let user = new User();
        user.name = name
        user.lastname = lastname;
        user.password = password;
        user.email = email;
        user.role = role;
        user.deleted = false;
        user.state = 'habilitado';
        user.image ='https://firebasestorage.googleapis.com/v0/b/lacomanda-brino.appspot.com/o/SOCIOSOCIOS8182?alt=media&token=89b72e99-2bcf-4b05-9ac7-5a40e5ce2b1b';
        return user;
    }

    public static CreateUserFromAdmin(name: string, lastname: string,  email: string, role: Role): User
    {
        let user = new User();
        user.name = name;
        user.lastname = lastname;
        user.password = email;
        user.email = email;
        user.role = role;
        user.deleted = false;
        user.state = 'habilitado';
        return user;
    }
}

export enum Role
{
    socio = 'socio',
    mozo = 'mozo',
    cocinero = 'cocinero',
    cervecero = 'cervecero',
    bartender = 'bartender',
    cliente = 'cliente'
}
