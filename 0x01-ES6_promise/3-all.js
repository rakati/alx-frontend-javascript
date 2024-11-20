import { uploadPhoto, createUser } from './utils.js'

export default function handleProfileSignup() {
  uploadPhoto()
    .then((photo) => {
      process.stdout.write(photo.body + ' ');
    })
    .catch(() => {
      console.log('Signup system offline');
    });
  createUser()
    .then((user) => {
      console.log(user.firstName + ' ' + user.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
