import multer from "multer";
import path from "node:path";
import crypto from "node:crypto";

//Storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "src/uploads/");
  },
  filename: (_req, file, cb) => {
    const fileName =
      crypto.randomUUid().toString() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

//Limits

const maxMb = 20;

const limits = { fileSize: 1024 * 1024 * maxMb };

//Filters

const fileFilter = (_req, file, cb) => {
  const fileTypes = /jpg|jpeg|png|gif|webp/;

  const allowExtName = fileTypes.test(path.extname(file.originalname));


  if(!allowExtName || ) {
    return cb(new Error("Solo se permiten imagenes"))
  }

  return cb(null, true)
};

export const upload = multer({
    storage,
    fileFilter,
    limits
})
