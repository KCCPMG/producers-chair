const { PrismaClient } = require("@prisma/client");
const { User, Movie, Creator, Role } = require("@prisma/client");

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
    id: null,
    name: "Rocky",
    email: "Rocky@bullwinkle.com"
  },
  {
    id: null,
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
    id: null,
    name: "Adria Arjona",
    email: "adriaarjona@gmail.com",
    imdbLink: "https://www.imdb.com/name/nm5245722/?ref_=tt_cl_t_2",
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
    id: null,
    name: "Retta",
    email: "retta@retta.org",
    imdbLink: "https://www.imdb.com/name/nm0802876/?ref_=tt_cl_t_3",
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
    id: null,
    name: "Austin Amelio",
    email: "auiaeio@yahoo.com",
    imdbLink: "https://www.imdb.com/name/nm3994184/?ref_=tt_cl_t_4",
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
    id: null,
    name: "Richard Linklater",
    email: "trickydick@linklater.com",
    imdbLink: "https://www.imdb.com/name/nm0000500/?ref_=tt_ov_dr",
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
    id: null,
    name: "Skip Hollandsworth",
    email: "",
    imdbLink: "https://www.imdb.com/name/nm0390912/?ref_=tt_ov_wr",
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
  const createUsers = async (): Promise<void> => {

    const proms = users.map(user => {
      return new Promise((res, rej) => {
        prisma.user.create({
          data: {
            name: user.name,
            email: user.email
          }
        })
        .then((newUser: typeof User) => {
          console.log(`Created user ${user.name}`);
          user.id = newUser.id;
          res(newUser);
        })
        .catch(() => {
          console.log(`Could not create user ${user.name}`);
          rej();
        })
      })
    })

    console.log({proms});

    return Promise.all(proms)
    .then(results => {
      // console.log({proms})
      // console.log({results});
      console.log({users});
      console.log("Created users\n");
    }).catch(err => {
      console.log(err);
    })

  }

  const createMovies = async (): Promise<void> => {

    const proms = movies.map(movie => {
      return new Promise((res, rej) => {
        prisma.movie.create({
          data: {
            title: movie.title,
            description: movie.description,
            imdbLink: movie.imdbLink
          }
        })
        .then((newMovie: typeof Movie) => {
          console.log(`Created movie ${movie.title}`);
          res(newMovie);
        })
        .catch((err: unknown) => {
          console.log(`Could not create ${movie.title}`)
          rej(err);
        })
      })
    })

    return Promise.all(proms)
    .then(results => {
      console.log("Created movies\n");
    }).catch(err => {
      console.log(err);
    });
  }

  const createCreators = async (): Promise<void> => {

    const proms = users
    .filter(user => user.imdbLink)
    .map(user => {
      return new Promise((res, rej) => {
        prisma.creator.create({
          data: {
            userId: user.id,
            imdbLink: user.imdbLink
          }
        })
        .then((creator: typeof Creator) => {
          console.log(`Created creator ${user.name}`);
          res(creator);
        }).catch((err: unknown) => {
          console.log(`Could not create creator ${user.name}`);
          rej(err);
        })
      })
    })

    return Promise.all(proms)
    .then(results => {
      console.log(`Created creators`);
    }).catch(err => {
      console.log(err);
    })
  }

  const createRoles = async () => {
    const proms: Promise<typeof Role>[] = [];
    users.forEach(user => {
      user.movies?.forEach(movie => {
        movie.roles.forEach(role => {
          let title = movie.title;
          let userId = user.id;
          
          proms.push( new Promise((res, rej) => {
            Promise.all([
              prisma.creator.findUnique({where: {userId}}),
              prisma.movie.findUnique({where: {title}})
            ])
            .then(results => {
              let creator = results[0];
              let movie = results[1];
              prisma.role.create({
                data: {
                  creatorId: creator.id,
                  movieId: movie.id,
                  roleName: role
                }
              })
              .then((savedRole: typeof Role) => {
                console.log(`Created role ${user.name} in ${movie.title} as ${role}`)
                res(savedRole);
              })
              .catch((err: unknown) => {
                console.log(`Could not create role for ${user.name} in ${movie.title} as ${role}`)
                rej(err)
              })
            })
          }));

        })
      })
    })

    return Promise.all(proms)
    .then(roles => {
      console.log(`Created roles\n`);
    })
    .catch(err => {
      console.log(`Could not create users\n;`)
    })
  }
  
  await createUsers();
  console.log("after createUsers");

  await createMovies();
  console.log("after createMovies");

  await createCreators();
  console.log("after createCreators");

  await createRoles();
  console.log("after createRoles");



  // create creators
  // await Promise.all(users.map(async user => {
  //   try {
  //     if (user.imdbLink) {
  //       let foundUser = await prisma.user.findUnique({where: {email: user.email}})
  //       let creator = await prisma.creator.create({
  //         data: {
  //           userId: foundUser.id,
  //           imdbLink: user.imdbLink
  //         }
  //       })
  //     }
  //   } catch(err) {
  //     console.log(`Failed to create creator ${user.name}`)
  //   }
  // }))


  // create roles
  // await Promise.all(users.map(async user => {
  //   try {
  //     if (user.imdbLink) {
  //       let foundCreator = await prisma.creator.findUnique({where: {imdbLink: user.imdbLink}});
  //       user.movies.forEach(async movie => {
  //         let foundMovie = await prisma.movie.findUnique({where: {title: movie.title}});

  //         movie.roles.forEach(async role => {
  //           await prisma.role.create({
  //             data: {
  //               creatorId: foundCreator.id,
  //               roleName: role,
  //               movieId: foundMovie.id
  //             }
  //           })
  //         })
  //       });

  //     }
  //   } catch(err) {
  //     console.log(`Could not create roles for ${user.name}`)
  //   }
  // }))



}

seed();