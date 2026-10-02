import sharp from "sharp";

await sharp("imagens/ong.png")
    .webp({ quality: 80 })
    .toFile("imagens/ong.webp");

console.log("Imagem otimizada com sucesso.");