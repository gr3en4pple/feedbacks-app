import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import {
  doc,
  addDoc,
  updateDoc,
  collection,
  arrayUnion,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
} from '@firebase/firestore';

export const addComment = async (newComment, feedbackID, currentNum) => {
  try {
    const docRef = doc(db, 'feedbacks', feedbackID);
    await updateDoc(docRef, {
      commentList: arrayUnion(newComment),
      totalComments: currentNum + 1,
    });
  } catch (error) {
    throw error;
  }
};

export const addFeedback = async (newFeedback) => {
  try {
    await addDoc(collection(db, 'feedbacks'), newFeedback);
  } catch (error) {
    throw error;
  }
};

export const updateFeedback = async (newObj, id) => {
  try {
    await updateDoc(doc(db, 'feedbacks', id), newObj);
  } catch (error) {
    throw error;
  }
};

export const deleteFeedback = async (id) => {
  try {
    await deleteDoc(doc(db, 'feedbacks', id));
  } catch (error) {
    throw error;
  }
};

const useFirestore = (sortType) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const order = sortCheck(sortType);
    setLoading(true);
    const unsubscribe = onSnapshot(
      query(collection(db, 'feedbacks'), orderBy(order.prop, order.order)),
      (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [sortType]);
  const sortCheck = (newSort) => {
    switch (newSort) {
      case 'Most Upvotes':
        return { prop: 'upvote', order: 'desc' };
      case 'Least Upvotes':
        return { prop: 'upvote', order: 'asc' };
      case 'Most Comments':
        return { prop: 'totalComments', order: 'desc' };
      case 'Least Comments':
        return { prop: 'totalComments', order: 'asc' };
      default:
        return { prop: 'upvote', order: 'desc' };
    }
  };
  return [data, isLoading];
};

export default useFirestore;
