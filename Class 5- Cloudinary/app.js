const imageBtns = document.getElementById("upload_widget");

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "ujahx7c0",
    uploadPreset: "SMITBatch23",
  },
  (error, result) => {
    if (error) {
      console.error("Upload failed:", error);
      return;
    }

    if (result && result.event === "success") {
      console.log("Upload successful!");

      const imageUrl = result.info.secure_url;

      console.log("Image URL:", imageUrl);
    }
  },
);

imageBtns.addEventListener("click", () => {
  myWidget.open();
});
