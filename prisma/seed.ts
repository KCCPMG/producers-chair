const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// titles
const HIT_MAN = "Hit Man"

// roles
const ACTOR = "Actor"
const WRITER = "Writer"
const DIRECTOR = "Director"
const EDITOR = "Editor"
const DP = "Director of Photography"

const users = [
  {
    name: "Rocky",
    email: "Rocky@bullwinkle.com"
  },
  {
    name: "Glenn Powell",
    email: "glennpowell@gmail.com",
    imdbLink: "https://www.imdb.com/name/nm1412974/?ref_=tt_cl_t_1",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR,
          WRITER
        ]
      }
    ]
  },
  {
    name: "Adria Arjona",
    email: "adriaarjona@gmail.com",
    imdb_link: "https://www.imdb.com/name/nm5245722/?ref_=tt_cl_t_2",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR
        ]
      }
    ]
  },
  {
    name: "Retta",
    email: "retta@retta.org",
    imdb_link: "https://www.imdb.com/name/nm0802876/?ref_=tt_cl_t_3",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR
        ]
      }
    ]
  },
  {
    name: "Austin Amelio",
    email: "auiaeio@yahoo.com",
    imdb_link: "https://www.imdb.com/name/nm3994184/?ref_=tt_cl_t_4",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR
        ]
      }
    ]
  },
  {
    name: "Richard Linklater",
    email: "trickydick@linklater.com",
    imdb_link: "https://www.imdb.com/name/nm0000500/?ref_=tt_ov_dr",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          WRITER,
          DIRECTOR
        ]
      }
    ]
  },
  {
    name: "Skip Hollandsworth",
    email: "",
    imdb_link: "https://www.imdb.com/name/nm0390912/?ref_=tt_ov_wr",
    movies: [
      {
        title: HIT_MAN,
        roles: [
          ACTOR
        ]
      }
    ]
  },
]


const movies = [
  {
    title: HIT_MAN,
    description: "A professor moonlighting as a hit man of sorts for his city police department, descends into dangerous, dubious territory when he finds himself attracted to a woman who enlists his services.",
    imdbLink: "https://www.imdb.com/title/tt20215968/"

  }
]




// Promise.all([

//   // clear all
//   prisma.user.deleteMany(),
//   prisma.creator.deleteMany(),
//   prisma.movie.deleteMany(),
//   prisma.role.deleteMany(),
  
//   // create users
//   Promise.all(users.map(user => {
//     try {
//       prisma.user.create(
//         {
//           data: {
//             name: user.name,
//             email: user.email
//           }
//         }
//       )
//     } catch(err) {
//       console.log(`Failure to create ${user.name}`);
//       // pass
//     }
//   })),

//   // create movies
//   Promise.all(movies.map(async movie => {
//     try {
//       await prisma.movie.create(
//         {
//           data: {
//             title: movie.title,
//             description: movie.description,
//             imdbLink: movie.imdbLink
//           }
//         }
//       )
//     } catch(err) {
//       console.log(`Failure to create ${movie.title}`);
//       // pass
//     }
//   })),


//   // create Creators
//   Promise.all(users.map(async user => {
//     try {
//       if (user.imdbLink) {
//         let foundUser = await prisma.user.findUnique({where: {email: user.email}})
//         let creator = await prisma.creator.create({
//           data: {
//             userId: foundUser.id,
//             imdbLink: user.imdbLink
//           }
//         })
//       }
//     } catch(err) {
//       console.log(`Failed to create Creator ${user.name}`)
//     }
//   })),


//   // create roles
//   Promise.all(users.map(async user => {
//     try {
//       if (user.imdbLink) {
//         let foundCreator = await prisma.creator.findUnique({where: {imdbLink: user.imdbLink}});
//         user.movies.forEach(async movie => {
//           let foundMovie = await prisma.movie.findUnique({where: {title: movie.title}});

//           movie.roles.forEach(async role => {
//             await prisma.role.create({
//               data: {
//                 creatorId: foundCreator.id,
//                 roleName: role,
//                 movieId: foundMovie.id
//               }
//             })
//           })
//         });

//       }
//     } catch(err) {
//       console.log(`Could not create roles for ${user.name}`)
//     }
//   }))

// ])
// .then(results => console.log("finished"))
// .catch(err => console.log(err));



async function seed() {
  await Promise.all([
    prisma.user.deleteMany(),
    prisma.creator.deleteMany(),
    prisma.movie.deleteMany(),
    prisma.role.deleteMany()
  ])
  .then(() => console.log("Tables cleared\n"))
  .catch(err => console.log(err));


  // create users
  const createUsers = async () => {

    users.forEach(async user => {
      try {
        await prisma.user.create(
          {
            data: {
              name: user.name,
              email: user.email
            }
          }
        )
        console.log(`Created user ${user.name}`)
      } catch(err) {
        console.log(`Failure to create user ${user.name}`);
        // pass
      }
    });

    console.log("Created users\n");
    return;
  }
  
  await createUsers();


  // create movies
  await Promise.all(movies.map(async movie => {
    try {
      await prisma.movie.create(
        {
          data: {
            title: movie.title,
            description: movie.description,
            imdbLink: movie.imdbLink
          }
        }
      )
    } catch(err) {
      console.log(`Failure to create movie ${movie.title}`);
      // pass
    }
  }));


  // create creators
  await Promise.all(users.map(async user => {
    try {
      if (user.imdbLink) {
        let foundUser = await prisma.user.findUnique({where: {email: user.email}})
        let creator = await prisma.creator.create({
          data: {
            userId: foundUser.id,
            imdbLink: user.imdbLink
          }
        })
      }
    } catch(err) {
      console.log(`Failed to create creator ${user.name}`)
    }
  }))


  // create roles
  await Promise.all(users.map(async user => {
    try {
      if (user.imdbLink) {
        let foundCreator = await prisma.creator.findUnique({where: {imdbLink: user.imdbLink}});
        user.movies.forEach(async movie => {
          let foundMovie = await prisma.movie.findUnique({where: {title: movie.title}});

          movie.roles.forEach(async role => {
            await prisma.role.create({
              data: {
                creatorId: foundCreator.id,
                roleName: role,
                movieId: foundMovie.id
              }
            })
          })
        });

      }
    } catch(err) {
      console.log(`Could not create roles for ${user.name}`)
    }
  }))



}

seed();