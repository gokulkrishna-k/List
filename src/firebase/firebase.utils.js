import { firestore } from './firebase';

export const AddTodoToFirestore = async () => {
  const userRef = firestore.doc('users/LFMYgoNXOfwdR4srYo8C');
  const snapshot = await userRef.get();

  return snapshot.data();
};
