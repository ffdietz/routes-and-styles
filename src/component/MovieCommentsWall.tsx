/* eslint-disable*/
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Text } from '@chakra-ui/react';
import { Comment } from '../types/types';
import { getComments } from '../services/controllers';

function MovieCommentsWall() {
  const params = useParams();
  const [id]= useState(params.id);
  const [comments, setComments] = useState<Comment[] | null>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const allComments = await getComments(id);
      setComments(allComments);
    };
    fetchComments();
  }, [id]);

  return (
    <Container
      padding="0"
    >
      {comments?.length === 0 ? 
      (
        <Text as="h3">Be the first comment...</Text>
      ) : (
        comments &&
        comments.map((comment, key) => (
          <Box
            key={key}
            border="1px"
            borderRadius="5px"
            borderColor="gray.200"
            padding="0.7rem"
            fontSize="1rem"
            margin="10px"
          >
            <Text as="span" fontWeight="bold">
              {comment.author}
            </Text> 
            <Text as="span"> said:</Text>
            <Text
            >{comment.comment}</Text>
          </Box>
        ))
      )}
    </Container>
  );
}

export default MovieCommentsWall;
