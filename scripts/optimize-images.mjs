import { readdir, mkdir } from 'node:fs/promises'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const sourceRoot = 'public'
const outputRoot = join(sourceRoot, 'optimized')
const categories = [
  'cover diaporamara',
  'defiler',
  'shoothing',
  'concert',
  'distribution ndogou',
  'mariage',
]
const supported = new Set(['.jpg', '.jpeg', '.png', '.webp'])

await mkdir(outputRoot, { recursive: true })

await sharp(join(sourceRoot, 'Fichier 1.png'))
  .extract({ left: 0, top: 0, width: 290, height: 204 })
  .resize({ width: 420, height: 420, fit: 'contain' })
  .extend({ top: 46, bottom: 46, left: 46, right: 46, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(join(sourceRoot, 'favicon.png'))

let converted = 0
for (const category of categories) {
  const sourceDir = join(sourceRoot, category)
  const outputDir = join(outputRoot, category)
  await mkdir(outputDir, { recursive: true })

  const files = await readdir(sourceDir)
  for (const file of files) {
    const extension = parse(file).ext.toLowerCase()
    if (!supported.has(extension)) continue

    const output = join(outputDir, `${parse(file).name}.webp`)
    await sharp(join(sourceDir, file))
      .rotate()
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 76, effort: 4 })
      .toFile(output)
    converted += 1
  }
}

const aboutDir = join(outputRoot, 'about')
await mkdir(aboutDir, { recursive: true })
for (const file of ['image1.jpeg', 'image2.jpeg', 'image3.jpeg']) {
  await sharp(join(sourceRoot, file))
    .rotate()
    .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 78, effort: 4 })
    .toFile(join(aboutDir, `${parse(file).name}.webp`))
  converted += 1
}

console.log(`${converted} images optimisées dans ${outputRoot}`)
