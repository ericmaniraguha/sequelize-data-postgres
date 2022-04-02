import express from 'express';
const app = express();
const port = process.env.PORT || 5000;
import db from './models';
import { users } from './seeders/users';
import { projects } from './seeders/project';
import { projectassignments } from './seeders/projectassignment';

// const createUsers = () => {
//   users.map((user) => {
//     db.User.create(user);
//   });
// };

// createUsers();

// const createProjects = () => {
//   projects.map((project) => {
//     db.Project.create(project);
//   });
// };

// createProjects();

// const projectassignment = () => {
//   projectassignments.map((projectassignment) => {
//     db.ProjectAssignment.create(projectassignment);
//   });
// };
// projectassignment();

// db.Users.create({
//   id: uuidv4(),
//   name: 'Carla Orane',
//   email: 'orane@gmail.com',
//   password: 'orane123',
// });

// db.ProjectAssignment.create({
//   ProjectId: 3,
//   UserId: 'ahahsgsbuauic-anjdnua5412as4ds-d15s1as',
// });

app.get('/', (req, res) => {
  db.User.findAll({
    include: db.Project,
  })
    .then((result: object) => res.json(result))
    .catch((err: object) => {
      console.error(err);
    });
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
});
function uuidv4() {
  throw new Error('Function not implemented.');
}
