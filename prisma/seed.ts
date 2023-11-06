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

// users
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
    image: "https://m.media-amazon.com/images/M/MV5BMGEzMTIwM2UtYjc5MC00ZGI4LWJiOTAtYzAwZmU0OTYzYWIxXkEyXkFqcGdeQXVyNDg0MzQyNA@@._V1_FMjpg_UY1920_.jpg",
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
    image: "https://m.media-amazon.com/images/M/MV5BZWIzMDVkYWUtYTA3My00MzIwLWJhY2MtNWNlODA3NWQyYmI4XkEyXkFqcGdeQXVyMTI2Nzk2ODk3._V1_FMjpg_UY1582_.jpg",
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
    image: "https://m.media-amazon.com/images/M/MV5BMjQyMTQ2MjQ5Ml5BMl5BanBnXkFtZTgwNzY3MDAxNzE@._V1_FMjpg_UX426_.jpg",
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
    image: "https://m.media-amazon.com/images/M/MV5BMTkxMDU3NTY2NV5BMl5BanBnXkFtZTgwNzI5MjEzODE@._V1_FMjpg_UX2048_.jpg",
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
    image: "https://m.media-amazon.com/images/M/MV5BMTQ0Mzc2NzY0Ml5BMl5BanBnXkFtZTcwOTI3OTI5MQ@@._V1_FMjpg_UX280_.jpg",
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
    image: "",
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

// movies
const movies = [
  {
    title: HIT_MAN,
    description: "A professor moonlighting as a hit man of sorts for his city police department, descends into dangerous, dubious territory when he finds himself attracted to a woman who enlists his services.",
    imdbLink: "https://www.imdb.com/title/tt20215968/",
    image: "https://m.media-amazon.com/images/M/MV5BZDdmZjRiYmItMGQwZC00YWRjLWJjMzUtMDdiMTM4MjY0OGJlXkEyXkFqcGdeQXVyMTIzNDk2NzE2._V1_FMjpg_UX2000_.jpg"

  }
]



async function seed() {

  // clear table
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

    return Promise.all(proms)
    .then(results => {
      console.log("Created users\n");
    }).catch(err => {
      console.log(err);
    })

  }

  // create movies
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

  // create creators
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

  // create roles
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


}

seed();