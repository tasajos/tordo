import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FfservService {
  private auth = getAuth();

  constructor(private firestore: Firestore) {}

  async registerUser(userData: any): Promise<void> {
    const { email, password, ...profileData } = userData;
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    const userDocRef = doc(collection(this.firestore, 'users'), userCredential.user.uid);
    await setDoc(userDocRef, profileData);
  }
}
