const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const users = [
  {
    name: "Rocky",
    email: "Rocky@bullwinkle.com"
  },
  {
    name: "Glenn Powell",
    email: "glennpowell@gmail.com"
  }
]


const movies = [

]


Promise.all([
  
  // create users
  Promise.all(users.map(user => {
    try {
      prisma.user.create(
        {
          data: {
            name: user.name,
            email: user.email
          }
        }
      )
    } catch(err) {
      // pass
    }
  })),

  // create movies




  // create crew




  // create roles

])
.then(results => console.log("finished"))
.catch(err => console.log(err));