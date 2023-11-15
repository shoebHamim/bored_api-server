/*
1.add vercel.json to your project
2. on cmd write vercel
3. follow the steps
4. vercel --prod if you want to update
5. no need to do that if your project is linked to github



*/

/*
 'vercel.json'👇

{
  "version": 2,
  "builds": [
      {
          "src": "./index.js",
          "use": "@vercel/node"
      }
  ],
  "routes": [
      {
          "src": "/(.*)",
          "dest": "/"
      }
  ]
}

*/