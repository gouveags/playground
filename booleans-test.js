let mediaType = "image"
console.log(mediaType === "image" && "safe-image" || mediaType);
mediaType = null;
console.log(mediaType === "image" && "safe-image" || mediaType);
mediaType = undefined;
console.log(mediaType === "image" && "safe-image" || mediaType);
mediaType = "";
console.log(mediaType === "image" && "safe-image" || mediaType);
mediaType = false;
console.log(mediaType === "image" && "safe-image" || mediaType);
mediaType = "src";
console.log(mediaType === "image" && "safe-image" || mediaType);
