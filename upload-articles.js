const fs = require("fs")
const path = require("path")
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3")

const client = new S3Client({
  region: "auto",
  endpoint: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
})

const bucketName = "your-r2-bucket-name"
const articlesDir = path.join(__dirname, "content", "articles")

async function uploadArticles() {
  const files = fs.readdirSync(articlesDir)

  for (const file of files) {
    const content = fs.readFileSync(path.join(articlesDir, file), "utf-8")
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: file,
      Body: content,
      ContentType: "text/markdown",
    })

    try {
      await client.send(command)
      console.log(`Uploaded ${file} successfully`)
    } catch (err) {
      console.error(`Failed to upload ${file}:`, err)
    }
  }
}

uploadArticles()

