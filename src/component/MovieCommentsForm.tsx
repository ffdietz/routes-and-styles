/* eslint-disable */
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Comment } from '../types/types';
import { postComment } from '../services/controllers';

function MovieCommentsForm() {
  const params = useParams();
  const { id } = params;
  const [comment, setComment] = useState<Comment>({
    author: '',
    comment: '',
    id: undefined,
  });
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleAuthorInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setComment((values) => ({
      ...values,
      author: event.target.value,
    }));
  };

  const handleCommentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.persist();
    setComment((values) => ({
      ...values,
      comment: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(id) {
      const response = postComment(id, comment);
      console.log(response);
    }
  };

  return (
    <Container marginTop="50px">
      <form ref={formRef} onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="comment[author]"
            defaultValue={comment.author}
            onChange={handleAuthorInput}
            placeholder="Your name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Comment</FormLabel>
          <Textarea
            name="comment[comment]"
            defaultValue={comment.comment}
            onChange={handleCommentInput}
            placeholder="Your comment"
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default MovieCommentsForm;

// set the default ID field of json-server
// modify packege.json CLI script/server/ --id ID_KEY (e.g.)
