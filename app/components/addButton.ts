import { Frame } from "@nativescript/core";

function onTap() {
  Frame.topmost().navigate({
    moduleName: "create/create-page",
    context: { planetId: 1 },
  });
}
