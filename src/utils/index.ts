// @ts-ignore
import Trianglify from "trianglify/dist/trianglify.bundle.js";

export default {
  getTrianglifyImage: (colors: Array<string>) => {
    return `data:image/svg+xml;base64,${window.btoa(
      new XMLSerializer().serializeToString(
        Trianglify({
          cellSize: 100,
          xColors: colors,
        }).toSVG(),
      ),
    )}`;
  },
};
