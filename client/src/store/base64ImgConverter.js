//Converting Image to base64 string

//Using image Url :::: returns the base64 string
export const imgURLtoBase64 = (imgUrl) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imgUrl;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.height = image.naturalHeight;
      canvas.width = image.naturalWidth;
      ctx.drawImage(image, 0, 0);
      const dataUrl = canvas.toDataURL();
      // console.log("base64:", dataUrl);
      resolve(dataUrl);
    };
  });
};

//Using image from input/local :::: returns the base64 string
export const imgFromLocalToBase64 = (imgFile) => {
  return new Promise((resolve, reject) => {
    if (imgFile) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imgFile);
      fileReader.onload = () => {
        const srcData = fileReader.result;
        // console.log("base64:", srcData);
        resolve(srcData);
      };
    } else {
      reject("File Not Provided");
    }
  });
};

//Using image from clipboard :::: returns the base64 string
export const imgFromClipboardToBase64 = (imgFile) => {
  return new Promise(async (resolve, reject) => {
    const items = await navigator.clipboard.read();
    items.forEach((item) => {
      item.types.forEach((type) => {
        if (type.startsWith("image/")) {
          return item.getType(type).then((blob) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(blob);
            fileReader.onload = () => {
              const srcData = fileReader.result;
              resolve(srcData);
            };
          });
        }
      });
    });
  });
};

// export const imgFromClipboardToBase64 = (imgFile) => {
//   return new Promise(async (resolve, reject) => {
//     const items = await navigator.clipboard.read();
//     for (var item of items) {
//       for (var type of item.types) {
//         if (type.startsWith("image/")) {
//           return item.getType(type).then((blob) => {
//             return new Promise((resolve) => {
//               const fileReader = new FileReader();
//               fileReader.onload = () => {
//                 const srcData = fileReader.result;
//                 resolve(srcData);
//               };
//               fileReader.readAsDataURL(blob);
//             });
//           });
//         }
//       }
//     }
//   });
// };
