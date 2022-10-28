import { ChangeEvent, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button,FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { Comment } from '../types/types';
import { postComment } from '../services/controllers';

function MovieCommentsForm () {
  const params = useParams();
  const { id } = params;
  const [comment, setComment] = useState<Comment>({
    author: '',
    comment: '',
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
    // console.log(comment);
    // if(id){
    //   const response = postComment(id, comment)
    //   console.log(response);
    // }
  };


  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="author"
          value={comment.author}
          onChange={handleAuthorInput}
          placeholder="Your name"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Comment</FormLabel>
        <Textarea
          name="comment"
          value={comment.comment}
          onChange={handleCommentInput}
          placeholder="Your comment"
        />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default MovieCommentsForm

// to set ID field of json-server
// modify packege.json CLI script/server/ --id imdbID (e.g.)