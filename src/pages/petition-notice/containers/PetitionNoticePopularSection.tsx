import { PetitionNoticePopularContentApi } from '@/apis/PetitionNoticeApi';
import { LeftCarouselButton, RigthCarouselButton } from '@/components/Carousel';
import { PostTextPetition } from '@/components/PostTextPetition';
import { useIsOverflow } from '@/hooks/useIsOverflow';
import { useResize } from '@/hooks/useResize';
import { useQuery } from '@tanstack/react-query';
import { MutableRefObject, useCallback, useEffect, useState } from 'react';

export function PetitionNoticePopularSection() {
  const [ref, isOverflow] = useIsOverflow<HTMLDivElement>();
  const { width: windowWidth } = useResize();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollState, setScrollState] = useState<'left' | 'right' | 'both'>('right');

  const { data } = useQuery({
    queryKey: ['petition-notice-popular'],
    queryFn: PetitionNoticePopularContentApi,
  });

  const handleScroll = (moveRef: MutableRefObject<HTMLDivElement | null>) => {
    const { current } = moveRef;

    if (current) {
      if (current.scrollLeft === 0) {
        setScrollState('right');
      } else if (current.scrollLeft >= current.scrollWidth - current.clientWidth - 1) {
        setScrollState('left');
      } else {
        setScrollState('both');
      }
    }
  };

  useEffect(() => {
    // console.log(isOverflow);
  }, [windowWidth]);

  useEffect(() => {
    const { current } = ref;

    if (current) {
      current.addEventListener('scroll', () => handleScroll(ref));
    }
    return () => {
      if (current) {
        window.removeEventListener('scroll', () => handleScroll(ref));
      }
    };
  }, []);

  const moveRight = useCallback(
    (moveRef: MutableRefObject<HTMLDivElement | null>) => {
      const { current } = moveRef;
      if (current) {
        const petitionWidth = current.querySelector('.petition-item')?.clientWidth || 0;
        const newScrollPosition = Math.min(
          scrollPosition + petitionWidth + 25,
          current.scrollWidth - current.clientWidth
        );
        current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
        setScrollPosition(newScrollPosition);
      }
    },
    [scrollPosition]
  );

  const moveLeft = useCallback(
    (moveRef: MutableRefObject<HTMLDivElement | null>) => {
      const { current } = moveRef;
      if (current) {
        const petitionWidth = current.querySelector('.petition-item')?.clientWidth || 0;
        const newScrollPosition = Math.max(scrollPosition - petitionWidth - 25, 0);
        current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
        setScrollPosition(newScrollPosition);
      }
    },
    [scrollPosition]
  );

  return (
    <div className="relative mb-[66px] mt-[70px] pl-[200px] text-[1.75rem] font-bold xs:mb-[33px] xs:pl-10 sm:pl-10 md:pl-10 lg:pl-10">
      <p className="mb-[11px]">인기청원</p>
      <div className="flex gap-6 overflow-scroll pr-5 scrollbar-hide" ref={ref}>
        {data?.postListResDto && data?.postListResDto.map((content) => <PostTextPetition data={content} />)}
      </div>
      {isOverflow && data?.postListResDto && data.postListResDto.length > 0 && (
        <>
          {(scrollState === 'left' || scrollState === 'both') && <LeftCarouselButton onClick={() => moveLeft(ref)} />}
          {(scrollState === 'right' || scrollState === 'both') && (
            <RigthCarouselButton onClick={() => moveRight(ref)} />
          )}
        </>
      )}
    </div>
  );
}
