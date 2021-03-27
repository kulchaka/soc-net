import Post from "./Post/Post";
import ProfInfo from "../ProfInfo/ProfInfo";

const MyPost = () => {

  const postsData = [
    {
      id: '01',
      text: 'Hello, how are you?',
      likesCount: '2'
    },
    {
      id: '02',
      text: "Hi, this is my first POST ))",
      likesCount: '5'
    },
    {
      id: '03',
      text: "Bye!"
    }
  ];

  return (
    <>
  <ProfInfo />
      <div>
        {
          postsData.map(({id, text, likesCount}) => (
            <Post
              text={text}
              likesCount={likesCount}
              key={id}
            />
            ))
        }
      </div>
    </>
  )
}

export default MyPost;
