import { useResize } from '@/hooks/useResize';
import { ThumbsUp } from '@phosphor-icons/react';

interface TestType {
  data: {
    state: string;
    title: string;
    date: string;
  };
  onClick: (id: number) => void;
}

export function PetitionPostContent({ data, onClick }: TestType) {
  const { width } = useResize();
  const isSmallScreen = width <= 390;
  return (
    <div
      className="flex cursor-pointer justify-between border-b border-b-gray-400 p-5 text-[1.125rem] font-medium xs:flex-col xs:p-2 xs:text-[0.75rem] sm:flex-col sm:p-2"
      onClick={() => onClick(1)}
    >
      <div className="flex gap-5 xs:mb-[11px] sm:mb-[11px]">
        <div className="w-20 whitespace-nowrap text-indigo-500">[{data.state}]</div>
        <div className="text-gray-700 underline decoration-white hover:decoration-gray-400 hover:underline-offset-1">
          {data.title}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-gray-500 xs:text-right sm:text-right">{data.date}</div>
        <div className="flex justify-end text-primary">
          <ThumbsUp size={isSmallScreen ? 14 : 25} />
          <span>32</span>
        </div>
      </div>
    </div>
  );
}