const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  let products = [
  {
    "id": 1,
    "name": "Matte Lipstick",
    "name_mark": "Maybelline",
    "urlImage": "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/1000x1000-lipstick-matte.jpg?v=1654039207",
    "description": "Long-lasting matte lipstick for bold lips.",
    "type": "lips",
    "price": 89,
    "colors": [
      {
        "name": "red",
        "quantite": 15
      },
      {
        "name": "nude",
        "quantite": 8
      }
    ]
  },
  {
    "id": 2,
    "name": "Liquid Foundation",
    "name_mark": "Maybelline",
    "urlImage": "https://www.maybelline.com/-/media/project/loreal/brand-sites/mny/americas/us/products/face-makeup/foundation/fit-me-matte-poreless-foundation-packshot.jpg",
    "description": "Oil-free foundation with pore-blurring effect.",
    "type": "face",
    "price": 120,
    "colors": [
      {
        "name": "light beige",
        "quantite": 10
      },
      {
        "name": "natural tan",
        "quantite": 6
      }
    ]
  },
  {
    "id": 3,
    "name": "Waterproof Mascara",
    "name_mark": "L'Oréal",
    "urlImage": "https://images.ctfassets.net/4f3rgqwzdznj/5Vyyuvst4RSzQvbcVp79ta/9bbce6d5de4ad573f7783e9e7b4c6319/mascara.png",
    "description": "Volumizing waterproof mascara for bold lashes.",
    "type": "eyes",
    "price": 75,
    "colors": [
      {
        "name": "black",
        "quantite": 12
      }
    ]
  },
  {
    "id": 4,
    "name": "Cream Blush",
    "name_mark": "Rare Beauty",
    "urlImage": "https://cdn.shopify.com/s/files/1/0577/9822/3174/products/CreamBlush_1024x1024.jpg?v=1628684354",
    "description": "Soft blendable cream blush for a natural glow.",
    "type": "face",
    "price": 95,
    "colors": [
      {
        "name": "peach",
        "quantite": 9
      },
      {
        "name": "rose",
        "quantite": 4
      }
    ]
  },
  {
    "id": 5,
    "name": "Nude Eyeshadow Palette",
    "name_mark": "Huda Beauty",
    "urlImage": "https://cdn.shopify.com/s/files/1/0054/0634/2322/products/eyeshadow-palette.jpg?v=1679683954",
    "description": "12-shade nude eyeshadow palette.",
    "type": "eyes",
    "price": 145,
    "colors": [
      {
        "name": "brown",
        "quantite": 10
      },
      {
        "name": "gold",
        "quantite": 5
      }
    ]
  },
  {
    "id": 6,
    "name": "Liquid Eyeliner",
    "name_mark": "NYX",
    "urlImage": "https://m.media-amazon.com/images/I/61yyHZGp3bL._AC_UF1000,1000_QL80_.jpg",
    "description": "Precision-tip waterproof eyeliner.",
    "type": "eyes",
    "price": 60,
    "colors": [
      {
        "name": "black",
        "quantite": 20
      }
    ]
  },
  {
    "id": 7,
    "name": "Highlighter Stick",
    "name_mark": "Fenty Beauty",
    "urlImage": "https://m.media-amazon.com/images/I/61Bo9P0BPuL._AC_SX679_.jpg",
    "description": "Shimmer stick for cheek and brow highlight.",
    "type": "face",
    "price": 85,
    "colors": [
      {
        "name": "champagne",
        "quantite": 7
      },
      {
        "name": "golden",
        "quantite": 6
      }
    ]
  },
  {
    "id": 8,
    "name": "Matte Lip Gloss",
    "name_mark": "NYX",
    "urlImage": "https://cdn.shopify.com/s/files/1/0661/9630/7117/products/shine_lip_gloss_1_720x.jpg?v=1665010175",
    "description": "Velvety matte finish lip gloss.",
    "type": "lips",
    "price": 70,
    "colors": [
      {
        "name": "pink",
        "quantite": 10
      },
      {
        "name": "mauve",
        "quantite": 3
      }
    ]
  },
  {
    "id": 9,
    "name": "Compact Powder",
    "name_mark": "Maybelline",
    "urlImage": "https://m.media-amazon.com/images/I/61Z7Q9zPz1L._AC_UF1000,1000_QL80_.jpg",
    "description": "Lightweight setting powder for daily use.",
    "type": "face",
    "price": 110,
    "colors": [
      {
        "name": "natural",
        "quantite": 11
      }
    ]
  },
  {
    "id": 10,
    "name": "Lip Liner Pencil",
    "name_mark": "Revlon",
    "urlImage": "https://m.media-amazon.com/images/I/61svZTjKvcL._SL1500_.jpg",
    "description": "Smooth, non-smudge lip liner.",
    "type": "lips",
    "price": 40,
    "colors": [
      {
        "name": "plum",
        "quantite": 4
      },
      {
        "name": "rosewood",
        "quantite": 6
      }
    ]

  },
  {
    "id": 11,
    "name": "Makeup Product 11",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_11.jpg",
    "description": "Sample description for makeup product 11.",
    "type": "lips",
    "price": 72,
    "colors": [
      { "name": "colorA", "quantite": 16 },
      { "name": "colorB", "quantite": 13 }
    ]
  },
  {
    "id": 12,
    "name": "Makeup Product 12",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_12.jpg",
    "description": "Sample description for makeup product 12.",
    "type": "face",
    "price": 74,
    "colors": [
      { "name": "colorA", "quantite": 17 },
      { "name": "colorB", "quantite": 14 }
    ]
  },
  {
    "id": 13,
    "name": "Makeup Product 13",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_13.jpg",
    "description": "Sample description for makeup product 13.",
    "type": "eyes",
    "price": 76,
    "colors": [
      { "name": "colorA", "quantite": 18 },
      { "name": "colorB", "quantite": 15 }
    ]
  },
  {
    "id": 14,
    "name": "Makeup Product 14",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_14.jpg",
    "description": "Sample description for makeup product 14.",
    "type": "lips",
    "price": 78,
    "colors": [
      { "name": "colorA", "quantite": 19 },
      { "name": "colorB", "quantite": 16 }
    ]
  },
  {
    "id": 15,
    "name": "Makeup Product 15",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_15.jpg",
    "description": "Sample description for makeup product 15.",
    "type": "face",
    "price": 80,
    "colors": [
      { "name": "colorA", "quantite": 20 },
      { "name": "colorB", "quantite": 17 }
    ]
  },
  {
    "id": 16,
    "name": "Makeup Product 16",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_16.jpg",
    "description": "Sample description for makeup product 16.",
    "type": "eyes",
    "price": 82,
    "colors": [
      { "name": "colorA", "quantite": 21 },
      { "name": "colorB", "quantite": 18 }
    ]
  },
  {
    "id": 17,
    "name": "Makeup Product 17",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_17.jpg",
    "description": "Sample description for makeup product 17.",
    "type": "lips",
    "price": 84,
    "colors": [
      { "name": "colorA", "quantite": 22 },
      { "name": "colorB", "quantite": 19 }
    ]
  },
  {
    "id": 18,
    "name": "Makeup Product 18",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_18.jpg",
    "description": "Sample description for makeup product 18.",
    "type": "face",
    "price": 86,
    "colors": [
      { "name": "colorA", "quantite": 23 },
      { "name": "colorB", "quantite": 20 }
    ]
  },
  {
    "id": 19,
    "name": "Makeup Product 19",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_19.jpg",
    "description": "Sample description for makeup product 19.",
    "type": "eyes",
    "price": 88,
    "colors": [
      { "name": "colorA", "quantite": 24 },
      { "name": "colorB", "quantite": 21 }
    ]
  },
  {
    "id": 20,
    "name": "Makeup Product 20",
    "name_mark": "Generic",
    "urlImage": "assets/images/product_20.jpg",
    "description": "Sample description for makeup product 20.",
    "type": "lips",
    "price": 90,
    "colors": [
      { "name": "colorA", "quantite": 25 },
      { "name": "colorB", "quantite": 22 }
    ]
  }
]; res.send(products)});

app.listen(port, () => {
  console.log(`API FATIMA  http://localhost:${port}`);
});
