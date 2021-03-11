import firebase from '../util/firebase'

function Liste(collection) {
    return new Promise((res , reg)=>{
        firebase.firestore().collection(collection).get()
        .then(e =>{
            res(e.docs);
        })
        .catch(e =>{
            reg(e);
        })
    });
}
export {Liste}