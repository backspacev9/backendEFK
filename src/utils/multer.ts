import multer from "multer";

multer({
  storage: multer.memoryStorage(),
  // fileFilter: (req, file, cb) => {
  //   // The function should call `cb` with a boolean
  //   // to indicate if the file should be accepted

  //   if (!file.mimetype.match(/png||jpeg||jpg||gif$i/)) {
  //     // You can always pass an error if something goes wrong:
  //
  //     return;
  //   }

  //   // To accept the file pass `true`, like so:
  //   cb(null, true);
  // },
});

export default multer;
