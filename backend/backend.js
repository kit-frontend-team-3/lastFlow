// /post/100/user
const user = {
  classId: 1,
  level: 70,
  nickname: "뿌셔뿌셔",
  guildId: 100,
  password: "",
  profileImageUrl: "https://asdfdsaf.com/",
  titleId: "UNFAILING", // 칭호,
};

// /guild/100
const guild = {
  id: 123,
  name: "회사뿌셔",
  createdAt: "2023-09-23T12:37:37.201Z", /// ISO-8601 date,
};

// /class/123
const clasName = {
  id: 123,
  name: "스트라이커",
};

// /server/100
const server = {
  id: 100,
  name: "카마인",
};
// /posts
const posts = [
  {
    id: 100,
    userId: 1000,
    createdAt: "2023-09-23T12:37:37.201Z", /// ISO-8601 date,
    updatedAt: "2023-09-23T12:37:37.201Z", /// ISO-8601 date,
    title: "제목",
    content: "내용",
    viewCount: 234,
  },
  {
    id: 101,
    userId: 1000,
    createdAt: "2023-09-23T12:37:37.201Z", /// ISO-8601 date,
    updatedAt: "2023-09-23T12:37:37.201Z", /// ISO-8601 date,
    title: "제목",
    content: "내용",
    viewCount: 234,
  },
];

// 프론트에서
posts.map((post) => {
  return (
    <div>
      {post.title}
      {post.profileImageUrl}
    </div>
  );
});
// ---------------------------------------------

// /post/100
const post = {
  id: 100,
  userId: 1000,
  createdAt: "2023-09-23T12:37:37.201Z", /// ISO-8601 date,
  updatedAt: "2023-09-23T12:37:37.201Z", /// ISO-8601 date,
  title: "제목",
  content: "내용",
  viewCount: 234,
};

// express 서버에선
const postId = request.params.id;
res.json(posts.find((x) => x.id === postId));

// /post/100/delete
// express 서버에선
const postId1 = request.params.id;
deletePost(posts.find((x) => x.id === postId));

// ---------------------------------------------

// /post/100/liked
const like = {
  isLiked: true,
};

// /post/100/comments
const comments = [
  {
    id: 1,
    postId: 100,
    userId: 1,
    createdAt: "2023-09-23T12:37:37.201Z", /// ISO-8601 date,
    updatedAt: "2023-09-23T12:37:37.201Z", /// ISO-8601 date,
    content: "내용입니다",
  },
];

// 서버에선
comments.filter((x) => x.id === postId);

// 클라에선
comments.map((x) => {
  return <div>{x.content}</div>;
});
