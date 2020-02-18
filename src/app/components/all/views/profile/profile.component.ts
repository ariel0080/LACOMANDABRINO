import { Component, OnInit, ɵConsole } from "@angular/core";
import { FileService } from "src/app/services/firestorage/file.service";
import { AuthService } from "src/app/services/authentication/auth.service";
import { User } from "src/app/models/user";
import { CommonHelper } from "src/app/classes/helpers/common-helper";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/services/firebase/user.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoggingService } from 'src/app/services/firebase/logging.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public user: User;
  public isAdmin: boolean = false;
  public isLoaded: boolean = false;
  public selectedFile: File = null;
  public listaUsuarios = new Array<string>();
  public UpdateForm: FormGroup;
  public usuario: string = "none";
  public e: string;
  constructor(
    private userService: UserService,
    private fileService: FileService,
    private authService: AuthService,
    private toastr: ToastrService,
    private movimientoService: LoggingService
  ) {
    this.userService.GetAll_InArray().then(usuarios => {
      usuarios.forEach(element => {
        this.listaUsuarios.push(element.email);
      });
    });
  }

  ngOnInit() {
    this.authService.GetCurrentUser().then(usr => {
      this.user = usr;
      if (this.user.email === "socio@gmail.com") {
        this.isAdmin = true;
      }
    });

    this.UpdateForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(null, [Validators.required])
    });
  }

  public OnFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.isLoaded = true;
    this.toastr.success("Seleccionaste el archivo " + this.selectedFile.name);
  }

  public Upload(): void {
    let name = CommonHelper.GenerateProfileImageName(this.user);
    console.log(name);
    this.fileService
      .Upload(name, this.selectedFile)
      .then(() => {
        setTimeout(() => {
          this.ChangeProfilePic(name);
        }, 1000);
      })
      .catch(() =>
        this.toastr.error("Se ha producido un error al cargar la imagen.")
      );
  }

  completarUsuario($event) {
    console.log("SI!", $event);
    this.userService.GetAll_InArray().then(u => {
      u.forEach(e => {
        if (e.email === $event) {
          this.UpdateForm.get("nombre").setValue(e.name);
          this.e = e.email;
          this.UpdateForm.get("apellido").setValue(e.lastname);
        }
      });
    });
  }

  public onSubmit() {
    this.userService.actualizarUsuario(
      this.e,
      this.UpdateForm.value.nombre,
      this.UpdateForm.value.apellido
    );
    this.vaciarForm();
  }

  public vaciarForm() {
    this.UpdateForm.get("nombre").setValue("");
    this.UpdateForm.get("apellido").setValue("");
  }

  private ChangeProfilePic(imgName: string): void {
    this.fileService.GetImageURL(imgName).then(img => {
      this.userService.ModifyProfileImage(this.user.email, img).then(() => {
        this.toastr.success("Imagen cargada con éxito.");
        setTimeout(() => {
          //location.reload();
          location.assign("http://localhost:4200/");
        }, 1000);
      });
    });
  }
}
