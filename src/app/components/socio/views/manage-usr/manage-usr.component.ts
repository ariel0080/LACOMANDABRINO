import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { User } from "src/app/models/user";
import { TargetMovimiento, TipoMovimiento } from "src/app/models/logging";
import { map } from "rxjs/operators";
import { UserService } from "src/app/services/firebase/user.service";
import { FileService } from "src/app/services/firestorage/file.service";
import { AuthService } from "src/app/services/authentication/auth.service";
import { LoggingService } from "src/app/services/firebase/logging.service";
import { ToastrService } from "ngx-toastr";
import { CommonHelper } from 'src/app/classes/helpers/common-helper';

@Component({
  selector: "app-manage-usr",
  templateUrl: "./manage-usr.component.html",
  styleUrls: ["./manage-usr.component.scss"]
})
export class ManageUsrComponent implements OnInit {
  public users: AngularFirestoreCollection<User>;
  public showingUsers = null;
  public showingUsersRole: User[];
  public userForm: FormGroup;
  public onReset: Subject<void> = new Subject<void>();
  public file: File = null;
  public usuarioSeleccionado: User;
  public haySeleccionado: boolean;
  public role: string;
  public busqueda: string;

  // tslint:disable-next-line: max-line-length
  constructor(
    private userService: UserService,
    private fileService: FileService,
    private authService: AuthService,
    private movimientoService: LoggingService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userLastname: new FormControl(null, [Validators.required]),
      userMail: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null),
      userImage: new FormControl("", [Validators.required])
    });

    this.users = this.userService.GetAll2();
    this.haySeleccionado = false;
    this.usuarioSeleccionado = null;

    this.ClearFilters();
  }

  public addUser(): void {
    let user: User;

    this.userService
      .buscarEmail(this.userForm.value.userMail)
      .then(resultado => {
        if (resultado) {
          this.toastr.error("Email duplicado");
          this.Cancel();
        } else if (!resultado) {
          user = User.CreateUserFromAdmin(
            this.userForm.value.userName,
            this.userForm.value.userLastname,
            this.userForm.value.userMail,
            this.userForm.value.userRole
          );
          this.userService.persistirUsuario(user, this.file).then(value => {
            if (value) {
              this.Cancel();
            }
            this.authService.GetCurrentUser().then(usr => {
              let mensaje: string = `El usuario ${usr.email} dió de alta el usuario ${user.email}`;
              this.movimientoService.persistirMovimiento(
                usr,
                TargetMovimiento.usuario,
                TipoMovimiento.alta,
                mensaje
              );
            });
          });
        }
      });
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

  public changeState(uid: string, state: string) {
    this.userService.GetUserByID(uid).then(usuarioMod => {
      if (state == "habilitado") {
        this.userService.updateState(uid, "deshabilitado");
        this.authService.GetCurrentUser().then(user => {
          let mensaje = `El usuario ${user.email} cambio el estado a deshabilitado  del usuario ${usuarioMod.email}`;
          this.movimientoService.persistirMovimiento(
            user,
            TargetMovimiento.usuario,
            TipoMovimiento.deshabilitacion,
            mensaje
          );
        });
      }
      if (state === "deshabilitado") {
        this.userService.updateState(uid, "habilitado");
        this.authService.GetCurrentUser().then(user => {
          let mensaje = `El usuario ${user.email} cambio el estado a habilitado  del usuario ${usuarioMod.email}`;
          this.movimientoService.persistirMovimiento(
            user,
            TargetMovimiento.usuario,
            TipoMovimiento.habilitacion,
            mensaje
          );
        });
      }
    });
  }

  public deleteUser(uid: string) {
    this.userService.GetUserByID(uid).then(usuarioMod => {
      this.userService.delete(uid);
      this.authService.GetCurrentUser().then(user => {
        let mensaje = `El usuario ${user.email} dio de baja al usuario ${usuarioMod.email}`;
        this.movimientoService.persistirMovimiento(
          user,
          TargetMovimiento.usuario,
          TipoMovimiento.borrado,
          mensaje
        );
      });
    });
  }

  public editarUsuario(usuario: User) {
    this.usuarioSeleccionado = usuario;
    this.haySeleccionado = true;

    this.userForm.controls["userName"].setValue(usuario.name);
    this.userForm.controls["userLastname"].setValue(usuario.lastname);
    this.userForm.controls["userMail"].setValue(usuario.email);
    this.userForm.controls["userRole"].setValue(usuario.role);
    
  }

  public updateUser() {
    let user: User;

    user = User.CreateUserFromAdmin(
      this.userForm.value.userName,
      this.userForm.value.userLastname,
      this.userForm.value.userMail,
      this.userForm.value.userRole
    );

    this.userService.actualizarUsuarioFoto(user, this.file);

    }
    
     /*
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXX",this.usuarioSeleccionado);
        let name = CommonHelper.GenerateProfileImageName(this.usuarioSeleccionado);
        this.fileService
      .subirFotoUsuarios(this.file,this.usuarioSeleccionado.id)
      .then(() => {
        setTimeout(() => {
          this.ChangeProfilePic(name);
        }, 1000);
      })
      .catch(() =>
        this.toastr.error("Se ha producido un error al cargar la imagen.")
      );
      
      
     
      
      //final


    let rol = this.usuarioSeleccionado.role;
   

    this.usuarioSeleccionado.name = this.userForm.value.userName;
    this.usuarioSeleccionado.lastname = this.userForm.value.userLastname;
    this.usuarioSeleccionado.email = this.userForm.value.userMail;
    this.usuarioSeleccionado.role = this.userForm.value.userRole;
    console.log("culo");
    this.userService
      .updateUser(this.usuarioSeleccionado, this.file)
      .then(() => {
        
        if (rol !== this.usuarioSeleccionado.role) {
          this.userService.SetRole(
            this.usuarioSeleccionado.email,
            this.usuarioSeleccionado.role
          );
        }
      


        this.authService
          .GetCurrentUser()
          .then(usr => {
            let mensaje: string = `El usuario ${usr.email} dió de modificó el usuario ${this.usuarioSeleccionado.email}`;
            this.movimientoService.persistirMovimiento(
              usr,
              TargetMovimiento.usuario,
              TipoMovimiento.alta,
              mensaje
            );
          })
          .then(() => {
            this.Cancel();
          });
      });
  }*/

  // ##### FILTER FUNCTIONS #####

  public Filter(type: string): void {
    this.showingUsers = this.users.valueChanges().pipe(
      map(users => {
        return users.filter(element => {
          element = Object.assign(new User(), element);

          if (type === 'habilitados' || type === 'suspendidos') {
            console.log(type);
            if (type === 'suspendidos' && element.state === 'deshabilitado') {
              return element;
            } else {
              if (type === 'habilitados' && element.state === 'habilitado') {
                return element;
              }
            }
          } else {
            if (element.role === type) { return element; }
          }
        });
      })
    );
  }

  public search() {
    this.showingUsers = this.users.valueChanges().pipe(
      map(usuarios => {
        return usuarios.filter(res => {
          res = Object.assign(new User(), res);
          console.log(res.state);
          if (
            res.name.includes(this.busqueda) ||
            res.email.includes(this.busqueda) ||
            this.busqueda == null
          ) {
            if (!res.deleted) {
              return res;
            }
          }
        });
      })
    );
  }

  public Cancel(): void {
    this.userForm.reset();
    this.onReset.next();
    this.haySeleccionado = false;
    this.usuarioSeleccionado = null;
  }

  public ClearFilters(): void {
    this.search();
  }

  private ChangeProfilePic(imgName: string): void {
    this.fileService.GetImageURL(imgName).then(img => {
      this.userService.ModifyProfileImage(this.usuarioSeleccionado.email, img).then(() => {
        this.toastr.success("Imagen cargada con éxito.");
        setTimeout(() => {
          //location.reload();
          location.assign("http://localhost:4200/");
        }, 1000);
      });
    });
  }

 
}
