import { RegisterButton } from '@/components/Buttons/BoardActionButtons';
import { usePostBoardPostComment } from '@/hooks/usePostBoardPostComment';
import { cn } from '@/libs/utils';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

interface TextAreaProps {
  children: React.ReactNode;
  className: string;
  isReply?: boolean;
}

type ParamsType = {
  id: string;
};

export function TextArea({ children, className, isReply = false }: TextAreaProps) {
  const { id } = useParams() as ParamsType;

  const [commentCount, setCommentCount] = useState<number | null>(0);
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const commentLengthHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentCount(e.target.value.length);
    setText(e.currentTarget.value);

    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const mutation = usePostBoardPostComment();

  const registerComment = async () => {
    if (!isReply) {
      console.log('댓글 입력창');
      console.log(text);
      try {
        await mutation.mutateAsync({ postId: Number(id), content: text });
        setText('');
        setCommentCount(0);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('대댓글 입력창');
    }
  };

  return (
    <div className="relative mb-5 flex justify-end">
      <textarea
        ref={textareaRef}
        value={text}
        placeholder="댓글을 남겨보세요"
        onChange={commentLengthHandler}
        maxLength={2000}
        className={cn(
          'resize-none overflow-hidden rounded-md border border-gray-500 px-8 py-12 text-[1.125rem] placeholder:text-[1.125rem] placeholder:font-medium placeholder:text-gray-400 placeholder:xs:text-[0.75rem]',
          className
        )}
      />
      <div className="absolute bottom-4 right-3 flex justify-center gap-1">
        <p className="mr-[15px] pt-[10px] text-[1.125rem] text-gray-400 xs:text-[0.75rem]">{commentCount}/2000</p>
        <>{children}</>
        <RegisterButton disabled={commentCount === 0 ? true : false} onClick={registerComment} />
      </div>
    </div>
  );
}
