const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
const fs = require('fs');

app.use(cors());
app.use(express.json());


let users = [];
// for save in file !!!!
const usersFile = './users.json';

// Load users from file on startup
if (fs.existsSync(usersFile)) {
  users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
}


app.get("/api/products", (req, res) => {
  let products = [
  {
    "id": 1,
    "sellerId": 17499677218211,
    "name": "SuperStay Matte Ink",
    "name_mark": "Maybelline",
    "urlImage": "assets/product/images1.png",
    "description": "Up to 16-hour wear matte liquid lipstick.",
    "type": "lips",
    "price": 99,
    "colors": [
      {
        "name": "Pioneer",
        "quantite": 14
      },
      {
        "name": "Lover",
        "quantite": 12
      }
    ]
  },
  {
    "id": 2,
    "sellerId": 17499677218211,
    "name": "Fit Me Foundation",
    "name_mark": "Maybelline",
    "urlImage": "assets/product/images2.jpg",
    "description": "Natural finish foundation with SPF 18.",
    "type": "face",
    "price": 130,
    "colors": [
      {
        "name": "120 Classic Ivory",
        "quantite": 10
      },
      {
        "name": "228 Soft Tan",
        "quantite": 8
      }
    ]
  },
  {
    "id": 3,
    "sellerId": 17499677218211,
    "name": "Voluminous Lash Paradise",
    "name_mark": "L'Or\u00e9al",
    "urlImage": "assets/product/images3.png",
    "description": "Volumizing mascara for intense lashes.",
    "type": "eyes",
    "price": 80,
    "colors": [
      {
        "name": "Blackest Black",
        "quantite": 17
      }
    ]
  },
  {
    "id": 4,
    "sellerId": 17499677218211,
    "name": "Soft Pinch Liquid Blush",
    "name_mark": "Rare Beauty",
    "urlImage": "assets/product/images4.jpg",
    "description": "Long-lasting liquid blush with natural finish.",
    "type": "face",
    "price": 110,
    "colors": [
      {
        "name": "Joy",
        "quantite": 11
      },
      {
        "name": "Happy",
        "quantite": 9
      }
    ]
  },
  {
    "id": 5,
    "sellerId": 17499677218211,
    "name": "Nude Obsessions Eyeshadow",
    "name_mark": "Huda Beauty",
    "urlImage": "assets/product/images5.jpg",
    "description": "Mini palette with 9 highly pigmented nude shades.",
    "type": "eyes",
    "price": 150,
    "colors": [
      {
        "name": "Light",
        "quantite": 7
      },
      {
        "name": "Medium",
        "quantite": 5
      }
    ]
  },
  {
    "id": 6,
    "sellerId": 17499677218211,
    "name": "Epic Ink Liner",
    "name_mark": "NYX",
    "urlImage": "assets/product/images6.jpg",
    "description": "Waterproof felt tip liquid eyeliner.",
    "type": "eyes",
    "price": 55,
    "colors": [
      {
        "name": "Black",
        "quantite": 20
      }
    ]
  },
  {
    "id": 7,
    "sellerId": 17499677218211,
    "name": "Match Stix Shimmer Skinstick",
    "name_mark": "Fenty Beauty",
    "urlImage": "assets/product/images7.jpg",
    "description": "Lightweight shimmer stick for highlighting.",
    "type": "face",
    "price": 125,
    "colors": [
      {
        "name": "Starstruck",
        "quantite": 8
      },
      {
        "name": "Confetti",
        "quantite": 6
      }
    ]
  },
  {
    "id": 8,
    "sellerId": 17499677218211,
    "name": "Butter Gloss",
    "name_mark": "NYX",
    "urlImage": "assets/product/images8.jpg",
    "description": "Non-sticky gloss with buttery texture.",
    "type": "lips",
    "price": 65,
    "colors": [
      {
        "name": "Tiramisu",
        "quantite": 13
      },
      {
        "name": "Angel Food Cake",
        "quantite": 7
      }
    ]
  },
  {
    "id": 9,
    "sellerId": 17499677218211,
    "name": "Stay Matte Pressed Powder",
    "name_mark": "Rimmel",
    "urlImage": "assets/product/images9.jpg",
    "description": "Shine-control pressed powder.",
    "type": "face",
    "price": 70,
    "colors": [
      {
        "name": "Transparent",
        "quantite": 12
      }
    ]
  },
  {
    "id": 10,
    "sellerId": 17499677218211,
    "name": "ColorStay Lip Liner",
    "name_mark": "Revlon",
    "urlImage": "assets/product/images10.png",
    "description": "Longwear lip liner that defines lips precisely.",
    "type": "lips",
    "price": 45,
    "colors": [
      {
        "name": "Red",
        "quantite": 6
      },
      {
        "name": "Pink",
        "quantite": 8
      }
    ]
  },
  {
    "id": 11,
    "sellerId": 17499677218211,
    "name": "SuperStay Matte Ink V11",
    "name_mark": "Maybelline",
    "urlImage": "assets/product/images11.jpg",
    "description": "Up to 16-hour wear matte liquid lipstick.",
    "type": "lips",
    "price": 104,
    "colors": [
      {
        "name": "Pioneer",
        "quantite": 14
      },
      {
        "name": "Lover",
        "quantite": 12
      }
    ]
  },
  {
    "id": 12,
    "sellerId": 17499677218211,
    "name": "Fit Me Foundation V12",
    "name_mark": "Maybelline",
    "urlImage": "assets/product/images12.jpg",
    "description": "Natural finish foundation with SPF 18.",
    "type": "face",
    "price": 135,
    "colors": [
      {
        "name": "120 Classic Ivory",
        "quantite": 10
      },
      {
        "name": "228 Soft Tan",
        "quantite": 8
      }
    ]
  },
  {
    "id": 13,
    "sellerId": 17499677218211,
    "name": "Voluminous Lash Paradise V13",
    "name_mark": "L'Or\u00e9al",
    "urlImage": "assets/product/images13.png",
    "description": "Volumizing mascara for intense lashes.",
    "type": "eyes",
    "price": 85,
    "colors": [
      {
        "name": "Blackest Black",
        "quantite": 17
      }
    ]
  },
  {
    "id": 14,
    "sellerId": 17499677218211,
    "name": "Soft Pinch Liquid Blush V14",
    "name_mark": "Rare Beauty",
    "urlImage": "assets/product/images14.jpg",
    "description": "Long-lasting liquid blush with natural finish.",
    "type": "face",
    "price": 115,
    "colors": [
      {
        "name": "Joy",
        "quantite": 11
      },
      {
        "name": "Happy",
        "quantite": 9
      }
    ]
  },
  {
    "id": 15,
    "sellerId": 17499677218211,
    "name": "Nude Obsessions Eyeshadow V15",
    "name_mark": "Huda Beauty",
    "urlImage": "assets/product/images15.jpg",
    "description": "Mini palette with 9 highly pigmented nude shades.",
    "type": "eyes",
    "price": 155,
    "colors": [
      {
        "name": "Light",
        "quantite": 7
      },
      {
        "name": "Medium",
        "quantite": 5
      }
    ]
  },
  {
    "id": 16,
    "name": "Epic Ink Liner V16",
    "name_mark": "NYX",
    "urlImage": "assets/product/images16.jpg",
    "description": "Waterproof felt tip liquid eyeliner.",
    "type": "eyes",
    "price": 60,
    "colors": [
      {
        "name": "Black",
        "quantite": 20
      }
    ]
  },
  {
    "id": 17,
    "sellerId": 17499677218211,
    "name": "Match Stix Shimmer Skinstick V17",
    "name_mark": "Fenty Beauty",
    "urlImage": "assets/product/images17.jpg",
    "description": "Lightweight shimmer stick for highlighting.",
    "type": "face",
    "price": 130,
    "colors": [
      {
        "name": "Starstruck",
        "quantite": 8
      },
      {
        "name": "Confetti",
        "quantite": 6
      }
    ]
  },
  {
    "id": 18,
    "sellerId": 17499677218211,
    "name": "Butter Gloss V18",
    "name_mark": "NYX",
    "urlImage": "assets/product/images18.jpg",
    "description": "Non-sticky gloss with buttery texture.",
    "type": "lips",
    "price": 70,
    "colors": [
      {
        "name": "Tiramisu",
        "quantite": 13
      },
      {
        "name": "Angel Food Cake",
        "quantite": 7
      }
    ]
  },
  {
    "id": 19,
    "sellerId": 17499677218211,
    "name": "Stay Matte Pressed Powder V19",
    "name_mark": "Rimmel",
    "urlImage": "assets/product/images19.jpg",
    "description": "Shine-control pressed powder.",
    "type": "face",
    "price": 75,
    "colors": [
      {
        "name": "Transparent",
        "quantite": 12
      }
    ]
  },
  {
    "id": 20,
    "sellerId": 17499677218211,
    "name": "ColorStay Lip Liner V20",
    "name_mark": "Revlon",
    "urlImage": "assets/product/images20.jpg",
    "description": "Longwear lip liner that defines lips precisely.",
    "type": "lips",
    "price": 50,
    "colors": [
      {
        "name": "Red",
        "quantite": 6
      },
      {
        "name": "Pink",
        "quantite": 8
      }
    ]
  }
]; res.send(products)});

app.post('/register', (req, res) => {
  const { fullName, email, password, phone, address } = req.body;

  if (!fullName || !email || !password || !phone || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  const newUser = {
    id: Date.now(),
    fullName,
    email,
    password,
    phone,
    address,
    role: 'buyer' 
  };

  users.push(newUser);
  // save in file users 
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  res.status(201).json({ message: 'Registered successfully' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));

  console.log('Login request:', { email, password }); 

  const user = users.find(u => {
    console.log('Comparing with:', u.email, u.password); 
    return u.email === email && u.password === password;
  });

  if (!user) {
    console.log(' No matching user found');
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  console.log(' User found:', user);
  res.json({ message: 'Login successful', user });
});



app.listen(port, () => {
  console.log(`API FATIMA  http://localhost:${port}`);
});
