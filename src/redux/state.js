let state = {

    profilePage : {
        PostsData: [
            {message: 'Hello, my name is Amir', count: '10'},
            {message: 'My first work with props', count: '300'},
            {message: 'several day`s ago i bought macbook', count: '1000'},
          ],
    },

    messagePage : {
        DialogData: [
            {name:"Amir", id:'1'},
            {name:"Imran", id:'2'},
            {name:"Altair", id:'3'},
            {name:"Ecio", id:'4'},
            {name:"Franchesko", id:'5'},
          ],
        MessageData: [
            {message:'How are u?', id:'1'},
            {message:'Amir your two safes are full of money, where to put the money now', id:'2'},
            {message:'Have you already bought a Porsche or are you just going to get it ?', id:'3'},
            {message:"Let's fly to France for a couple of days on the way back", id:'4'},
          ],
    },
}

export let addPost = (postMessage) =>{
  let newPost = {
    message: postMessage,
    count: 0,
  }

  state.profilePage.PostsData.push(newPost)
}

export default state;