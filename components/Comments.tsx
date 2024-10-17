"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function Comments() {
  const [comments, setComments] = useState([
    { id: 1, author: '익명', content: '좋은 글이네요!', date: '2024-03-14' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: '익명',
        content: newComment,
        date: new Date().toISOString().split('T')[0],
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">댓글</h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="border p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-sm text-muted-foreground">{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-4">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요..."
          className="mb-2"
        />
        <Button type="submit">댓글 작성</Button>
      </form>
    </div>
  );
}