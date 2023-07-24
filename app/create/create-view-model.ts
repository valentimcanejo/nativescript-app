import {
  Dialogs,
  Frame,
  Http,
  HttpResponse,
  ImageSource,
  ItemEventData,
  Observable,
} from "@nativescript/core";
import { PlanetService } from "~/services/planets.service";
import { HomeViewModel } from "~/feed/feed-view-model";
import * as imagePickerPlugin from "@nativescript/imagepicker";

export class CreateViewModel extends Observable {
  private selectedImage: imagePickerPlugin.ImagePickerSelection;
  constructor() {
    super();
  }

  onBackTap(args: any): void {
    Frame.goBack();
  }

  async onImagePickerTap() {
    let imagePickerObj: imagePickerPlugin.ImagePicker =
      imagePickerPlugin.create({
        mode: "single",
      });

    try {
      await imagePickerObj.authorize();
      const selection = await imagePickerObj.present();
      if (selection.length > 0) {
        this.selectedImage = selection[0];
      }
    } catch (e) {
      console.log("Error selecting image:", e);
    }
  }

  async submitForm(args: any): Promise<void> {
    const page = args.object.page;

    const campoNome = page.getViewById("nome");
    const campoDescricao = page.getViewById("descricao");

    const nome = campoNome.text;
    const descricao = campoDescricao.text;

    const imageSource = await ImageSource.fromAsset(this.selectedImage.asset);
    const base64 = imageSource.toBase64String("png");

    if (nome === "" || descricao === "") {
      Dialogs.alert({
        title: "Erro",
        message: "Dados não fornecidos",
        okButtonText: "ok",
      });
      return;
    }

    const tamanhoArray = PlanetService.getInstance().getPlanetsLength();

    try {
      await Http.request({
        url: "https://ifrn-ddm.vercel.app/api/items",
        method: "POST",

        headers: { "Content-Type": "application/json" },
        content: JSON.stringify({
          name: nome,
          description: descricao,
          imageUrl: base64,
          idNum: tamanhoArray > 0 ? tamanhoArray : 0,
        }),
      });

      const planetService = HomeViewModel.getInstance();
      await planetService.fetchPlanets();

      Frame.topmost().navigate({
        moduleName: "feed/feed-page",
      });
    } catch (e) {
      console.log(e);
    }
  }
}
