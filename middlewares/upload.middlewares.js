import { upload } from "../settings/upload.config";

export const uploadImage = (req, res, next) => {
  const uploadSingle = upload.single("image");

  uploadSingle(req, res, (error) => {
    if (error || !req.file) {
      console.log(error);
      return res.status(400).json({ message: "Error al subir el archivo" });
    }
  });

  req.body["image"] = req.file.filename;
};
