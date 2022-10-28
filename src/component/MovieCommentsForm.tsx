import { ChangeEvent, FormEvent, useState } from 'react';
import { Button,FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

interface Comment {
  author: string | undefined;
  comment: string | undefined;
}

function MovieCommentsForm () {
  const params = useParams();
  const { id } = params;
  const [comment, setComment] = useState<Comment>({
    author: undefined,
    comment: undefined,
  });

  const handleAuthorInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    // console.log(event.target.value);
    setComment((values) => ({
      ...values,
      author: event.target.value,
    }))
  }

  const handleCommentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.persist();
    // console.log(event.target.value);
    setComment((values) => ({
      ...values,
      comment: event.target.value,
    }));
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(comment);

  };


  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          name="author"
          value={comment.author}
          onChange={handleAuthorInput}
          placeholder="Your name"
        />
      </FormControl>
      <FormControl>
        <Textarea
          name="comment"
          value={comment.comment}
          onChange={handleCommentInput}
          placeholder="Your Coment"
        />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default MovieCommentsForm