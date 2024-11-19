export default async function getFullResponseFromAPI(success) {
  if (!success) {
    throw new Error('The fake API is not working currently');
  } else {
    return { status: 200, body: 'Success' };
  }
}
