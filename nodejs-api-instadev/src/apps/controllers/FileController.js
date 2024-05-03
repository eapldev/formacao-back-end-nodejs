const fsp = require("fs/promises");
const B2 = require("backblaze-b2");

const b2 = new B2({
  applicationKeyId: "460f4e93da88",
  applicationKey: "002643ee0ebc92a6ac0f45c909b0883428dd23727e",
});

const unlinkAsync = fsp.unlink;

class FileController {
  async upload(req, res) {
    const { filename, path } = req.file;

    try {
      const file = await fsp.readFile(`uploads/${filename}`, (err, data) => {
        if (err) {
          throw err;
        }

        return data;
      });

      await b2.authorize();

      const {
        data: { uploadUrl, authorizationToken },
      } = await b2.getUploadUrl({
        bucketId: "c4e690dfa41e39b38dfa0818",
      });

      const { data } = await b2.uploadFile({
        uploadUrl: uploadUrl,
        uploadAuthToken: authorizationToken,
        fileName: filename,
        data: file,
      });

      await unlinkAsync(path);

      return res.send({
        url: `https://f002.backblazeb2.com/file/bucket-instadev/${data.fileName}`,
      });
    } catch (error) {
      return res.status(400).send({ message: "Failed to upload" });
    }
  }
}

module.exports = new FileController();
