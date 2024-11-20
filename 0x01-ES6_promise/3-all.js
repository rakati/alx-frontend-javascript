import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  createUser()
    .then((user) => {
      uploadPhoto()
        .then((photo) => {
          console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => {
          console.error('Signup system offline');
        });
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
