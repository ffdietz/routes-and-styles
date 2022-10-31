/* eslint-disable*/
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Text } from '@chakra-ui/react';
import { Comment } from '../types/types';
import { getComments } from '../services/controllers';

function MovieCommentsWall() {
  const params = useParams();
  const { id } = params;
  const [comments, setComments] = useState<Comment[] | null>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const allComments = await getComments(id);
      // console.log(allComments);
      setComments(allComments);
    };
    fetchComments();
  }, []);

  console.log({comments});

  return (
    <Container>
      {comments?.length === 0 ? (
      <Text as="h3">Be the first comment...</Text>
      ) : (
        comments && comments.map((comment) => 
          <Box>
            <Text>
              {comment.author}
            </Text>
          </Box>
        )
      )}
    </Container>
  );
}

export default MovieCommentsWall;
