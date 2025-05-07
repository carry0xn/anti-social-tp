// PostList.js
import { List, Card } from "antd";
import ActionMenu from "./ActionMenu";

const PostList = ({ posts }) => {
  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={posts}
      renderItem={post => (
        <List.Item>
          <Card
            title={post.user.nickName}
            extra={<ActionMenu record={post} />}
          >
            <p>{post.description}</p>
            {post.images.map((img, i) => (
              <img key={i} src={img.url} alt="post" width="100%" />
            ))}
            <div>Tags: {post.tags.map(t => `#${t.name} `)}</div>
          </Card>
        </List.Item>
      )}
    />
  );
};
