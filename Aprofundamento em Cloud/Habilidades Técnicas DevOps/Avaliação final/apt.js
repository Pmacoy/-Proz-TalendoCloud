const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/api/entities', upload.single('coverImage'), async (req, res) => {
  const { name, type, description } = req.body;
  const file = req.file;

  const uploadParams = {
    Bucket: 'your-bucket-name',
    Key: `${Date.now()}_${file.originalname}`,
    Body: fs.createReadStream(file.path),
    ContentType: file.mimetype,
  };

  try {
    const uploadResult = await s3.upload(uploadParams).promise();
    // Salvar dados no banco com o URL da imagem
    res.json({ message: 'Entidade cadastrada com sucesso!', imageUrl: uploadResult.Location });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar entidade.', error });
  }
});
