const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);
const matches = glob.sync(`${__dirname}/../static/uploads/**/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 1800;
const QUALITY = 70;

Promise.all(
  matches.map(async match => {
    const stream = sharp(match);
    const info = await stream.metadata();
    if (info.width < MAX_WIDTH) {
      return
    }
    console.log("Processing... ", match);

    const optimizedName = match.replace(
      /(\..+)$/,
      (match, ext) => `${ext}-optimized`
    );
    console.log(optimizedName);

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);
    return fs.rename(optimizedName, match)
  })
);
