import fs from "fs";

fs.mkdirSync("dist/images", { recursive: true });

fs.writeFileSync(
  "dist/images/tidal-favorites.svg",
  `<svg width="400" height="80" xmlns="http://www.w3.org/2000/svg">
     <text x="10" y="40" font-size="16" fill="white">
       Tidal widget OK
     </text>
   </svg>`
);

console.log("SVG generado correctamente");
